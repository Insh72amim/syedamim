import{j as e}from"./ui-C9KrBvbE.js";import"./vendor-C-RugAsD.js";import{I as l}from"./InteractiveDiagram-BfeYCxPA.js";import{C as s}from"./CodeBlock-B1pjjoNU.js";import{M as r}from"./reactflow-Bog5v55p.js";/* empty css              */import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const g=()=>{const t=[{id:"def",position:{x:50,y:150},data:{label:".proto File (Schema)"},style:{background:"#1e3a8a",color:"white",border:"1px solid #3b82f6",width:150}},{id:"comp",position:{x:250,y:150},data:{label:"protoc Compiler"},style:{background:"#7c2d12",color:"white",border:"1px solid #f97316",width:150}},{id:"gen",position:{x:450,y:50},data:{label:"Generated Code"},style:{background:"#374151",color:"white",border:"1px dashed #4b5563",width:180,height:220},type:"group"},{id:"java",position:{x:20,y:40},data:{label:"Java Classes"},parentNode:"gen",extent:"parent",style:{width:140,fontSize:"12px"}},{id:"py",position:{x:20,y:80},data:{label:"Python Classes"},parentNode:"gen",extent:"parent",style:{width:140,fontSize:"12px"}},{id:"go",position:{x:20,y:120},data:{label:"Go Structs"},parentNode:"gen",extent:"parent",style:{width:140,fontSize:"12px"}},{id:"cpp",position:{x:20,y:160},data:{label:"C++ Classes"},parentNode:"gen",extent:"parent",style:{width:140,fontSize:"12px"}},{id:"run",position:{x:700,y:50},data:{label:"Runtime"},style:{background:"#064e3b",color:"white",border:"1px dashed #059669",width:200,height:220},type:"group"},{id:"ser",position:{x:30,y:40},data:{label:"Serialization"},parentNode:"run",extent:"parent",style:{width:140}},{id:"bin",position:{x:30,y:100},data:{label:"Binary Message"},parentNode:"run",extent:"parent",style:{width:140,background:"#065f46",border:"1px solid #10b981"}},{id:"deser",position:{x:30,y:160},data:{label:"Deserialization"},parentNode:"run",extent:"parent",style:{width:140}}],a=[{id:"e1",source:"def",target:"comp",label:"Compile",markerEnd:{type:r.ArrowClosed}},{id:"e2",source:"comp",target:"java",type:"smoothstep",markerEnd:{type:r.ArrowClosed}},{id:"e3",source:"comp",target:"py",type:"smoothstep",markerEnd:{type:r.ArrowClosed}},{id:"e4",source:"comp",target:"go",type:"smoothstep",markerEnd:{type:r.ArrowClosed}},{id:"e5",source:"comp",target:"cpp",type:"smoothstep",markerEnd:{type:r.ArrowClosed}},{id:"e6",source:"java",target:"ser",label:"Use",type:"smoothstep",markerEnd:{type:r.ArrowClosed}},{id:"e7",source:"py",target:"ser",label:"Use",type:"smoothstep",markerEnd:{type:r.ArrowClosed}},{id:"e8",source:"ser",target:"bin",markerEnd:{type:r.ArrowClosed}},{id:"e9",source:"bin",target:"deser",markerEnd:{type:r.ArrowClosed}}];return e.jsxs("div",{className:"max-w-5xl mx-auto text-gray-300 space-y-16 pb-20",children:[e.jsxs("div",{className:"border-b border-gray-700 pb-8",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"Protocol Buffers: The Deep Dive"}),e.jsx("p",{className:"text-xl text-gray-400",children:"A comprehensive guide to Google's language-neutral, platform-neutral serialization mechanism that powers gRPC and billions of requests per day."})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-blue-600 text-sm px-3 py-1 rounded-full",children:"01"}),"Core Concepts & Architecture"]}),e.jsxs("p",{className:"text-lg leading-relaxed mb-6",children:["Protocol Buffers (Protobuf) is a ",e.jsx("strong",{children:"binary serialization format"})," that uses a schema definition language (.proto files) to generate strongly-typed code in multiple languages."]}),e.jsxs("div",{className:"bg-gray-800 p-8 rounded-xl border border-gray-700 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"The Protobuf Workflow"}),e.jsx(l,{initialNodes:t,initialEdges:a,title:"Protobuf Workflow",height:"400px"}),e.jsxs("div",{className:"mt-6 space-y-4",children:[e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-blue-900/50",children:[e.jsx("strong",{className:"text-blue-400",children:".proto File"}),e.jsx("p",{className:"text-sm mt-2",children:"Human-readable schema definition using Protocol Buffer language."})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-orange-900/50",children:[e.jsx("strong",{className:"text-orange-400",children:"protoc Compiler"}),e.jsx("p",{className:"text-sm mt-2",children:"Generates language-specific code (getters, setters, serialization)."})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-green-900/50",children:[e.jsx("strong",{className:"text-green-400",children:"Binary Wire Format"}),e.jsx("p",{className:"text-sm mt-2",children:"Compact, versioned binary representation (3-10x smaller than JSON)."})]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Simple .proto Example"}),e.jsx(s,{language:"protobuf",code:`syntax = "proto3";

package tutorial;

message Person {
  string name = 1;          // Field number 1
  int32 id = 2;             // Field number 2
  string email = 3;         // Field number 3
  
  enum PhoneType {
    MOBILE = 0;
    HOME = 1;
    WORK = 2;
  }
  
  message PhoneNumber {
    string number = 1;
    PhoneType type = 2;
  }
  
  repeated PhoneNumber phones = 4;  // List of phone numbers
}`})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-green-600 text-sm px-3 py-1 rounded-full",children:"02"}),"Binary Wire Format & Encoding"]}),e.jsxs("p",{className:"mb-6",children:["Protobuf's efficiency comes from its ",e.jsx("strong",{children:"tag-length-value"})," encoding and clever use of variable-length integers (varints)."]}),e.jsxs("div",{className:"bg-gray-800 p-8 rounded-xl border border-gray-700 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Tag-Length-Value (TLV) Encoding"}),e.jsx("div",{className:"bg-gray-900 p-6 rounded border border-gray-700 mb-4",children:e.jsxs("div",{className:"font-mono text-sm space-y-2",children:[e.jsxs("div",{className:"text-yellow-400",children:["Tag = (field_number ","<<"," 3) | wire_type"]}),e.jsx("div",{className:"text-blue-400",children:"Length = Only for length-delimited types (strings, bytes, messages)"}),e.jsx("div",{className:"text-green-400",children:"Value = The actual data"})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-bold mb-3",children:"Wire Types"}),e.jsx("table",{className:"w-full text-sm",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"py-2 text-blue-400 font-mono",children:"0"}),e.jsx("td",{className:"py-2",children:"Varint (int32, int64, bool)"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"py-2 text-blue-400 font-mono",children:"1"}),e.jsx("td",{className:"py-2",children:"64-bit (fixed64, double)"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"py-2 text-blue-400 font-mono",children:"2"}),e.jsx("td",{className:"py-2",children:"Length-delimited (string, bytes, message)"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"py-2 text-blue-400 font-mono",children:"5"}),e.jsx("td",{className:"py-2",children:"32-bit (fixed32, float)"})]})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-bold mb-3",children:"Encoding Example"}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded text-xs font-mono space-y-2",children:[e.jsx("div",{className:"text-gray-400",children:"// Field: int32 id = 2; Value: 150"}),e.jsxs("div",{className:"text-yellow-400",children:["Tag: (2 ","<<"," 3) | 0 = 0x10"]}),e.jsx("div",{className:"text-green-400",children:"Value: 150 (varint) = 0x96 0x01"}),e.jsx("div",{className:"text-white",children:"Wire: [0x10 0x96 0x01]"}),e.jsx("div",{className:"mt-3 text-gray-400",children:'// vs JSON: "id":150 (8 bytes)'}),e.jsx("div",{className:"text-white",children:"Protobuf: 3 bytes (62% smaller!)"})]})]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Variable-Length Integer (Varint)"}),e.jsx("p",{className:"mb-4",children:"Varints use 1-10 bytes depending on the value. Small numbers = fewer bytes."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-blue-900/50",children:[e.jsx("strong",{className:"text-blue-400 block mb-2",children:"How Varint Works"}),e.jsxs("div",{className:"font-mono text-xs space-y-1",children:[e.jsx("div",{children:"MSB = 1: More bytes follow"}),e.jsx("div",{children:"MSB = 0: Last byte"}),e.jsx("div",{className:"mt-2 text-gray-400",children:"300 in binary:"}),e.jsx("div",{children:"10101100 00000010"}),e.jsx("div",{className:"text-green-400",children:"Wire: [0xAC 0x02]"})]})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-green-900/50",children:[e.jsx("strong",{className:"text-green-400 block mb-2",children:"Size Examples"}),e.jsxs("div",{className:"font-mono text-xs space-y-1",children:[e.jsx("div",{children:"0-127: 1 byte"}),e.jsx("div",{children:"128-16,383: 2 bytes"}),e.jsx("div",{children:"16,384-2,097,151: 3 bytes"}),e.jsx("div",{children:"Max (64-bit): 10 bytes"})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"ZigZag Encoding for Signed Integers"}),e.jsx(s,{language:"python",code:`# Problem: Varints waste space for negative numbers
# -1 as varint = 10 bytes (all bits set)

# Solution: ZigZag encoding maps signed to unsigned
# -1 → 1, -2 → 3, 0 → 0, 1 → 2, 2 → 4

def zigzag_encode(n):
    return (n << 1) ^ (n >> 31)  # For 32-bit

# Examples:
#  0 → 0 (1 byte)
# -1 → 1 (1 byte)
#  1 → 2 (1 byte)
# -2 → 3 (1 byte)

# Use sint32/sint64 in .proto for signed numbers`})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-purple-600 text-sm px-3 py-1 rounded-full",children:"03"}),"Schema Evolution & Versioning"]}),e.jsxs("p",{className:"mb-6",children:["Protobuf's ",e.jsx("strong",{children:"field numbers"})," are the secret to backward/forward compatibility. Never change or reuse them!"]}),e.jsxs("div",{className:"bg-gray-800 p-8 rounded-xl border border-gray-700 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Evolution Rules"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-green-900/20 p-5 rounded border border-green-900/50",children:[e.jsx("h4",{className:"font-bold text-green-400 mb-3",children:"✓ Safe Operations"}),e.jsxs("ul",{className:"text-sm space-y-2",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-green-400",children:"•"})," Add new fields (old code ignores them)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-green-400",children:"•"})," Delete fields (mark as reserved)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-green-400",children:"•"})," Change field name (wire format uses numbers)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-green-400",children:"•"})," Make repeated ↔ optional (proto3)"]})]})]}),e.jsxs("div",{className:"bg-red-900/20 p-5 rounded border border-red-900/50",children:[e.jsx("h4",{className:"font-bold text-red-400 mb-3",children:"✗ Breaking Changes"}),e.jsxs("ul",{className:"text-sm space-y-2",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-red-400",children:"•"})," Change field number"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-red-400",children:"•"})," Change field type (int32 → string)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-red-400",children:"•"})," Reuse deleted field numbers"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-red-400",children:"•"})," Change message/package names (if using reflection)"]})]})]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Field Number Reservation"}),e.jsx(s,{language:"protobuf",code:`message User {
  // Version 1
  string name = 1;
  int32 age = 2;
  
  // Version 2: Removed 'email' field - MUST reserve it!
  reserved 3;              // Reserve field number
  reserved "old_email";    // Reserve field name (optional but recommended)
  
  // Version 3: Add new field
  string phone = 4;        // Never use 3!
  
  // Can also reserve ranges
  reserved 10 to 20;
  reserved 100 to max;     // Reserve all field numbers >= 100
}`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Default Values (Proto3)"}),e.jsx("p",{className:"mb-4",children:"Proto3 removed explicit default values. All fields have implicit defaults:"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 text-sm",children:[e.jsxs("div",{className:"bg-gray-900 p-3 rounded border border-gray-700",children:[e.jsx("strong",{className:"text-blue-400",children:"string"}),e.jsx("br",{}),e.jsx("span",{className:"text-xs text-gray-400",children:'""'})]}),e.jsxs("div",{className:"bg-gray-900 p-3 rounded border border-gray-700",children:[e.jsx("strong",{className:"text-blue-400",children:"bool"}),e.jsx("br",{}),e.jsx("span",{className:"text-xs text-gray-400",children:"false"})]}),e.jsxs("div",{className:"bg-gray-900 p-3 rounded border border-gray-700",children:[e.jsx("strong",{className:"text-blue-400",children:"int32/int64"}),e.jsx("br",{}),e.jsx("span",{className:"text-xs text-gray-400",children:"0"})]}),e.jsxs("div",{className:"bg-gray-900 p-3 rounded border border-gray-700",children:[e.jsx("strong",{className:"text-blue-400",children:"enum"}),e.jsx("br",{}),e.jsx("span",{className:"text-xs text-gray-400",children:"First value (0)"})]})]})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-red-600 text-sm px-3 py-1 rounded-full",children:"04"}),"Advanced Features & Types"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Nested Messages & Imports"}),e.jsx(s,{language:"protobuf",code:`// address.proto
syntax = "proto3";
package company;

message Address {
  string street = 1;
  string city = 2;
  string zip = 3;
}

// person.proto
syntax = "proto3";
package company;

import "address.proto";  // Import other .proto files

message Person {
  string name = 1;
  
  // Nested message (only used here)
  message ContactInfo {
    string email = 1;
    string phone = 2;
  }
  
  ContactInfo contact = 2;   // Use nested message
  Address home = 3;          // Use imported message
  repeated Address others = 4;
}`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Oneof (Union Types)"}),e.jsx("p",{className:"mb-4",children:"Only one field in a oneof can be set at a time (like Rust enums or C unions)."}),e.jsx(s,{language:"protobuf",code:`message SampleMessage {
  oneof test_oneof {
    string name = 4;
    int32 id = 5;
    bool is_active = 6;
  }
}

// Usage in Python:
msg = SampleMessage()
msg.name = "Alice"     # Sets name
print(msg.id)          # 0 (default, name is set)
msg.id = 123           # Sets id, clears name!
print(msg.name)        # "" (cleared)

# Check which field is set:
print(msg.WhichOneof('test_oneof'))  # "id"`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Maps"}),e.jsx(s,{language:"protobuf",code:`message Project {
  string name = 1;
  
  // Map type: map<key_type, value_type>
  map<string, int32> file_sizes = 2;
  map<int32, string> id_to_name = 3;
  
  // Key types: int32, int64, uint32, uint64, sint32, sint64, string, bool
  // Value types: any type except another map
}

// Generated code (Python):
project = Project()
project.file_sizes["main.py"] = 1024
project.file_sizes["test.py"] = 512

for filename, size in project.file_sizes.items():
    print(f"{filename}: {size} bytes")`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Well-Known Types (WKT)"}),e.jsx("p",{className:"mb-4",children:"Google provides standard message types for common use cases:"}),e.jsx(s,{language:"protobuf",code:`import "google/protobuf/timestamp.proto";
import "google/protobuf/duration.proto";
import "google/protobuf/any.proto";
import "google/protobuf/struct.proto";

message Event {
  google.protobuf.Timestamp created_at = 1;  // Unix timestamp
  google.protobuf.Duration timeout = 2;       // Time duration
  google.protobuf.Any metadata = 3;           // Any message type
  google.protobuf.Struct config = 4;          // JSON-like structure
}`})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-orange-600 text-sm px-3 py-1 rounded-full",children:"05"}),"gRPC & Service Definitions"]}),e.jsxs("p",{className:"mb-6",children:["Protobuf is the default serialization format for ",e.jsx("strong",{children:"gRPC"}),", Google's high-performance RPC framework."]}),e.jsxs("div",{className:"bg-gray-800 p-8 rounded-xl border border-gray-700 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"gRPC Service Definition"}),e.jsx(s,{language:"protobuf",code:`syntax = "proto3";

package greet;

// The greeting service definition
service Greeter {
  // Unary RPC: single request, single response
  rpc SayHello (HelloRequest) returns (HelloReply) {}
  
  // Server streaming: single request, stream of responses
  rpc SayHelloStream (HelloRequest) returns (stream HelloReply) {}
  
  // Client streaming: stream of requests, single response
  rpc SayHelloClientStream (stream HelloRequest) returns (HelloReply) {}
  
  // Bidirectional streaming
  rpc SayHelloBidi (stream HelloRequest) returns (stream HelloReply) {}
}

message HelloRequest {
  string name = 1;
}

message HelloReply {
  string message = 1;
}`})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Generated gRPC Server (Python)"}),e.jsx(s,{language:"python",code:`import grpc
from concurrent import futures
import greet_pb2
import greet_pb2_grpc

class GreeterServicer(greet_pb2_grpc.GreeterServicer):
    def SayHello(self, request, context):
        return greet_pb2.HelloReply(
            message=f"Hello, {request.name}!"
        )
    
    def SayHelloStream(self, request, context):
        for i in range(5):
            yield greet_pb2.HelloReply(
                message=f"Hello {request.name}, message {i}"
            )

# Start server
server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
greet_pb2_grpc.add_GreeterServicer_to_server(GreeterServicer(), server)
server.add_insecure_port('[::]:50051')
server.start()
server.wait_for_termination()`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Generated gRPC Client (Python)"}),e.jsx(s,{language:"python",code:`import grpc
import greet_pb2
import greet_pb2_grpc

# Connect to server
channel = grpc.insecure_channel('localhost:50051')
stub = greet_pb2_grpc.GreeterStub(channel)

# Unary call
response = stub.SayHello(greet_pb2.HelloRequest(name="Alice"))
print(response.message)  # "Hello, Alice!"

# Server streaming
for response in stub.SayHelloStream(greet_pb2.HelloRequest(name="Bob")):
    print(response.message)  # 5 messages

channel.close()`})]}),e.jsxs("div",{className:"bg-gray-900 p-6 rounded-xl border border-yellow-900/50",children:[e.jsx("h3",{className:"text-xl font-semibold text-yellow-400 mb-4",children:"⚡ gRPC Advantages"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," ",e.jsx("strong",{children:"HTTP/2"})," multiplexing (multiple RPCs on one connection)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," ",e.jsx("strong",{children:"Binary protocol"})," (faster than JSON/REST)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," ",e.jsx("strong",{children:"Streaming"})," support (server, client, bidirectional)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," ",e.jsx("strong",{children:"Code generation"})," in 10+ languages"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," ",e.jsx("strong",{children:"Load balancing"})," and health checking built-in"]})]})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-pink-600 text-sm px-3 py-1 rounded-full",children:"06"}),"Code Generation & Best Practices"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Compiling .proto Files"}),e.jsx(s,{language:"bash",code:`# Install protoc compiler
# Download from: https://github.com/protocolbuffers/protobuf/releases

# Python
protoc --python_out=. person.proto

# Python + gRPC
python -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. person.proto

# Java
protoc --java_out=./src person.proto

# Go
protoc --go_out=. --go_opt=paths=source_relative person.proto
protoc --go-grpc_out=. --go-grpc_opt=paths=source_relative person.proto

# C++
protoc --cpp_out=. person.proto

# JavaScript/TypeScript
protoc --js_out=import_style=commonjs,binary:. person.proto
protoc --ts_out=. person.proto`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Using Generated Code (Python)"}),e.jsx(s,{language:"python",code:`import person_pb2

# Create a message
person = person_pb2.Person()
person.name = "Alice"
person.id = 12345
person.email = "alice@example.com"

# Add phone numbers
phone1 = person.phones.add()
phone1.number = "555-1234"
phone1.type = person_pb2.Person.MOBILE

phone2 = person.phones.add()
phone2.number = "555-5678"
phone2.type = person_pb2.Person.WORK

# Serialize to binary
binary = person.SerializeToString()
print(f"Size: {len(binary)} bytes")

# Deserialize from binary
person2 = person_pb2.Person()
person2.ParseFromString(binary)
print(person2.name)  # "Alice"

# JSON interop (debugging)
from google.protobuf import json_format
json_str = json_format.MessageToJson(person)
print(json_str)`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Performance Comparison"}),e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700",children:[e.jsx("th",{className:"text-left py-2 text-white",children:"Format"}),e.jsx("th",{className:"text-left py-2 text-white",children:"Size"}),e.jsx("th",{className:"text-left py-2 text-white",children:"Serialize Speed"}),e.jsx("th",{className:"text-left py-2 text-white",children:"Parse Speed"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"py-2 font-bold",children:"JSON"}),e.jsx("td",{className:"py-2",children:"100%"}),e.jsx("td",{className:"py-2",children:"100%"}),e.jsx("td",{className:"py-2",children:"100%"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"py-2 font-bold text-green-400",children:"Protobuf"}),e.jsx("td",{className:"py-2 text-green-400",children:"30-40%"}),e.jsx("td",{className:"py-2 text-green-400",children:"3-5x faster"}),e.jsx("td",{className:"py-2 text-green-400",children:"4-6x faster"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"py-2 font-bold",children:"Avro"}),e.jsx("td",{className:"py-2",children:"35-45%"}),e.jsx("td",{className:"py-2",children:"2-3x faster"}),e.jsx("td",{className:"py-2",children:"2-3x faster"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 font-bold",children:"MessagePack"}),e.jsx("td",{className:"py-2",children:"50-60%"}),e.jsx("td",{className:"py-2",children:"2x faster"}),e.jsx("td",{className:"py-2",children:"2x faster"})]})]})]})]}),e.jsxs("div",{className:"bg-gray-900 p-6 rounded-xl border border-blue-900/50",children:[e.jsx("h3",{className:"text-xl font-semibold text-blue-400 mb-4",children:"🎯 Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-green-400 font-bold mb-2",children:"Do:"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsxs("li",{children:["✓ Use ",e.jsx("strong",{children:"field numbers 1-15"})," for frequently set fields (1 byte tag)"]}),e.jsx("li",{children:"✓ Reserve deleted field numbers"}),e.jsxs("li",{children:["✓ Use ",e.jsx("strong",{children:"sint32/sint64"})," for negative numbers"]}),e.jsxs("li",{children:["✓ Use ",e.jsx("strong",{children:"repeated"})," for arrays/lists"]}),e.jsx("li",{children:"✓ Version your .proto files in git"}),e.jsxs("li",{children:["✓ Use ",e.jsx("strong",{children:"optional"})," (proto3) for nullable fields"]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-red-400 font-bold mb-2",children:"Don't:"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"✗ Change field numbers (breaks compatibility)"}),e.jsxs("li",{children:["✗ Use ",e.jsx("strong",{children:"required"})," (removed in proto3)"]}),e.jsx("li",{children:"✗ Put large data in Protobuf (use blob storage)"}),e.jsx("li",{children:"✗ Nest messages more than 3-4 levels deep"}),e.jsx("li",{children:"✗ Use Protobuf for human-readable config"})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"When to Use Protobuf"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-green-400 font-bold mb-3",children:"Perfect For:"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"✓ Microservices communication (gRPC)"}),e.jsx("li",{children:"✓ Low-bandwidth IoT/mobile apps"}),e.jsxs("li",{children:["✓ High-throughput APIs (",">"," 10k RPS)"]}),e.jsx("li",{children:"✓ Strongly-typed contracts"}),e.jsx("li",{children:"✓ Cross-language systems"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-red-400 font-bold mb-3",children:"NOT Ideal For:"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"✗ Browser-based REST APIs (use JSON)"}),e.jsx("li",{children:"✗ Human-readable logs/config"}),e.jsx("li",{children:"✗ Large binary blobs (use S3)"}),e.jsx("li",{children:"✗ Ad-hoc queries (use JSON/Avro)"}),e.jsx("li",{children:"✗ Dynamic schemas (use Avro)"})]})]})]})]})]})]}),e.jsx("div",{className:"pt-8 border-t border-gray-700",children:e.jsxs("p",{className:"text-sm text-gray-500",children:["📚 Further Reading: ",e.jsx("a",{href:"https://protobuf.dev/",className:"text-blue-400 hover:underline",children:"Official Protocol Buffers Documentation"})," |",e.jsx("a",{href:"https://grpc.io/docs/",className:"text-blue-400 hover:underline ml-2",children:"gRPC Documentation"})]})})]})};export{g as default};
