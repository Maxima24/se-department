import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { staffData } from "./data/staffData";
import { HeroSection } from "./components/HeroSection";
import { ModernSearchBar } from "./components/ModernSearchBar";
import { ModernStaffGrid } from "./components/ModernStaffGrid";
import { ModernPagination } from "./components/ModernPagination";
import { ModernMobileView } from "./components/ModernMobileView";
import { ModernFooter } from "./components/ModernFooter";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 9;

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Simulate loading
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  // Filter staff
  const filteredStaff = useMemo(() => {
    return staffData.filter((member) => {
      const matchesSearch =
        searchQuery === "" ||
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.specialization.some((spec) =>
          spec.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesRole = roleFilter === "" || member.role === roleFilter;

      const matchesSpecialization =
        specializationFilter === "" ||
        member.specialization.some((spec) =>
          spec.toLowerCase().includes(specializationFilter.toLowerCase())
        );

      return matchesSearch && matchesRole && matchesSpecialization;
    });
  }, [searchQuery, roleFilter, specializationFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredStaff.length / itemsPerPage);
  const paginatedStaff = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredStaff.slice(startIndex, endIndex);
  }, [filteredStaff, currentPage]);

  // Reset page on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, roleFilter, specializationFilter]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Loading Screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 mx-auto mb-6 border-4 border-blue-500 border-t-transparent rounded-full"
          />
          <h2 className="text-2xl font-bold text-white mb-2">Faculty Nexus</h2>
          <p className="text-slate-400">Loading faculty directory...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <HeroSection staffCount={staffData.length} />

      {/* Search Bar */}
      <ModernSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        roleFilter={roleFilter}
        setRoleFilter={setRoleFilter}
        specializationFilter={specializationFilter}
        setSpecializationFilter={setSpecializationFilter}
      />

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 mb-8"
      >
        <div className="text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={filteredStaff.length}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-slate-600 dark:text-slate-400 font-medium"
            >
              {filteredStaff.length === 0 ? (
                "No faculty members found"
              ) : (
                <>
                  Showing{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-bold">
                    {isMobile ? filteredStaff.length : paginatedStaff.length}
                  </span>{" "}
                  of{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-bold">
                    {filteredStaff.length}
                  </span>{" "}
                  {filteredStaff.length === 1 ? "member" : "members"}
                </>
              )}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Staff Display */}
      <AnimatePresence mode="wait">
        {isMobile ? (
          <motion.div
            key="mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ModernMobileView staff={filteredStaff} />
          </motion.div>
        ) : (
          <motion.div
            key="desktop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ModernStaffGrid staff={paginatedStaff} />
            {filteredStaff.length > 0 && (
              <ModernPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                totalItems={filteredStaff.length}
                itemsPerPage={itemsPerPage}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white z-30 hover:shadow-blue-500/50 transition-shadow"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      {/* Footer */}
      <ModernFooter />
    </div>
  );
}