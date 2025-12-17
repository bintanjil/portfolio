"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/component/ui/SectionTitle";
import FloatingElements from "@/component/common/FloatingElements";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { competitiveProgramming, leadership } from "@/data/achievements";
import { Trophy, Users, ExternalLink } from "lucide-react";
import Link from "next/link";
import Badge from "@/component/ui/badge";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-slate-950 relative overflow-hidden">

      {/* Simple elegant background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,_rgba(99,102,241,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_70%,_rgba(139,92,246,0.12),transparent_40%)]" />
      </div>
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            title="Achievements & Leadership"
            subtitle="Competitive programming and community involvement"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Competitive Programming */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ 
              scale: 1.05,
              y: -15,
              rotateY: 3,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            style={{ perspective: 1000 }}
          >
            <Card className="group hover:shadow-[0_30px_60px_rgba(99,102,241,0.6)] transition-all duration-500 border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-indigo-500/80 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-indigo-500/20 before:to-violet-500/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 h-full">
            <CardHeader className="bg-gradient-to-r from-indigo-950/50 to-violet-950/50 border-b border-slate-800 relative z-10">
              <CardTitle className="flex items-center gap-2 text-slate-100">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 12 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Trophy className="w-5 h-5 text-indigo-400" />
                </motion.div>
                Competitive Programming
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-slate-100">Online Judge Profiles</h4>
                  <div className="space-y-3">
                    {competitiveProgramming.platforms.map((platform, index) => (
                      <Link
                        key={index}
                        href={platform.profile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 border border-slate-800 rounded-lg hover:bg-slate-800/50 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors">{platform.name}</p>
                            <p className="text-sm text-slate-400">
                              @{platform.profile}
                            </p>
                          </div>
                          <div className="text-right">
                            {platform.rating && (
                              <Badge>{platform.rank} - {platform.rating}</Badge>
                            )}
                            {platform.rating && (
                              <Badge>Rating: {platform.rating}</Badge>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-slate-100">Contest Participations</h4>
                  <div className="space-y-3">
                    {competitiveProgramming.contests.map((contest, index) => (
                      <div key={index} className="border-l-2 border-indigo-500 pl-4 py-2 hover:bg-slate-800/30 rounded-r transition-all duration-300">
                        <div className="flex items-start justify-between">
                          <div>
                            <h5 className="font-semibold text-slate-100">{contest.name}</h5>
                            <p className="text-sm text-slate-400">{contest.participants} participants</p>
                            <p className="text-xs text-slate-500 mt-1">{contest.rank}</p>
                          </div>
                          {(contest as any).standingsUrl ? (
                            <Link
                              href={(contest as any).standingsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-400 hover:text-indigo-300 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                          ) : null}
                        </div>
                        <Badge variant="outline" className="mt-2">{contest.rank}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          </motion.div>

          {/* Leadership */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.15 }}
          >
          <Card className="group hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-500 border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:-translate-y-2 hover:scale-[1.02] hover:border-indigo-500/50 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-indigo-500/5 before:to-violet-500/5 before:transition-opacity before:duration-500 h-full">
            <CardHeader className="bg-gradient-to-r from-indigo-950/50 to-violet-950/50 border-b border-slate-800 relative z-10">
              <CardTitle className="flex items-center gap-2 text-slate-100">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 12 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Users className="w-5 h-5 text-indigo-400" />
                </motion.div>
                Leadership & Volunteering
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              {leadership.map((item, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-slate-100">{item.organization}</h4>
                  <p className="text-sm text-slate-300 mb-2">{item.title}</p>
                  <p className="text-xs text-slate-500 mb-4">{item.duration}</p>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-slate-400 flex gap-2">
                        <span className="text-indigo-400">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}