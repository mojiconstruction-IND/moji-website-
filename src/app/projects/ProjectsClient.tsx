'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectList } from '@/data';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import CTA from '@/components/home/CTA';
import AnimatedBackground from '@/components/common/AnimatedBackground';
import { staggerContainer } from '@/lib/motion';
import styles from './projects.module.css';

type CategoryFilter = 'All' | 'Executed' | 'Recently Completed' | 'Modification/Shifting' | 'Private Organization';
type VoltageFilter = 'All' | '400kV+' | '220kV' | '132kV' | 'Solar' | 'GSS';

const CATEGORY_TABS: { key: CategoryFilter; label: string; icon: string }[] = [
  { key: 'All', label: 'All Projects', icon: '📂' },
  { key: 'Executed', label: 'Executed (RRVPNL)', icon: '⚡' },
  { key: 'Recently Completed', label: 'Recently Completed', icon: '✅' },
  { key: 'Private Organization', label: 'Private & Turnkey', icon: '🏢' },
  { key: 'Modification/Shifting', label: 'NHAI / PWD Shifting', icon: '🛣️' },
];

const VOLTAGE_FILTERS: { key: VoltageFilter; label: string }[] = [
  { key: 'All', label: 'All Voltages' },
  { key: '400kV+', label: '400kV / 765kV' },
  { key: '220kV', label: '220kV' },
  { key: '132kV', label: '132kV' },
  { key: 'Solar', label: 'Solar Power' },
  { key: 'GSS', label: 'Substations & GSS' },
];

