import{j as e}from"./ui-l-wn3dQa.js";import"./vendor-C-RugAsD.js";import{I as r}from"./InteractiveDiagram-DWUERs3K.js";import{C as t}from"./CodeBlock-CZ62hYHy.js";import{M as s}from"./reactflow-Bog5v55p.js";/* empty css              */import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const p=()=>{const a=[{id:"n1",position:{x:400,y:50},data:{label:"Node 1 (Token 0)"},style:{background:"#10b981",color:"white",border:"1px solid #059669",borderRadius:"50%",width:120,height:120,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}},{id:"n2",position:{x:650,y:150},data:{label:"Node 2 (Token 42)"},style:{background:"#10b981",color:"white",border:"1px solid #059669",borderRadius:"50%",width:120,height:120,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}},{id:"n3",position:{x:650,y:400},data:{label:"Node 3 (Token 85)"},style:{background:"#10b981",color:"white",border:"1px solid #059669",borderRadius:"50%",width:120,height:120,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}},{id:"n4",position:{x:400,y:500},data:{label:"Node 4 (Token 128)"},style:{background:"#10b981",color:"white",border:"1px solid #059669",borderRadius:"50%",width:120,height:120,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}},{id:"n5",position:{x:150,y:400},data:{label:"Node 5 (Token 170)"},style:{background:"#10b981",color:"white",border:"1px solid #059669",borderRadius:"50%",width:120,height:120,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}},{id:"n6",position:{x:150,y:150},data:{label:"Node 6 (Token 213)"},style:{background:"#10b981",color:"white",border:"1px solid #059669",borderRadius:"50%",width:120,height:120,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}}],i=[{id:"e1",source:"n1",target:"n2",markerEnd:{type:s.ArrowClosed},style:{stroke:"#6b7280",strokeWidth:2}},{id:"e2",source:"n2",target:"n3",markerEnd:{type:s.ArrowClosed},style:{stroke:"#6b7280",strokeWidth:2}},{id:"e3",source:"n3",target:"n4",markerEnd:{type:s.ArrowClosed},style:{stroke:"#6b7280",strokeWidth:2}},{id:"e4",source:"n4",target:"n5",markerEnd:{type:s.ArrowClosed},style:{stroke:"#6b7280",strokeWidth:2}},{id:"e5",source:"n5",target:"n6",markerEnd:{type:s.ArrowClosed},style:{stroke:"#6b7280",strokeWidth:2}},{id:"e6",source:"n6",target:"n1",markerEnd:{type:s.ArrowClosed},style:{stroke:"#6b7280",strokeWidth:2}}],l=[{id:"write",position:{x:300,y:0},data:{label:"Write Request"},style:{background:"#374151",color:"white",border:"1px solid #4b5563",width:150}},{id:"memtable",position:{x:300,y:100},data:{label:"Memtable (RAM)"},style:{background:"#10b981",color:"white",border:"1px solid #059669",width:150}},{id:"commitlog",position:{x:50,y:100},data:{label:"Commit Log (Disk)"},style:{background:"#f59e0b",color:"white",border:"1px solid #d97706",width:150}},{id:"ss1",position:{x:150,y:250},data:{label:"SSTable 1"},style:{background:"#3b82f6",color:"white",border:"1px solid #2563eb",width:120}},{id:"ss2",position:{x:300,y:250},data:{label:"SSTable 2"},style:{background:"#3b82f6",color:"white",border:"1px solid #2563eb",width:120}},{id:"ss3",position:{x:450,y:250},data:{label:"SSTable 3"},style:{background:"#3b82f6",color:"white",border:"1px solid #2563eb",width:120}},{id:"compacted",position:{x:300,y:400},data:{label:"Compacted SSTable"},style:{background:"#6366f1",color:"white",border:"1px solid #4f46e5",width:180}}],n=[{id:"e1",source:"write",target:"memtable",animated:!0,style:{stroke:"#10b981"}},{id:"e2",source:"write",target:"commitlog",animated:!0,style:{stroke:"#f59e0b"}},{id:"e3",source:"memtable",target:"ss1",label:"Flush",style:{stroke:"#3b82f6"},markerEnd:{type:s.ArrowClosed}},{id:"e4",source:"memtable",target:"ss2",label:"Flush",style:{stroke:"#3b82f6"},markerEnd:{type:s.ArrowClosed}},{id:"e5",source:"memtable",target:"ss3",label:"Flush",style:{stroke:"#3b82f6"},markerEnd:{type:s.ArrowClosed}},{id:"e6",source:"ss1",target:"compacted",style:{stroke:"#6366f1"},markerEnd:{type:s.ArrowClosed}},{id:"e7",source:"ss2",target:"compacted",label:"Compaction",style:{stroke:"#6366f1"},markerEnd:{type:s.ArrowClosed}},{id:"e8",source:"ss3",target:"compacted",style:{stroke:"#6366f1"},markerEnd:{type:s.ArrowClosed}}];return e.jsxs("div",{className:"max-w-5xl mx-auto text-gray-300 space-y-16 pb-20",children:[e.jsxs("div",{className:"border-b border-gray-700 pb-8",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"Apache Cassandra: The Deep Dive"}),e.jsx("p",{className:"text-xl text-gray-400",children:"A comprehensive guide to the distributed wide-column NoSQL database designed for massive scale and high availability."})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-green-600 text-sm px-3 py-1 rounded-full",children:"01"}),"Architecture & Core Concepts"]}),e.jsxs("p",{className:"text-lg leading-relaxed mb-6",children:["Cassandra is a ",e.jsx("strong",{children:"masterless, peer-to-peer distributed system"})," with no single point of failure. Every node is identical and can handle any request."]}),e.jsxs("div",{className:"bg-gray-800 p-8 rounded-xl border border-gray-700 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Ring Architecture"}),e.jsx(r,{initialNodes:a,initialEdges:i,title:"Cassandra Ring Topology"}),e.jsxs("div",{className:"mt-6 space-y-4",children:[e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-green-900/50",children:[e.jsx("strong",{className:"text-green-400",children:"Consistent Hashing"}),e.jsx("p",{className:"text-sm mt-2",children:"Data distributed using token ranges. Each node owns a portion of the ring."})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-blue-900/50",children:[e.jsx("strong",{className:"text-blue-400",children:"Gossip Protocol"}),e.jsx("p",{className:"text-sm mt-2",children:"Nodes exchange state information every second. Detects failures and maintains cluster topology."})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-purple-900/50",children:[e.jsx("strong",{className:"text-purple-400",children:"No Master Node"}),e.jsx("p",{className:"text-sm mt-2",children:"All nodes are equal. Any node can coordinate reads/writes. Eliminates single point of failure."})]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"CAP Theorem: AP (Availability + Partition Tolerance)"}),e.jsx(t,{language:"text",code:`Cassandra prioritizes:
✓ Availability: Always accepts reads/writes (even during network partitions)
✓ Partition Tolerance: Continues operating despite network splits
~ Consistency: Tunable (eventual by default, can be configured for strong)

Tradeoff:
- No strong consistency guarantees by default
- Uses eventual consistency with tunable levels
- Last-write-wins conflict resolution`})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-blue-600 text-sm px-3 py-1 rounded-full",children:"02"}),"Data Model & Storage"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Wide-Column Store"}),e.jsx(t,{language:"sql",code:`CREATE TABLE users_by_country (
    country text,           -- Partition key
    user_id uuid,           -- Clustering column
    name text,
    email text,
    signup_date timestamp,
    PRIMARY KEY (country, user_id)
) WITH CLUSTERING ORDER BY (user_id DESC);

-- Storage layout:
-- Partition: country='USA'
--   Row: user_id=uuid1 -> name, email, signup_date
--   Row: user_id=uuid2 -> name, email, signup_date

-- Each partition stored together on disk
-- Clustering columns determine sort order within partition`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Storage Internals: SSTables"}),e.jsx(r,{initialNodes:l,initialEdges:n,title:"Write Path & Compaction"})]}),e.jsxs("div",{className:"bg-gray-900 p-6 rounded-xl border border-yellow-900/50",children:[e.jsx("h3",{className:"text-xl font-semibold text-yellow-400 mb-4",children:"⚡ Data Modeling Rules"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"1."})," ",e.jsx("strong",{children:"Query-First Design"}),": Model tables around queries, not entities"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"2."})," ",e.jsx("strong",{children:"Denormalize"}),": Duplicate data across tables (disk is cheap)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"3."})," ",e.jsx("strong",{children:"One Query Per Table"}),": Each table optimized for one query pattern"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"4."})," ",e.jsx("strong",{children:"Partition Key"}),": Choose high-cardinality column to distribute data evenly"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"5."})," ",e.jsx("strong",{children:"Avoid Large Partitions"}),": Keep partitions under 100MB"]})]})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-purple-600 text-sm px-3 py-1 rounded-full",children:"03"}),"Querying & Indexing"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"CQL (Cassandra Query Language)"}),e.jsx(t,{language:"python",code:`from cassandra.cluster import Cluster

