import{j as e}from"./ui-l-wn3dQa.js";import"./vendor-C-RugAsD.js";import{I as i}from"./InteractiveDiagram-DWUERs3K.js";import{C as l}from"./CodeBlock-CZ62hYHy.js";import{M as t}from"./reactflow-Bog5v55p.js";/* empty css              */import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const b=()=>{const s=[{id:"app",position:{x:40,y:140},data:{label:"App"},style:{width:120,background:"#1f2937",color:"white",border:"1px solid #374151"}},{id:"layout",position:{x:200,y:40},data:{label:"Layout"},style:{width:130,background:"#7c3aed",color:"white",border:"1px solid #a855f7"}},{id:"nav",position:{x:380,y:40},data:{label:"Nav"},style:{width:110,background:"#312e81",color:"white",border:"1px solid #6366f1"}},{id:"content",position:{x:200,y:220},data:{label:"Content"},style:{width:130,background:"#1e3a8a",color:"white",border:"1px solid #3b82f6"}},{id:"list",position:{x:380,y:220},data:{label:"List"},style:{width:110,background:"#065f46",color:"white",border:"1px solid #34d399"}},{id:"item",position:{x:540,y:220},data:{label:"Card"},style:{width:110,background:"#78350f",color:"white",border:"1px solid #f59e0b"}},{id:"hook",position:{x:540,y:80},data:{label:"usePosts()"},style:{width:140,background:"#0f172a",color:"white",border:"1px solid #94a3b8",fontSize:12}}],o=[{id:"c1",source:"app",target:"layout",label:"props",markerEnd:{type:t.ArrowClosed},style:{stroke:"#a855f7"}},{id:"c2",source:"layout",target:"nav",label:"children",markerEnd:{type:t.ArrowClosed},style:{stroke:"#6366f1"}},{id:"c3",source:"layout",target:"content",label:"outlet",markerEnd:{type:t.ArrowClosed},style:{stroke:"#3b82f6"}},{id:"c4",source:"content",target:"list",label:"props",markerEnd:{type:t.ArrowClosed},style:{stroke:"#34d399"}},{id:"c5",source:"list",target:"item",label:"map",markerEnd:{type:t.ArrowClosed},style:{stroke:"#f59e0b"}},{id:"c6",source:"hook",target:"list",label:"data",markerEnd:{type:t.ArrowClosed},style:{stroke:"#94a3b8",strokeDasharray:"6 4"}}];return e.jsxs("div",{className:"max-w-4xl text-gray-300 space-y-12",children:[e.jsxs("header",{className:"border-b border-gray-700 pb-6",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-3",children:"React Fundamentals"}),e.jsx("p",{className:"text-lg text-gray-400",children:"React builds UI using declarative components, one-way data flow, and a virtual DOM diffing engine. Hooks expose state, side effects, and context composition without classes."})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-3xl font-semibold text-pink-300 mb-4",children:"Component Tree"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-xl p-6",children:[e.jsx("p",{className:"mb-4",children:"Components compose like functions. Props flow top → down, while events bubble up. Hooks such as `useState`, `useReducer`, and `useContext` share data without prop drilling."}),e.jsxs("ul",{className:"text-sm space-y-2",children:[e.jsx("li",{children:"Keep components pure; render derives solely from props + state."}),e.jsx("li",{children:"Colocate state with components that own it; lift only when needed."}),e.jsx("li",{children:"Custom hooks encapsulate fetching, caching, and subscriptions."})]})]}),e.jsx(i,{initialNodes:s,initialEdges:o,title:"Component Composition",height:"320px"})]})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-3xl font-semibold text-pink-300 mb-4",children:"Hooks Pattern"}),e.jsx(l,{language:"jsx",title:"usePosts.js",code:`import { useEffect, useState } from 'react';

export function usePosts(teamId) {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!teamId) return;
    let ignore = false;
    setStatus('loading');

    fetch(
      \`/api/teams/\${teamId}/posts?limit=10\`
    )
      .then((res) => res.json())
      .then((json) => {
        if (!ignore) {
          setData(json.items);
          setStatus('success');
        }
      })
      .catch(() => !ignore && setStatus('error'));

    return () => {
      ignore = true;
    };
  }, [teamId]);

  return { data, status };
}`})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-3xl font-semibold text-pink-300 mb-4",children:"Rendering Checklist"}),e.jsx("div",{className:"grid gap-4 md:grid-cols-3",children:["Memoize expensive trees with React.memo or useMemo().","Split code using dynamic import() + Suspense.","Use React DevTools Profiler to spot wasted renders.","Prefer controlled inputs for predictable state.","Handle error boundaries around async components.","Use keys when rendering lists to help reconciliation."].map((r,a)=>e.jsx("div",{className:"bg-gray-800/60 border border-gray-700 rounded-lg p-4 text-sm",children:r},a))})]})]})};export{b as default};
