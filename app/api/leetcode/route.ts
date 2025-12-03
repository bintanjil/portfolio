import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = "tnjl";
    
    // LeetCode GraphQL endpoint
    const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          username
          profile {
            ranking
            userAvatar
          }
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
          userCalendar {
            streak
            activeYears
            submissionCalendar
          }
        }
        recentSubmissionList(username: $username, limit: 20) {
          timestamp
        }
      }
    `;

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com",
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    });

    const data = await response.json();

    if (!data.data || !data.data.matchedUser) {
      throw new Error("Failed to fetch LeetCode data");
    }

    const user = data.data.matchedUser;
    const submissions = user.submitStats.acSubmissionNum;

    // Parse difficulty counts
    const easy = submissions.find((s: any) => s.difficulty === "Easy")?.count || 0;
    const medium = submissions.find((s: any) => s.difficulty === "Medium")?.count || 0;
    const hard = submissions.find((s: any) => s.difficulty === "Hard")?.count || 0;
    const total = submissions.find((s: any) => s.difficulty === "All")?.count || 0;

    // Calculate current streak
    const calendar = user.userCalendar?.submissionCalendar 
      ? JSON.parse(user.userCalendar.submissionCalendar)
      : {};
    
    const currentStreak = user.userCalendar?.streak || 0;

    // Calculate max streak from calendar
    let maxStreak = 0;
    let tempStreak = 0;
    const today = Math.floor(Date.now() / 1000);
    const oneDay = 86400;
    
    for (let i = 0; i < 365; i++) {
      const timestamp = today - (i * oneDay);
      if (calendar[timestamp]) {
        tempStreak++;
        maxStreak = Math.max(maxStreak, tempStreak);
      } else {
        tempStreak = 0;
      }
    }

    // Generate monthly activity for last 12 months
    const monthlyActivity = [];
    const now = new Date();
    for (let i = 11; i >= 0; i--) {
      const month = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthName = month.toLocaleDateString('en-US', { month: 'short' });
      const startTimestamp = Math.floor(month.getTime() / 1000);
      const endTimestamp = Math.floor(new Date(month.getFullYear(), month.getMonth() + 1, 0).getTime() / 1000);
      
      let count = 0;
      for (let ts = startTimestamp; ts <= endTimestamp; ts += oneDay) {
        if (calendar[ts]) count++;
      }
      
      monthlyActivity.push({ month: monthName, count });
    }

    const stats = {
      username: user.username,
      totalSolved: total,
      easySolved: easy,
      mediumSolved: medium,
      hardSolved: hard,
      currentStreak: currentStreak,
      maxStreak: maxStreak || currentStreak,
      ranking: user.profile?.ranking || 0,
      avatar: user.profile?.userAvatar || "",
      problemDistribution: [
        { name: "Easy", value: easy, color: "#10b981" },
        { name: "Medium", value: medium, color: "#f59e0b" },
        { name: "Hard", value: hard, color: "#ef4444" },
      ],
      monthlyActivity,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("LeetCode API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch LeetCode data" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
export const revalidate = 3600; // Cache for 1 hour