cluster = Cluster(['127.0.0.1'])
session = cluster.connect('mykeyspace')

# Insert
session.execute("""
    INSERT INTO users_by_country (country, user_id, name, email)
    VALUES ('USA', uuid(), 'Alice', 'alice@example.com')
""")

# SELECT with partition key (efficient)
rows = session.execute("""
    SELECT * FROM users_by_country
    WHERE country = 'USA'
""")

# SELECT with partition + clustering key
rows = session.execute("""
    SELECT * FROM users_by_country
    WHERE country = 'USA'
      AND user_id > ?
    LIMIT 100
""", [min_uuid])

# ❌ BAD: Query without partition key (full cluster scan)
# rows = session.execute("SELECT * FROM users_by_country WHERE name = 'Alice'")`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Secondary Indexes (Use Sparingly)"}),e.jsx(t,{language:"sql",code:`-- Create secondary index
CREATE INDEX ON users_by_country (email);

-- Now can query by email
SELECT * FROM users_by_country WHERE email = 'alice@example.com';

-- ⚠️ Secondary Index Limitations:
-- 1. Queries all nodes (expensive)
-- 2. Only works on high-cardinality columns
-- 3. Slow for large datasets
-- 4. Better: Create a dedicated table with email as partition key

-- Better approach:
CREATE TABLE users_by_email (
    email text PRIMARY KEY,
    country text,
    user_id uuid,
    name text
);  -- Denormalized, but fast!`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Materialized Views"}),e.jsx(t,{language:"sql",code:`-- Base table
CREATE TABLE events (
    event_id uuid,
    user_id uuid,
    event_type text,
    timestamp timestamp,
    PRIMARY KEY (event_id)
);

