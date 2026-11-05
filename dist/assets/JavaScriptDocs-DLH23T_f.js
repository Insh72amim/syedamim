import{j as e,t as d,u as y,a as C,k,Y as S,_ as A}from"./ui-C9KrBvbE.js";import{r as f}from"./vendor-C-RugAsD.js";import{h as L}from"./syntax-highlighter-BBv136ip.js";import{v as D}from"./vsc-dark-plus-CcVsXCy1.js";const T={sections:{syntax:{title:"JavaScript Syntax",description:"Core language features and modern ES6+ syntax",color:"yellow",topics:[{id:"basic-syntax",title:"Basics & Variables",content:'\n# JavaScript Syntax Basics\n\nJavaScript is a dynamic, interpreted language that runs in browsers and Node.js.\n\n## Hello World\n```javascript\nconsole.log("Hello, World!");\n```\n\n## Variables\nUse `let`, `const`, and avoid `var`.\n```javascript\nlet name = "Alice";       // Mutable\nconst age = 30;           // Immutable\nconst isActive = true;    // Boolean\nconst nothing = null;     // Null\nlet undef;                // Undefined\n```\n\n## Template Literals\n```javascript\nconst greeting = `Hello, ${name}! You are ${age} years old.`;\n```\n          '},{id:"control-flow",title:"Control Flow",content:`
# Control Flow

## If-Else
\`\`\`javascript
const x = 10;
if (x > 10) {
    console.log("Greater than 10");
} else if (x === 10) {
    console.log("Equal to 10");
} else {
    console.log("Less than 10");
}
\`\`\`

## Loops
\`\`\`javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For...of (arrays)
const fruits = ["apple", "banana"];
for (const fruit of fruits) {
    console.log(fruit);
}

// For...in (objects)
const obj = { a: 1, b: 2 };
for (const key in obj) {
    console.log(key, obj[key]);
}
\`\`\`
          `}]},functions:{title:"Functions",description:"Arrow functions, callbacks, and closures",color:"blue",topics:[{id:"arrow-functions",title:"Arrow Functions",content:`
# Arrow Functions

Concise syntax for functions.

\`\`\`javascript
// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

// With body
const greet = (name) => {
    const message = \`Hello, \${name}!\`;
    return message;
};
\`\`\`
          `},{id:"callbacks-closures",title:"Callbacks & Closures",content:`
# Callbacks & Closures

## Callbacks
\`\`\`javascript
function fetchData(callback) {
    setTimeout(() => {
        callback("Data loaded");
    }, 1000);
}

fetchData((result) => {
    console.log(result);
});
\`\`\`

## Closures
\`\`\`javascript
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
\`\`\`
          `}]},async:{title:"Async JavaScript",description:"Promises, async/await, and the event loop",color:"green",topics:[{id:"promises",title:"Promises",content:`
# Promises

Handle asynchronous operations.

\`\`\`javascript
const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Alice" });
        }, 1000);
    });
};

fetchUser()
    .then(user => console.log(user))
    .catch(err => console.error(err));
\`\`\`
          `},{id:"async-await",title:"Async/Await",content:`
# Async/Await

Syntactic sugar for Promises.

\`\`\`javascript
async function getUser() {
    try {
        const response = await fetch("/api/user");
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Failed to fetch user:", error);
    }
}

// Usage
const user = await getUser();
\`\`\`
          `}]},dom:{title:"DOM Manipulation",description:"Selecting, modifying, and handling events",color:"purple",topics:[{id:"dom-basics",title:"DOM Basics",content:`
# DOM Manipulation

## Selecting Elements
\`\`\`javascript
const el = document.getElementById("myId");
const els = document.querySelectorAll(".myClass");
const first = document.querySelector("div.container");
\`\`\`

## Modifying Elements
\`\`\`javascript
el.textContent = "New text";
el.innerHTML = "<strong>Bold</strong>";
el.style.color = "red";
el.classList.add("active");
\`\`\`

## Event Handling
\`\`\`javascript
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
    console.log("Button clicked!", event);
});
\`\`\`
                `}]}}},B=m=>T.sections[m]||null,J=({onBack:m,section:u="syntax"})=>{const[b,x]=f.useState(""),[p,g]=f.useState(null),r=B(u);if(!r)return e.jsxs("div",{className:"p-8 text-white",children:['Section data not found for "',u,'"']});const v=t=>{navigator.clipboard.writeText(t),x(t),setTimeout(()=>x(""),2e3)},j=t=>{const l=/```(cpp|java|python|go|javascript)\n([\s\S]*?)```/g,c=[];let i=0,o;for(;(o=l.exec(t))!==null;)o.index>i&&c.push({type:"text",content:t.slice(i,o.index)}),c.push({type:"code",language:o[1],content:o[2]}),i=o.index+o[0].length;return i<t.length&&c.push({type:"text",content:t.slice(i)}),c.map((a,h)=>a.type==="code"?e.jsxs("div",{className:"my-8 bg-gray-900 rounded-lg border border-gray-600 overflow-hidden",children:[e.jsxs("div",{className:"flex justify-between items-center bg-gray-800 px-4 py-3 border-b border-gray-600",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-3 h-3 bg-red-500 rounded-full"}),e.jsx("div",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),e.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-400 ml-3 uppercase font-medium",children:a.language})]}),e.jsx("button",{onClick:()=>v(a.content),className:"text-gray-400 hover:text-gray-200 transition-colors",title:"Copy code",children:b===a.content?e.jsx(S,{className:"w-5 h-5 text-green-400"}):e.jsx(A,{className:"w-5 h-5"})})]}),e.jsx(L,{language:a.language,style:D,customStyle:{background:"rgb(3, 7, 18)",padding:"1.5rem",fontSize:"0.875rem",margin:0,borderRadius:0},wrapLines:!0,wrapLongLines:!0,children:a.content})]},h):a.content.split(`
`).filter(s=>s.trim()).map((s,w)=>{const n=`${h}-${w}`;if(s.startsWith("### "))return e.jsx("h3",{className:"text-2xl font-bold text-white mt-8 mb-4",children:s.replace("### ","")},n);if(s.startsWith("## "))return e.jsx("h2",{className:"text-3xl font-bold text-white mt-10 mb-6",children:s.replace("## ","")},n);if(s.startsWith("# "))return e.jsx("h1",{className:"text-4xl font-bold text-white mt-12 mb-8",children:s.replace("# ","")},n);if(s.startsWith("- "))return e.jsx("li",{className:"text-gray-300 mb-2 ml-4",children:s.replace("- ","• ")},n);if(s.match(/^\d+\. /))return e.jsx("li",{className:"text-gray-300 mb-2 ml-4",children:s},n);{const N=s.replace(/\*\*(.*?)\*\*/g,'<strong class="text-white font-bold">$1</strong>').replace(/`([^`]+)`/g,'<code class="bg-gray-700 text-yellow-400 px-2 py-1 rounded text-sm">$1</code>');return e.jsx("p",{className:"text-gray-300 mb-4 leading-relaxed",dangerouslySetInnerHTML:{__html:N}},n)}})).flat()};if(p){const t=r.topics.find(l=>l.id===p);return e.jsx("div",{className:"h-full overflow-y-auto bg-gray-900 p-8",children:e.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-4xl mx-auto",children:[e.jsx("div",{className:"flex items-center mb-8",children:e.jsxs("button",{onClick:()=>g(null),className:"flex items-center text-yellow-400 hover:text-yellow-300 mb-4 transition-colors",children:[e.jsx(y,{className:"w-5 h-5 mr-2"}),"Back to ",r.title," Topics"]})}),e.jsxs("div",{className:"bg-gray-800 rounded-xl p-8 border border-gray-700",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-6",children:t.title}),e.jsx("div",{className:"space-y-6",children:j(t.content)})]})]})})}return e.jsx("div",{className:"h-full overflow-y-auto bg-gray-900 p-8",children:e.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-6xl mx-auto",children:[e.jsx("div",{className:"flex items-center mb-8",children:e.jsxs("button",{onClick:m,className:"flex items-center text-yellow-400 hover:text-yellow-300 mb-4 transition-colors",children:[e.jsx(y,{className:"w-5 h-5 mr-2"}),"Back to JavaScript Overview"]})}),e.jsxs("div",{className:"text-center mb-12",children:[e.jsx(d.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},className:"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl mb-6",children:e.jsx(C,{className:"w-10 h-10 text-white"})}),e.jsx("h1",{className:"text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-4",children:r.title}),e.jsx("p",{className:"text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed",children:r.description})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:r.topics.map((t,l)=>e.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:l*.1},className:"group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-yellow-500/20",onClick:()=>g(t.id),children:[e.jsxs("div",{className:"flex items-start justify-between mb-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors",children:t.title}),e.jsxs("p",{className:"text-gray-400 text-sm leading-relaxed",children:[t.content.split(`
`)[0].replace(/^#+ /,"").substring(0,100),"..."]})]}),e.jsx(k,{className:"w-6 h-6 text-gray-500 group-hover:text-yellow-400 transition-colors flex-shrink-0 ml-4"})]}),e.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-700",children:[e.jsx("span",{className:"text-xs text-gray-500 uppercase tracking-wider font-medium",children:"Click to explore"}),e.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"})]})]},t.id))})]})})};export{J as default};
