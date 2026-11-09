import{j as e,v as d,w as f,a as C,m as P,_ as G,$ as k}from"./ui-l-wn3dQa.js";import{r as y}from"./vendor-C-RugAsD.js";import{h as S}from"./syntax-highlighter-BBv136ip.js";import{v as I}from"./vsc-dark-plus-CcVsXCy1.js";const E={sections:{syntax:{title:"Go Syntax",description:"Simple, reliable, and efficient software.",color:"cyan",topics:[{id:"basic-syntax",title:"Basics & Variables",content:`
# Go Syntax Basics

Go is a statically typed, compiled language. Programs are organized into packages.

## Hello World
\`\`\`go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
\`\`\`

## Variables
Go has type inference with \`:=\`.
\`\`\`go
var x int = 10
y := 20        // Inferred as int
name := "Gopher" // string
const Pi = 3.14
\`\`\`
          `},{id:"control-flow",title:"Control Flow",content:`
# Control Flow

## If-Else
Parentheses are not needed around conditions.
\`\`\`go
if x > 10 {
    fmt.Println("Big")
} else {
    fmt.Println("Small")
}
\`\`\`

## For Loop
Go only has \`for\` loops.
\`\`\`go
// Classic for
for i := 0; i < 5; i++ {
    fmt.Println(i)
}

// While-style
sum := 1
for sum < 100 {
    sum += sum
}
\`\`\`
          `}]},structs:{title:"Structs & Interfaces",description:"Type system without classes.",color:"blue",topics:[{id:"structs",title:"Structs",content:`
# Structs

Typed collections of fields.

\`\`\`go
type Person struct {
    Name string
    Age  int
}

func main() {
    p := Person{Name: "Bob", Age: 30}
    fmt.Println(p.Name)
}
\`\`\`
          `},{id:"interfaces",title:"Interfaces",content:`
# Interfaces

Interfaces are implemented implicitly.

\`\`\`go
type Greeter interface {
    Greet()
}

type Person struct{ Name string }

// Implicit implementation
func (p Person) Greet() {
    fmt.Println("Hi, I'm " + p.Name)
}

func sayHello(g Greeter) {
    g.Greet()
}
\`\`\`
          `}]},concurrency:{title:"Concurrency",description:"Goroutines and Channels",color:"green",topics:[{id:"goroutines",title:"Goroutines",content:`
# Goroutines

Lightweight threads managed by the Go runtime.

\`\`\`go
func say(s string) {
    for i := 0; i < 3; i++ {
        fmt.Println(s)
    }
}

func main() {
    go say("world") // New goroutine
    say("hello")    // Current goroutine
}
\`\`\`
          `},{id:"channels",title:"Channels",content:`
# Channels

Pipes that connect concurrent goroutines.

\`\`\`go
func sum(s []int, c chan int) {
    sum := 0
    for _, v := range s {
        sum += v
    }
    c <- sum // Send sum to c
}

func main() {
    s := []int{7, 2, 8, -9, 4, 0}
    c := make(chan int)
    go sum(s[:len(s)/2], c)
    go sum(s[len(s)/2:], c)
    x, y := <-c, <-c // Receive from c
    fmt.Println(x, y, x+y)
}
\`\`\`
          `}]},errorhandling:{title:"Error Handling",description:"Defer, Panic, Recover",color:"red",topics:[{id:"errors",title:"Errors",content:`
# Error Handling

Functions often return an error value.

\`\`\`go
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(result)
    }
}
\`\`\`
                `}]}}},L=m=>E.sections[m]||null,D=({onBack:m,section:x="syntax"})=>{const[b,u]=y.useState(""),[g,h]=y.useState(null),a=L(x);if(!a)return e.jsxs("div",{className:"p-8 text-white",children:['Section data not found for "',x,'"']});const j=t=>{navigator.clipboard.writeText(t),u(t),setTimeout(()=>u(""),2e3)},v=t=>{const o=/```(cpp|java|python|go)\n([\s\S]*?)```/g,c=[];let l=0,r;for(;(r=o.exec(t))!==null;)r.index>l&&c.push({type:"text",content:t.slice(l,r.index)}),c.push({type:"code",language:r[1],content:r[2]}),l=r.index+r[0].length;return l<t.length&&c.push({type:"text",content:t.slice(l)}),c.map((n,p)=>n.type==="code"?e.jsxs("div",{className:"my-8 bg-gray-900 rounded-lg border border-gray-600 overflow-hidden",children:[e.jsxs("div",{className:"flex justify-between items-center bg-gray-800 px-4 py-3 border-b border-gray-600",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-3 h-3 bg-red-500 rounded-full"}),e.jsx("div",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),e.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-400 ml-3 uppercase font-medium",children:n.language})]}),e.jsx("button",{onClick:()=>j(n.content),className:"text-gray-400 hover:text-gray-200 transition-colors",title:"Copy code",children:b===n.content?e.jsx(G,{className:"w-5 h-5 text-green-400"}):e.jsx(k,{className:"w-5 h-5"})})]}),e.jsx(S,{language:n.language,style:I,customStyle:{background:"rgb(3, 7, 18)",padding:"1.5rem",fontSize:"0.875rem",margin:0,borderRadius:0},wrapLines:!0,wrapLongLines:!0,children:n.content})]},p):n.content.split(`
`).filter(s=>s.trim()).map((s,N)=>{const i=`${p}-${N}`;if(s.startsWith("### "))return e.jsx("h3",{className:"text-2xl font-bold text-white mt-8 mb-4",children:s.replace("### ","")},i);if(s.startsWith("## "))return e.jsx("h2",{className:"text-3xl font-bold text-white mt-10 mb-6",children:s.replace("## ","")},i);if(s.startsWith("# "))return e.jsx("h1",{className:"text-4xl font-bold text-white mt-12 mb-8",children:s.replace("# ","")},i);if(s.startsWith("- "))return e.jsx("li",{className:"text-gray-300 mb-2 ml-4",children:s.replace("- ","• ")},i);if(s.match(/^\d+\. /))return e.jsx("li",{className:"text-gray-300 mb-2 ml-4",children:s},i);{const w=s.replace(/\*\*(.*?)\*\*/g,'<strong class="text-white font-bold">$1</strong>').replace(/`([^`]+)`/g,'<code class="bg-gray-700 text-cyan-400 px-2 py-1 rounded text-sm">$1</code>');return e.jsx("p",{className:"text-gray-300 mb-4 leading-relaxed",dangerouslySetInnerHTML:{__html:w}},i)}})).flat()};if(g){const t=a.topics.find(o=>o.id===g);return e.jsx("div",{className:"h-full overflow-y-auto bg-gray-900 p-8",children:e.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-4xl mx-auto",children:[e.jsx("div",{className:"flex items-center mb-8",children:e.jsxs("button",{onClick:()=>h(null),className:"flex items-center text-cyan-400 hover:text-cyan-300 mb-4 transition-colors",children:[e.jsx(f,{className:"w-5 h-5 mr-2"}),"Back to ",a.title," Topics"]})}),e.jsxs("div",{className:"bg-gray-800 rounded-xl p-8 border border-gray-700",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-6",children:t.title}),e.jsx("div",{className:"space-y-6",children:v(t.content)})]})]})})}return e.jsx("div",{className:"h-full overflow-y-auto bg-gray-900 p-8",children:e.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-6xl mx-auto",children:[e.jsx("div",{className:"flex items-center mb-8",children:e.jsxs("button",{onClick:m,className:"flex items-center text-cyan-400 hover:text-cyan-300 mb-4 transition-colors",children:[e.jsx(f,{className:"w-5 h-5 mr-2"}),"Back to Go Overview"]})}),e.jsxs("div",{className:"text-center mb-12",children:[e.jsx(d.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},className:"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6",children:e.jsx(C,{className:"w-10 h-10 text-white"})}),e.jsx("h1",{className:"text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4",children:a.title}),e.jsx("p",{className:"text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed",children:a.description})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:a.topics.map((t,o)=>e.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:o*.1},className:"group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-cyan-500/20",onClick:()=>h(t.id),children:[e.jsxs("div",{className:"flex items-start justify-between mb-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors",children:t.title}),e.jsxs("p",{className:"text-gray-400 text-sm leading-relaxed",children:[t.content.split(`
`)[0].replace(/^#+ /,"").substring(0,100),"..."]})]}),e.jsx(P,{className:"w-6 h-6 text-gray-500 group-hover:text-cyan-400 transition-colors flex-shrink-0 ml-4"})]}),e.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-700",children:[e.jsx("span",{className:"text-xs text-gray-500 uppercase tracking-wider font-medium",children:"Click to explore"}),e.jsx("div",{className:"w-2 h-2 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"})]})]},t.id))})]})})};export{D as default};
