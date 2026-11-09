import{j as e,v as d,w as y,a as S,m as C,_ as k,$ as L}from"./ui-l-wn3dQa.js";import{r as v}from"./vendor-C-RugAsD.js";import{h as T}from"./syntax-highlighter-BBv136ip.js";import{v as J}from"./vsc-dark-plus-CcVsXCy1.js";const I={sections:{syntax:{title:"Java Syntax",description:"Fundamental syntax and language constructs of Java",color:"orange",topics:[{id:"basic-syntax",title:"Basic Syntax & Types",content:`
# Java Syntax Basics

Java is a strongly-typed, object-oriented language. Every Java program must have at least one class and a main method.

## Entry Point
\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

## Primitive Types
Java has 8 primitive data types.
\`\`\`java
int age = 30;
double salary = 4500.50;
boolean isActive = true;
char grade = 'A';
byte b = 100;
short s = 10000;
long l = 1000000000L;
float f = 3.14f;
\`\`\`

## Type Inference (Java 10+)
Use \`var\` for local variable type inference.
\`\`\`java
var name = "John"; // Inferred as String
var list = new ArrayList<String>(); // Inferred as ArrayList<String>
\`\`\`
          `},{id:"control-flow",title:"Control Flow",content:`
# Control Flow

Standard if-else and switch statements.

## Enhanced Switch (Java 14+)
\`\`\`java
String day = "MONDAY";
int numLetters = switch (day) {
    case "MONDAY", "FRIDAY", "SUNDAY" -> 6;
    case "TUESDAY" -> 7;
    default -> throw new IllegalStateException("Invalid day: " + day);
};
\`\`\`
          `}]},oop:{title:"Object Oriented Programming",description:"Classes, Objects, Inheritance, and Polymorphism in Java",color:"red",topics:[{id:"classes-objects",title:"Classes and Objects",content:`
# Classes & Objects

## Class Definition
\`\`\`java
public class Car {
    private String model;
    private int year;

    // Constructor
    public Car(String model, int year) {
        this.model = model;
        this.year = year;
    }

    // Method
    public void start() {
        System.out.println(model + " starting...");
    }
}
\`\`\`
          `},{id:"interfaces",title:"Interfaces",content:`
# Interfaces

Interfaces define a contract. Since Java 8, they can have default and static methods.

\`\`\`java
interface Vehicle {
    void move();
    
    // Default method (Java 8)
    default void honk() {
        System.out.println("Honk!");
    }
}

class Bike implements Vehicle {
    @Override
    public void move() {
        System.out.println("Bike moving");
    }
}
\`\`\`
          `}]},collections:{title:"Collections Framework",description:"Lists, Sets, Maps and Queues",color:"blue",topics:[{id:"lists",title:"Lists",content:`
# List Interface

Ordered collection (sequence). Allows duplicates.

## ArrayList vs LinkedList
- **ArrayList**: Resizable array. Fast random access O(1). Slow insertion in middle O(n).
- **LinkedList**: Doubly linked list. Fast insertion/deletion O(1). Slow random access O(n).

\`\`\`java
List<String> list = new ArrayList<>();
list.add("Java");
list.add("Python");
list.get(0); // "Java"
\`\`\`
          `},{id:"maps",title:"Maps",content:`
# Map Interface

Key-Value pairs. Keys must be unique.

## HashMap
Uses hashing. O(1) average lookup. Unordered.

\`\`\`java
Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 90);
scores.put("Bob", 85);

for (Map.Entry<String, Integer> entry : scores.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
\`\`\`
          `}]},multithreading:{title:"Multithreading",description:"Concurrent programming in Java",color:"purple",topics:[{id:"basics",title:"Thread Basics",content:`
# Creating Threads

## Extending Thread
\`\`\`java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running");
    }
}
new MyThread().start();
\`\`\`

## Implementing Runnable
\`\`\`java
Runnable task = () -> System.out.println("Task running");
new Thread(task).start();
\`\`\`
                `}]}}},A=m=>I.sections[m]||null,E=({onBack:m,section:x="syntax"})=>{const[b,g]=v.useState(""),[h,p]=v.useState(null),n=A(x);if(!n)return e.jsxs("div",{className:"p-8 text-white",children:['Section data not found for "',x,'"']});const f=t=>{navigator.clipboard.writeText(t),g(t),setTimeout(()=>g(""),2e3)},j=t=>{const l=/```(cpp|java|python)\n([\s\S]*?)```/g,c=[];let o=0,s;for(;(s=l.exec(t))!==null;)s.index>o&&c.push({type:"text",content:t.slice(o,s.index)}),c.push({type:"code",language:s[1],content:s[2]}),o=s.index+s[0].length;return o<t.length&&c.push({type:"text",content:t.slice(o)}),c.map((r,u)=>r.type==="code"?e.jsxs("div",{className:"my-8 bg-gray-900 rounded-lg border border-gray-600 overflow-hidden",children:[e.jsxs("div",{className:"flex justify-between items-center bg-gray-800 px-4 py-3 border-b border-gray-600",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-3 h-3 bg-red-500 rounded-full"}),e.jsx("div",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),e.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-400 ml-3 uppercase font-medium",children:r.language})]}),e.jsx("button",{onClick:()=>f(r.content),className:"text-gray-400 hover:text-gray-200 transition-colors",title:"Copy code",children:b===r.content?e.jsx(k,{className:"w-5 h-5 text-green-400"}):e.jsx(L,{className:"w-5 h-5"})})]}),e.jsx(T,{language:r.language,style:J,customStyle:{background:"rgb(3, 7, 18)",padding:"1.5rem",fontSize:"0.875rem",margin:0,borderRadius:0},wrapLines:!0,wrapLongLines:!0,children:r.content})]},u):r.content.split(`
`).filter(a=>a.trim()).map((a,w)=>{const i=`${u}-${w}`;if(a.startsWith("### "))return e.jsx("h3",{className:"text-2xl font-bold text-white mt-8 mb-4",children:a.replace("### ","")},i);if(a.startsWith("## "))return e.jsx("h2",{className:"text-3xl font-bold text-white mt-10 mb-6",children:a.replace("## ","")},i);if(a.startsWith("# "))return e.jsx("h1",{className:"text-4xl font-bold text-white mt-12 mb-8",children:a.replace("# ","")},i);if(a.startsWith("- "))return e.jsx("li",{className:"text-gray-300 mb-2 ml-4",children:a.replace("- ","• ")},i);if(a.match(/^\d+\. /))return e.jsx("li",{className:"text-gray-300 mb-2 ml-4",children:a},i);{const N=a.replace(/\*\*(.*?)\*\*/g,'<strong class="text-white font-bold">$1</strong>').replace(/`([^`]+)`/g,'<code class="bg-gray-700 text-green-400 px-2 py-1 rounded text-sm">$1</code>');return e.jsx("p",{className:"text-gray-300 mb-4 leading-relaxed",dangerouslySetInnerHTML:{__html:N}},i)}})).flat()};if(h){const t=n.topics.find(l=>l.id===h);return e.jsx("div",{className:"h-full overflow-y-auto bg-gray-900 p-8",children:e.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-4xl mx-auto",children:[e.jsx("div",{className:"flex items-center mb-8",children:e.jsxs("button",{onClick:()=>p(null),className:"flex items-center text-orange-400 hover:text-orange-300 mb-4 transition-colors",children:[e.jsx(y,{className:"w-5 h-5 mr-2"}),"Back to ",n.title," Topics"]})}),e.jsxs("div",{className:"bg-gray-800 rounded-xl p-8 border border-gray-700",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-6",children:t.title}),e.jsx("div",{className:"space-y-6",children:j(t.content)})]})]})})}return e.jsx("div",{className:"h-full overflow-y-auto bg-gray-900 p-8",children:e.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-6xl mx-auto",children:[e.jsx("div",{className:"flex items-center mb-8",children:e.jsxs("button",{onClick:m,className:"flex items-center text-orange-400 hover:text-orange-300 mb-4 transition-colors",children:[e.jsx(y,{className:"w-5 h-5 mr-2"}),"Back to Java Overview"]})}),e.jsxs("div",{className:"text-center mb-12",children:[e.jsx(d.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},className:"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl mb-6",children:e.jsx(S,{className:"w-10 h-10 text-white"})}),e.jsx("h1",{className:"text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent mb-4",children:n.title}),e.jsx("p",{className:"text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed",children:n.description})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:n.topics.map((t,l)=>e.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:l*.1},className:"group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-orange-500/20",onClick:()=>p(t.id),children:[e.jsxs("div",{className:"flex items-start justify-between mb-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors",children:t.title}),e.jsxs("p",{className:"text-gray-400 text-sm leading-relaxed",children:[t.content.split(`
`)[0].replace(/^#+ /,"").substring(0,100),"..."]})]}),e.jsx(C,{className:"w-6 h-6 text-gray-500 group-hover:text-orange-400 transition-colors flex-shrink-0 ml-4"})]}),e.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-700",children:[e.jsx("span",{className:"text-xs text-gray-500 uppercase tracking-wider font-medium",children:"Click to explore"}),e.jsx("div",{className:"w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"})]})]},t.id))})]})})};export{E as default};
