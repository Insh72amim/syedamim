import{j as e,v as d,w as g,a as C,m as _,_ as k,$ as S}from"./ui-l-wn3dQa.js";import{r as f}from"./vendor-C-RugAsD.js";import{h as L}from"./syntax-highlighter-BBv136ip.js";import{v as D}from"./vsc-dark-plus-CcVsXCy1.js";const T={sections:{syntax:{title:"Python Syntax",description:"Fundamental syntax and language constructs of Python",color:"yellow",topics:[{id:"basic-syntax",title:"Basic Syntax & Types",content:`
# Python Syntax Basics

Python is a dynamically-typed, interpreted language known for its readability. It uses indentation to define code blocks.

## Hello World
\`\`\`python
def main():
    print("Hello, World!")

if __name__ == "__main__":
    main()
\`\`\`

## Variables & Types
Variables are dynamically typed.
\`\`\`python
name = "Alice"      # str
age = 30            # int
height = 5.8        # float
is_active = True    # bool
nothing = None      # NoneType

# Type Hints (Python 3.5+)
def greet(name: str) -> str:
    return f"Hello, {name}"
\`\`\`
          `},{id:"control-flow",title:"Control Flow",content:`
# Control Flow

## If-Elif-Else
\`\`\`python
x = 10
if x > 10:
    print("Greater than 10")
elif x == 10:
    print("Equal to 10")
else:
    print("Less than 10")
\`\`\`

## Loops
\`\`\`python
# For loop
for i in range(5):
    print(i) # 0 to 4

# While loop
count = 0
while count < 3:
    print(count)
    count += 1
\`\`\`
          `}]},datastructures:{title:"Data Structures",description:"Built-in data structures: Lists, Dictionaries, Sets, Tuples",color:"blue",topics:[{id:"lists-tuples",title:"Lists & Tuples",content:`
# Lists & Tuples

## Lists (Mutable)
\`\`\`python
fruits = ["apple", "banana", "cherry"]
fruits.append("date")
print(fruits[0])  # apple
fruits[1] = "blueberry" 
\`\`\`

## Tuples (Immutable)
\`\`\`python
point = (10, 20)
# point[0] = 5  # Error!
x, y = point    # Unpacking
\`\`\`
          `},{id:"dicts-sets",title:"Dictionaries & Sets",content:`
# Dictionaries & Sets

## Dictionaries (Key-Value)
\`\`\`python
user = {
    "name": "Alice",
    "age": 30
}
user["email"] = "alice@example.com"
print(user.get("name"))
\`\`\`

## Sets (Unique Elements)
\`\`\`python
unique_nums = {1, 2, 2, 3} 
print(unique_nums) # {1, 2, 3}
\`\`\`
          `}]},oop:{title:"Object Limited Programming",description:"Classes, Objects, Inheritance",color:"green",topics:[{id:"classes",title:"Classes & Objects",content:`
# Classes

\`\`\`python
class Dog:
    # Constructor
    def __init__(self, name):
        self.name = name
    
    # Method
    def bark(self):
        return f"{self.name} says Woof!"

my_dog = Dog("Rex")
print(my_dog.bark())
\`\`\`
          `},{id:"inheritance",title:"Inheritance",content:`
# Inheritance

\`\`\`python
class Animal:
    def speak(self):
        pass

class Cat(Animal):
    def speak(self):
        return "Meow"

cats = [Cat(), Cat()]
for cat in cats:
    print(cat.speak())
\`\`\`
            `}]},advanced:{title:"Advanced Features",description:"List Comprehensions, Decorators, Lambdas",color:"purple",topics:[{id:"comprehensions",title:"Comprehensions",content:`
# List Comprehensions

Concise way to create lists.

\`\`\`python
nums = [1, 2, 3, 4, 5]
squares = [x * x for x in nums] 
# [1, 4, 9, 16, 25]

# With condition
evens = [x for x in nums if x % 2 == 0]
\`\`\`
                `},{id:"decorators",title:"Decorators",content:`
# Decorators

Wraps a function to modify its behavior.

\`\`\`python
def my_decorator(func):
    def wrapper():
        print("Before function")
        func()
        print("After function")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
\`\`\`
                `}]}}},P=m=>T.sections[m]||null,E=({onBack:m,section:p="syntax"})=>{const[b,x]=f.useState(""),[h,u]=f.useState(null),r=P(p);if(!r)return e.jsxs("div",{className:"p-8 text-white",children:['Section data not found for "',p,'"']});const w=t=>{navigator.clipboard.writeText(t),x(t),setTimeout(()=>x(""),2e3)},j=t=>{const o=/```(cpp|java|python)\n([\s\S]*?)```/g,c=[];let l=0,a;for(;(a=o.exec(t))!==null;)a.index>l&&c.push({type:"text",content:t.slice(l,a.index)}),c.push({type:"code",language:a[1],content:a[2]}),l=a.index+a[0].length;return l<t.length&&c.push({type:"text",content:t.slice(l)}),c.map((n,y)=>n.type==="code"?e.jsxs("div",{className:"my-8 bg-gray-900 rounded-lg border border-gray-600 overflow-hidden",children:[e.jsxs("div",{className:"flex justify-between items-center bg-gray-800 px-4 py-3 border-b border-gray-600",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-3 h-3 bg-red-500 rounded-full"}),e.jsx("div",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),e.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-400 ml-3 uppercase font-medium",children:n.language})]}),e.jsx("button",{onClick:()=>w(n.content),className:"text-gray-400 hover:text-gray-200 transition-colors",title:"Copy code",children:b===n.content?e.jsx(k,{className:"w-5 h-5 text-green-400"}):e.jsx(S,{className:"w-5 h-5"})})]}),e.jsx(L,{language:n.language,style:D,customStyle:{background:"rgb(3, 7, 18)",padding:"1.5rem",fontSize:"0.875rem",margin:0,borderRadius:0},wrapLines:!0,wrapLongLines:!0,children:n.content})]},y):n.content.split(`
`).filter(s=>s.trim()).map((s,v)=>{const i=`${y}-${v}`;if(s.startsWith("### "))return e.jsx("h3",{className:"text-2xl font-bold text-white mt-8 mb-4",children:s.replace("### ","")},i);if(s.startsWith("## "))return e.jsx("h2",{className:"text-3xl font-bold text-white mt-10 mb-6",children:s.replace("## ","")},i);if(s.startsWith("# "))return e.jsx("h1",{className:"text-4xl font-bold text-white mt-12 mb-8",children:s.replace("# ","")},i);if(s.startsWith("- "))return e.jsx("li",{className:"text-gray-300 mb-2 ml-4",children:s.replace("- ","• ")},i);if(s.match(/^\d+\. /))return e.jsx("li",{className:"text-gray-300 mb-2 ml-4",children:s},i);{const N=s.replace(/\*\*(.*?)\*\*/g,'<strong class="text-white font-bold">$1</strong>').replace(/`([^`]+)`/g,'<code class="bg-gray-700 text-green-400 px-2 py-1 rounded text-sm">$1</code>');return e.jsx("p",{className:"text-gray-300 mb-4 leading-relaxed",dangerouslySetInnerHTML:{__html:N}},i)}})).flat()};if(h){const t=r.topics.find(o=>o.id===h);return e.jsx("div",{className:"h-full overflow-y-auto bg-gray-900 p-8",children:e.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-4xl mx-auto",children:[e.jsx("div",{className:"flex items-center mb-8",children:e.jsxs("button",{onClick:()=>u(null),className:"flex items-center text-yellow-400 hover:text-yellow-300 mb-4 transition-colors",children:[e.jsx(g,{className:"w-5 h-5 mr-2"}),"Back to ",r.title," Topics"]})}),e.jsxs("div",{className:"bg-gray-800 rounded-xl p-8 border border-gray-700",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-6",children:t.title}),e.jsx("div",{className:"space-y-6",children:j(t.content)})]})]})})}return e.jsx("div",{className:"h-full overflow-y-auto bg-gray-900 p-8",children:e.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-6xl mx-auto",children:[e.jsx("div",{className:"flex items-center mb-8",children:e.jsxs("button",{onClick:m,className:"flex items-center text-yellow-400 hover:text-yellow-300 mb-4 transition-colors",children:[e.jsx(g,{className:"w-5 h-5 mr-2"}),"Back to Python Overview"]})}),e.jsxs("div",{className:"text-center mb-12",children:[e.jsx(d.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},className:"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-blue-600 rounded-2xl mb-6",children:e.jsx(C,{className:"w-10 h-10 text-white"})}),e.jsx("h1",{className:"text-5xl font-bold bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent mb-4",children:r.title}),e.jsx("p",{className:"text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed",children:r.description})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:r.topics.map((t,o)=>e.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:o*.1},className:"group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-yellow-500/20",onClick:()=>u(t.id),children:[e.jsxs("div",{className:"flex items-start justify-between mb-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors",children:t.title}),e.jsxs("p",{className:"text-gray-400 text-sm leading-relaxed",children:[t.content.split(`
`)[0].replace(/^#+ /,"").substring(0,100),"..."]})]}),e.jsx(_,{className:"w-6 h-6 text-gray-500 group-hover:text-yellow-400 transition-colors flex-shrink-0 ml-4"})]}),e.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-700",children:[e.jsx("span",{className:"text-xs text-gray-500 uppercase tracking-wider font-medium",children:"Click to explore"}),e.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"})]})]},t.id))})]})})};export{E as default};