export default function ProjectsClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [selectedVoltage, setSelectedVoltage] = useState<VoltageFilter>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projectList.length };
    projectList.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projectList.filter((project) => {
      // Category Match
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      // Search Query Match (across name, poDate, length, client, category)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.name.toLowerCase().includes(q) ||
        (project.location && project.location.toLowerCase().includes(q)) ||
        (project.scope && project.scope.toLowerCase().includes(q)) ||
        (project.length && project.length.toLowerCase().includes(q)) ||
        (project.client && project.client.toLowerCase().includes(q)) ||
        project.category.toLowerCase().includes(q);

      // Voltage / Spec Filter Match
      let matchesVoltage = true;
      if (selectedVoltage === '400kV+') {
        matchesVoltage = /400\s*kV|765\s*kV/i.test(project.name);
      } else if (selectedVoltage === '220kV') {
        matchesVoltage = /220\s*kV/i.test(project.name);
      } else if (selectedVoltage === '132kV') {
        matchesVoltage = /132\s*kV/i.test(project.name);
      } else if (selectedVoltage === 'Solar') {
        matchesVoltage = /solar|tpcd|tprel|avaada/i.test(project.name);
      } else if (selectedVoltage === 'GSS') {
        matchesVoltage = /gss|switchyard|sub-?\s*station/i.test(project.name);
      }

      return matchesCategory && matchesSearch && matchesVoltage;
    });
  }, [searchQuery, selectedCategory, selectedVoltage]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(start, start + itemsPerPage);
  }, [filteredProjects, currentPage, itemsPerPage]);

  const handleCategoryChange = (cat: CategoryFilter) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleVoltageChange = (volt: VoltageFilter) => {
    setSelectedVoltage(volt);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedVoltage('All');
    setCurrentPage(1);
  };

  // Helper for category styling
  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Executed':
        return styles.badgeExecuted;
      case 'Recently Completed':
        return styles.badgeRecent;
      case 'Private Organization':
        return styles.badgePrivate;
      case 'Modification/Shifting':
        return styles.badgeModification;
      default:
        return styles.badgeDefault;
    }
  };

  // Helper to extract voltage tag from name
  const extractVoltage = (name: string) => {
    const match = name.match(/(\d+\s*kV)/i);
    return match ? match[1].toUpperCase() : null;
  };

  return (
    <>
      {/* ── HERO SECTION ──────────────────────────── */}
      <section className={styles.hero}>
        <AnimatedBackground />
        <div className={styles.heroOrangeOrb} />
        <div className={`container ${styles.heroInner}`} style={{ position: 'relative', zIndex: 2 }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroTitle}
          >
            Track Record of <br />
            <span className={styles.accent}>Transmission Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.heroSub}
          >
            Over 36 years of executing landmark transmission lines, substations, and solar infrastructure projects
            across Rajasthan and Western India.
          </motion.p>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.statsBar}
          >
            <div className={styles.statBox}>
              <span className={styles.statVal}>150+</span>
              <span className={styles.statLabel}>Major Projects</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statBox}>
              <span className={styles.statVal}>500+</span>
              <span className={styles.statLabel}>Overall Projects</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statBox}>
              <span className={styles.statVal}>4,000+</span>
              <span className={styles.statLabel}>KM Line Span</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statBox}>
              <span className={styles.statVal}>33 – 765 kV</span>
              <span className={styles.statLabel}>Voltage Range</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statBox}>
              <span className={styles.statVal}>100%</span>
              <span className={styles.statLabel}>Execution Reliability</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED HIGHLIGHTS ───────────────────── */}
      <SectionWrapper variant="light" id="featured-projects">
        <div className="container">
          <SectionTitle
            badge="Featured Works"
            title="Landmark Projects"
            subtitle="Highlighted engineering feats demonstrating technical capability across high-voltage grids and solar installations."
          />
          <div className={styles.featuredGrid}>
            {projects.map((proj) => (
              <div key={proj.id} className={styles.featuredCard}>
                <div className={styles.imgWrap}>
                  {proj.image ? (
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.projImage}
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <div className={styles.imgPlaceholder}>
                      <span className={styles.projIcon}>⚡</span>
                      <span className={styles.projCat}>{proj.category}</span>
                    </div>
                  )}
                  <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                      {proj.voltage && <span className={styles.pill}>⚡ {proj.voltage}</span>}
                      {proj.height && <span className={styles.pill}>📏 {proj.height}</span>}
                      <span className={styles.pill}>📅 {proj.year}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.info}>
                  <div className={styles.infoTop}>
                    <h3 className={styles.projTitle}>{proj.title}</h3>
                    <span className={styles.catBadge}>{proj.category}</span>
                  </div>
                  <p className={styles.projDesc}>{proj.description}</p>
                  <div className={styles.meta}>
                    <span>👤 {proj.client}</span>
                    <span>📍 {proj.location}</span>
                  </div>
                  <div className={styles.tags}>
                    {proj.tags.map((t) => (
                      <span key={t} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── COMPREHENSIVE PROJECT DIRECTORY ────────── */}
      <SectionWrapper variant="white" id="all-projects">
        <div className="container">
          <SectionTitle
            badge="Project Directory"
            title="Comprehensive Project Log"
            subtitle="Search, filter, and explore all executed transmission line projects, substation packages, and deposit works."
          />

          {/* ── INTERACTIVE EXPLORER CONTROLS ──────── */}
          <div className={styles.directoryControls}>
            {/* Category Tabs */}
            <div className={styles.categoryTabsWrap}>
              <div className={styles.categoryTabs} role="tablist">
                {CATEGORY_TABS.map((tab) => {
                  const count = categoryCounts[tab.key] || 0;
                  const isActive = selectedCategory === tab.key;
                  return (
                    <button
                      key={tab.key}
                      role="tab"
                      aria-selected={isActive}
                      className={`${styles.categoryTab} ${isActive ? styles.activeTab : ''}`}
                      onClick={() => handleCategoryChange(tab.key)}
                    >
                      <span className={styles.tabIcon}>{tab.icon}</span>
                      <span className={styles.tabLabel}>{tab.label}</span>
                      <span className={styles.tabCount}>{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search & Filter Toolbar */}
            <div className={styles.filterToolbar}>
              {/* Search Bar */}
              <div className={styles.searchBox}>
                <span className={styles.searchIcon}>🔍</span>
                <input
                  type="text"
                  placeholder="Search by project name, route, tender no., location, or voltage..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className={styles.searchInput}
                  aria-label="Search projects"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className={styles.clearSearchBtn}
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* View Switcher & Per Page */}
              <div className={styles.toolbarActions}>
                {/* View Mode Buttons */}
                <div className={styles.viewToggleGroup}>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.activeView : ''}`}
                    title="Grid Card View"
                    aria-label="Grid view"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7" rx="1.5" />
                      <rect x="14" y="3" width="7" height="7" rx="1.5" />
                      <rect x="14" y="14" width="7" height="7" rx="1.5" />
                      <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    </svg>
                    <span>Cards</span>
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`${styles.viewBtn} ${viewMode === 'table' ? styles.activeView : ''}`}
                    title="Data Table View"
                    aria-label="Table view"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="8" y1="6" x2="21" y2="6" />
                      <line x1="8" y1="12" x2="21" y2="12" />
                      <line x1="8" y1="18" x2="21" y2="18" />
                      <line x1="3" y1="6" x2="3.01" y2="6" />
                      <line x1="3" y1="12" x2="3.01" y2="12" />
                      <line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                    <span>Table</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Voltage Chips Filter */}
            <div className={styles.quickFiltersBar}>
              <span className={styles.quickFilterLabel}>Quick Filter:</span>
              <div className={styles.voltageChips}>
                {VOLTAGE_FILTERS.map((vf) => (
                  <button
                    key={vf.key}
                    onClick={() => handleVoltageChange(vf.key)}
                    className={`${styles.voltageChip} ${selectedVoltage === vf.key ? styles.activeChip : ''}`}
                  >
                    {vf.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Status Line */}
            <div className={styles.resultsStatus}>
              <span>
                Showing <strong>{filteredProjects.length}</strong>{' '}
                {filteredProjects.length === 1 ? 'project' : 'projects'}
                {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
                {selectedVoltage !== 'All' && ` (${selectedVoltage})`}
                {searchQuery && ` matching "${searchQuery}"`}
              </span>
              {(searchQuery || selectedCategory !== 'All' || selectedVoltage !== 'All') && (
                <button onClick={clearFilters} className={styles.resetLink}>
                  Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* ── PROJECT LIST DISPLAY ─────────────────── */}
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.emptyState}
            >
              <div className={styles.emptyIcon}>🔍</div>
              <h3 className={styles.emptyTitle}>No matching projects found</h3>
              <p className={styles.emptyDesc}>
                We couldn&apos;t find any project matching your criteria. Try adjusting your search query or reset the filters.
              </p>
              <button onClick={clearFilters} className={styles.clearBtnPrimary}>
                Reset All Filters
              </button>
            </motion.div>
          ) : viewMode === 'grid' ? (
            /* ── GRID CARD VIEW ────────────────────── */
            <motion.div
              layout
              className={styles.projectCardsGrid}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence mode="popLayout">
                {paginatedProjects.map((p) => {
                  const volt = extractVoltage(p.name);
                  const isLengthAvailable = p.length && p.length !== '--' && p.length !== 'NA';
                  const isLocationAvailable = p.location && p.location !== '--';

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35 }}
                      key={p.id}
                      className={styles.dirCard}
                    >
                      {/* Top Bar */}
                      <div className={styles.dirCardHeader}>
                        <span className={`${styles.categoryBadge} ${getCategoryBadgeClass(p.category)}`}>
                          {p.category}
                        </span>
                        {volt && <span className={styles.voltageTag}>⚡ {volt}</span>}
                      </div>

                      {/* Title / Description */}
                      <h4 className={styles.dirCardTitle}>{p.name}</h4>

                      {/* Details Meta */}
                      <div className={styles.dirCardMeta}>
                        {isLengthAvailable && (
                          <div className={styles.metaPill}>
                            <span className={styles.metaIcon}>📏</span>
                            <span>
                              <strong>{p.length}</strong>
                            </span>
                          </div>
                        )}
                        {isLocationAvailable && (
                          <div className={styles.metaPill}>
                            <span className={styles.metaIcon}>📍</span>
                            <span className={styles.poText} title={p.location}>
                              {p.location}
                            </span>
                          </div>
                        )}
                        {p.client && (
                          <div className={styles.metaPill}>
                            <span className={styles.metaIcon}>🏛️</span>
                            <span className={styles.poText} title={p.client}>
                              {p.client}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Footer */}
                      <div className={styles.dirCardFooter}>
                        <span className={styles.verifiedTag}>✓ Executed by Moji Construction</span>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* ── POLISHED DATA TABLE VIEW ──────────── */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className={styles.tableWrapper}
            >
              <table className={styles.dirTable}>
                <thead>
                  <tr>
                    <th style={{ width: '60px' }}>#</th>
                    <th style={{ width: '180px' }}>Category</th>
                    <th>Project Description & Scope</th>
                    <th style={{ width: '220px' }}>Client / Authority</th>
                    <th style={{ width: '130px', textAlign: 'right' }}>Length</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedProjects.map((p, index) => {
                    const rowNum = (currentPage - 1) * itemsPerPage + index + 1;
                    const hasLength = p.length && p.length !== '--' && p.length !== 'NA';
                    return (
                      <tr key={p.id} className={styles.tableRow}>
                        <td className={styles.indexCol}>{rowNum}</td>
                        <td>
                          <span className={`${styles.categoryBadge} ${getCategoryBadgeClass(p.category)}`}>
                            {p.category}
                          </span>
                        </td>
                        <td className={styles.titleCol}>
                          <div className={styles.projectName}>{p.name}</div>
                          {p.scope && <div className={styles.projectSnippetText} style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{p.scope}</div>}
                        </td>
                        <td className={styles.poCol}>
                          <span className={styles.poCode}>{p.client || 'Turnkey EPC'}</span>
                        </td>
                        <td className={styles.lengthCol}>
                          {hasLength ? (
                            <span className={styles.lengthBadge}>{p.length}</span>
                          ) : (
                            <span className={styles.naText}>—</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </motion.div>
          )}

          {/* ── PAGINATION CONTROLS ─────────────────── */}
          {totalPages > 1 && (
            <div className={styles.paginationWrap}>
              <div className={styles.paginationInfo}>
                Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong> ({filteredProjects.length} total)
              </div>
              <div className={styles.paginationButtons}>
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className={styles.pageBtn}
                  aria-label="Previous page"
                >
                  ‹ Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  // Show current, edges, and immediate neighbors
                  if (
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`${styles.pageBtn} ${currentPage === pageNum ? styles.activePageBtn : ''}`}
                      >
                        {pageNum}
                      </button>
                    );
                  } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                    return (
                      <span key={pageNum} className={styles.pageEllipsis}>
                        …
                      </span>
                    );
                  }
                  return null;
                })}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className={styles.pageBtn}
                  aria-label="Next page"
                >
                  Next ›
                </button>
              </div>
            </div>
          )}
        </div>
      </SectionWrapper>

      <CTA />
    </>
  );
}
