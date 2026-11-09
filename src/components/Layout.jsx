import React, { useEffect, useMemo, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  ChevronsUp,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  User,
  Briefcase,
  Cpu,
  FolderGit2,
  Code2,
  Award,
  GraduationCap,
  Mail,
  Sparkles,
  Wrench,
} from "lucide-react";
import SearchModal from "./common/SearchModal";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import { categories, superCategories } from "../config/technologies";

const PORTFOLIO_SECTIONS = [
  { id: "greeting", name: "Overview & Bio", icon: User },
  { id: "skills", name: "Core Capabilities", icon: Sparkles },
  { id: "experience", name: "Work Experience", icon: Briefcase },
  { id: "education", name: "Education", icon: GraduationCap },
  { id: "techstack", name: "Tech Stack", icon: Cpu },
  { id: "projects", name: "Projects", icon: FolderGit2 },
  { id: "codingprofile", name: "Coding Profiles", icon: Code2 },
  { id: "achievements", name: "Achievements", icon: Award },
  { id: "contact", name: "Get In Touch", icon: Mail },
];

const Layout = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarHidden, setSidebarHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [activePortfolioSection, setActivePortfolioSection] =
    useState("greeting");

  // All KnowledgeShelf categories & superCategories collapsed by default
  const [expandedSuperCategories, setExpandedSuperCategories] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState([]);

  const isPortfolioRoute = location.pathname === "/";

  const categoryMap = useMemo(() => {
    const map = new Map();
    categories.forEach((category) => {
      map.set(category.id, category);
    });
    return map;
  }, []);

  // Automatically expand current KnowledgeShelf category when navigating into a topic
  useEffect(() => {
    const parts = location.pathname.split("/").filter(Boolean);
    const catId = parts[0] === "shelf" ? parts[1] : parts[0];
    if (catId && categoryMap.has(catId)) {
      setExpandedCategories((prev) =>
        prev.includes(catId) ? prev : [...prev, catId]
      );
    }
  }, [location.pathname, categoryMap]);

  // Handle scrolling to hash section when navigating to /#section
  useEffect(() => {
    if (isPortfolioRoute && location.hash) {
      const targetId = location.hash.replace("#", "");
      setActivePortfolioSection(targetId);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 60);
    }
  }, [isPortfolioRoute, location.hash]);

  // Track active portfolio section while scrolling the main container
  useEffect(() => {
    if (!isPortfolioRoute) return;
    const container = document.getElementById("main-scroll-container");
    if (!container) return;

    const handleScroll = () => {
      const scrollPos = container.scrollTop + 180;
      let current = "greeting";
      for (const sec of PORTFOLIO_SECTIONS) {
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollPos) {
          current = sec.id;
        }
      }
      setActivePortfolioSection(current);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [isPortfolioRoute]);

  const handlePortfolioSectionClick = (sectionId) => {
    setActivePortfolioSection(sectionId);
    if (isMobile) {
      setMobileSidebarOpen(false);
    }
    if (!isPortfolioRoute) {
      navigate(`/#${sectionId}`);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      window.history.replaceState(null, "", `/#${sectionId}`);
    }
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleSuperCategory = (superCategoryId) => {
    setExpandedSuperCategories((prev) =>
      prev.includes(superCategoryId)
        ? prev.filter((id) => id !== superCategoryId)
        : [...prev, superCategoryId]
    );
  };

  const isActive = (path) => location.pathname === path;

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-900/30",
        border: "border-blue-700/50",
        text: "text-blue-400",
        hover: "hover:bg-blue-900/50",
      },
      purple: {
        bg: "bg-purple-900/30",
        border: "border-purple-700/50",
        text: "text-purple-400",
        hover: "hover:bg-purple-900/50",
      },
      green: {
        bg: "bg-green-900/30",
        border: "border-green-700/50",
        text: "text-green-400",
        hover: "hover:bg-green-900/50",
      },
      orange: {
        bg: "bg-orange-900/30",
        border: "border-orange-700/50",
        text: "text-orange-400",
        hover: "hover:bg-orange-900/50",
      },
      red: {
        bg: "bg-red-900/30",
        border: "border-red-700/50",
        text: "text-red-400",
        hover: "hover:bg-red-900/50",
      },
      amber: {
        bg: "bg-amber-900/30",
        border: "border-amber-700/50",
        text: "text-amber-400",
        hover: "hover:bg-amber-900/50",
      },
      sky: {
        bg: "bg-sky-900/30",
        border: "border-sky-700/50",
        text: "text-sky-400",
        hover: "hover:bg-sky-900/50",
      },
      indigo: {
        bg: "bg-indigo-900/30",
        border: "border-indigo-700/50",
        text: "text-indigo-400",
        hover: "hover:bg-indigo-900/50",
      },
      fuchsia: {
        bg: "bg-fuchsia-900/30",
        border: "border-fuchsia-700/50",
        text: "text-fuchsia-400",
        hover: "hover:bg-fuchsia-900/50",
      },
    };
    return colors[color] || colors.blue;
  };

  const renderCategoryBlock = (category) => {
    if (!category) {
      return null;
    }

    const Icon = category.icon;
    const isExpanded = expandedCategories.includes(category.id);
    const colorClasses = getColorClasses(category.color);

    return (
      <div key={category.id} className="mb-2">
        <button
          onClick={() => toggleCategory(category.id)}
          className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-all ${
            colorClasses.hover
          } ${
            isExpanded
              ? `${colorClasses.bg} border ${colorClasses.border}`
              : "text-gray-300"
          }`}
        >
          <div className="flex items-center gap-3">
            <Icon size={17} className={isExpanded ? colorClasses.text : ""} />
            <span className="font-semibold text-sm">{category.name}</span>
          </div>
          {isExpanded ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
        </button>

        {isExpanded && (
          <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-700 pl-3">
            {category.technologies.map((tech) => {
              const techPath = `/shelf/${category.id}/${tech.id}`;
              const active =
                isActive(techPath) ||
                isActive(`/${category.id}/${tech.id}`);

              return (
                <div
                  key={tech.id}
                  className={`flex items-center justify-between px-3 py-1.5 rounded-md text-sm transition-colors group/item ${
                    active
                      ? `${colorClasses.bg} ${colorClasses.text} font-medium`
                      : tech.comingSoon
                      ? "text-gray-500 cursor-not-allowed"
                      : "text-gray-400 hover:text-white hover:bg-gray-700"
                  }`}
                  onClick={(e) => {
                    if (tech.comingSoon) e.preventDefault();
                    if (isMobile) setMobileSidebarOpen(false);
                  }}
                >
                  <Link to={tech.comingSoon ? "#" : techPath} className="flex-1">
                    {tech.name}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const renderDirectCategoryLinks = (categoryList, colorClasses) => {
    return (
      <div className="space-y-1">
        {categoryList.map((category) => {
          const firstTech = category?.technologies?.[0];
          if (!category || !firstTech) {
            return null;
          }

          const techPath = `/shelf/${category.id}/${firstTech.id}`;
          const active =
            isActive(techPath) || isActive(`/${category.id}/${firstTech.id}`);
          const disabled = firstTech.comingSoon;
          const Icon = category.icon;

          return (
            <Link
              key={category.id}
              to={disabled ? "#" : techPath}
              className={`flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${
                active
                  ? `${colorClasses.bg} ${colorClasses.text} font-medium`
                  : disabled
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
              onClick={(e) => {
                if (disabled) e.preventDefault();
                if (isMobile) setMobileSidebarOpen(false);
              }}
            >
              <span className="flex items-center gap-2">
                {Icon && <Icon size={14} />}
                {category.name}
              </span>
              {disabled && (
                <span className="text-[10px] bg-gray-700 text-gray-400 px-2 py-0.5 rounded">
                  Soon
                </span>
              )}
            </Link>
          );
        })}
      </div>
    );
  };

  const hasAnyExpanded =
    expandedCategories.length > 0 || expandedSuperCategories.length > 0;

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setMobileSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const sidebarContent = (
    <div className="flex flex-col h-full bg-gray-800 border-r border-gray-700 overflow-hidden">
      {/* Sidebar Top Brand + Theme Switch */}
      <div className="flex-shrink-0 bg-gray-800 z-10">
        <div className="px-4 border-b border-gray-700 relative flex items-center justify-between h-[56px]">
          <Link
            to="/"
            onClick={() => {
              if (isMobile) setMobileSidebarOpen(false);
            }}
            className="flex items-center gap-2.5 hover:opacity-90 transition-opacity"
          >
            <img src="/favicon.svg" alt="Logo" className="w-7 h-7 rounded-lg" />
            <div>
              <h1 className="text-base font-bold leading-tight text-white">
                Syed Amim
              </h1>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <ToggleSwitch />
            {isMobile && (
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="text-gray-400 hover:text-white p-1"
                aria-label="Close sidebar"
              >
                <PanelLeftClose size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Search & Sidebar Controls */}
        <div className="px-4 pt-2.5 pb-2 space-y-2 border-b border-gray-700/60">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-gray-900/90 hover:bg-gray-900 border border-gray-700 hover:border-blue-500/50 text-gray-400 hover:text-white text-xs transition-all"
          >
            <span className="flex items-center gap-2">
              <Search size={14} className="text-blue-400" />
              <span>Search portfolio, books, topics...</span>
            </span>
            <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-gray-800 border border-gray-700 text-gray-400">
              ⌘K
            </kbd>
          </button>

          <div className="flex items-center justify-between gap-2">
            {hasAnyExpanded && (
              <button
                onClick={() => {
                  setExpandedCategories([]);
                  setExpandedSuperCategories([]);
                }}
                className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 text-xs text-gray-400 hover:text-white hover:bg-gray-700/60 rounded-md transition-colors group"
              >
                <ChevronsUp
                  size={14}
                  className="group-hover:-translate-y-0.5 transition-transform"
                />
                <span>Collapse All</span>
              </button>
            )}

            {!isMobile && (
              <button
                onClick={() => setSidebarHidden(true)}
                className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 text-xs text-gray-400 hover:text-white hover:bg-gray-700/60 rounded-md transition-colors"
              >
                <PanelLeftClose size={14} />
                <span>Hide Sidebar</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Scrollable Unified Navigation */}
      <nav className="flex-1 px-4 py-3 space-y-2 overflow-y-auto custom-scrollbar">
        {/* 1. TOP ITEM: PORTFOLIO (Direct link, non-expandable) */}
        <Link
          to="/"
          onClick={() => {
            if (isMobile) setMobileSidebarOpen(false);
            const scrollEl = document.getElementById("main-scroll-container");
            if (scrollEl) {
              scrollEl.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-all hover:bg-blue-900/50 ${
            isPortfolioRoute
              ? "bg-blue-900/30 border border-blue-700/50 text-blue-400"
              : "text-gray-300"
          }`}
        >
          <User
            size={20}
            className={isPortfolioRoute ? "text-blue-400" : ""}
          />
          <span className="font-semibold text-sm text-white">Portfolio</span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
            Me
          </span>
        </Link>

        {/* Divider for KnowledgeShelf */}
        <div className="pt-2 pb-1 px-2 flex items-center justify-between">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-gray-500">
            KnowledgeShelf
          </span>
          <Link
            to="/shelf"
            onClick={() => isMobile && setMobileSidebarOpen(false)}
            className={`text-[11px] font-mono transition-colors ${
              isActive("/shelf")
                ? "text-blue-400 font-semibold"
                : "text-gray-400 hover:text-blue-400"
            }`}
          >
            All Topics →
          </Link>
        </div>

        {/* KnowledgeShelf Catalog Overview Link */}
        <Link
          to="/shelf"
          onClick={() => isMobile && setMobileSidebarOpen(false)}
          className={`flex items-center gap-3 px-4 py-2.5 mb-2 rounded-lg text-sm font-medium transition-colors ${
            isActive("/shelf")
              ? "bg-purple-900/30 border border-purple-700/50 text-purple-400"
              : "text-gray-300 hover:bg-gray-700/70"
          }`}
        >
          <BookOpen size={18} className={isActive("/shelf") ? "text-purple-400" : ""} />
          <span>KnowledgeShelf Catalog</span>
        </Link>

        {/* 2. KNOWLEDGESHELF SUPER-CATEGORIES */}
        {superCategories.map((group) => {
          const GroupIcon = group.icon;
          const isGroupExpanded = expandedSuperCategories.includes(group.id);
          const colorClasses = getColorClasses(group.color);
          const layoutMode = group.layout || "nested";
          const resolvedCategories = group.categoryIds
            .map((categoryId) => categoryMap.get(categoryId))
            .filter(Boolean);
          const contentWrapperClasses =
            layoutMode === "direct"
              ? "ml-3 mt-2 space-y-2"
              : "ml-3 mt-2 space-y-2 border-l-2 border-gray-700/60 pl-3";

          return (
            <div key={group.id} className="mb-3">
              <button
                onClick={() => toggleSuperCategory(group.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                  colorClasses.hover
                } ${
                  isGroupExpanded
                    ? `${colorClasses.bg} border ${colorClasses.border}`
                    : "text-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <GroupIcon
                    size={19}
                    className={isGroupExpanded ? colorClasses.text : ""}
                  />
                  <span className="font-semibold text-sm">{group.name}</span>
                </div>
                {isGroupExpanded ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>

              {isGroupExpanded && (
                <div className={contentWrapperClasses}>
                  {layoutMode === "direct"
                    ? renderDirectCategoryLinks(
                        resolvedCategories,
                        colorClasses
                      )
                    : resolvedCategories.map((category) =>
                        renderCategoryBlock(category)
                      )}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-900 text-white shelf-theme-scope">
      {/* Sidebar */}
      {isMobile ? (
        <>
          <div
            className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
              mobileSidebarOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setMobileSidebarOpen(false)}
          />
          <div
            className={`fixed inset-y-0 left-0 z-40 w-72 max-w-[85%] transform transition-transform duration-300 ${
              mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {sidebarContent}
          </div>
        </>
      ) : (
        !sidebarHidden && (
          <div className="hidden lg:flex w-80 flex-shrink-0">
            {sidebarContent}
          </div>
        )
      )}

      {/* Main Content */}
      <div
        id="main-scroll-container"
        className="flex-1 overflow-auto bg-gray-900 relative scroll-smooth"
      >
        {/* Mobile Header */}
        <div className="lg:hidden sticky top-0 z-20 border-b border-gray-800/60 bg-gray-900/95 backdrop-blur-lg shadow-xl">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="group flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl text-gray-100 text-xs font-medium"
            >
              <PanelLeftOpen size={16} />
              <span>Menu</span>
            </button>

            <Link
              to="/"
              className="flex items-center gap-2 px-2 py-1 rounded-xl"
            >
              <img src="/favicon.svg" alt="Logo" className="w-6 h-6 rounded-md" />
              <span className="text-sm font-bold text-white">Syed Amim</span>
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300"
                aria-label="Search"
              >
                <Search size={15} />
              </button>
              <ToggleSwitch />
            </div>
          </div>
        </div>

        {/* Floating Show Sidebar Button when hidden on Desktop */}
        {!isMobile && sidebarHidden && (
          <div className="fixed top-4 left-4 z-30">
            <button
              onClick={() => setSidebarHidden(false)}
              className="group relative p-3 bg-gray-800/95 border border-gray-700 hover:border-blue-500/50 rounded-xl text-gray-200 hover:text-white shadow-xl transition-all duration-200 backdrop-blur-lg"
              aria-label="Show sidebar"
              title="Show Navigation Sidebar"
            >
              <PanelLeftOpen size={18} />
            </button>
          </div>
        )}

        {/* Top Section Navigation Bar on Portfolio Page */}
        {isPortfolioRoute && (
          <div className="sticky top-[57px] lg:top-0 z-10 border-b border-gray-800/80 bg-gray-900/90 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth">
              {PORTFOLIO_SECTIONS.map((sec) => {
                const SecIcon = sec.icon;
                const isSecActive = activePortfolioSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => handlePortfolioSectionClick(sec.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                      isSecActive
                        ? "bg-blue-900/40 text-blue-400 border border-blue-700/50 shadow-sm"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    <SecIcon size={13} className="flex-shrink-0" />
                    <span>{sec.name}</span>
                  </button>
                );
              })}
              <div className="w-4 flex-shrink-0" aria-hidden="true" />
            </div>
          </div>
        )}

        <Outlet />
      </div>
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
};

export default Layout;
