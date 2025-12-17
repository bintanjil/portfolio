"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Area,
  AreaChart,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { Loader2 } from "lucide-react";
import { learningPath } from "@/data/activityData";

export default function ActivityCharts() {
  const [loading, setLoading] = useState(true);
  const [monthlyActivity, setMonthlyActivity] = useState<any[]>([]);
  const [problemDistribution, setProblemDistribution] = useState<any[]>([]);
  const [contestHistory, setContestHistory] = useState<any[]>([]);

  useEffect(() => {
    Promise.all([
      fetch("/api/leetcode").then((res) => res.json()),
      fetch("/api/github").then((res) => res.json()),
      fetch("/api/codeforces").then((res) => res.json()),
    ])
      .then(([leetcodeData, githubData, codeforcesData]) => {
        console.log("LeetCode data:", leetcodeData);
        console.log("GitHub data:", githubData);
        console.log("Codeforces data:", codeforcesData);

        // Combine monthly activity
        const githubMonthly = githubData.monthlyActivity || [];
        const leetcodeMonthly = leetcodeData.monthlyActivity || [];
        
        // Create a map of months for easy lookup
        const monthMap = new Map();
        
        // Initialize with all 12 months from GitHub (should have all months)
        if (Array.isArray(githubMonthly) && githubMonthly.length > 0) {
          githubMonthly.forEach((item: any) => {
            if (item && item.month) {
              monthMap.set(item.month, { 
                month: item.month, 
                github: item.count || 0,
                leetcode: 0,
                codeforces: 0 
              });
            }
          });
        }
        
        // Add LeetCode data
        if (Array.isArray(leetcodeMonthly) && leetcodeMonthly.length > 0) {
          leetcodeMonthly.forEach((item: any) => {
            if (item && item.month) {
              const existing = monthMap.get(item.month);
              if (existing) {
                existing.leetcode = item.count || 0;
              } else {
                monthMap.set(item.month, {
                  month: item.month,
                  github: 0,
                  leetcode: item.count || 0,
                  codeforces: 0
                });
              }
            }
          });
        }
        
        // Convert map to array and sort by month order
        const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const combined = monthOrder
          .map(month => monthMap.get(month))
          .filter(item => item !== undefined) as any[];
        
        console.log("Combined monthly activity:", combined);
        setMonthlyActivity(combined);

        // Set problem distribution
        if (leetcodeData.problemDistribution) {
          setProblemDistribution(leetcodeData.problemDistribution);
        }

        // Set contest history
        if (codeforcesData.contestHistory) {
          setContestHistory(codeforcesData.contestHistory);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching activity data:", err);
        setLoading(false);
      });
  }, []);
  // Group learning path by category
  const languagesData = learningPath.filter((item) => item.category === "Languages");
  const frameworksData = learningPath.filter((item) => item.category === "Frameworks");
  const fundamentalsData = learningPath.filter((item) => item.category === "CS Fundamentals");

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Monthly Activity - Line Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
      >
        <Card className="border-slate-700/50 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800/90 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-300 group">
          <CardHeader>
            <CardTitle className="text-slate-100 group-hover:text-indigo-300 transition-colors">Monthly Activity Across Platforms</CardTitle>
            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Problems solved per month on each platform</p>
          </CardHeader>
          <CardContent>
            {monthlyActivity.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-400 mb-2">No activity data available</p>
                <p className="text-sm text-slate-500">
                  Add GITHUB_TOKEN to .env.local for GitHub data
                </p>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyActivity}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#e2e8f0" }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="leetcode"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    name="LeetCode"
                  />
                  <Line
                    type="monotone"
                    dataKey="github"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    name="GitHub"
                  />
                  <Line
                    type="monotone"
                    dataKey="codeforces"
                    stroke="#06b6d4"
                    strokeWidth={2}
                    name="Codeforces"
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Two column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Problem Distribution - Pie Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ x: -8, scale: 1.02 }}
        >
          <Card className="border-slate-700/50 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800/90 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="text-slate-100 group-hover:text-indigo-300 transition-colors">Problem Difficulty Distribution</CardTitle>
              <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">LeetCode problems solved by difficulty</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={problemDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {problemDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contest Rating Progress - Area Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-slate-100">Codeforces Rating Progress</CardTitle>
              <p className="text-sm text-slate-400">Contest rating over time</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={contestHistory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" domain={[1300, 1600]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="rating"
                    stroke="#06b6d4"
                    fill="url(#colorRating)"
                    strokeWidth={2}
                  />
                  <defs>
                    <linearGradient id="colorRating" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Skills Progress - Bar Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-slate-100 text-lg">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={languagesData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis type="number" domain={[0, 100]} stroke="#94a3b8" />
                  <YAxis dataKey="skill" type="category" stroke="#94a3b8" width={80} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="progress" fill="#8b5cf6" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-slate-100 text-lg">Frameworks</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={frameworksData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis type="number" domain={[0, 100]} stroke="#94a3b8" />
                  <YAxis dataKey="skill" type="category" stroke="#94a3b8" width={80} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="progress" fill="#06b6d4" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* CS Fundamentals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-slate-100 text-lg">CS Fundamentals</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={fundamentalsData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis type="number" domain={[0, 100]} stroke="#94a3b8" />
                  <YAxis dataKey="skill" type="category" stroke="#94a3b8" width={100} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="progress" fill="#f59e0b" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Skills Radar Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-slate-100">Overall Skill Distribution</CardTitle>
            <p className="text-sm text-slate-400">Comprehensive view of technical proficiency</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={learningPath}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="skill" stroke="#94a3b8" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#94a3b8" />
                <Radar
                  name="Progress"
                  dataKey="progress"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.6}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
