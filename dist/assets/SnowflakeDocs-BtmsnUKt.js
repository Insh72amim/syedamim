import{j as e}from"./ui-C9KrBvbE.js";import"./vendor-C-RugAsD.js";import{I as r}from"./InteractiveDiagram-BfeYCxPA.js";import{C as a}from"./CodeBlock-B1pjjoNU.js";import{M as s}from"./reactflow-Bog5v55p.js";/* empty css              */import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const j=()=>{const l=[{id:"users",position:{x:250,y:0},data:{label:"Users & Apps (BI, ETL, DS)"},style:{background:"#1f2937",color:"white",border:"1px solid #374151",width:200}},{id:"services",position:{x:250,y:100},data:{label:"Cloud Services (Auth, Meta, Opt)"},style:{background:"#7c2d12",color:"white",border:"1px solid #f97316",width:250}},{id:"vw1",position:{x:50,y:250},data:{label:"VW: Small"},style:{background:"#1e3a8a",color:"white",border:"1px solid #3b82f6",width:100}},{id:"vw2",position:{x:250,y:250},data:{label:"VW: Large"},style:{background:"#1e3a8a",color:"white",border:"1px solid #3b82f6",width:100}},{id:"vw3",position:{x:450,y:250},data:{label:"VW: X-Large"},style:{background:"#1e3a8a",color:"white",border:"1px solid #3b82f6",width:100}},{id:"storage",position:{x:250,y:350},data:{label:"Storage (S3/Blob/GCS)"},style:{background:"#065f46",color:"white",border:"1px solid #10b981",width:250}}],t=[{id:"e1",source:"users",target:"services",style:{stroke:"#9ca3af"},markerEnd:{type:s.ArrowClosed}},{id:"e2",source:"services",target:"vw1",style:{stroke:"#f97316"},markerEnd:{type:s.ArrowClosed}},{id:"e3",source:"services",target:"vw2",style:{stroke:"#f97316"},markerEnd:{type:s.ArrowClosed}},{id:"e4",source:"services",target:"vw3",style:{stroke:"#f97316"},markerEnd:{type:s.ArrowClosed}},{id:"e5",source:"vw1",target:"storage",style:{stroke:"#3b82f6"},markerEnd:{type:s.ArrowClosed}},{id:"e6",source:"vw2",target:"storage",style:{stroke:"#3b82f6"},markerEnd:{type:s.ArrowClosed}},{id:"e7",source:"vw3",target:"storage",style:{stroke:"#3b82f6"},markerEnd:{type:s.ArrowClosed}}],i=[{id:"u1",position:{x:0,y:0},data:{label:"User 1"},style:{background:"#1f2937",color:"white",border:"1px solid #374151",width:80}},{id:"vw",position:{x:150,y:100},data:{label:"Warehouse"},style:{background:"#1e3a8a",color:"white",border:"1px solid #3b82f6",width:100}},{id:"s",position:{x:150,y:200},data:{label:"Storage"},style:{background:"#065f46",color:"white",border:"1px solid #10b981",width:100}},{id:"rc",position:{x:300,y:100},data:{label:"Result Cache"},style:{background:"#7c3aed",color:"white",border:"1px solid #8b5cf6",width:100}},{id:"u2",position:{x:450,y:0},data:{label:"User 2"},style:{background:"#1f2937",color:"white",border:"1px solid #374151",width:80}}],d=[{id:"c1",source:"u1",target:"vw",label:"Query",style:{stroke:"#9ca3af"},markerEnd:{type:s.ArrowClosed}},{id:"c2",source:"vw",target:"s",label:"Read",style:{stroke:"#3b82f6"},markerEnd:{type:s.ArrowClosed}},{id:"c3",source:"s",target:"vw",style:{stroke:"#3b82f6"},markerEnd:{type:s.ArrowClosed}},{id:"c4",source:"vw",target:"rc",label:"Save",style:{stroke:"#8b5cf6"},markerEnd:{type:s.ArrowClosed}},{id:"c5",source:"u2",target:"rc",label:"Same Query",style:{stroke:"#9ca3af"},markerEnd:{type:s.ArrowClosed}},{id:"c6",source:"rc",target:"u2",label:"Instant Result",style:{stroke:"#8b5cf6"},markerEnd:{type:s.ArrowClosed}}],o=[{id:"now",position:{x:0,y:50},data:{label:"Active Data"},style:{background:"#059669",color:"white",border:"1px solid #10b981",width:120}},{id:"tt",position:{x:200,y:50},data:{label:"Time Travel (1-90 days)"},style:{background:"#1e40af",color:"white",border:"1px solid #3b82f6",width:180}},{id:"fs",position:{x:450,y:50},data:{label:"Fail-Safe (7 days)"},style:{background:"#b91c1c",color:"white",border:"1px solid #ef4444",width:150}},{id:"del",position:{x:650,y:50},data:{label:"Deleted"},style:{background:"#1f2937",color:"gray",border:"1px dashed gray",width:100}}],c=[{id:"t1",source:"now",target:"tt",label:"History",style:{stroke:"#9ca3af"},markerEnd:{type:s.ArrowClosed}},{id:"t2",source:"tt",target:"fs",label:"Expire",style:{stroke:"#9ca3af"},markerEnd:{type:s.ArrowClosed}},{id:"t3",source:"fs",target:"del",label:"Purge",style:{stroke:"#9ca3af"},markerEnd:{type:s.ArrowClosed}}],n=[{id:"prov",position:{x:50,y:100},data:{label:"Provider DB"},style:{background:"#1f2937",color:"white",border:"1px solid #374151",width:120}},{id:"share",position:{x:250,y:100},data:{label:"Share Object"},style:{background:"#1e3a8a",color:"white",border:"1px solid #3b82f6",width:120}},{id:"c1",position:{x:450,y:0},data:{label:"Consumer 1 DB"},style:{background:"#065f46",color:"white",border:"1px solid #10b981",width:120}},{id:"c2",position:{x:450,y:200},data:{label:"Consumer 2 DB"},style:{background:"#065f46",color:"white",border:"1px solid #10b981",width:120}}],x=[{id:"s1",source:"prov",target:"share",label:"Grant Access",style:{stroke:"#9ca3af"},markerEnd:{type:s.ArrowClosed}},{id:"s2",source:"share",target:"c1",label:"Read Only",style:{stroke:"#3b82f6",strokeDasharray:"5,5"},markerEnd:{type:s.ArrowClosed}},{id:"s3",source:"share",target:"c2",label:"Read Only",style:{stroke:"#3b82f6",strokeDasharray:"5,5"},markerEnd:{type:s.ArrowClosed}}];return e.jsxs("div",{className:"max-w-5xl mx-auto text-gray-300 space-y-16 pb-20",children:[e.jsxs("div",{className:"border-b border-gray-700 pb-8",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"Snowflake: The Deep Dive"}),e.jsx("p",{className:"text-xl text-gray-400",children:"A comprehensive guide to the cloud data warehouse that revolutionized analytics with its unique multi-cluster shared data architecture."})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-blue-600 text-sm px-3 py-1 rounded-full",children:"01"}),"Multi-Cluster Shared Data Architecture"]}),e.jsxs("p",{className:"text-lg leading-relaxed mb-6",children:["Snowflake's genius: ",e.jsx("strong",{children:"separate compute from storage"}),". Unlike traditional databases, Snowflake has three independent layers."]}),e.jsxs("div",{className:"bg-gray-800 p-8 rounded-xl border border-gray-700 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"The Three-Layer Architecture"}),e.jsx(r,{initialNodes:l,initialEdges:t,title:"Snowflake Architecture",height:"450px"}),e.jsxs("div",{className:"mt-6 space-y-4",children:[e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-blue-900/50",children:[e.jsx("strong",{className:"text-blue-400",children:"Compute Layer (Virtual Warehouses)"}),e.jsx("p",{className:"text-sm mt-2",children:"Independent compute clusters. Auto-suspend when idle. Scale up/down instantly."})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-orange-900/50",children:[e.jsx("strong",{className:"text-orange-400",children:"Services Layer"}),e.jsx("p",{className:"text-sm mt-2",children:"Brain of Snowflake: query optimization, metadata, access control, always-on."})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-green-900/50",children:[e.jsx("strong",{className:"text-green-400",children:"Storage Layer"}),e.jsx("p",{className:"text-sm mt-2",children:"Columnar, compressed, immutable micro-partitions on cloud object storage."})]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Why This Architecture Wins"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-green-400 font-bold mb-3",children:"Benefits"}),e.jsxs("ul",{className:"text-sm space-y-2",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-green-400",children:"✓"})," Infinite concurrency (spin up 100 warehouses)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-green-400",children:"✓"})," Zero storage management (cloud handles it)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-green-400",children:"✓"})," Pay only for compute used (auto-suspend)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-green-400",children:"✓"})," Instant scaling (no downtime)"]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-orange-400 font-bold mb-3",children:"vs Traditional Databases"}),e.jsxs("ul",{className:"text-sm space-y-2",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-red-400",children:"✗"})," Single compute pool (contention)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-red-400",children:"✗"})," Disk management overhead"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-red-400",children:"✗"})," Always-on pricing"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-red-400",children:"✗"})," Downtime for scaling"]})]})]})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-green-600 text-sm px-3 py-1 rounded-full",children:"02"}),"Virtual Warehouses & Auto-Scaling"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Warehouse Sizes"}),e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700",children:[e.jsx("th",{className:"text-left py-2 text-white",children:"Size"}),e.jsx("th",{className:"text-left py-2 text-white",children:"Nodes"}),e.jsx("th",{className:"text-left py-2 text-white",children:"Credits/Hour"}),e.jsx("th",{className:"text-left py-2 text-white",children:"Best For"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"py-2 font-bold",children:"X-Small"}),e.jsx("td",{className:"py-2",children:"1"}),e.jsx("td",{className:"py-2",children:"1"}),e.jsx("td",{className:"py-2",children:"Dev/test, simple queries"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"py-2 font-bold",children:"Small"}),e.jsx("td",{className:"py-2",children:"2"}),e.jsx("td",{className:"py-2",children:"2"}),e.jsx("td",{className:"py-2",children:"Light production"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"py-2 font-bold text-blue-400",children:"Medium"}),e.jsx("td",{className:"py-2",children:"4"}),e.jsx("td",{className:"py-2",children:"4"}),e.jsx("td",{className:"py-2",children:"Standard production"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"py-2 font-bold text-green-400",children:"Large"}),e.jsx("td",{className:"py-2",children:"8"}),e.jsx("td",{className:"py-2",children:"8"}),e.jsx("td",{className:"py-2",children:"Heavy ETL, large scans"})]}),e.jsxs("tr",{className:"border-b border-gray-800",children:[e.jsx("td",{className:"py-2 font-bold",children:"X-Large"}),e.jsx("td",{className:"py-2",children:"16"}),e.jsx("td",{className:"py-2",children:"16"}),e.jsx("td",{className:"py-2",children:"Complex joins, aggregations"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 font-bold text-purple-400",children:"6X-Large"}),e.jsx("td",{className:"py-2",children:"128"}),e.jsx("td",{className:"py-2",children:"128"}),e.jsx("td",{className:"py-2",children:"Massive parallel queries"})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Multi-Cluster Warehouses"}),e.jsx(a,{language:"sql",code:`-- Create auto-scaling warehouse
CREATE WAREHOUSE ETL_WH
    WAREHOUSE_SIZE = 'LARGE'
    MIN_CLUSTER_COUNT = 1
    MAX_CLUSTER_COUNT = 10
    SCALING_POLICY = 'STANDARD'    -- Start new cluster when queue builds up
    AUTO_SUSPEND = 60              -- Suspend after 60 seconds idle
    AUTO_RESUME = TRUE;            -- Auto-start on query

-- Economy mode: slower to scale, cheaper
ALTER WAREHOUSE ETL_WH SET SCALING_POLICY = 'ECONOMY';`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Result Set Caching"}),e.jsx("p",{className:"mb-4",children:"Snowflake caches query results for 24 hours. Identical queries = instant results, zero compute cost."}),e.jsx(r,{initialNodes:i,initialEdges:d,title:"Result Cache Flow",height:"350px"})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-purple-600 text-sm px-3 py-1 rounded-full",children:"03"}),"Micro-Partitions & Clustering"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-8 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"What are Micro-Partitions?"}),e.jsx("p",{className:"mb-4",children:"Snowflake automatically splits tables into immutable, compressed, columnar micro-partitions (50-500MB uncompressed)."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-blue-400 font-bold mb-3",children:"Automatic Features"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"• No user-defined partitions (unlike Hive)"}),e.jsx("li",{children:"• Automatically maintains statistics (min/max/distinct)"}),e.jsx("li",{children:"• Immutable (updates create new micro-partitions)"}),e.jsx("li",{children:"• Columnar compression (5-10x typical)"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-green-400 font-bold mb-3",children:"Query Optimization"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"• Pruning: Skip micro-partitions using metadata"}),e.jsx("li",{children:"• Min/max zone maps for every column"}),e.jsx("li",{children:"• Bloom filters for equality checks"}),e.jsx("li",{children:"• Automatic columnar projection"})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Clustering Keys"}),e.jsx("p",{className:"mb-4",children:"For large tables, define clustering to co-locate related data:"}),e.jsx(a,{language:"sql",code:`-- Define clustering key (sort order)
ALTER TABLE events CLUSTER BY (event_date, user_id);

-- Snowflake will automatically re-cluster in the background
-- Check clustering health
SELECT SYSTEM$CLUSTERING_INFORMATION('events', '(event_date, user_id)');

-- Manual re-clustering (usually not needed)
ALTER TABLE events RECLUSTER;

-- Monitor clustering depth (lower = better)
SELECT 
    table_name,
    clustering_key,
    average_depth,
    average_overlaps
FROM TABLE(INFORMATION_SCHEMA.AUTOMATIC_CLUSTERING_HISTORY())
WHERE table_name = 'EVENTS';`})]}),e.jsxs("div",{className:"bg-gray-900 p-6 rounded-xl border border-yellow-900/50",children:[e.jsx("h3",{className:"text-xl font-semibold text-yellow-400 mb-4",children:"⚡ Clustering Best Practices"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Cluster on columns used in WHERE clauses (date, region, category)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Use 1-4 columns max (diminishing returns)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," High-cardinality columns first (date before boolean)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Only cluster tables ",">"," 1TB (overhead for small tables)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Enable automatic clustering for frequently updated tables"]})]})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-red-600 text-sm px-3 py-1 rounded-full",children:"04"}),"Time Travel & Data Protection"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-8 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Time Travel Capabilities"}),e.jsx(r,{initialNodes:o,initialEdges:c,title:"Time Travel Timeline",height:"350px"}),e.jsxs("div",{className:"mt-6 grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-blue-900/50",children:[e.jsx("h4",{className:"font-bold text-blue-400 mb-2",children:"Time Travel (User-Accessible)"}),e.jsx("p",{className:"text-sm mb-2",children:"Query historical data, restore dropped objects"}),e.jsx(a,{language:"sql",code:`-- Query table as of 1 hour ago
SELECT * FROM sales
AT(OFFSET => -3600);

-- Query at specific timestamp
SELECT * FROM sales
AT(TIMESTAMP => '2024-01-15 10:00:00');

-- Restore dropped table
UNDROP TABLE sales;

-- Clone table at point in time
CREATE TABLE sales_backup
CLONE sales
AT(TIMESTAMP => '2024-01-15 00:00:00');`})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-red-900/50",children:[e.jsx("h4",{className:"font-bold text-red-400 mb-2",children:"Fail-Safe (Snowflake-Only)"}),e.jsx("p",{className:"text-sm mb-2",children:"No user access. Contact Snowflake support for recovery."}),e.jsxs("ul",{className:"text-sm space-y-1 mt-3",children:[e.jsx("li",{children:"• Last resort disaster recovery"}),e.jsx("li",{children:"• Automatic for all permanent tables"}),e.jsx("li",{children:"• No additional cost (included)"}),e.jsx("li",{children:"• 7-day window after Time Travel expires"})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Zero-Copy Cloning"}),e.jsx("p",{className:"mb-4",children:"Clone entire databases/schemas/tables instantly without copying data."}),e.jsx(a,{language:"sql",code:`-- Clone production database for testing (instant, no extra storage initially)
CREATE DATABASE dev_db CLONE prod_db;

-- Clone table for experimentation
CREATE TABLE sales_experiment CLONE sales;

-- Clone shares metadata only; storage is shared until modifications
-- Modified micro-partitions are copied (copy-on-write)`})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-orange-600 text-sm px-3 py-1 rounded-full",children:"05"}),"Secure Data Sharing"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-8 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"How Data Sharing Works"}),e.jsx(r,{initialNodes:n,initialEdges:x,title:"Secure Data Sharing"}),e.jsx("div",{className:"mt-6 bg-gray-900 p-4 rounded border border-gray-700",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{className:"text-blue-400",children:"Key Feature:"})," No data movement. Consumer queries directly access provider's storage. Provider pays storage, consumer pays compute."]})})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Creating a Share"}),e.jsx(a,{language:"sql",code:`-- Provider: Create and configure share
CREATE SHARE sales_share;

-- Add database/schema/tables
GRANT USAGE ON DATABASE prod_db TO SHARE sales_share;
GRANT USAGE ON SCHEMA prod_db.public TO SHARE sales_share;
GRANT SELECT ON TABLE prod_db.public.sales TO SHARE sales_share;

-- Add consumer account
ALTER SHARE sales_share ADD ACCOUNTS = XYZ12345;

-- Consumer: Create database from share
CREATE DATABASE shared_sales_data 
FROM SHARE provider_account.sales_share;

-- Query shared data (no copy!)
SELECT * FROM shared_sales_data.public.sales;`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Secure Views for Row-Level Security"}),e.jsx(a,{language:"sql",code:`-- Provider: Create secure view with row filtering
CREATE SECURE VIEW sales_filtered AS
SELECT 
    order_id,
    product,
    amount,
    customer_id
FROM sales
WHERE region = CURRENT_ACCOUNT();  -- Only show data for consumer's region

-- Share the view (not the base table)
GRANT SELECT ON VIEW sales_filtered TO SHARE sales_share;

-- Consumer sees only their region's data
-- Cannot see view definition (SECURE keyword)`})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-pink-600 text-sm px-3 py-1 rounded-full",children:"06"}),"Query Optimization & Monitoring"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Query Profile - The Ultimate Debug Tool"}),e.jsx(a,{language:"sql",code:`-- Get query ID
SELECT QUERY_ID, QUERY_TEXT, EXECUTION_TIME 
FROM TABLE(INFORMATION_SCHEMA.QUERY_HISTORY())
WHERE QUERY_TEXT LIKE '%sales%'
ORDER BY START_TIME DESC
LIMIT 10;

-- Analyze query profile (in Snowflake UI: Query ID → Query Profile)
-- Shows:
-- - Execution plan with node-level metrics
-- - Partitions scanned vs pruned
-- - Spilling to disk (bad!)
-- - Join strategies`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Materialized Views"}),e.jsx(a,{language:"sql",code:`-- Create materialized view (automatically maintained)
CREATE MATERIALIZED VIEW daily_sales_summary AS
SELECT 
    DATE(order_time) AS order_date,
    product_category,
    SUM(amount) AS total_sales,
    COUNT(*) AS order_count
FROM sales
GROUP BY DATE(order_time), product_category;

-- Query the MV (instant, pre-computed)
SELECT * FROM daily_sales_summary WHERE order_date = '2024-01-15';

-- Snowflake auto-refreshes when base table changes
-- Manual refresh if needed
ALTER MATERIALIZED VIEW daily_sales_summary REFRESH;`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Search Optimization Service"}),e.jsx(a,{language:"sql",code:`-- Enable for point lookups (WHERE col = value)
ALTER TABLE customers ADD SEARCH OPTIMIZATION ON EQUALITY(email, phone);

-- Automatically creates/maintains search access paths
-- Dramatically speeds up:
-- - WHERE email = 'alice@example.com'
-- - WHERE phone IN ('555-1234', '555-5678')

-- Check search optimization progress
SELECT * FROM TABLE(INFORMATION_SCHEMA.SEARCH_OPTIMIZATION_HISTORY(
    TABLE_NAME => 'CUSTOMERS'
));`})]}),e.jsxs("div",{className:"bg-gray-900 p-6 rounded-xl border border-yellow-900/50",children:[e.jsx("h3",{className:"text-xl font-semibold text-yellow-400 mb-4",children:"⚡ Performance Checklist"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"✓"})," Use ",e.jsx("strong",{children:"clustering keys"})," for large tables with filter patterns"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"✓"})," Enable ",e.jsx("strong",{children:"search optimization"})," for point lookups"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"✓"})," Create ",e.jsx("strong",{children:"materialized views"})," for expensive aggregations"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"✓"})," Use ",e.jsx("strong",{children:"result caching"})," (free!) for repeated queries"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"✓"})," Right-size warehouses (check Query Profile for spilling)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"✓"})," Use ",e.jsx("strong",{children:"transient tables"})," for ETL staging (no Fail-Safe cost)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"✓"})," Monitor credit usage: ACCOUNT_USAGE.WAREHOUSE_METERING_HISTORY"]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Cost Monitoring"}),e.jsx(a,{language:"sql",code:`-- Top 10 most expensive queries (by credits)
SELECT 
    query_id,
    query_text,
    warehouse_name,
    credits_used_cloud_services,
    execution_time
FROM SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY
WHERE execution_time > 1000  -- > 1 second
ORDER BY credits_used_cloud_services DESC
LIMIT 10;

-- Daily credit consumption by warehouse
SELECT 
    DATE(start_time) AS date,
    warehouse_name,
    SUM(credits_used) AS total_credits
FROM SNOWFLAKE.ACCOUNT_USAGE.WAREHOUSE_METERING_HISTORY
GROUP BY DATE(start_time), warehouse_name
ORDER BY date DESC, total_credits DESC;`})]})]})]}),e.jsx("div",{className:"pt-8 border-t border-gray-700",children:e.jsxs("p",{className:"text-sm text-gray-500",children:["📚 Further Reading: ",e.jsx("a",{href:"https://docs.snowflake.com/",className:"text-blue-400 hover:underline",children:"Official Snowflake Documentation"})," |",e.jsx("a",{href:"https://community.snowflake.com/",className:"text-blue-400 hover:underline ml-2",children:"Snowflake Community"})]})})]})};export{j as default};
