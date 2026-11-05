import{j as e}from"./ui-C9KrBvbE.js";import"./vendor-C-RugAsD.js";import{I as s}from"./InteractiveDiagram-BfeYCxPA.js";import{C as t}from"./CodeBlock-B1pjjoNU.js";import{M as a}from"./reactflow-Bog5v55p.js";/* empty css              */import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const h=()=>{const i=[{id:"client",position:{x:0,y:200},type:"custom",data:{label:"Client",icon:"globe",gradient:"from-gray-700 to-gray-900",details:"Browser / Mobile App"}},{id:"asgi",position:{x:250,y:200},type:"custom",data:{label:"ASGI Server",subLabel:"Uvicorn / Hypercorn",icon:"zap",gradient:"from-purple-600 to-purple-800",details:"Manages socket connections & protocol parsing"}},{id:"starlette",position:{x:550,y:200},type:"custom",data:{label:"Starlette",subLabel:"Toolkit",icon:"layers",gradient:"from-pink-600 to-pink-800",details:"Routing, Middleware, WebSockets"}},{id:"fastapi",position:{x:800,y:200},type:"custom",data:{label:"FastAPI",subLabel:"Framework",icon:"box",gradient:"from-teal-600 to-teal-800",details:"Dependency Injection, Pydantic Validation"}},{id:"app",position:{x:1050,y:200},type:"custom",data:{label:"Path Operation",subLabel:"Your Code",icon:"code",gradient:"from-blue-600 to-blue-800",details:"async def read_users()..."}}],r=[{id:"e1",source:"client",target:"asgi",animated:!0,label:"HTTP/WS",style:{stroke:"#9ca3af"}},{id:"e2",source:"asgi",target:"starlette",animated:!0,label:"Scope",style:{stroke:"#a855f7"}},{id:"e3",source:"starlette",target:"fastapi",animated:!0,style:{stroke:"#ec4899"}},{id:"e4",source:"fastapi",target:"app",animated:!0,style:{stroke:"#14b8a6"}}],o=[{id:"json",position:{x:0,y:150},type:"custom",data:{label:"Raw JSON",icon:"file",gradient:"from-gray-700 to-gray-900",details:'{"age": "25"}'}},{id:"rust",position:{x:250,y:150},type:"custom",data:{label:"Pydantic Core",subLabel:"Rust Engine",icon:"cpu",gradient:"from-red-700 to-red-900",details:"High-performance parsing & validation"}},{id:"model",position:{x:550,y:50},type:"custom",data:{label:"Python Model",subLabel:"Success",icon:"check",gradient:"from-green-600 to-green-800",details:"age: int = 25"}},{id:"error",position:{x:550,y:250},type:"custom",data:{label:"ValidationError",subLabel:"Failure",icon:"alert-triangle",gradient:"from-red-600 to-red-800",details:"422 Unprocessable Entity"}}],n=[{id:"v1",source:"json",target:"rust",animated:!0,label:"Parse",style:{stroke:"#9ca3af"}},{id:"v2",source:"rust",target:"model",label:"Valid",style:{stroke:"#10b981"},markerEnd:{type:a.ArrowClosed}},{id:"v3",source:"rust",target:"error",label:"Invalid",style:{stroke:"#dc2626"},markerEnd:{type:a.ArrowClosed}}],l=[{id:"route",position:{x:300,y:0},type:"custom",data:{label:"Route Handler",icon:"code",gradient:"from-blue-600 to-blue-800"}},{id:"service",position:{x:300,y:150},type:"custom",data:{label:"Service Logic",subLabel:"Depends()",icon:"settings",gradient:"from-teal-600 to-teal-800"}},{id:"db",position:{x:100,y:300},type:"custom",data:{label:"DB Session",subLabel:"Depends()",icon:"database",gradient:"from-orange-600 to-orange-800",details:"Yields session, closes after request"}},{id:"auth",position:{x:500,y:300},type:"custom",data:{label:"Current User",subLabel:"Depends()",icon:"lock",gradient:"from-pink-600 to-pink-800",details:"Validates JWT token"}}],d=[{id:"d1",source:"route",target:"service",animated:!0,style:{stroke:"#9ca3af"}},{id:"d2",source:"service",target:"db",animated:!0,style:{stroke:"#f97316"}},{id:"d3",source:"service",target:"auth",animated:!0,style:{stroke:"#ec4899"}}];return e.jsxs("div",{className:"max-w-5xl mx-auto text-gray-300 space-y-16 pb-20",children:[e.jsxs("div",{className:"border-b border-gray-700 pb-8",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"FastAPI Internals & Performance"}),e.jsx("p",{className:"text-xl text-gray-400",children:"Understanding ASGI, Pydantic v2 (Rust), and the Dependency Injection system."})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-purple-600 text-sm px-3 py-1 rounded-full",children:"01"}),"ASGI & Starlette"]}),e.jsxs("p",{className:"text-lg leading-relaxed mb-6",children:["FastAPI is a wrapper around ",e.jsx("strong",{children:"Starlette"}),". It adds data validation (Pydantic) and dependency injection. The underlying server (Uvicorn) speaks ",e.jsx("strong",{children:"ASGI"}),", the standard for async Python web servers."]}),e.jsxs("div",{className:"bg-gray-800 p-8 rounded-xl border border-gray-700 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Request Lifecycle"}),e.jsx(s,{initialNodes:i,initialEdges:r,title:"FastAPI Architecture",height:"400px"})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700 mb-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Middleware Internals"}),e.jsx("p",{className:"text-sm mb-4 text-gray-400",children:"Middleware wraps the entire application. It intercepts the ASGI `scope`, `receive`, and `send` callables."}),e.jsx(t,{language:"python",title:"Custom ASGI Middleware",code:`import time
from starlette.types import ASGIApp, Scope, Receive, Send

class TimingMiddleware:
    def __init__(self, app: ASGIApp):
        self.app = app

    async def __call__(self, scope: Scope, receive: Receive, send: Send):
        if scope["type"] != "http":
            await self.app(scope, receive, send)
            return

        start_time = time.time()
        
        async def send_wrapper(message):
            if message["type"] == "http.response.start":
                process_time = time.time() - start_time
                # Add custom header
                headers = MutableHeaders(scope=message)
                headers["X-Process-Time"] = str(process_time)
            await send(message)

        await self.app(scope, receive, send_wrapper)`})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-red-600 text-sm px-3 py-1 rounded-full",children:"02"}),"Pydantic v2 & Validation"]}),e.jsxs("p",{className:"mb-6",children:["Pydantic v2 is rewritten in ",e.jsx("strong",{children:"Rust"})," (pydantic-core), offering 5-50x performance improvements over v1. It handles parsing, validation, and serialization."]}),e.jsxs("div",{className:"bg-gray-800 p-8 rounded-xl border border-gray-700 mb-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Validation Flow"}),e.jsx(s,{initialNodes:o,initialEdges:n,title:"Pydantic Core Execution",height:"400px"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-semibold text-white mb-3",children:"Model Config (v2)"}),e.jsx(t,{language:"python",title:"Strict Mode",code:`from pydantic import BaseModel, ConfigDict

class User(BaseModel):
    model_config = ConfigDict(strict=True)
    
    id: int
    name: str

# User(id="123", name="Bob") 
# ❌ ValidationError: Input should be a valid integer`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-semibold text-white mb-3",children:"Computed Fields"}),e.jsx(t,{language:"python",title:"@computed_field",code:`from pydantic import computed_field

class Rectangle(BaseModel):
    width: int
    height: int

    @computed_field
    @property
    def area(self) -> int:
        return self.width * self.height`})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-blue-600 text-sm px-3 py-1 rounded-full",children:"03"}),"Advanced Dependency Injection"]}),e.jsxs("div",{className:"bg-gray-800 p-8 rounded-xl border border-gray-700 mb-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Dependency Graph Resolution"}),e.jsx(s,{initialNodes:l,initialEdges:d,title:"Topological Sort of Dependencies",height:"500px"})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700 mb-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Class-Based Dependencies"}),e.jsx("p",{className:"text-sm mb-4 text-gray-400",children:"Dependencies can be classes. `__init__` defines sub-dependencies, and `__call__` makes the instance callable."}),e.jsx(t,{language:"python",title:"Reusable Query Parser",code:`class CommonQueryParams:
    def __init__(
        self, 
        q: str | None = None, 
        skip: int = 0, 
        limit: int = 100
    ):
        self.q = q
        self.skip = skip
        self.limit = limit

@app.get("/items/")
async def read_items(commons: CommonQueryParams = Depends()):
    response = {}
    if commons.q:
        response.update({"q": commons.q})
    items = fake_items_db[commons.skip : commons.skip + commons.limit]
    response.update({"items": items})
    return response`})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-teal-600 text-sm px-3 py-1 rounded-full",children:"04"}),"Performance Optimization"]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-semibold text-white mb-3",children:"JSON Serialization"}),e.jsx("p",{className:"text-sm mb-3 text-gray-400",children:"Standard `json` is slow. Use `orjson` for massive speedups."}),e.jsx(t,{language:"python",title:"ORJSONResponse",code:`from fastapi.responses import ORJSONResponse

@app.get("/items/", response_class=ORJSONResponse)
async def read_items():
    return [{"id": "foo", "val": "bar"}]`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-semibold text-white mb-3",children:"Profiling"}),e.jsx(t,{language:"bash",title:"PyInstrument",code:`pip install pyinstrument

# Middleware
from pyinstrument import Profiler
from fastapi import Request

@app.middleware("http")
async def profile_request(request: Request, call_next):
    profiler = Profiler(interval=0.001, async_mode="enabled")
    profiler.start()
    await call_next(request)
    profiler.stop()
    profiler.print()
    return response`})]})]})]})]})};export{h as default};
