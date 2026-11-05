import{j as e}from"./ui-C9KrBvbE.js";import"./vendor-C-RugAsD.js";import{I as a}from"./InteractiveDiagram-BfeYCxPA.js";import{C as r}from"./CodeBlock-B1pjjoNU.js";import{M as s}from"./reactflow-Bog5v55p.js";/* empty css              */import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const g=()=>{const t=[{id:"ws",position:{x:50,y:0},data:{label:"Writer Schema"},style:{background:"#1e3a8a",color:"white",border:"1px solid #3b82f6",width:120}},{id:"obj",position:{x:50,y:100},data:{label:"Object Data"},style:{background:"#1f2937",color:"white",border:"1px solid #374151",width:120}},{id:"enc",position:{x:250,y:50},data:{label:"Binary Encoding"},style:{background:"#1e40af",color:"white",border:"1px solid #3b82f6",width:150}},{id:"rs",position:{x:450,y:0},data:{label:"Reader Schema"},style:{background:"#064e3b",color:"white",border:"1px solid #10b981",width:120}},{id:"out",position:{x:450,y:100},data:{label:"Output Object"},style:{background:"#1f2937",color:"white",border:"1px solid #374151",width:120}}],l=[{id:"e1",source:"ws",target:"enc",style:{stroke:"#9ca3af"},markerEnd:{type:s.ArrowClosed}},{id:"e2",source:"obj",target:"enc",style:{stroke:"#9ca3af"},markerEnd:{type:s.ArrowClosed}},{id:"e3",source:"enc",target:"rs",style:{stroke:"#9ca3af"},markerEnd:{type:s.ArrowClosed}},{id:"e4",source:"rs",target:"out",style:{stroke:"#9ca3af"},markerEnd:{type:s.ArrowClosed}}],d=[{id:"p",position:{x:50,y:100},data:{label:"Producer"},style:{background:"#1f2937",color:"white",border:"1px solid #374151",width:120}},{id:"sr",position:{x:250,y:0},data:{label:"Schema Registry"},style:{background:"#7c3aed",color:"white",border:"1px solid #8b5cf6",width:150}},{id:"k",position:{x:250,y:200},data:{label:"Kafka"},style:{background:"#1f2937",color:"white",border:"1px solid #374151",width:120}},{id:"c",position:{x:450,y:100},data:{label:"Consumer"},style:{background:"#1f2937",color:"white",border:"1px solid #374151",width:120}}],i=[{id:"r1",source:"p",target:"sr",label:"1. Register",style:{stroke:"#9ca3af"},markerEnd:{type:s.ArrowClosed}},{id:"r2",source:"sr",target:"p",label:"ID",style:{stroke:"#9ca3af",strokeDasharray:"5,5"},markerEnd:{type:s.ArrowClosed}},{id:"r3",source:"p",target:"k",label:"2. Send (ID+Data)",style:{stroke:"#3b82f6"},markerEnd:{type:s.ArrowClosed}},{id:"r4",source:"k",target:"c",label:"3. Read",style:{stroke:"#3b82f6"},markerEnd:{type:s.ArrowClosed}},{id:"r5",source:"c",target:"sr",label:"4. Fetch Schema",style:{stroke:"#9ca3af"},markerEnd:{type:s.ArrowClosed}},{id:"r6",source:"sr",target:"c",label:"Schema",style:{stroke:"#9ca3af",strokeDasharray:"5,5"},markerEnd:{type:s.ArrowClosed}}];return e.jsxs("div",{className:"max-w-5xl mx-auto text-gray-300 space-y-16 pb-20",children:[e.jsxs("div",{className:"border-b border-gray-700 pb-8",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"Apache Avro: The Deep Dive"}),e.jsx("p",{className:"text-xl text-gray-400",children:"A comprehensive guide to the data serialization framework that powers schema evolution in distributed systems."})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-blue-600 text-sm px-3 py-1 rounded-full",children:"01"}),"Schema Evolution Mastery"]}),e.jsxs("p",{className:"text-lg leading-relaxed mb-6",children:["Avro's killer feature: ",e.jsx("strong",{children:"schemas evolve independently"})," ","of data. Writers and readers can use different schema versions without breaking compatibility."]}),e.jsxs("div",{className:"bg-gray-800 p-8 rounded-xl border border-gray-700 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"The Four Compatibility Types"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gray-900 p-5 rounded border border-blue-900/50",children:[e.jsx("h4",{className:"font-bold text-blue-400 mb-2",children:"Backward Compatible"}),e.jsx("p",{className:"text-sm mb-3",children:"New schema can read OLD data"}),e.jsxs("div",{className:"bg-gray-800 p-3 rounded text-xs",children:["✓ Add optional fields (with defaults)",e.jsx("br",{}),"✓ Delete fields",e.jsx("br",{}),"✗ Add required fields"]})]}),e.jsxs("div",{className:"bg-gray-900 p-5 rounded border border-green-900/50",children:[e.jsx("h4",{className:"font-bold text-green-400 mb-2",children:"Forward Compatible"}),e.jsx("p",{className:"text-sm mb-3",children:"Old schema can read NEW data"}),e.jsxs("div",{className:"bg-gray-800 p-3 rounded text-xs",children:["✓ Add fields",e.jsx("br",{}),"✓ Delete optional fields",e.jsx("br",{}),"✗ Delete required fields"]})]}),e.jsxs("div",{className:"bg-gray-900 p-5 rounded border border-purple-900/50",children:[e.jsx("h4",{className:"font-bold text-purple-400 mb-2",children:"Full Compatible"}),e.jsx("p",{className:"text-sm mb-3",children:"Both backward AND forward"}),e.jsxs("div",{className:"bg-gray-800 p-3 rounded text-xs",children:["✓ Add optional fields with defaults",e.jsx("br",{}),"✓ Delete optional fields with defaults",e.jsx("br",{}),"Most restrictive, safest"]})]}),e.jsxs("div",{className:"bg-gray-900 p-5 rounded border border-orange-900/50",children:[e.jsx("h4",{className:"font-bold text-orange-400 mb-2",children:"None (Breaking)"}),e.jsx("p",{className:"text-sm mb-3",children:"Incompatible changes"}),e.jsxs("div",{className:"bg-gray-800 p-3 rounded text-xs",children:["• Change field type",e.jsx("br",{}),"• Rename fields (without aliases)",e.jsx("br",{}),"Requires data migration"]})]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Schema Evolution Example"}),e.jsx(r,{language:"json",code:`// Version 1 (Writer Schema)
{
  "type": "record",
  "name": "User",
  "fields": [
    {"name": "id", "type": "int"},
    {"name": "name", "type": "string"}
  ]
}

// Version 2 (Reader Schema) - Backward Compatible
{
  "type": "record",
  "name": "User",
  "fields": [
    {"name": "id", "type": "int"},
    {"name": "name", "type": "string"},
    {"name": "email", "type": ["null", "string"], "default": null}  // Optional
  ]
}

// Avro resolves: V2 reader reads V1 data → email field gets null`})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-green-600 text-sm px-3 py-1 rounded-full",children:"02"}),"Binary Serialization Format"]}),e.jsxs("p",{className:"mb-6",children:["Avro encodes data in a ",e.jsx("strong",{children:"compact binary format"}),". No field names, no field tags—just raw values."]}),e.jsxs("div",{className:"bg-gray-800 p-8 rounded-xl border border-gray-700 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"How Avro Encodes Data"}),e.jsx(a,{initialNodes:t,initialEdges:l,title:"Avro Binary Encoding"}),e.jsxs("div",{className:"mt-6 grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-gray-600",children:[e.jsx("strong",{className:"text-blue-400 block mb-2",children:"Variable-Length Encoding"}),e.jsx("p",{className:"text-sm",children:"Integers use ZigZag + VarInt encoding for space efficiency."}),e.jsxs("div",{className:"bg-gray-800 p-2 mt-2 rounded text-xs font-mono",children:["int 1 → 1 byte",e.jsx("br",{}),"int 16383 → 2 bytes",e.jsx("br",{}),"int 2097151 → 3 bytes"]})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-gray-600",children:[e.jsx("strong",{className:"text-green-400 block mb-2",children:"String Encoding"}),e.jsx("p",{className:"text-sm",children:"Length-prefixed UTF-8 bytes."}),e.jsxs("div",{className:"bg-gray-800 p-2 mt-2 rounded text-xs font-mono",children:['"hello" → [0x0A, h, e, l, l, o]',e.jsx("br",{}),"(length=5 as VarInt, then bytes)"]})]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Avro vs JSON Size Comparison"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-yellow-400 font-bold mb-3",children:"JSON (Human-Readable)"}),e.jsx(r,{language:"json",code:`{
  "id": 12345,
  "name": "Alice",
  "age": 30
}
// Size: 48 bytes`})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-blue-400 font-bold mb-3",children:"Avro (Binary)"}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded font-mono text-xs",children:["[0xB9 0xC0 0x01] // id=12345",e.jsx("br",{}),"[0x0A A l i c e] // name",e.jsx("br",{}),"[0x3C] // age=30",e.jsx("br",{}),e.jsx("br",{}),"// Size: 12 bytes (75% smaller)"]})]})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-purple-600 text-sm px-3 py-1 rounded-full",children:"03"}),"Schema Registry Integration"]}),e.jsxs("p",{className:"mb-6",children:["In production, schemas are stored centrally. Messages only contain a"," ",e.jsx("strong",{children:"schema ID"}),", not the full schema."]}),e.jsxs("div",{className:"bg-gray-800 p-8 rounded-xl border border-gray-700 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Confluent Schema Registry Flow"}),e.jsx(a,{initialNodes:d,initialEdges:i,title:"Schema Registry Flow"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Producer Example (Python)"}),e.jsx(r,{language:"python",code:`from confluent_kafka import SerializingProducer
from confluent_kafka.schema_registry import SchemaRegistryClient
from confluent_kafka.schema_registry.avro import AvroSerializer

schema_str = """
{
  "type": "record",
  "name": "User",
  "fields": [
    {"name": "id", "type": "int"},
    {"name": "name", "type": "string"}
  ]
}
"""

schema_registry_client = SchemaRegistryClient({'url': 'https://localhost:8081'})
avro_serializer = AvroSerializer(schema_registry_client, schema_str)

producer = SerializingProducer({
    'bootstrap.servers': 'localhost:9092',
    'value.serializer': avro_serializer
})

user = {'id': 123, 'name': 'Alice'}
producer.produce(topic='users', value=user)
producer.flush()`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Schema Versioning Strategy"}),e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700",children:[e.jsx("th",{className:"text-left py-2 text-white",children:"Strategy"}),e.jsx("th",{className:"text-left py-2 text-white",children:"Description"}),e.jsx("th",{className:"text-left py-2 text-white",children:"Use Case"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"py-2 text-blue-400 font-bold",children:"TopicName"}),e.jsx("td",{className:"py-2",children:"One schema per topic"}),e.jsx("td",{className:"py-2",children:"Simple systems"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"py-2 text-green-400 font-bold",children:"RecordName"}),e.jsx("td",{className:"py-2",children:"Schema ID = topic + record name"}),e.jsx("td",{className:"py-2",children:"Multiple record types per topic"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 text-purple-400 font-bold",children:"TopicRecordName"}),e.jsx("td",{className:"py-2",children:"Schema ID = topic + record + version"}),e.jsx("td",{className:"py-2",children:"Complex multi-tenant systems"})]})]})]})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-red-600 text-sm px-3 py-1 rounded-full",children:"04"}),"Data Types & Complex Schemas"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Primitive Types"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 text-sm",children:[e.jsxs("div",{className:"bg-gray-900 p-3 rounded border border-gray-700",children:[e.jsx("strong",{className:"text-blue-400",children:"null"}),e.jsx("br",{}),e.jsx("span",{className:"text-xs text-gray-400",children:"No value"})]}),e.jsxs("div",{className:"bg-gray-900 p-3 rounded border border-gray-700",children:[e.jsx("strong",{className:"text-blue-400",children:"boolean"}),e.jsx("br",{}),e.jsx("span",{className:"text-xs text-gray-400",children:"true/false"})]}),e.jsxs("div",{className:"bg-gray-900 p-3 rounded border border-gray-700",children:[e.jsx("strong",{className:"text-blue-400",children:"int"}),e.jsx("br",{}),e.jsx("span",{className:"text-xs text-gray-400",children:"32-bit signed"})]}),e.jsxs("div",{className:"bg-gray-900 p-3 rounded border border-gray-700",children:[e.jsx("strong",{className:"text-blue-400",children:"long"}),e.jsx("br",{}),e.jsx("span",{className:"text-xs text-gray-400",children:"64-bit signed"})]}),e.jsxs("div",{className:"bg-gray-900 p-3 rounded border border-gray-700",children:[e.jsx("strong",{className:"text-blue-400",children:"float"}),e.jsx("br",{}),e.jsx("span",{className:"text-xs text-gray-400",children:"32-bit IEEE"})]}),e.jsxs("div",{className:"bg-gray-900 p-3 rounded border border-gray-700",children:[e.jsx("strong",{className:"text-blue-400",children:"double"}),e.jsx("br",{}),e.jsx("span",{className:"text-xs text-gray-400",children:"64-bit IEEE"})]}),e.jsxs("div",{className:"bg-gray-900 p-3 rounded border border-gray-700",children:[e.jsx("strong",{className:"text-blue-400",children:"bytes"}),e.jsx("br",{}),e.jsx("span",{className:"text-xs text-gray-400",children:"Raw binary"})]}),e.jsxs("div",{className:"bg-gray-900 p-3 rounded border border-gray-700",children:[e.jsx("strong",{className:"text-blue-400",children:"string"}),e.jsx("br",{}),e.jsx("span",{className:"text-xs text-gray-400",children:"UTF-8 text"})]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Complex Type Example"}),e.jsx(r,{language:"json",code:`{
  "type": "record",
  "name": "Order",
  "fields": [
    {"name": "order_id", "type": "long"},
    {
      "name": "customer",
      "type": {
        "type": "record",
        "name": "Customer",
        "fields": [
          {"name": "name", "type": "string"},
          {"name": "email", "type": ["null", "string"], "default": null}
        ]
      }
    },
    {
      "name": "items",
      "type": {
        "type": "array",
        "items": {
          "type": "record",
          "name": "LineItem",
          "fields": [
            {"name": "product_id", "type": "int"},
            {"name": "quantity", "type": "int"},
            {"name": "price", "type": "double"}
          ]
        }
      }
    },
    {
      "name": "metadata",
      "type": {
        "type": "map",
        "values": "string"
      }
    },
    {
      "name": "status",
      "type": {
        "type": "enum",
        "name": "OrderStatus",
        "symbols": ["PENDING", "SHIPPED", "DELIVERED", "CANCELLED"]
      }
    }
  ]
}`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Union Types (Optional Fields)"}),e.jsx(r,{language:"json",code:`// Nullable field: union of [null, string]
{"name": "email", "type": ["null", "string"], "default": null}

// Multiple types
{"name": "value", "type": ["int", "string", "boolean"]}

// Optional nested record
{"name": "address", "type": ["null", {"type": "record", "name": "Address", ...}]}`})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-orange-600 text-sm px-3 py-1 rounded-full",children:"05"}),"Avro vs Protobuf vs Thrift"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm border border-gray-700",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-800 border-b border-gray-700",children:[e.jsx("th",{className:"text-left p-3 text-white",children:"Feature"}),e.jsx("th",{className:"text-left p-3 text-blue-400",children:"Avro"}),e.jsx("th",{className:"text-left p-3 text-green-400",children:"Protobuf"}),e.jsx("th",{className:"text-left p-3 text-purple-400",children:"Thrift"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"p-3 font-semibold",children:"Schema Definition"}),e.jsx("td",{className:"p-3",children:"JSON"}),e.jsx("td",{className:"p-3",children:".proto files"}),e.jsx("td",{className:"p-3",children:".thrift files"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"p-3 font-semibold",children:"Schema Evolution"}),e.jsx("td",{className:"p-3 text-green-400",children:"★★★★★ (Best)"}),e.jsx("td",{className:"p-3",children:"★★★★☆"}),e.jsx("td",{className:"p-3",children:"★★★☆☆"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"p-3 font-semibold",children:"Binary Size"}),e.jsx("td",{className:"p-3",children:"★★★★☆"}),e.jsx("td",{className:"p-3 text-green-400",children:"★★★★★ (Smallest)"}),e.jsx("td",{className:"p-3",children:"★★★★☆"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"p-3 font-semibold",children:"Speed"}),e.jsx("td",{className:"p-3",children:"★★★☆☆"}),e.jsx("td",{className:"p-3 text-green-400",children:"★★★★★"}),e.jsx("td",{className:"p-3",children:"★★★★☆"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"p-3 font-semibold",children:"Schema in Message"}),e.jsx("td",{className:"p-3 text-green-400",children:"Optional (can embed)"}),e.jsx("td",{className:"p-3 text-red-400",children:"No"}),e.jsx("td",{className:"p-3 text-red-400",children:"No"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"p-3 font-semibold",children:"Dynamic Typing"}),e.jsx("td",{className:"p-3 text-green-400",children:"Yes (GenericRecord)"}),e.jsx("td",{className:"p-3 text-red-400",children:"No"}),e.jsx("td",{className:"p-3 text-red-400",children:"No"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"p-3 font-semibold",children:"RPC Support"}),e.jsx("td",{className:"p-3",children:"Basic"}),e.jsx("td",{className:"p-3 text-green-400",children:"gRPC (Excellent)"}),e.jsx("td",{className:"p-3 text-green-400",children:"Built-in"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"p-3 font-semibold",children:"Language Support"}),e.jsx("td",{className:"p-3",children:"★★★★☆"}),e.jsx("td",{className:"p-3 text-green-400",children:"★★★★★"}),e.jsx("td",{className:"p-3",children:"★★★★☆"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-semibold",children:"Best Use Case"}),e.jsx("td",{className:"p-3 text-blue-400",children:"Kafka, data lakes, Hadoop"}),e.jsx("td",{className:"p-3 text-green-400",children:"Microservices, gRPC APIs"}),e.jsx("td",{className:"p-3 text-purple-400",children:"Facebook services"})]})]})]})}),e.jsxs("div",{className:"mt-6 bg-gray-900 p-6 rounded-xl border border-blue-900/50",children:[e.jsx("h3",{className:"text-xl font-semibold text-blue-400 mb-4",children:"🎯 When to Choose Avro"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-blue-400",children:"✓"})," You need"," ",e.jsx("strong",{children:"dynamic schema evolution"})," without breaking consumers"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-blue-400",children:"✓"})," Working with"," ",e.jsx("strong",{children:"Kafka"})," and Schema Registry"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-blue-400",children:"✓"})," Data storage in"," ",e.jsx("strong",{children:"Hadoop/Hive/Spark"})]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-blue-400",children:"✓"})," Need to read data without generated code (GenericRecord)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-red-400",children:"✗"})," For low-latency RPCs → use Protobuf/gRPC"]})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-pink-600 text-sm px-3 py-1 rounded-full",children:"06"}),"Code Generation & Tooling"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Generating Classes from Schema"}),e.jsx(r,{language:"bash",code:`# Java
java -jar avro-tools.jar compile schema user.avsc .

# Python
avro-tools generate -i user.avsc -o ./generated

# C#
avrogen -s user.avsc .`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Using Generated Code (Java)"}),e.jsx(r,{language:"java",code:`// Write Avro file
User user1 = User.newBuilder()
    .setId(1)
    .setName("Alice")
    .setEmail("alice@example.com")
    .build();

DatumWriter<User> userDatumWriter = new SpecificDatumWriter<>(User.class);
DataFileWriter<User> dataFileWriter = new DataFileWriter<>(userDatumWriter);
dataFileWriter.create(user1.getSchema(), new File("users.avro"));
dataFileWriter.append(user1);
dataFileWriter.close();

// Read Avro file
DatumReader<User> userDatumReader = new SpecificDatumReader<>(User.class);
DataFileReader<User> dataFileReader = new DataFileReader<>(new File("users.avro"), userDatumReader);
User user = null;
while (dataFileReader.hasNext()) {
    user = dataFileReader.next(user);
    System.out.println(user);
}`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Dynamic Deserialization (No Code Gen)"}),e.jsx(r,{language:"python",code:`from avro.datafile import DataFileReader
from avro.io import DatumReader

# Read without knowing schema at compile time
reader = DataFileReader(open("users.avro", "rb"), DatumReader())
for user in reader:
    print(user['name'], user['email'])  # Dict access
reader.close()`})]}),e.jsxs("div",{className:"bg-gray-900 p-6 rounded-xl border border-yellow-900/50",children:[e.jsx("h3",{className:"text-xl font-semibold text-yellow-400 mb-4",children:"⚡ Best Practices"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Use"," ",e.jsx("strong",{children:"Schema Registry"})," for all production Kafka deployments"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Always set"," ",e.jsx("strong",{children:"default values"})," for new optional fields"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Use"," ",e.jsx("strong",{children:"aliases"})," when renaming fields for backward compatibility"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Test schema evolution with ",e.jsx("strong",{children:"compatibility checks"})," before deployment"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Prefer"," ",e.jsx("strong",{children:"record types"})," over primitive types for extensibility"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Document schema changes in ",e.jsx("strong",{children:"version control"})]})]})]})]})]}),e.jsx("div",{className:"pt-8 border-t border-gray-700",children:e.jsxs("p",{className:"text-sm text-gray-500",children:["📚 Further Reading:"," ",e.jsx("a",{href:"https://avro.apache.org/docs/current/",className:"text-blue-400 hover:underline",children:"Official Avro Documentation"})," ","|",e.jsx("a",{href:"https://docs.confluent.io/platform/current/schema-registry/index.html",className:"text-blue-400 hover:underline ml-2",children:"Confluent Schema Registry"})]})})]})};export{g as default};
