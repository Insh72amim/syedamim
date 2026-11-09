import{j as e}from"./ui-l-wn3dQa.js";import"./vendor-C-RugAsD.js";import{I as a}from"./InteractiveDiagram-DWUERs3K.js";import{C as s}from"./CodeBlock-CZ62hYHy.js";import{M as r}from"./reactflow-Bog5v55p.js";/* empty css              */import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const p=()=>{const t=[{id:"app",position:{x:350,y:0},data:{label:"Application"},style:{background:"#1f2937",color:"white",border:"1px solid #374151",width:150}},{id:"router",position:{x:350,y:100},data:{label:"Mongos Router"},style:{background:"#10b981",color:"white",border:"1px solid #059669",width:150}},{id:"config",position:{x:600,y:100},data:{label:"Config Servers"},style:{background:"#6366f1",color:"white",border:"1px solid #4f46e5",width:150}},{id:"s1p",position:{x:50,y:250},data:{label:"Shard 1 Primary"},style:{background:"#f59e0b",color:"white",border:"1px solid #d97706",width:140}},{id:"s1s1",position:{x:0,y:350},data:{label:"Secondary"},style:{background:"#374151",color:"gray",border:"1px solid #4b5563",width:100,fontSize:"12px"}},{id:"s1s2",position:{x:120,y:350},data:{label:"Secondary"},style:{background:"#374151",color:"gray",border:"1px solid #4b5563",width:100,fontSize:"12px"}},{id:"s2p",position:{x:350,y:250},data:{label:"Shard 2 Primary"},style:{background:"#f59e0b",color:"white",border:"1px solid #d97706",width:140}},{id:"s2s1",position:{x:300,y:350},data:{label:"Secondary"},style:{background:"#374151",color:"gray",border:"1px solid #4b5563",width:100,fontSize:"12px"}},{id:"s2s2",position:{x:420,y:350},data:{label:"Secondary"},style:{background:"#374151",color:"gray",border:"1px solid #4b5563",width:100,fontSize:"12px"}},{id:"s3p",position:{x:650,y:250},data:{label:"Shard 3 Primary"},style:{background:"#f59e0b",color:"white",border:"1px solid #d97706",width:140}},{id:"s3s1",position:{x:600,y:350},data:{label:"Secondary"},style:{background:"#374151",color:"gray",border:"1px solid #4b5563",width:100,fontSize:"12px"}},{id:"s3s2",position:{x:720,y:350},data:{label:"Secondary"},style:{background:"#374151",color:"gray",border:"1px solid #4b5563",width:100,fontSize:"12px"}}],l=[{id:"e1",source:"app",target:"router",animated:!0,style:{stroke:"#9ca3af"}},{id:"e2",source:"router",target:"config",style:{stroke:"#6366f1",strokeDasharray:"5,5"},label:"Metadata"},{id:"e3",source:"router",target:"s1p",style:{stroke:"#10b981"}},{id:"e4",source:"router",target:"s2p",style:{stroke:"#10b981"}},{id:"e5",source:"router",target:"s3p",style:{stroke:"#10b981"}},{id:"r1",source:"s1p",target:"s1s1",style:{stroke:"#4b5563"},markerEnd:{type:r.ArrowClosed}},{id:"r2",source:"s1p",target:"s1s2",style:{stroke:"#4b5563"},markerEnd:{type:r.ArrowClosed}},{id:"r3",source:"s2p",target:"s2s1",style:{stroke:"#4b5563"},markerEnd:{type:r.ArrowClosed}},{id:"r4",source:"s2p",target:"s2s2",style:{stroke:"#4b5563"},markerEnd:{type:r.ArrowClosed}},{id:"r5",source:"s3p",target:"s3s1",style:{stroke:"#4b5563"},markerEnd:{type:r.ArrowClosed}},{id:"r6",source:"s3p",target:"s3s2",style:{stroke:"#4b5563"},markerEnd:{type:r.ArrowClosed}}],i=[{id:"p",position:{x:250,y:50},data:{label:"Primary (Fails)"},style:{background:"#ef4444",color:"white",border:"1px solid #b91c1c",width:150}},{id:"s1",position:{x:100,y:200},data:{label:"Secondary 1"},style:{background:"#10b981",color:"white",border:"1px solid #059669",width:150}},{id:"s2",position:{x:400,y:200},data:{label:"Secondary 2"},style:{background:"#374151",color:"white",border:"1px solid #4b5563",width:150}}],d=[{id:"h1",source:"p",target:"s1",label:"Heartbeat Timeout",style:{stroke:"#ef4444",strokeDasharray:"5,5"},markerEnd:{type:r.ArrowClosed,color:"#ef4444"}},{id:"h2",source:"p",target:"s2",label:"Heartbeat Timeout",style:{stroke:"#ef4444",strokeDasharray:"5,5"},markerEnd:{type:r.ArrowClosed,color:"#ef4444"}},{id:"v1",source:"s1",target:"s2",label:"Vote Request",animated:!0,style:{stroke:"#10b981"},markerEnd:{type:r.ArrowClosed}},{id:"v2",source:"s2",target:"s1",label:"Vote Granted",animated:!0,style:{stroke:"#10b981"},markerEnd:{type:r.ArrowClosed}}];return e.jsxs("div",{className:"max-w-5xl mx-auto text-gray-300 space-y-16 pb-20",children:[e.jsxs("div",{className:"border-b border-gray-700 pb-8",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"MongoDB: The Deep Dive"}),e.jsx("p",{className:"text-xl text-gray-400",children:"A comprehensive guide to the document-oriented NoSQL database that powers modern applications."})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-green-600 text-sm px-3 py-1 rounded-full",children:"01"}),"Architecture & Core Concepts"]}),e.jsxs("p",{className:"text-lg leading-relaxed mb-6",children:["MongoDB is a ",e.jsx("strong",{children:"document-oriented database"})," that stores data in flexible, JSON-like documents (BSON). Unlike relational databases, it doesn't require a fixed schema."]}),e.jsxs("div",{className:"bg-gray-800 p-8 rounded-xl border border-gray-700 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Sharded Cluster Architecture"}),e.jsx(a,{initialNodes:t,initialEdges:l,title:"MongoDB Sharded Cluster"}),e.jsxs("div",{className:"mt-6 space-y-4",children:[e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-green-900/50",children:[e.jsx("strong",{className:"text-green-400",children:"mongos (Router)"}),e.jsx("p",{className:"text-sm mt-2",children:"Query router. Directs client requests to appropriate shards based on shard key."})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-blue-900/50",children:[e.jsx("strong",{className:"text-blue-400",children:"Config Servers"}),e.jsx("p",{className:"text-sm mt-2",children:"Store cluster metadata: shard key ranges, chunk locations, cluster topology."})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-orange-900/50",children:[e.jsx("strong",{className:"text-orange-400",children:"Shards (Replica Sets)"}),e.jsx("p",{className:"text-sm mt-2",children:"Each shard is a replica set (primary + secondaries) storing a subset of data."})]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"BSON (Binary JSON)"}),e.jsx(s,{language:"json",code:`// JSON-like document
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "name": "Alice",
  "age": 30,
  "email": "alice@example.com",
  "address": {
    "street": "123 Main St",
    "city": "New York"
  },
  "hobbies": ["reading", "hiking"],
  "created_at": ISODate("2024-01-15T10:00:00Z")
}

// BSON adds extra types:
// - ObjectId (12-byte unique identifier)
// - Date (millisecond precision)
// - Binary data
// - Regular expressions
// - 32-bit and 64-bit integers`})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-blue-600 text-sm px-3 py-1 rounded-full",children:"02"}),"Data Model & Storage"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Schema Design Patterns"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-green-400 font-bold mb-3",children:"Embedding (Denormalization)"}),e.jsx(s,{language:"javascript",code:`// One-to-Few: Embed related data
{
  "_id": 1,
  "name": "Blog Post",
  "comments": [
    {
      "user": "Alice",
      "text": "Great post!",
      "date": ISODate("2024-01-15")
    },
    {
      "user": "Bob",
      "text": "Thanks!",
      "date": ISODate("2024-01-16")
    }
  ]
}

// Pros: Single read, atomic updates
// Cons: 16MB document limit`})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-blue-400 font-bold mb-3",children:"Referencing (Normalization)"}),e.jsx(s,{language:"javascript",code:`// One-to-Many: Use references
// User document
{
  "_id": 1,
  "name": "Alice"
}

// Posts collection
{
  "_id": 101,
  "title": "My Post",
  "author_id": 1  // Reference
}

// Pros: No duplication, flexibility
// Cons: Multiple queries needed`})]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"WiredTiger Storage Engine"}),e.jsx(s,{language:"python",code:`# WiredTiger features:
# 1. Document-level concurrency (MVCC)
# 2. Compression (Snappy, zlib, zstd)
# 3. Checkpointing every 60 seconds
# 4. Journal for durability

# Configuration example
mongod --storageEngine wiredTiger \\
  --wiredTigerCacheSizeGB 4 \\
  --wiredTigerCollectionBlockCompressor snappy

# Storage layout:
# /data/db/
#   journal/           # Write-ahead log
#   collection-*.wt    # Collection data files
#   index-*.wt         # Index files
#   WiredTiger.wt      # Metadata`})]}),e.jsxs("div",{className:"bg-gray-900 p-6 rounded-xl border border-yellow-900/50",children:[e.jsx("h3",{className:"text-xl font-semibold text-yellow-400 mb-4",children:"⚡ Data Modeling Best Practices"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," ",e.jsx("strong",{children:"Embed"})," for one-to-few relationships and data read together"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," ",e.jsx("strong",{children:"Reference"})," for one-to-many or many-to-many relationships"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," ",e.jsx("strong",{children:"Denormalize"})," frequently accessed fields to avoid joins"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," ",e.jsx("strong",{children:"Avoid"})," unbounded arrays (comments, tags) - use separate collection"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," ",e.jsx("strong",{children:"Design"})," for your query patterns, not relational normalization"]})]})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-purple-600 text-sm px-3 py-1 rounded-full",children:"03"}),"Querying & Indexing"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"CRUD Operations"}),e.jsx(s,{language:"python",code:`from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['mydb']
users = db['users']

# Create
users.insert_one({
    'name': 'Alice',
    'age': 30,
    'email': 'alice@example.com'
})

# Read
user = users.find_one({'name': 'Alice'})
all_users = users.find({'age': {'$gte': 25}})

# Update
users.update_one(
    {'name': 'Alice'},
    {'$set': {'age': 31}, '$inc': {'login_count': 1}}
)

# Delete
users.delete_many({'age': {'$lt': 18}})`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Aggregation Pipeline"}),e.jsx(s,{language:"python",code:`# Multi-stage data processing
pipeline = [
    # Stage 1: Filter documents
    {'$match': {'status': 'active'}},
    
    # Stage 2: Group and calculate
    {'$group': {
        '_id': '$category',
        'total': {'$sum': '$amount'},
        'count': {'$sum': 1},
        'avg': {'$avg': '$amount'}
    }},
    
    # Stage 3: Sort results
    {'$sort': {'total': -1}},
    
    # Stage 4: Limit output
    {'$limit': 10},
    
    # Stage 5: Project (reshape) output
    {'$project': {
        'category': '$_id',
        'total': 1,
        'count': 1,
        '_id': 0
    }}
]

results = db.orders.aggregate(pipeline)`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Index Types"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-blue-900/50",children:[e.jsx("strong",{className:"text-blue-400 block mb-2",children:"Single Field Index"}),e.jsx(s,{language:"python",code:`db.users.create_index('email')
db.users.create_index([('age', -1)])  # Descending`})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-green-900/50",children:[e.jsx("strong",{className:"text-green-400 block mb-2",children:"Compound Index"}),e.jsx(s,{language:"python",code:`db.users.create_index([
    ('status', 1),
    ('age', -1)
])  # Order matters!`})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-purple-900/50",children:[e.jsx("strong",{className:"text-purple-400 block mb-2",children:"Text Index"}),e.jsx(s,{language:"python",code:`db.articles.create_index([
    ('title', 'text'),
    ('body', 'text')
])`})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-orange-900/50",children:[e.jsx("strong",{className:"text-orange-400 block mb-2",children:"Geospatial Index"}),e.jsx(s,{language:"python",code:`db.places.create_index([
    ('location', '2dsphere')
])`})]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Query Optimization with explain()"}),e.jsx(s,{language:"python",code:`# Check query execution plan
explain = db.users.find({'age': {'$gt': 25}}).explain('executionStats')

