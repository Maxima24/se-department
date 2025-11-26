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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="backdrop-blur-xl bg-white rounded-2xl shadow-md border border-slate-200 p-6"
      >
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mb-6"
        >
          <p className="text-sm text-slate-600">
            Showing{" "}
            <span className="font-semibold text-blue-600">{startItem}</span> to{" "}
            <span className="font-semibold text-blue-600">{endItem}</span> of{" "}
            <span className="font-semibold text-blue-600">{totalItems}</span>{" "}
            faculty members
          </p>
        </motion.div>

        {/* Pagination Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="group relative px-4 py-2.5 rounded-xl font-medium transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {/* <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 group-disabled:opacity-0 transition-opacity duration-300" /> */}
            <div className="relative flex items-center gap-2 bg-white rounded-xl px-4 py-2 border-2 border-slate-200 group-hover:border-gray-200 transition-colors">
              <svg
                className="w-5 h-5 text-slate-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="text-slate-700">Previous</span>
            </div>
          </motion.button>

          {/* Page Numbers */}
          {getPageNumbers().map((page, idx) => {
            if (page === "...") {
              return (
                <motion.span
                  key={`ellipsis-${idx}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-4 py-2.5 text-slate-400 font-medium"
                >
                  ...
                </motion.span>
              );
            }

            const pageNumber = page as number;
            const isActive = pageNumber === currentPage;

            return (
              <motion.button
                key={pageNumber}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.04 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onPageChange(pageNumber)}
                className={`relative px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                  isActive ? "text-white" : "text-slate-700"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePage"
                    className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 rounded-xl shadow-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div
                  className={`relative ${
                    !isActive &&
                    "border-2 border-slate-200 bg-white hover:border-blue-400 rounded-xl px-4 py-2"
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
            className="group relative rounded-xl font-medium transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {/* <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 group-disabled:opacity-0 transition-opacity duration-300" /> */}
            <div className="relative flex items-center gap-2 bg-white rounded-xl px-4 py-2 border-2 border-slate-200 group-hover:border-gray-200 transition-colors">
              <span className="text-slate-700">Next</span>
              <svg
                className="w-5 h-5 text-slate-600 hover:translateX  transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </motion.button>
        </motion.div>

        {/* Quick Jump */}
        {/* <div className="mt-6 flex items-center justify-center gap-3">
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
        </div> */}
      </motion.div>
    </div>
  );
};
