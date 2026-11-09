import{j as e}from"./ui-l-wn3dQa.js";import"./vendor-C-RugAsD.js";import{I as r}from"./InteractiveDiagram-DWUERs3K.js";import{C as l}from"./CodeBlock-CZ62hYHy.js";import{M as s}from"./reactflow-Bog5v55p.js";/* empty css              */import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const h=()=>{const t=[{id:"design",position:{x:60,y:150},data:{label:"Design Tokens"},style:{width:150,background:"#1f2937",color:"white",border:"1px solid #374151"}},{id:"config",position:{x:240,y:70},data:{label:"tailwind.config.js"},style:{width:180,background:"#7c3aed",color:"white",border:"1px solid #a855f7"}},{id:"content",position:{x:240,y:230},data:{label:"content paths"},style:{width:160,background:"#065f46",color:"white",border:"1px solid #34d399"}},{id:"jit",position:{x:450,y:150},data:{label:"JIT Compiler"},style:{width:160,background:"#312e81",color:"white",border:"1px solid #6366f1"}},{id:"css",position:{x:640,y:150},data:{label:"Generated CSS"},style:{width:170,background:"#78350f",color:"white",border:"1px solid #f59e0b"}},{id:"ui",position:{x:820,y:150},data:{label:"Component"},style:{width:140,background:"#0f172a",color:"white",border:"1px solid #94a3b8"}}],i=[{id:"t1",source:"design",target:"config",label:"theme.extend",markerEnd:{type:s.ArrowClosed},style:{stroke:"#a855f7"}},{id:"t2",source:"design",target:"content",label:"scan glob",markerEnd:{type:s.ArrowClosed},style:{stroke:"#34d399"}},{id:"t3",source:"config",target:"jit",label:"presets",markerEnd:{type:s.ArrowClosed},style:{stroke:"#6366f1"}},{id:"t4",source:"content",target:"jit",label:"utility usage",markerEnd:{type:s.ArrowClosed},style:{stroke:"#10b981"}},{id:"t5",source:"jit",target:"css",label:"purged CSS",markerEnd:{type:s.ArrowClosed},style:{stroke:"#f59e0b"}},{id:"t6",source:"css",target:"ui",label:"apply classes",markerEnd:{type:s.ArrowClosed},style:{stroke:"#94a3b8"}}];return e.jsxs("div",{className:"max-w-4xl text-gray-300 space-y-12",children:[e.jsxs("header",{className:"border-b border-gray-700 pb-6",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-3",children:"Tailwind CSS Workflow"}),e.jsx("p",{className:"text-lg text-gray-400",children:"Tailwind provides low-level utility classes compiled on-demand. Its JIT engine scans your templates, emits only the classes you use, and keeps design tokens centralized inside configuration."})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-3xl font-semibold text-pink-300 mb-4",children:"Build Pipeline"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-xl p-6",children:[e.jsx("p",{className:"mb-4",children:"Customize `tailwind.config.js` with theme tokens, plugins, and custom utilities. When the dev server runs, Tailwind watches your `content` globs and adds utilities to the compiled CSS instantly."}),e.jsxs("ul",{className:"text-sm space-y-2",children:[e.jsx("li",{children:"Keep tokens (colors, spacing, fonts) under `theme.extend`."}),e.jsx("li",{children:"Use `@layer components` for semantic abstractions."}),e.jsx("li",{children:"Enable dark mode via `media` or `class` strategy."})]})]}),e.jsx(r,{initialNodes:t,initialEdges:i,title:"Tailwind JIT Flow",height:"340px"})]})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-3xl font-semibold text-pink-300 mb-4",children:"Config Example"}),e.jsx(l,{language:"javascript",title:"tailwind.config.js",code:`const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          50: '#fff7f9',
          500: '#ec4899',
          600: '#db2777',
        },
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};`})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-3xl font-semibold text-pink-300 mb-4",children:"Utility Patterns"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"bg-gray-800/60 border border-gray-700 rounded-lg p-4",children:[e.jsx("h3",{className:"text-white font-semibold mb-2 text-sm",children:"Composition"}),e.jsxs("ul",{className:"text-xs space-y-1",children:[e.jsx("li",{children:"Group classes using `@apply` for shared layouts."}),e.jsx("li",{children:"Extract components in React and use props for variants."}),e.jsx("li",{children:"Organize responsive tweaks with `sm:`, `lg:`, `dark:` prefixes."})]})]}),e.jsxs("div",{className:"bg-gray-800/60 border border-gray-700 rounded-lg p-4",children:[e.jsx("h3",{className:"text-white font-semibold mb-2 text-sm",children:"Performance"}),e.jsxs("ul",{className:"text-xs space-y-1",children:[e.jsx("li",{children:"Rely on `content` globs to purge unused utilities in prod builds."}),e.jsx("li",{children:"Use `@tailwindcss/container-queries` for adaptive layouts."}),e.jsx("li",{children:"Keep CSS file small (<30KB) thanks to per-class generation."})]})]})]})]})]})};export{h as default};