# Key metrics:
print(explain['executionStats']['totalDocsExamined'])  # Docs scanned
print(explain['executionStats']['nReturned'])           # Docs returned
print(explain['executionStats']['executionTimeMillis'])

# Ideal: totalDocsExamined ≈ nReturned (covered query)
# Bad: totalDocsExamined >> nReturned (table scan)

# Index usage:
print(explain['queryPlanner']['winningPlan']['indexName'])`})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-red-600 text-sm px-3 py-1 rounded-full",children:"04"}),"Scaling & Distribution"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-8 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Replica Set Elections"}),e.jsx(a,{initialNodes:i,initialEdges:d,title:"Replica Set Election Process"})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Sharding Strategy"}),e.jsx(s,{language:"javascript",code:`// Enable sharding on database
sh.enableSharding("mydb")

// Choose shard key (critical decision!)
sh.shardCollection("mydb.users", { "user_id": "hashed" })

// Shard key options:
// 1. Hashed - Even distribution (random writes)
sh.shardCollection("mydb.logs", { "timestamp": "hashed" })

// 2. Range-based - Conditional queries
sh.shardCollection("mydb.orders", { "region": 1, "date": 1 })

// 3. Compound - Balance distribution and locality
sh.shardCollection("mydb.events", { 
    "tenant_id": 1,      // High cardinality
    "created_at": 1      // Monotonic
})

