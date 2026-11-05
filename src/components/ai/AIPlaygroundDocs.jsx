import React, { useState, useMemo } from "react";
import {
  Search,
  LayoutGrid,
  List,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  FolderGit2,
  X,
} from "lucide-react";
import { aiPlaygroundProjects } from "../../data/aiPlaygroundData";

const TIER_FILTERS = [
  { id: "all", label: "All Tiers" },
  { id: 1, label: "⭐ Tier 1: Essential" },
  { id: 2, label: "🥈 Tier 2: Recommended" },
  { id: 3, label: "🥉 Tier 3: Reference" },
];

const CATEGORY_FILTERS = [
  { id: "all", label: "All Categories" },
  { id: "agents", label: "🤖 Autonomous Agents" },
  { id: "inference", label: "🧠 Inference & Serving" },
  { id: "rag", label: "📚 RAG & Memory" },
  { id: "vision", label: "🎨 Vision & Multimodal" },
  { id: "education", label: "🎓 Learning & Guides" },
];

export default function AIPlaygroundDocs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTier, setSelectedTier] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("importance");
  const [viewMode, setViewMode] = useState("grid");
  const [copiedDir, setCopiedDir] = useState(null);

  const counts = useMemo(() => {
    const total = aiPlaygroundProjects.length;
    const t1 = aiPlaygroundProjects.filter((p) => p.tier === 1).length;
    const t2 = aiPlaygroundProjects.filter((p) => p.tier === 2).length;
    const t3 = aiPlaygroundProjects.filter((p) => p.tier === 3).length;
    return { total, t1, t2, t3 };
  }, []);

  const filteredProjects = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return aiPlaygroundProjects
      .filter((p) => {
        if (selectedTier !== "all" && p.tier !== Number(selectedTier)) {
          return false;
        }
        if (selectedCategory !== "all" && p.cat_id !== selectedCategory) {
          return false;
        }
        if (!q) return true;
        return (
          p.name.toLowerCase().includes(q) ||
          p.dir.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
        );
      })
      .sort((a, b) => {
        if (sortBy === "importance") {
          if (a.tier !== b.tier) return a.tier - b.tier;
          return a.name.localeCompare(b.name);
        }
        if (sortBy === "name-asc") return a.name.localeCompare(b.name);
        if (sortBy === "name-desc") return b.name.localeCompare(a.name);
        if (sortBy === "category") {
          const catCmp = a.category.localeCompare(b.category);
          return catCmp !== 0 ? catCmp : a.tier - b.tier;
        }
        return 0;
      });
  }, [searchQuery, selectedTier, selectedCategory, sortBy]);

  const handleCopyDir = (dir) => {
    navigator.clipboard.writeText(dir);
    setCopiedDir(dir);
    setTimeout(() => setCopiedDir(null), 1800);
  };

  const renderTierBadge = (tier) => {
    if (tier === 1) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-amber-900/30 text-amber-400 border border-amber-700/50">
          ⭐ Tier 1: Essential
        </span>
      );
    }
    if (tier === 2) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-indigo-900/30 text-indigo-400 border border-indigo-700/50">
          🥈 Tier 2: Recommended
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-gray-800 text-gray-400 border border-gray-700">
        🥉 Tier 3: Reference
      </span>
    );
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gray-900 border border-gray-800 p-6 sm:p-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-900/30 border border-fuchsia-700/50 text-fuchsia-400 text-xs font-mono uppercase tracking-wider mb-4">
          <Sparkles size={13} />
          <span>AI Workspace Repository Directory</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          AI Playground Projects &amp; Importance Tiers
        </h1>
        <p className="text-gray-400 max-w-3xl text-base leading-relaxed mb-6">
          Structured index of all {counts.total} AI engineering repositories,
          agent harnesses, inference engines, RAG frameworks, and multimodal
          tools rated by ecosystem importance (Tier 1 Flagship, Tier 2
          Recommended, Tier 3 Reference).
        </p>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="rounded-xl bg-gray-800/80 border border-gray-700/60 px-4 py-3">
            <div className="text-2xl font-bold font-mono text-white">
              {counts.total}
            </div>
            <div className="text-xs text-gray-400">Total Repositories</div>
          </div>
          <div className="rounded-xl bg-amber-900/20 border border-amber-700/40 px-4 py-3">
            <div className="text-2xl font-bold font-mono text-amber-400">
              {counts.t1}
            </div>
            <div className="text-xs text-gray-400">⭐ Tier 1: Essential</div>
          </div>
          <div className="rounded-xl bg-indigo-900/20 border border-indigo-700/40 px-4 py-3">
            <div className="text-2xl font-bold font-mono text-indigo-400">
              {counts.t2}
            </div>
            <div className="text-xs text-gray-400">🥈 Tier 2: Recommended</div>
          </div>
          <div className="rounded-xl bg-gray-800/80 border border-gray-700/60 px-4 py-3">
            <div className="text-2xl font-bold font-mono text-gray-300">
              {counts.t3}
            </div>
            <div className="text-xs text-gray-400">🥉 Tier 3: Reference</div>
          </div>
        </div>
      </div>

      {/* Controls & Filters */}
      <div className="rounded-2xl bg-gray-900 border border-gray-800 p-5 space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project name, directory, tags, or technology..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3.5 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-sm text-gray-200 focus:outline-none focus:border-blue-500"
          >
            <option value="importance">Sort: Importance (Tier 1 → 3)</option>
            <option value="name-asc">Sort: Name (A → Z)</option>
            <option value="name-desc">Sort: Name (Z → A)</option>
            <option value="category">Sort: Category</option>
          </select>

          {/* Grid / Table View Toggle */}
          <div className="inline-flex rounded-xl bg-gray-800 border border-gray-700 p-1 self-start">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                viewMode === "grid"
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <LayoutGrid size={14} />
              <span>Cards</span>
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                viewMode === "table"
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <List size={14} />
              <span>Table</span>
            </button>
          </div>
        </div>

        {/* Tier Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-gray-400 mr-1">
            Importance:
          </span>
          {TIER_FILTERS.map((tf) => {
            const active = String(selectedTier) === String(tf.id);
            return (
              <button
                key={tf.id}
                onClick={() => setSelectedTier(tf.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  active
                    ? "bg-blue-600 text-white border-blue-500"
                    : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700"
                }`}
              >
                {tf.label}
              </button>
            );
          })}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-gray-400 mr-1">
            Category:
          </span>
          {CATEGORY_FILTERS.map((cf) => {
            const active = selectedCategory === cf.id;
            return (
              <button
                key={cf.id}
                onClick={() => setSelectedCategory(cf.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  active
                    ? "bg-blue-600 text-white border-blue-500"
                    : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700"
                }`}
              >
                {cf.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-gray-400 px-1">
        <span>
          Showing <strong className="text-white">{filteredProjects.length}</strong>{" "}
          of {counts.total} projects
        </span>
        {(selectedTier !== "all" ||
          selectedCategory !== "all" ||
          searchQuery) && (
          <button
            onClick={() => {
              setSelectedTier("all");
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="text-blue-400 hover:underline font-medium"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Cards Grid or Table */}
      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl bg-gray-900 border border-gray-800 p-12 text-center text-gray-400">
          No matching AI Playground projects found.
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredProjects.map((proj) => (
            <div
              key={proj.dir}
              className={`rounded-xl bg-gray-800 border p-5 flex flex-col justify-between transition-all hover:-translate-y-0.5 ${
                proj.tier === 1
                  ? "border-amber-700/50 hover:border-amber-500/60"
                  : proj.tier === 2
                  ? "border-indigo-700/50 hover:border-indigo-500/60"
                  : "border-gray-700 hover:border-gray-600"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {proj.name}
                  </h3>
                  {renderTierBadge(proj.tier)}
                </div>

                {/* Directory Copy Button */}
                <button
                  type="button"
                  onClick={() => handleCopyDir(proj.dir)}
                  title="Copy directory name"
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-gray-900/80 border border-gray-700 text-xs font-mono text-gray-400 hover:text-white mb-3 transition-colors"
                >
                  <FolderGit2 size={12} className="text-blue-400" />
                  <span>{proj.dir}/</span>
                  {copiedDir === proj.dir ? (
                    <Check size={11} className="text-emerald-400" />
                  ) : (
                    <Copy size={11} className="opacity-60" />
                  )}
                </button>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-900/70 text-gray-300 border border-gray-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {proj.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-700/60 flex items-center justify-between gap-2">
                <span className="text-xs text-gray-400 truncate">
                  {proj.category}
                </span>
                {proj.url ? (
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 hover:bg-blue-600 text-gray-200 hover:text-white border border-gray-700 text-xs font-semibold transition-colors flex-shrink-0"
                  >
                    <span>GitHub</span>
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="px-2.5 py-1 rounded-md border border-dashed border-gray-700 text-xs text-gray-400">
                    Local Only
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl bg-gray-800 border border-gray-700 overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-900/60 text-xs font-mono uppercase text-gray-400">
                <th className="py-3.5 px-4">Tier</th>
                <th className="py-3.5 px-4">Project</th>
                <th className="py-3.5 px-4">Directory</th>
                <th className="py-3.5 px-4">Tech Stack</th>
                <th className="py-3.5 px-4">Summary</th>
                <th className="py-3.5 px-4">GitHub</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/60">
              {filteredProjects.map((proj) => (
                <tr
                  key={proj.dir}
                  className="hover:bg-gray-700/40 transition-colors"
                >
                  <td className="py-3 px-4 whitespace-nowrap">
                    {renderTierBadge(proj.tier)}
                  </td>
                  <td className="py-3 px-4 font-bold text-white whitespace-nowrap">
                    {proj.name}
                  </td>
                  <td className="py-3 px-4 font-mono text-xs text-gray-400 whitespace-nowrap">
                    {proj.dir}/
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-1">
                      {proj.tags.map((t) => (
                        <span
                          key={t}
                          className="px-1.5 py-0.5 rounded text-[10px] bg-gray-900 text-gray-300 border border-gray-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-300 max-w-md">
                    {proj.desc}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    {proj.url ? (
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-400 hover:underline font-medium text-xs"
                      >
                        <span>Repo</span>
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="text-xs text-gray-500">Local</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
