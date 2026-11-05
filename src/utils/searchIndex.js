import { Briefcase, FolderGit2, Award, User, Cpu, Sparkles } from 'lucide-react';
import { categories } from '../config/technologies';
import { aiPlaygroundProjects } from '../data/aiPlaygroundData';
import { ddiaChaptersDetailed as ddiaChapters } from '../data/ddia-chapters-data';
import { dbInternalsChapters } from '../data/db-internals-chapters-data';
import { complexAnalysisChapters } from '../data/complex-analysis-chapters-data';
import { linearAlgebraChapters } from '../data/linear-algebra-chapters-data';
import { deepLearningChapters } from '../data/deep-learning-chapters-data';
import { patternRecognitionChapters } from '../data/pattern-recognition-chapters-data';
import { hullChaptersDetailed as hullChapters } from '../data/hull-chapters-data';
import { securityAnalysisChapters } from '../data/security-analysis-chapters-data';
import {
  workExperiences,
  bigProjects,
  miniProjects,
  achievementSection,
  techStack
} from '../portfolio';

// Map tech ID to its data
const bookChapterData = {
  'ddia': ddiaChapters,
  'database-internals': dbInternalsChapters,
  'complex-analysis-spiegel': complexAnalysisChapters,
  'linear-algebra-lipschutz': linearAlgebraChapters,
  'deep-learning-goodfellow': deepLearningChapters,
  'pattern-recognition-bishop': patternRecognitionChapters,
  'hull-options': hullChapters,
  'security-analysis': securityAnalysisChapters,
};

// Simple search scoring
const calculateScore = (text, query) => {
  if (!text) return 0;
  const normalizedText = text.toLowerCase();
  const normalizedQuery = query.toLowerCase();

  if (normalizedText === normalizedQuery) return 100;
  if (normalizedText.startsWith(normalizedQuery)) return 80;

  const words = normalizedText.split(/\s+/);
  if (words.some(w => w === normalizedQuery)) return 70;
  if (normalizedText.includes(normalizedQuery)) return 50;

  return 0;
};