// Bad shard keys:
// ❌ Low cardinality (status: "active"|"inactive")
// ❌ Monotonically increasing (_id, timestamp)
// ❌ User ID (if requests per user vary widely)`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Read & Write Concerns"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-green-400 font-bold mb-3",children:"Write Concerns"}),e.jsx(s,{language:"python",code:`# w=1 (default): Acknowledge from primary
db.users.insert_one(
    {'name': 'Alice'},
    write_concern=WriteConcern(w=1)
)

# w='majority': Wait for majority
db.users.insert_one(
    {'name': 'Bob'},
    write_concern=WriteConcern(w='majority')
)

# j=True: Wait for journal sync
db.users.insert_one(
    {'name': 'Carol'},
    write_concern=WriteConcern(w=1, j=True)
)`})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-blue-400 font-bold mb-3",children:"Read Concerns"}),e.jsx(s,{language:"python",code:`# local: Read from primary (default)
db.users.find_one(
    {'name': 'Alice'},
    read_concern=ReadConcern('local')
)

# majority: Read committed data
db.users.find_one(
    {'name': 'Bob'},
    read_concern=ReadConcern('majority')
)

# linearizable: Read most recent
db.users.find_one(
    {'name': 'Carol'},
    read_concern=ReadConcern('linearizable')
)`})]})]})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-orange-600 text-sm px-3 py-1 rounded-full",children:"05"}),"Performance Optimization"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Index Best Practices"}),e.jsx(s,{language:"python",code:`# ESR Rule: Equality, Sort, Range
# Query: find users by status, sorted by age, with age > 25
db.users.find({'status': 'active', 'age': {'$gt': 25}}).sort('age', -1)

