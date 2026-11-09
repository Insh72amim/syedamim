import{j as e}from"./ui-l-wn3dQa.js";import"./vendor-C-RugAsD.js";import{I as i}from"./InteractiveDiagram-DWUERs3K.js";import{C as a}from"./CodeBlock-CZ62hYHy.js";import{M as s}from"./reactflow-Bog5v55p.js";/* empty css              */import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const p=()=>{const t=[{id:"app",position:{x:400,y:0},data:{label:"Application"},style:{background:"#1f2937",color:"white",border:"1px solid #374151",width:150}},{id:"lb",position:{x:400,y:100},data:{label:"Request Router"},style:{background:"#374151",color:"white",border:"1px solid #4b5563",width:150}},{id:"p1",position:{x:150,y:250},data:{label:`Partition 1
(Hash: 0-999)`},style:{background:"#f59e0b",color:"white",border:"1px solid #d97706",width:160}},{id:"p2",position:{x:400,y:250},data:{label:`Partition 2
(Hash: 1000-1999)`},style:{background:"#f59e0b",color:"white",border:"1px solid #d97706",width:160}},{id:"p3",position:{x:650,y:250},data:{label:`Partition 3
(Hash: 2000-2999)`},style:{background:"#f59e0b",color:"white",border:"1px solid #d97706",width:160}},{id:"az1",position:{x:50,y:400},data:{label:"AZ1 Replica"},style:{background:"#10b981",color:"white",border:"1px solid #059669",width:100,fontSize:"12px"}},{id:"az2",position:{x:180,y:400},data:{label:"AZ2 Replica"},style:{background:"#10b981",color:"white",border:"1px solid #059669",width:100,fontSize:"12px"}},{id:"az3",position:{x:310,y:400},data:{label:"AZ3 Replica"},style:{background:"#10b981",color:"white",border:"1px solid #059669",width:100,fontSize:"12px"}}],r=[{id:"e1",source:"app",target:"lb",animated:!0,style:{stroke:"#9ca3af"}},{id:"e2",source:"lb",target:"p1",style:{stroke:"#f59e0b"}},{id:"e3",source:"lb",target:"p2",style:{stroke:"#f59e0b"}},{id:"e4",source:"lb",target:"p3",style:{stroke:"#f59e0b"}},{id:"r1",source:"p1",target:"az1",label:"Replicate",style:{stroke:"#10b981",strokeDasharray:"5,5"},markerEnd:{type:s.ArrowClosed}},{id:"r2",source:"p1",target:"az2",style:{stroke:"#10b981",strokeDasharray:"5,5"},markerEnd:{type:s.ArrowClosed}},{id:"r3",source:"p1",target:"az3",style:{stroke:"#10b981",strokeDasharray:"5,5"},markerEnd:{type:s.ArrowClosed}}];return e.jsxs("div",{className:"max-w-5xl mx-auto text-gray-300 space-y-16 pb-20",children:[e.jsxs("div",{className:"border-b border-gray-700 pb-8",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"Amazon DynamoDB: The Deep Dive"}),e.jsx("p",{className:"text-xl text-gray-400",children:"A comprehensive guide to AWS's fully-managed NoSQL database service designed for serverless architectures."})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-green-600 text-sm px-3 py-1 rounded-full",children:"01"}),"Architecture & Core Concepts"]}),e.jsxs("p",{className:"text-lg leading-relaxed mb-6",children:["DynamoDB is a ",e.jsx("strong",{children:"fully-managed, serverless NoSQL database"})," that automatically scales and handles all infrastructure management."]}),e.jsxs("div",{className:"bg-gray-800 p-8 rounded-xl border border-gray-700 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Partition-Based Architecture"}),e.jsx(i,{initialNodes:t,initialEdges:r,title:"DynamoDB Partitioning & Replication"}),e.jsxs("div",{className:"mt-6 space-y-4",children:[e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-orange-900/50",children:[e.jsx("strong",{className:"text-orange-400",children:"Automatic Partitioning"}),e.jsx("p",{className:"text-sm mt-2",children:"Data distributed across partitions based on partition key hash. Automatically splits when needed."})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-blue-900/50",children:[e.jsx("strong",{className:"text-blue-400",children:"3-AZ Replication"}),e.jsx("p",{className:"text-sm mt-2",children:"Data automatically replicated across 3 Availability Zones for durability and availability."})]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Capacity Modes"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-green-900/50",children:[e.jsx("strong",{className:"text-green-400",children:"On-Demand"}),e.jsx(a,{language:"text",code:`Pay per request
✓ Auto-scales instantly
✓ No capacity planning
✓ Best for: Unpredictable workloads

Cost: $1.25 per million reads
      $6.25 per million writes`})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-blue-900/50",children:[e.jsx("strong",{className:"text-blue-400",children:"Provisioned"}),e.jsx(a,{language:"text",code:`Pre-allocate capacity
✓ Lower cost for steady traffic
✓ Auto-scaling available
✓ Best for: Predictable workloads

Cost: $0.00065 per RCU/hour
      $0.00065 per WCU/hour`})]})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-blue-600 text-sm px-3 py-1 rounded-full",children:"02"}),"Data Model & Storage"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Primary Keys"}),e.jsx(a,{language:"python",code:`# Simple Primary Key (Partition Key only)
Table: Users
PK: user_id

Item: {user_id: "123", name: "Alice", email: "alice@example.com"}

# Composite Primary Key (Partition + Sort Key)
Table: Orders
PK: customer_id (Partition Key)
SK: order_date (Sort Key)

Item: {
    customer_id: "customer_123",  # Partition key
    order_date: "2024-01-15",     # Sort key
    order_id: "order_456",
    total: 99.99
}

# Benefits of Sort Key:
# 1. Query items within partition (range queries)
# 2. Store related items together
# 3. Enable efficient filtering`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Single-Table Design Pattern"}),e.jsx(a,{language:"python",code:`# Instead of multiple tables, use one table with overloading
# Entity Relationships: Users, Orders, Products

Table: AppData
PK              SK                  Attributes
---------------------------------------------------------------
USER#alice      PROFILE             name, email, created_at
USER#alice      ORDER#2024-01-15    order_id, total, status
USER#alice      ORDER#2024-01-20    order_id, total, status
PRODUCT#laptop  METADATA            name, price, stock
PRODUCT#laptop  REVIEW#alice        rating, comment, date

# Advantages:
# ✓ Single table to manage
# ✓ Atomic transactions across entities
# ✓ Fewer round trips
# ✓ Lower cost

# Access Patterns:
# Get user profile:     GetItem(PK=USER#alice, SK=PROFILE)
# Get user orders:      Query(PK=USER#alice, SK begins_with ORDER#)
# Get product reviews:  Query(PK=PRODUCT#laptop, SK begins_with REVIEW#)`})]}),e.jsxs("div",{className:"bg-gray-900 p-6 rounded-xl border border-yellow-900/50",children:[e.jsx("h3",{className:"text-xl font-semibold text-yellow-400 mb-4",children:"⚡ Design Principles"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"1."})," ",e.jsx("strong",{children:"Model for access patterns"}),", not entities"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"2."})," ",e.jsx("strong",{children:"Denormalize"})," data to minimize queries"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"3."})," ",e.jsx("strong",{children:"Overload"})," keys (e.g., PK contains entity type)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"4."})," ",e.jsx("strong",{children:"Use sparse indexes"})," for optional attributes"]})]})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-purple-600 text-sm px-3 py-1 rounded-full",children:"03"}),"Querying & Indexing"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Read Operations"}),e.jsx(a,{language:"python",code:`import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Users')

# GetItem: Fetch by primary key (fast, predictable)
response = table.get_item(
    Key={'user_id': '123'}
)
item = response['Item']

# Query: Fetch items with same partition key
response = table.query(
    KeyConditionExpression=Key('customer_id').eq('customer_123') &
                          Key('order_date').gte('2024-01-01')
)
items = response['Items']

# Scan: Full table scan (slow, expensive - AVOID!)
response = table.scan(
    FilterExpression=Attr('age').gt(30)
)  # ❌ Scans entire table!

# BatchGetItem: Fetch multiple items efficiently
response = dynamodb.batch_get_item(
    RequestItems={
        'Users': {
            'Keys': [
                {'user_id': '123'},
                {'user_id': '456'},
            ]
        }
    }
)`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Global Secondary Index (GSI)"}),e.jsx(a,{language:"python",code:`# Base table: Users (PK: user_id)
# Want to query by email? Create GSI

GSI: EmailIndex
PK: email
SK: (none or another attribute)

# Create GSI
table.create_global_secondary_index(
    IndexName='EmailIndex',
    KeySchema=[
        {'AttributeName': 'email', 'KeyType': 'HASH'},
    ],
    Projection={'ProjectionType': 'ALL'},
    ProvisionedThroughput={'ReadCapacityUnits': 5, 'WriteCapacityUnits': 5}
)

# Query GSI
response = table.query(
    IndexName='EmailIndex',
    KeyConditionExpression=Key('email').eq('alice@example.com')
)

# GSI Characteristics:
# ✓ Eventually consistent (async updates)
# ✓ Different PK/SK than base table
# ✓ Can have different throughput
# ✓ Up to 20 GSIs per table`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Local Secondary Index (LSI)"}),e.jsx(a,{language:"python",code:`# Base table: Orders (PK: customer_id, SK: order_date)
# Want to sort by total amount? Create LSI

LSI: TotalIndex
PK: customer_id (same as base table)
SK: total

# LSI must be created at table creation
# Cannot add LSI to existing table

# Query LSI
response = table.query(
    IndexName='TotalIndex',
    KeyConditionExpression=Key('customer_id').eq('customer_123'),
    ScanIndexForward=False  # Descending order by total
)

# LSI vs GSI:
# LSI: Same PK as base, strongly consistent, max 10KB items
# GSI: Different PK, eventually consistent, no size limit`})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-red-600 text-sm px-3 py-1 rounded-full",children:"04"}),"Scaling & Distribution"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Auto-Scaling"}),e.jsx(a,{language:"python",code:`# Configure auto-scaling for provisioned mode
client = boto3.client('application-autoscaling')

# Register table as scalable target
client.register_scalable_target(
    ServiceNamespace='dynamodb',
    ResourceId='table/Users',
    ScalableDimension='dynamodb:table:WriteCapacityUnits',
    MinCapacity=5,
    MaxCapacity=100
)

# Create scaling policy
client.put_scaling_policy(
    PolicyName='WriteAutoScaling',
    ServiceNamespace='dynamodb',
    ResourceId='table/Users',
    ScalableDimension='dynamodb:table:WriteCapacityUnits',
    PolicyType='TargetTrackingScaling',
    TargetTrackingScalingPolicyConfiguration={
        'TargetValue': 70.0,  # Target 70% utilization
        'PredefinedMetricSpecification': {
            'PredefinedMetricType': 'DynamoDBWriteCapacityUtilization'
        }
    }
)`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"DynamoDB Streams"}),e.jsx(a,{language:"python",code:`# Enable streams for change data capture
table = dynamodb.create_table(
    TableName='Orders',
    StreamSpecification={
        'StreamEnabled': True,
        'StreamViewType': 'NEW_AND_OLD_IMAGES'  # Include before/after
    },
    # ... other config
)

# Process stream with Lambda
def lambda_handler(event, context):
    for record in event['Records']:
        if record['eventName'] == 'INSERT':
            new_item = record['dynamodb']['NewImage']
            # Process new order...
        elif record['eventName'] == 'MODIFY':
            old_item = record['dynamodb']['OldImage']
            new_item = record['dynamodb']['NewImage']
            # Handle update...

# Use cases:
# ✓ Real-time analytics
# ✓ Data replication
# ✓ Triggering workflows
# ✓ Maintaining materialized views`})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-orange-600 text-sm px-3 py-1 rounded-full",children:"05"}),"Performance Optimization"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"DAX (DynamoDB Accelerator)"}),e.jsx(a,{language:"python",code:`# In-memory cache for DynamoDB (microsecond latency)
import amazondax

# Connect to DAX cluster
dax = amazondax.AmazonDaxClient(
    endpoint_url='dax://my-cluster.abc123.dax-clusters.us-east-1.amazonaws.com'
)

# Use DAX like regular DynamoDB client
response = dax.get_item(
    TableName='Users',
    Key={'user_id': {'S': '123'}}
)

# DAX benefits:
# ✓ 10x performance improvement
# ✓ Microsecond response times
# ✓ Reduces read load on DynamoDB
# ✓ Eventually consistent reads only

# When to use DAX:
# ✓ Read-heavy workloads
# ✓ Repeated reads of same items
# ✓ Latency-sensitive applications`})]}),e.jsxs("div",{className:"bg-gray-900 p-6 rounded-xl border border-yellow-900/50",children:[e.jsx("h3",{className:"text-xl font-semibold text-yellow-400 mb-4",children:"⚡ Hot Partition Prevention"}),e.jsx(a,{language:"python",code:`# ❌ BAD: Monotonic partition key (all writes go to one partition)
PK: timestamp  # All recent writes hit same partition!

# ✓ GOOD: Add random suffix
PK: timestamp#random(1-100)  # Distributes writes

# ✓ GOOD: Composite key with high-cardinality prefix
PK: user_id#timestamp  # Distributes by user

# ✓ GOOD: Hash partition key
import hashlib
def get_partition_key(user_id):
    hash_val = int(hashlib.md5(user_id.encode()).hexdigest(), 16)
    shard = hash_val % 100  # 100 shards
    return f"{shard}#{user_id}"`})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-pink-600 text-sm px-3 py-1 rounded-full",children:"06"}),"Use Cases & Comparisons"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900 p-6 rounded-xl border border-green-900/50",children:[e.jsx("h3",{className:"text-xl font-semibold text-green-400 mb-4",children:"🎯 When to Use DynamoDB"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-green-400 font-bold mb-2",children:"Perfect For:"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"✓ Serverless applications (Lambda)"}),e.jsx("li",{children:"✓ Gaming leaderboards"}),e.jsx("li",{children:"✓ Mobile backends"}),e.jsx("li",{children:"✓ Session management"}),e.jsx("li",{children:"✓ IoT data streams"}),e.jsx("li",{children:"✓ Unpredictable traffic"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-red-400 font-bold mb-2",children:"Not Ideal For:"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"→ Complex joins"}),e.jsx("li",{children:"→ Analytics (use Athena instead)"}),e.jsx("li",{children:"→ Full-text search"}),e.jsx("li",{children:"→ Small workloads (cost)"})]})]})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm border border-gray-700",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-800 border-b border-gray-700",children:[e.jsx("th",{className:"text-left p-3 text-white",children:"Feature"}),e.jsx("th",{className:"text-left p-3 text-orange-400",children:"DynamoDB"}),e.jsx("th",{className:"text-left p-3 text-green-400",children:"MongoDB"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"p-3 font-semibold",children:"Management"}),e.jsx("td",{className:"p-3 text-green-400",children:"Fully managed"}),e.jsx("td",{className:"p-3",children:"Self-hosted or Atlas"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"p-3 font-semibold",children:"Schema"}),e.jsx("td",{className:"p-3",children:"Key-value + documents"}),e.jsx("td",{className:"p-3 text-green-400",children:"Flexible documents"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"p-3 font-semibold",children:"Queries"}),e.jsx("td",{className:"p-3",children:"PK-based only"}),e.jsx("td",{className:"p-3 text-green-400",children:"Rich query language"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"p-3 font-semibold",children:"Scaling"}),e.jsx("td",{className:"p-3 text-green-400",children:"Auto-scales"}),e.jsx("td",{className:"p-3",children:"Manual sharding"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"p-3 font-semibold",children:"Pricing"}),e.jsx("td",{className:"p-3",children:"Pay per request"}),e.jsx("td",{className:"p-3",children:"Instance-based"})]})]})]})})]})]}),e.jsx("div",{className:"pt-8 border-t border-gray-700",children:e.jsxs("p",{className:"text-sm text-gray-500",children:["📚 Further Reading: ",e.jsx("a",{href:"https://docs.aws.amazon.com/dynamodb/",className:"text-blue-400 hover:underline",children:"AWS DynamoDB Documentation"})]})})]})};export{p as default};
