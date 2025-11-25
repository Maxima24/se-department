import React, { useState } from "react";
import { motion } from "motion/react";
import type { StaffMember } from "@/types/stafftypes";
import { Modal, ModalTrigger, ModalBody, ModalContent } from "./ui/animated-modal";

interface ModernStaffCardProps {
  member: StaffMember;
  index: number;
}

export const ModernStaffCard: React.FC<ModernStaffCardProps> = ({ member, index }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <Modal>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="h-full"
      >
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
          animate={{
            rotateX,
            rotateY,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="group relative h-full rounded-3xl overflow-hidden cursor-pointer"
        >
          {/* Card Background with Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl">
            <div className="absolute inset-[2px] bg-slate-950 rounded-3xl" />
          </div>
          
          {/* Animated Gradient Border */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: member.gradient,
              padding: "2px",
            }}
          >
            <div className="w-full h-full bg-slate-950 rounded-3xl" />
          </div>

          {/* Card Content */}
          <div className="relative z-10 p-6 flex flex-col h-full">
            {/* Image Container with Hover Effect */}
            <div className="relative mb-6 overflow-hidden rounded-2xl group/image">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[3/4] overflow-hidden"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                
                {/* Hover Spotlight Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.1), transparent 50%)",
                  }}
                />
              </motion.div>
              
              {/* Role Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-4 right-4"
              >
                <span
                  className="px-3 py-1.5 rounded-full text-xs font-semibold text-white backdrop-blur-xl shadow-lg border border-white/20"
                  style={{
                    background: `linear-gradient(135deg, ${member.borderColor}80, ${member.borderColor}40)`,
                  }}
                >
                  {member.role}
                </span>
              </motion.div>
            </div>

            {/* Text Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {member.name}
              </h3>
              
              <p className="text-slate-400 text-sm mb-4">{member.department}</p>

              {/* Specializations */}
              <div className="flex flex-wrap gap-2 mb-4">
                {member.specialization.slice(0, 2).map((spec, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-slate-800/50 backdrop-blur-sm text-slate-300 rounded-lg text-xs border border-slate-700"
                  >
                    {spec}
                  </span>
                ))}
                {member.specialization.length > 2 && (
                  <span className="px-2 py-1 bg-slate-800/50 backdrop-blur-sm text-slate-300 rounded-lg text-xs border border-slate-700">
                    +{member.specialization.length - 2}
                  </span>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-6 text-sm">
                <div className="flex items-center gap-2 text-slate-400 group/item hover:text-blue-400 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="truncate">{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{member.phone}</span>
                </div>
              </div>

              {/* CTA Button */}
              <ModalTrigger className="mt-auto w-full group/btn relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                <div className="relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold group-hover/btn:scale-105 transition-transform duration-300 shadow-lg">
                  View Full Profile
                </div>
              </ModalTrigger>
            </div>
          </div>

          {/* Shine Effect on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Modal */}
      <ModalBody>
        <ModalContent className="space-y-6 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full md:w-64 flex-shrink-0"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-80 md:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
              </div>
            </motion.div>

            {/* Info */}
            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  {member.name}
                </h2>
                <p className="text-xl text-blue-500 dark:text-blue-400 font-semibold mb-1">
                  {member.role}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  {member.department}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-950/50 transition-colors group"
                >
                  <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {member.email}
                  </span>
                </a>
                <div className="flex items-center gap-2 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-xl">
                  <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-slate-700 dark:text-slate-300">{member.phone}</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-xl sm:col-span-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-slate-700 dark:text-slate-300">{member.office}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Biography</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{member.bio}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Specializations</h3>
            <div className="flex flex-wrap gap-2">
              {member.specialization.map((spec, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-xl text-sm font-medium"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Qualifications</h3>
            <ul className="space-y-2">
              {member.qualifications.map((qual, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{qual}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Research Interests</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {member.researchInterests.map((interest, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>

          {member.publications.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Recent Publications</h3>
              <ul className="space-y-2">
                {member.publications.map((pub, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>{pub}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};