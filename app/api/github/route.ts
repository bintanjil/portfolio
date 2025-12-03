import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = "bintanjil";
    const token = process.env.GITHUB_TOKEN; // Optional: Add to .env.local for better data
    
    const headers: HeadersInit = {
      "Accept": "application/vnd.github.v3+json",
      "User-Agent": "Portfolio-App",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    // Fetch user info
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`,
      { headers }
    );

    if (!userResponse.ok) {
      throw new Error("Failed to fetch GitHub user data");
    }

    const user = await userResponse.json();

    // Try to fetch contribution data using GitHub GraphQL API
    let totalContributions = 0;
    let contributionYears: any[] = [];
    let currentStreak = 0;
    let maxStreak = 0;
    
    if (token) {
      // Use GraphQL for accurate contribution data
      const graphqlQuery = {
        query: `
          query($username: String!) {
            user(login: $username) {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `,
        variables: { username }
      };

      const graphqlResponse = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(graphqlQuery),
      });

      if (graphqlResponse.ok) {
        const graphqlData = await graphqlResponse.json();
        const calendar = graphqlData.data?.user?.contributionsCollection?.contributionCalendar;
        
        if (calendar) {
          totalContributions = calendar.totalContributions;
          
          // Calculate streaks from calendar data
          const allDays: { date: string; count: number }[] = [];
          calendar.weeks.forEach((week: any) => {
            week.contributionDays.forEach((day: any) => {
              allDays.push({ date: day.date, count: day.contributionCount });
            });
          });

          // Sort by date descending
          allDays.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

          // Calculate current streak (from today backwards)
          let tempStreak = 0;
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          
          for (let i = 0; i < allDays.length; i++) {
            const dayDate = new Date(allDays[i].date);
            dayDate.setHours(0, 0, 0, 0);
            const daysDiff = Math.floor((today.getTime() - dayDate.getTime()) / (1000 * 60 * 60 * 24));
            
            if (allDays[i].count > 0 && daysDiff === i) {
              tempStreak++;
            } else if (daysDiff === i) {
              break; // Streak broken
            }
          }
          currentStreak = tempStreak;

          // Calculate max streak
          tempStreak = 0;
          let lastDate: Date | null = null;
          
          for (const day of allDays.reverse()) {
            if (day.count > 0) {
              const currentDate = new Date(day.date);
              
              if (!lastDate) {
                tempStreak = 1;
              } else {
                const daysDiff = Math.floor((currentDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
                if (daysDiff === 1) {
                  tempStreak++;
                } else {
                  tempStreak = 1;
                }
              }
              
              maxStreak = Math.max(maxStreak, tempStreak);
              lastDate = currentDate;
            } else {
              tempStreak = 0;
              lastDate = null;
            }
          }

          contributionYears = allDays;
        }
      }
    }
    
    // Fetch repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      { headers }
    );

    const repos = await reposResponse.json();

    // Calculate total stars
    const totalStars = Array.isArray(repos) 
      ? repos.reduce((sum: number, repo: any) => sum + (repo.stargazers_count || 0), 0)
      : 0;

    // Fetch recent events for fallback activity data
    const eventsResponse = await fetch(
      `https://api.github.com/users/${username}/events/public?per_page=100`,
      { headers }
    );

    const events = await eventsResponse.json();

    // If no GraphQL data, calculate from events (fallback)
    if (totalContributions === 0 && Array.isArray(events)) {
      totalContributions = events.length;
      
      const contributionDays = new Set<string>();
      events.forEach((event: any) => {
        const eventDate = new Date(event.created_at);
        contributionDays.add(eventDate.toISOString().split('T')[0]);
      });

      // Calculate streaks from events
      const sortedDays = Array.from(contributionDays).sort().reverse();
      const today = new Date().toISOString().split('T')[0];
      
      // Current streak
      let tempStreak = 0;
      for (let i = 0; i < sortedDays.length; i++) {
        const daysDiff = Math.floor(
          (new Date(today).getTime() - new Date(sortedDays[i]).getTime()) / (1000 * 60 * 60 * 24)
        );
        
        if (daysDiff === i) {
          tempStreak++;
        } else {
          break;
        }
      }
      currentStreak = tempStreak;

      // Max streak
      tempStreak = 1;
      for (let i = 1; i < sortedDays.length; i++) {
        const prevDay = new Date(sortedDays[i - 1]);
        const currDay = new Date(sortedDays[i]);
        const diffDays = Math.floor((prevDay.getTime() - currDay.getTime()) / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
          tempStreak++;
          maxStreak = Math.max(maxStreak, tempStreak);
        } else {
          tempStreak = 1;
        }
      }
    }

    // Generate monthly activity for last 12 months
    const monthlyActivity = [];
    const now = new Date();
    
    if (contributionYears.length > 0) {
      // Use GraphQL data
      for (let i = 11; i >= 0; i--) {
        const month = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const monthName = month.toLocaleDateString('en-US', { month: 'short' });
        const nextMonth = new Date(month.getFullYear(), month.getMonth() + 1, 1);
        
        const count = contributionYears.filter((day: any) => {
          const dayDate = new Date(day.date);
          return dayDate >= month && dayDate < nextMonth && day.count > 0;
        }).reduce((sum: number, day: any) => sum + day.count, 0);
        
        monthlyActivity.push({ month: monthName, count });
      }
    } else if (Array.isArray(events)) {
      // Fallback to events
      for (let i = 11; i >= 0; i--) {
        const month = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const monthName = month.toLocaleDateString('en-US', { month: 'short' });
        const nextMonth = new Date(month.getFullYear(), month.getMonth() + 1, 1);
        
        const count = events.filter((event: any) => {
          const eventDate = new Date(event.created_at);
          return eventDate >= month && eventDate < nextMonth;
        }).length;
        
        monthlyActivity.push({ month: monthName, count });
      }
    }

    // Generate contribution heatmap (last 52 weeks)
    const heatmapData = [];
    
    if (contributionYears.length > 0) {
      // Use GraphQL data
      for (let i = 51; i >= 0; i--) {
        const weekStart = new Date();
        weekStart.setDate(weekStart.getDate() - i * 7);
        weekStart.setHours(0, 0, 0, 0);
        
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekEnd.getDate() + 7);
        
        const contributions = contributionYears.filter((day: any) => {
          const dayDate = new Date(day.date);
          return dayDate >= weekStart && dayDate < weekEnd;
        }).reduce((sum: number, day: any) => sum + day.count, 0);
        
        heatmapData.push({
          week: 51 - i,
          date: weekStart.toISOString().split('T')[0],
          contributions,
          level: contributions === 0 ? 0 : contributions < 5 ? 1 : contributions < 10 ? 2 : contributions < 20 ? 3 : 4,
        });
      }
    } else if (Array.isArray(events)) {
      // Fallback to events
      for (let i = 51; i >= 0; i--) {
        const weekStart = new Date();
        weekStart.setDate(weekStart.getDate() - i * 7);
        weekStart.setHours(0, 0, 0, 0);
        
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekEnd.getDate() + 7);
        
        const contributions = events.filter((event: any) => {
          const eventDate = new Date(event.created_at);
          return eventDate >= weekStart && eventDate < weekEnd;
        }).length;
        
        heatmapData.push({
          week: 51 - i,
          date: weekStart.toISOString().split('T')[0],
          contributions,
          level: contributions === 0 ? 0 : contributions < 5 ? 1 : contributions < 10 ? 2 : contributions < 15 ? 3 : 4,
        });
      }
    }

    const stats = {
      username: user.login,
      name: user.name,
      bio: user.bio,
      avatar: user.avatar_url,
      totalContributions,
      currentStreak,
      maxStreak: maxStreak || currentStreak,
      repositories: user.public_repos || 0,
      stars: totalStars,
      followers: user.followers || 0,
      following: user.following || 0,
      monthlyActivity,
      heatmapData,
      usingToken: !!token, // Indicates if we're using accurate data
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
export const revalidate = 3600; // Cache for 1 hour
