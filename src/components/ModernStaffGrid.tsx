import React from "react";
import { motion } from "motion/react";
import type { StaffMember } from "@/types/stafftypes";
import { ModernStaffCard } from "./ModernStaffCard";

interface ModernStaffGridProps {
  staff: StaffMember[];
}

export const ModernStaffGrid: React.FC<ModernStaffGridProps> = ({ staff }) => {
  if (staff.length === 0) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-slate-400 dark:text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
            No Results Found
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            We couldn't find any faculty members matching your search criteria. Try adjusting your filters or search terms.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {staff.map((member, index) => (
          <ModernStaffCard key={member.id} member={member} index={index} />
        ))}
      </motion.div>
    </div>
  );
};