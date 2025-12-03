import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = "tanjill";
    
    // Fetch user info
    const userResponse = await fetch(
      `https://codeforces.com/api/user.info?handles=${username}`
    );
    const userData = await userResponse.json();

    if (userData.status !== "OK") {
      throw new Error("Failed to fetch Codeforces user data");
    }

    const user = userData.result[0];

    // Fetch user submissions
    const submissionsResponse = await fetch(
      `https://codeforces.com/api/user.status?handle=${username}&from=1&count=10000`
    );
    const submissionsData = await submissionsResponse.json();

    // Calculate stats
    const solvedProblems = new Set();
    if (submissionsData.status === "OK") {
      submissionsData.result.forEach((submission: any) => {
        if (submission.verdict === "OK") {
          solvedProblems.add(`${submission.problem.contestId}-${submission.problem.index}`);
        }
      });
    }

    // Fetch rating changes for contest history
    const ratingResponse = await fetch(
      `https://codeforces.com/api/user.rating?handle=${username}`
    );
    const ratingData = await ratingResponse.json();

    const contestHistory = ratingData.status === "OK" 
      ? ratingData.result.slice(-12).map((contest: any) => ({
          month: new Date(contest.ratingUpdateTimeSeconds * 1000).toLocaleDateString('en-US', { month: 'short' }),
          rating: contest.newRating,
          contestName: contest.contestName,
        }))
      : [];

    const stats = {
      username: user.handle,
      rating: user.rating || 0,
      maxRating: user.maxRating || 0,
      rank: user.rank || "Unrated",
      maxRank: user.maxRank || "Unrated",
      problemsSolved: solvedProblems.size,
      contestsParticipated: ratingData.status === "OK" ? ratingData.result.length : 0,
      avatar: user.titlePhoto || user.avatar,
      contestHistory,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Codeforces API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch Codeforces data" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
export const revalidate = 3600; // Cache for 1 hour
