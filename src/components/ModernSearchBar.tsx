import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface ModernSearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  roleFilter: string;
  setRoleFilter: (role: string) => void;
  specializationFilter: string;
  setSpecializationFilter: (spec: string) => void;
}

export const ModernSearchBar: React.FC<ModernSearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  roleFilter,
  setRoleFilter,
  specializationFilter,
  setSpecializationFilter,
}) => {
  const roles = [
    { value: "", label: "All Roles" },
    { value: "Dean", label: "Dean" },
    { value: "Deputy Dean", label: "Deputy Dean" },
    { value: "Professor", label: "Professor" },
    { value: "Associate Professor", label: "Associate Professor" },
    { value: "Senior Lecturer", label: "Senior Lecturer" },
    { value: "Lecturer", label: "Lecturer" },
  ];

  const specializations = [
    { value: "", label: "All Specializations" },
    { value: "Artificial Intelligence", label: "AI & Machine Learning" },
    { value: "Cybersecurity", label: "Cybersecurity" },
    { value: "Software Architecture", label: "Software Architecture" },
    { value: "Web Development", label: "Web Development" },
    { value: "Mobile", label: "Mobile Development" },
    { value: "Database", label: "Database Systems" },
    { value: "Cloud Computing", label: "Cloud Computing" },
    { value: "IoT", label: "IoT & Embedded Systems" },
    { value: "Blockchain", label: "Blockchain Technology" },
  ];

  const clearAllFilters = () => {
    setSearchQuery("");
    setRoleFilter("");
    setSpecializationFilter("");
  };

  const hasActiveFilters = searchQuery || roleFilter || specializationFilter;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto px-4 py-8 -mt-16 relative z-20"
    >
      <div className="backdrop-blur-xl bg-white rounded-3xl shadow-lg p-6 border border-slate-200">
        {/* Main Search Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
          {/* Search Input */}
          <div className="lg:col-span-6 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <motion.svg
                  className="h-5 w-5 text-slate-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ rotate: searchQuery ? 360 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </motion.svg>
              </div>
              <motion.input
                type="text"
                placeholder="Search faculty by name, email, or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                initial={{ opacity: 0.8 }}
                whileFocus={{ scale: 1.01, boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)" }}
                className="w-full pl-12 pr-4 py-3.5 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-slate-900 placeholder-slate-400 transition-all duration-300"
                aria-label="Search staff members"
              />
              <AnimatePresence>
                {searchQuery && (
                  <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Role Filter */}
          <div className="lg:col-span-3 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="relative w-full px-4 py-3.5 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-slate-900 appearance-none cursor-pointer transition-all duration-300"
              aria-label="Filter by role"
            >
              {roles.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Specialization Filter */}
          <div className="lg:col-span-3 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <select
              value={specializationFilter}
              onChange={(e) => setSpecializationFilter(e.target.value)}
              className="relative w-full px-4 py-3.5 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white text-slate-900 appearance-none cursor-pointer transition-all duration-300"
              aria-label="Filter by specialization"
            >
              {specializations.map((spec) => (
                <option key={spec.value} value={spec.value}>
                  {spec.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Active Filters */}
        <AnimatePresence>
          {hasActiveFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-700"
            >
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Active filters:
              </span>

              {searchQuery && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-medium shadow-lg"
                >
                  <span>"{searchQuery}"</span>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="hover:bg-white/20 rounded-full p-0.5 transition-colors"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </motion.span>
              )}

              {roleFilter && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg"
                >
                  <span>{roleFilter}</span>
                  <button
                    onClick={() => setRoleFilter("")}
                    className="hover:bg-white/20 rounded-full p-0.5 transition-colors"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </motion.span>
              )}

              {specializationFilter && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full text-sm font-medium shadow-lg"
                >
                  <span>{specializationFilter}</span>
                  <button
                    onClick={() => setSpecializationFilter("")}
                    className="hover:bg-white/20 rounded-full p-0.5 transition-colors"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </motion.span>
              )}

              <button
                onClick={clearAllFilters}
                className="ml-auto text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-medium transition-colors"
              >
                Clear all
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
