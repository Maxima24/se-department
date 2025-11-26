import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";

export const HeroSection: React.FC<{ staffCount: number }> = ({
  staffCount,
}) => {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!beamsRef.current) return;

    const beams = beamsRef.current;
    const colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981"];

    for (let i = 0; i < 20; i++) {
      const beam = document.createElement("div");
      beam.className = "absolute w-px opacity-30";
      beam.style.height = `${Math.random() * 300 + 100}px`;
      beam.style.left = `${Math.random() * 100}%`;
      beam.style.top = `${Math.random() * 100}%`;
      beam.style.background = colors[Math.floor(Math.random() * colors.length)];
      beam.style.transform = `rotate(${Math.random() * 360}deg)`;
      beam.style.animation = `pulse ${
        Math.random() * 3 + 2
      }s ease-in-out infinite`;
      beams.appendChild(beam);
    }
  }, []);

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      {/* Animated Beams Background */}
      <div
        ref={beamsRef}
        className="absolute inset-0 overflow-hidden opacity-20"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-pink-600"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Faculty Nexus
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="space-y-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-2xl md:text-3xl text-blue-600 font-semibold">
              Software Engineering Department
            </p>
            <p className="text-lg md:text-xl text-slate-600">
              Faculty of Computing Science and Engineering
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="backdrop-blur-xl bg-white px-6 py-3 rounded-full border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-slate-900 font-semibold">
                  {staffCount} Expert Faculty
                </span>
              </div>
            </div>
            <div className="backdrop-blur-xl bg-blue-50 px-6 py-3 rounded-full border border-blue-200">
              <span className="text-slate-900 font-semibold">
                🎓 World-Class Education
              </span>
            </div>
            <div className="backdrop-blur-xl bg-purple-50 px-6 py-3 rounded-full border border-purple-200">
              <span className="text-slate-900 font-semibold">
                🚀 Innovation Leaders
              </span>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-16"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-slate-500 text-sm mb-2">
              Explore Our Faculty
            </div>
            <svg
              className="w-6 h-6 mx-auto text-slate-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