-- Materialized view: Automatically maintained
CREATE MATERIALIZED VIEW events_by_user AS
    SELECT * FROM events
    WHERE user_id IS NOT NULL AND event_id IS NOT NULL
    PRIMARY KEY (user_id, event_id);

-- Now can query efficiently:
SELECT * FROM events_by_user WHERE user_id = ?;`})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-red-600 text-sm px-3 py-1 rounded-full",children:"04"}),"Scaling & Distribution"]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Tunable Consistency"}),e.jsx(t,{language:"python",code:`from cassandra.query import SimpleStatement, ConsistencyLevel

# Write with consistency ONE (fastest, least durable)
stmt = SimpleStatement(
    "INSERT INTO users VALUES (%s, %s)",
    consistency_level=ConsistencyLevel.ONE
)

# Write with consistency QUORUM (balance)
stmt = SimpleStatement(
    "INSERT INTO users VALUES (%s, %s)",
    consistency_level=ConsistencyLevel.QUORUM  # (RF/2) + 1 nodes
)

# Write with consistency ALL (slowest, most durable)
stmt = SimpleStatement(
    "INSERT INTO users VALUES (%s, %s)",
    consistency_level=ConsistencyLevel.ALL
)

# Strong consistency: R + W > RF
# Example: RF=3, W=QUORUM(2), R=QUORUM(2) → 2+2 > 3 ✓`})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-orange-600 text-sm px-3 py-1 rounded-full",children:"05"}),"Performance Optimization"]}),e.jsxs("div",{className:"bg-gray-900 p-6 rounded-xl border border-yellow-900/50",children:[e.jsx("h3",{className:"text-xl font-semibold text-yellow-400 mb-4",children:"⚡ Best Practices"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Use ",e.jsx("strong",{children:"prepared statements"})," to reduce parsing overhead"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Keep partition sizes under ",e.jsx("strong",{children:"100MB"})]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Use ",e.jsx("strong",{children:"LeveledCompactionStrategy"})," for read-heavy workloads"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Monitor ",e.jsx("strong",{children:"tombstones"})," (deleted records) and run repairs"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Batch writes to same partition for efficiency"]})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-pink-600 text-sm px-3 py-1 rounded-full",children:"06"}),"Use Cases & Comparisons"]}),e.jsxs("div",{className:"bg-gray-900 p-6 rounded-xl border border-green-900/50",children:[e.jsx("h3",{className:"text-xl font-semibold text-green-400 mb-4",children:"🎯 When to Use Cassandra"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-green-400 font-bold mb-2",children:"Perfect For:"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"✓ Time-series data (IoT sensors, logs)"}),e.jsx("li",{children:"✓ Write-heavy workloads"}),e.jsx("li",{children:"✓ Multi-datacenter deployments"}),e.jsx("li",{children:"✓ Linear scalability needs"}),e.jsx("li",{children:"✓ High availability requirements (99.99%+)"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-red-400 font-bold mb-2",children:"Not Ideal For:"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"→ Complex joins or aggregations"}),e.jsx("li",{children:"→ Strong consistency requirements"}),e.jsxs("li",{children:["→ Small datasets (","<"," 100GB)"]}),e.jsx("li",{children:"→ ACID transactions"})]})]})]})]})]}),e.jsx("div",{className:"pt-8 border-t border-gray-700",children:e.jsxs("p",{className:"text-sm text-gray-500",children:["📚 Further Reading: ",e.jsx("a",{href:"https://cassandra.apache.org/doc/",className:"text-blue-400 hover:underline",children:"Official Cassandra Documentation"})]})})]})};export{p as default};
