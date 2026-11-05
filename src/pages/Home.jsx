import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Sparkles } from 'lucide-react';
import { categories } from '../config/technologies';

const Home = () => {
  return (
    <div className="p-6 sm:p-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        {/* Top Banner linking back to Syed Amim Portfolio */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-mono font-semibold">
            <Sparkles size={13} />
            <span>KNOWLEDGESHELF • ENGINEERING LEARNING ENGINE</span>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 text-xs font-semibold text-gray-300 hover:text-white transition-all"
          >
            <ArrowLeft size={14} />
            <span>Back to Syed Amim Portfolio</span>
          </Link>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white tracking-tight">
          Master Distributed Systems, Data &amp; AI Engineering
        </h1>
        <p className="text-lg text-gray-400 mb-10 max-w-3xl">
          Interactive technical books (DDIA, Database Internals, Hull Derivatives), system design architectures, 
          algorithmic patterns, and live visualizers curated and engineered by{' '}
          <Link to="/" className="text-blue-400 hover:underline font-medium">
            Syed Amim
          </Link>.
        </p>

        <div className="space-y-8">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            const availableTechs = category.technologies.filter(t => t.hasDoc);

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.4) }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`text-${category.color}-400`} size={30} />
                  <div>
                    <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                    <p className="text-sm text-gray-400">
                      {availableTechs.length} of {category.technologies.length} modules available
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.technologies.map((tech) => (
                    <Link
                      key={tech.id}
                      to={tech.comingSoon ? '#' : `/shelf/${category.id}/${tech.id}`}
                      className={`group relative p-4 rounded-lg border transition-all ${
                        tech.comingSoon
                          ? 'border-gray-700 bg-gray-900/50 cursor-not-allowed'
                          : `border-gray-700 bg-gray-900 hover:border-${category.color}-500 hover:bg-gray-800`
                      }`}
                      onClick={(e) => tech.comingSoon && e.preventDefault()}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className={`font-semibold ${tech.comingSoon ? 'text-gray-500' : 'text-white group-hover:text-' + category.color + '-400'}`}>
                          {tech.name}
                        </h3>
                        {tech.hasVisualizer && !tech.comingSoon && (
                          <span className="text-[10px] bg-green-900/50 text-green-400 px-2 py-0.5 rounded border border-green-700/50">
                            Visual
                          </span>
                        )}
                      </div>
                      <p className={`text-xs ${tech.comingSoon ? 'text-gray-600' : 'text-gray-400'}`}>
                        {tech.badge}
                      </p>
                      {tech.comingSoon && (
                        <div className="absolute top-2 right-2">
                          <span className="text-xs bg-gray-700 text-gray-500 px-2 py-1 rounded">
                            Coming Soon
                          </span>
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl border border-blue-700/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
              <BookOpen size={20} className="text-blue-400" />
              <span>Interactive Learning &amp; Visualizations</span>
            </h3>
            <p className="text-sm text-gray-300">
              Every module features syntax-highlighted implementations, architectural trade-offs, and interactive diagrams.
            </p>
          </div>
          <Link
            to="/"
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold whitespace-nowrap transition-colors"
          >
            View Portfolio &amp; Experience →
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
