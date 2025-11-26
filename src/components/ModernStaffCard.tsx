// StaffCard.tsx
import React from "react";
import { motion } from "motion/react";
import type { StaffMember } from "@/types/stafftypes";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
} from "./ui/animated-modal";

interface StaffCardProps {
  member: StaffMember;
  index: number;
}

export const ModernStaffCard: React.FC<StaffCardProps> = ({ member, index }) => {
  return (
    <Modal>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="h-full"
      >
        <div className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-lg h-full flex flex-col">
          <div className="relative w-full aspect-4/3 overflow-hidden bg-linear-to-br from-slate-50 to-slate-100">
            <motion.img
              src={member.photo}
              alt={member.name}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.02 }}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <div
              className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-semibold text-black bg-white border border-slate-300 backdrop-blur-md shadow-lg"
            >
              {member.role}

            </div>
          </div>

          <div className="flex-1 p-5 flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-1 line-clamp-1">
                {member.name}
              </h3>
              <p className="text-slate-600 text-sm mb-3 line-clamp-1">
                {member.department}
              </p>

              <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="truncate text-xs">{member.email}</span>
              </div>



              {/* <div className="flex flex-wrap gap-1.5">
                {member.specialization.slice(0, 3).map((spec, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-slate-50 text-slate-700 rounded-lg text-xs font-medium border border-slate-200"
                  >
                    {spec}
                  </span>
                ))}
                {member.specialization.length > 3 && (
                  <span className="px-2.5 py-1 bg-slate-50 text-slate-700 rounded-lg text-xs font-medium border border-slate-200">
                    +{member.specialization.length - 3}
                  </span>
                )}
              </div> */}
            </div>

            <ModalTrigger className="mt-5  flex justify-center items-center rounded-xl transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] bg-white border-2 border-slate-300 hover:border-slate-400 transition-colors">
              <span
                className="flex items-center justify-center gap-2 text-sm font-semibold text-black w-full"
              >
                View Full Profile
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </ModalTrigger>
          </div>
        </div>
      </motion.div>

      <ModalBody>
        <ModalContent>
          <div
            className="relative p-8 text-slate-900 bg-white border-b-2 border-slate-200"
          >
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{member.name}</h2>
                <p className="text-lg md:text-xl text-slate-600 mb-1">{member.role}</p>
                <p className="text-sm md:text-base text-slate-500">{member.department}</p>
              </motion.div>
            </div>
          </div>

          <div className="p-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-5"
            >
              <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-3 p-4 bg-linear-to-br from-blue-50 to-blue-100/50 rounded-xl transition-all group border border-blue-100 cursor-none"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-blue-600 mb-0.5">Email</p>
                  <p className="text-sm text-slate-700 truncate">{member.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 bg-linear-to-br from-purple-50 to-purple-100/50 rounded-xl border border-purple-100">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-purple-600 mb-0.5">Phone</p>
                  <p className="text-sm text-slate-700">{member.phone}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 rounded-full bg-slate-400" />
                Biography
              </h3>
              <p className="text-slate-700 leading-relaxed text-base">{member.bio}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 rounded-full bg-slate-400" />
                Qualifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {member.qualifications.map((qual, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-slate-700">{qual}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 rounded-full" style={{ backgroundColor: member.borderColor }} />
                Research Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.researchInterests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-linear-to-br from-slate-50 to-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200 hover:shadow-md transition-shadow"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div> */}

            {member.profileLinks && member.profileLinks.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 rounded-full bg-slate-400" />
                  Profile Links
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {member.profileLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl text-black font-medium transition-all hover:shadow-lg hover:scale-[1.02] group bg-white border-2 border-slate-300 hover:border-slate-400"
                    >
                      <span className="text-sm">{link.label}</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};