# Optimal index: status (E), age (S + R)
db.users.create_index([('status', 1), ('age', -1)])

# Covered query: Return only indexed fields (no document fetch)
db.users.find(
    {'status': 'active'},
    {'status': 1, 'age': 1, '_id': 0}  # Only indexed fields
).hint('status_1_age_-1')

# Monitor index usage
db.users.aggregate([
    {'$indexStats': {}}
])

# Drop unused indexes (they slow down writes)
db.users.dropIndex('unused_index_name')`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Connection Pooling"}),e.jsx(s,{language:"python",code:`# Configure connection pool
client = MongoClient(
    'mongodb://localhost:27017/',
    maxPoolSize=100,        # Max connections
    minPoolSize=10,         # Min connections (keep warm)
    maxIdleTimeMS=45000,    # Close idle connections
    serverSelectionTimeoutMS=5000,
    connectTimeoutMS=10000,
    socketTimeoutMS=30000
)

# Monitor connections
db.command('serverStatus')['connections']
# {
#   'current': 52,
#   'available': 48,
#   'totalCreated': 142
# }`})]}),e.jsxs("div",{className:"bg-gray-900 p-6 rounded-xl border border-yellow-900/50",children:[e.jsx("h3",{className:"text-xl font-semibold text-yellow-400 mb-4",children:"⚡ Performance Checklist"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"✓"})," ",e.jsx("strong",{children:"Index"})," all query predicates (use explain() to verify)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"✓"})," ",e.jsx("strong",{children:"Limit"})," projection fields (don't fetch entire documents)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"✓"})," ",e.jsx("strong",{children:"Batch"})," bulk writes (insertMany, bulkWrite)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"✓"})," ",e.jsx("strong",{children:"Working Set"})," should fit in RAM (monitor cache hit ratio)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"✓"})," ",e.jsx("strong",{children:"Shard"})," horizontally when single server maxed"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"✓"})," ",e.jsx("strong",{children:"Monitor"})," slow queries (profiling level 1 or 2)"]})]})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-pink-600 text-sm px-3 py-1 rounded-full",children:"06"}),"Use Cases & Comparisons"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"overflow-x-auto mb-8",children:e.jsxs("table",{className:"w-full text-sm border border-gray-700",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-800 border-b border-gray-700",children:[e.jsx("th",{className:"text-left p-3 text-white",children:"Feature"}),e.jsx("th",{className:"text-left p-3 text-green-400",children:"MongoDB"}),e.jsx("th",{className:"text-left p-3 text-blue-400",children:"PostgreSQL"}),e.jsx("th",{className:"text-left p-3 text-purple-400",children:"Cassandra"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"p-3 font-semibold",children:"Data Model"}),e.jsx("td",{className:"p-3",children:"Document (BSON)"}),e.jsx("td",{className:"p-3",children:"Relational (SQL)"}),e.jsx("td",{className:"p-3",children:"Wide-column"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"p-3 font-semibold",children:"Schema"}),e.jsx("td",{className:"p-3 text-green-400",children:"Flexible, dynamic"}),e.jsx("td",{className:"p-3",children:"Strict, predefined"}),e.jsx("td",{className:"p-3",children:"Fixed per table"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"p-3 font-semibold",children:"Transactions"}),e.jsx("td",{className:"p-3",children:"ACID (4.0+)"}),e.jsx("td",{className:"p-3 text-green-400",children:"Full ACID"}),e.jsx("td",{className:"p-3",children:"Limited (LWT)"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"p-3 font-semibold",children:"Scaling"}),e.jsx("td",{className:"p-3",children:"Horizontal (sharding)"}),e.jsx("td",{className:"p-3",children:"Vertical primarily"}),e.jsx("td",{className:"p-3 text-green-400",children:"Linear horizontal"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"p-3 font-semibold",children:"Joins"}),e.jsx("td",{className:"p-3",children:"$lookup (limited)"}),e.jsx("td",{className:"p-3 text-green-400",children:"Efficient joins"}),e.jsx("td",{className:"p-3 text-red-400",children:"Not supported"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"p-3 font-semibold",children:"Best For"}),e.jsx("td",{className:"p-3",children:"Product catalogs, CMS"}),e.jsx("td",{className:"p-3",children:"Complex queries, OLTP"}),e.jsx("td",{className:"p-3",children:"Time-series, IoT"})]})]})]})}),e.jsxs("div",{className:"bg-gray-900 p-6 rounded-xl border border-green-900/50",children:[e.jsx("h3",{className:"text-xl font-semibold text-green-400 mb-4",children:"🎯 When to Use MongoDB"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-green-400 font-bold mb-2",children:"Perfect For:"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"✓ Product catalogs (e-commerce)"}),e.jsx("li",{children:"✓ Content management systems"}),e.jsx("li",{children:"✓ Real-time analytics"}),e.jsx("li",{children:"✓ Mobile/web applications"}),e.jsx("li",{children:"✓ User profiles and personalization"}),e.jsx("li",{children:"✓ Rapid prototyping (flexible schema)"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-red-400 font-bold mb-2",children:"Not Ideal For:"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"→ Complex multi-table joins"}),e.jsx("li",{children:"→ Financial transactions (use RDBMS)"}),e.jsx("li",{children:"→ Heavy analytics (use data warehouse)"}),e.jsx("li",{children:"→ Graph relationships (use Neo4j)"})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Real-World Use Cases"}),e.jsxs("div",{className:"space-y-4 text-sm",children:[e.jsxs("div",{className:"bg-gray-900 p-4 rounded",children:[e.jsx("strong",{className:"text-blue-400",children:"eBay"}),e.jsx("p",{className:"mt-1",children:"Product catalog with billions of listings. Schema flexibility for varied product types."})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded",children:[e.jsx("strong",{className:"text-green-400",children:"Uber"}),e.jsx("p",{className:"mt-1",children:"Geospatial queries for driver/rider matching. Real-time location tracking."})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded",children:[e.jsx("strong",{className:"text-purple-400",children:"Forbes"}),e.jsx("p",{className:"mt-1",children:"Content management for articles, images, videos. Fast reads for high traffic."})]})]})]})]})]}),e.jsx("div",{className:"pt-8 border-t border-gray-700",children:e.jsxs("p",{className:"text-sm text-gray-500",children:["📚 Further Reading: ",e.jsx("a",{href:"https://docs.mongodb.com/",className:"text-blue-400 hover:underline",children:"Official MongoDB Documentation"})," |",e.jsx("a",{href:"https://university.mongodb.com/",className:"text-blue-400 hover:underline ml-2",children:"MongoDB University"})]})})]})};export{p as default};