export const searchContent = (query) => {
  if (!query || query.length < 2) return [];

  const results = [];
  const normalizedQuery = query.toLowerCase();

  // 0. Search Portfolio Sections (Experience, Projects, Tech Stack, Achievements)
  workExperiences.experience.forEach((exp) => {
    const score = Math.max(
      calculateScore(exp.company, query),
      calculateScore(exp.role, query),
      calculateScore(exp.desc, query) * 0.7
    );
    if (score > 0) {
      results.push({
        type: 'portfolio',
        title: `${exp.role} @ ${exp.company}`,
        path: '/#experience',
        description: `${exp.date} — ${exp.desc.replace(/\*\*/g, '')}`,
        icon: Briefcase,
        score: score + 5,
        category: 'Portfolio • Experience'
      });
    }
  });

  [...bigProjects.projects, ...miniProjects.projects].forEach((proj) => {
    const score = Math.max(
      calculateScore(proj.projectName, query),
      calculateScore(proj.projectDesc, query) * 0.7
    );
    if (score > 0) {
      results.push({
        type: 'portfolio',
        title: proj.projectName,
        path: '/#projects',
        description: proj.projectDesc,
        icon: FolderGit2,
        score: score + 5,
        category: 'Portfolio • Projects'
      });
    }
  });

  achievementSection.codingProfileCards.forEach((ach) => {
    const score = Math.max(
      calculateScore(ach.title, query),
      calculateScore(ach.subtitle, query) * 0.7
    );
    if (score > 0) {
      results.push({
        type: 'portfolio',
        title: ach.title,
        path: '/#achievements',
        description: ach.subtitle,
        icon: Award,
        score,
        category: 'Portfolio • Achievements'
      });
    }
  });

  techStack.experience.forEach((group) => {
    group.listoftechs.forEach((tech) => {
      const name = typeof tech === 'string' ? tech : tech.name;
      const score = calculateScore(name, query);
      if (score > 0) {
        results.push({
          type: 'portfolio-tech',
          title: `${name} (${group.Stack})`,
          path: (typeof tech === 'object' && tech.shelfPath) ? tech.shelfPath : '/#techstack',
          description: (typeof tech === 'object' && tech.shelfPath)
            ? `Open ${name} deep-dive in KnowledgeShelf or view in Portfolio Tech Stack`
            : `Portfolio Tech Arsenal — ${group.Stack}`,
          icon: Cpu,
          score,
          category: 'Portfolio • Tech Stack'
        });
      }
    });
  });

  if ('portfolio resume contact syed amim goldman sachs iit patna'.includes(normalizedQuery)) {
    results.push({
      type: 'portfolio',
      title: 'Syed Amim — Portfolio Home & Contact',
      path: '/',
      description: 'Senior Software Engineer & Associate at Goldman Sachs | B.Tech IIT Patna',
      icon: User,
      score: 65,
      category: 'Portfolio'
    });
  }

  // 1. Search KnowledgeShelf Categories & Technologies
  categories.forEach(category => {
    const categoryScore = calculateScore(category.name, query);
    if (categoryScore > 0) {
      const firstTech = category.technologies.find(t => !t.comingSoon);
      results.push({
        type: 'category',
        title: category.name,
        path: firstTech ? `/shelf/${category.id}/${firstTech.id}` : '/shelf',
        description: `KnowledgeShelf Category • ${category.technologies.length} modules`,
        icon: category.icon,
        score: categoryScore,
        category: `Shelf • ${category.name}`
      });
    }

    category.technologies.forEach(tech => {
      const techScore = calculateScore(tech.name, query);
      const badgeScore = calculateScore(tech.badge, query);
      const score = Math.max(techScore, badgeScore);

      if (score > 0) {
        results.push({
          type: 'technology',
          title: tech.name,
          path: `/shelf/${category.id}/${tech.id}`,
          description: `${tech.badge} • KnowledgeShelf Module`,
          icon: category.icon,
          score: score + 10,
          category: `Shelf • ${category.name}`
        });
      }

      // 2. Search Book Content (if available)
      const bookData = bookChapterData[tech.id];
      if (bookData) {
        bookData.forEach(chapter => {
          const chapterTitleScore = calculateScore(chapter.title, query);
          if (chapterTitleScore > 0) {
            results.push({
              type: 'chapter',
              title: `${tech.name} - ${chapter.title}`,
              path: `/shelf/${category.id}/${tech.id}?chapter=${chapter.id}`,
              description: chapter.summary || `Chapter ${chapter.id}`,
              icon: category.icon,
              score: chapterTitleScore,
              category: `Book • ${tech.name}`
            });
          }

          if (chapter.sections) {
            chapter.sections.forEach(section => {
              const sectionTitleScore = calculateScore(section.title, query);
              const contentScore = section.content && section.content.toLowerCase().includes(normalizedQuery) ? 30 : 0;
              const finalSectionScore = Math.max(sectionTitleScore, contentScore);

              if (finalSectionScore > 0) {
                let snippet = section.content || '';
                if (contentScore > 0 && snippet) {
                  const queryIdx = snippet.toLowerCase().indexOf(normalizedQuery);
                  const start = Math.max(0, queryIdx - 40);
                  const end = Math.min(snippet.length, queryIdx + 80);
                  snippet = (start > 0 ? '...' : '') + snippet.substring(start, end) + (end < snippet.length ? '...' : '');
                } else {
                  snippet = `Section in ${chapter.title}`;
                }

                results.push({
                  type: 'section',
                  title: `${tech.name}: ${section.title}`,
                  path: `/shelf/${category.id}/${tech.id}?chapter=${chapter.id}`,
                  description: snippet,
                  icon: category.icon,
                  score: finalSectionScore,
                  category: `Book • ${tech.name}`
                });
              }
            });
          }

          if (chapter.keyPoints && chapter.keyPoints.some(p => p.toLowerCase().includes(normalizedQuery))) {
            results.push({
              type: 'key-point',
              title: `${tech.name}: Key Points - ${chapter.title}`,
              path: `/shelf/${category.id}/${tech.id}?chapter=${chapter.id}`,
              description: "Matching text in key points",
              icon: category.icon,
              score: 25,
              category: `Book • ${tech.name}`
            });
          }
        });
      }
    });
  });

  // 3. Search AI Playground Projects (92 repos)
  aiPlaygroundProjects.forEach((proj) => {
    const score = Math.max(
      calculateScore(proj.name, query),
      calculateScore(proj.dir, query),
      calculateScore(proj.desc, query) * 0.6,
      ...proj.tags.map((t) => calculateScore(t, query) * 0.8)
    );
    if (score > 0) {
      results.push({
        type: 'ai-playground',
        title: `${proj.name} (${proj.tier_label})`,
        path: '/shelf/ai-playground/ai-playground-directory',
        description: `${proj.dir}/ — ${proj.desc}`,
        icon: Sparkles,
        score,
        category: `AI Playground • ${proj.category}`
      });
    }
  });

  return results.sort((a, b) => b.score - a.score).slice(0, 50);
};
