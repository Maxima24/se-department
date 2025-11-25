import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import type { StaffMember } from "@/types/stafftypes";

interface ModernMobileViewProps {
  staff: StaffMember[];
}

export const ModernMobileView: React.FC<ModernMobileViewProps> = ({ staff }) => {
  const [active, setActive] = useState<StaffMember | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  if (staff.length === 0) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
            <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">No Results Found</h3>
          <p className="text-slate-600 text-sm">Try adjusting your search filters</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg z-50"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              <motion.div
                ref={ref}
                layoutId={`card-${active.id}-${id}`}
                className="w-full max-w-2xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="overflow-y-auto max-h-[90vh]">
                  <motion.div layoutId={`image-${active.id}-${id}`} className="relative h-80">
                    <img
                      src={active.photo}
                      alt={active.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <motion.h2
                        layoutId={`name-${active.id}-${id}`}
                        className="text-3xl font-bold text-white mb-2"
                      >
                        {active.name}
                      </motion.h2>
                      <motion.p
                        layoutId={`role-${active.id}-${id}`}
                        className="text-lg text-blue-300"
                      >
                        {active.role}
                      </motion.p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6 space-y-6"
                  >
                    <div className="grid grid-cols-1 gap-3">
                      <a
                        href={`mailto:${active.email}`}
                        className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-xl"
                      >
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-sm text-slate-700 dark:text-slate-300">{active.email}</span>
                      </a>
                      <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-xl">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <span className="text-sm text-slate-700 dark:text-slate-300">{active.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-xl">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <span className="text-sm text-slate-700 dark:text-slate-300">{active.office}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Biography</h3>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{active.bio}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Specializations</h3>
                      <div className="flex flex-wrap gap-2">
                        {active.specialization.map((spec, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Qualifications</h3>
                      <ul className="space-y-2">
                        {active.qualifications.map((qual, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Research Interests</h3>
                      <ul className="space-y-1">
                        {active.researchInterests.map((interest, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="text-purple-500">•</span>
                            <span>{interest}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <div className="w-full px-4 py-8 space-y-4">
        {staff.map((member) => (
          <motion.div
            key={member.id}
            layoutId={`card-${member.id}-${id}`}
            onClick={() => setActive(member)}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
          >
            <div className="flex gap-4 p-4">
              <motion.div
                layoutId={`image-${member.id}-${id}`}
                className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="flex-1 min-w-0">
                <motion.h3
                  layoutId={`name-${member.id}-${id}`}
                  className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1 truncate"
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  layoutId={`role-${member.id}-${id}`}
                  className="text-sm text-blue-600 dark:text-blue-400 mb-2"
                >
                  {member.role}
                </motion.p>
                <div className="flex flex-wrap gap-1">
                  {member.specialization.slice(0, 2).map((spec, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded text-xs"
                    >
                      {spec}
                    </span>
                  ))}
                  {member.specialization.length > 2 && (
                    <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded text-xs">
                      +{member.specialization.length - 2}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center">
                <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};