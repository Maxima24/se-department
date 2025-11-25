import React from "react";
import { motion } from "motion/react";

interface ModernPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
}

export const ModernPagination: React.FC<ModernPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-xl border border-white/20 dark:border-slate-800 p-6"
      >
        {/* Stats */}
        <div className="text-center mb-6">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Showing <span className="font-semibold text-blue-600 dark:text-blue-400">{startItem}</span> to{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">{endItem}</span> of{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">{totalItems}</span> faculty members
          </p>
        </div>

        {/* Pagination Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="group relative px-4 py-2.5 rounded-xl font-medium transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 group-disabled:opacity-0 transition-opacity duration-300" />
            <div className="relative flex items-center gap-2 bg-white dark:bg-slate-800 rounded-xl px-4 py-2 border-2 border-slate-200 dark:border-slate-700 group-hover:border-transparent transition-colors">
              <svg
                className="w-5 h-5 text-slate-600 dark:text-slate-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-slate-700 dark:text-slate-200">Previous</span>
            </div>
          </motion.button>

          {/* Page Numbers */}
          {getPageNumbers().map((page, idx) => {
            if (page === "...") {
              return (
                <span
                  key={`ellipsis-${idx}`}
                  className="px-4 py-2.5 text-slate-400 dark:text-slate-500 font-medium"
                >
                  ...
                </span>
              );
            }

            const pageNumber = page as number;
            const isActive = pageNumber === currentPage;

            return (
              <motion.button
                key={pageNumber}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onPageChange(pageNumber)}
                className={`relative px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                  isActive ? "text-white" : "text-slate-700 dark:text-slate-300"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePage"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div
                  className={`relative ${
                    !isActive &&
                    "border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-purple-500 rounded-xl px-4 py-2"
                  } ${isActive && "px-4 py-2"}`}
                >
                  {pageNumber}
                </div>
              </motion.button>
            );
          })}

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="group relative px-4 py-2.5 rounded-xl font-medium transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 group-disabled:opacity-0 transition-opacity duration-300" />
            <div className="relative flex items-center gap-2 bg-white dark:bg-slate-800 rounded-xl px-4 py-2 border-2 border-slate-200 dark:border-slate-700 group-hover:border-transparent transition-colors">
              <span className="text-slate-700 dark:text-slate-200">Next</span>
              <svg
                className="w-5 h-5 text-slate-600 dark:text-slate-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.button>
        </div>

        {/* Quick Jump */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="text-sm text-slate-600 dark:text-slate-400">Jump to page:</span>
          <input
            type="number"
            min="1"
            max={totalPages}
            value={currentPage}
            onChange={(e) => {
              const page = parseInt(e.target.value);
              if (page >= 1 && page <= totalPages) {
                onPageChange(page);
              }
            }}
            className="w-20 px-3 py-2 text-center border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all"
          />
        </div>
      </motion.div>
    </div>
  );
};