import{j as e}from"./ui-C9KrBvbE.js";import"./vendor-C-RugAsD.js";import{I as l}from"./InteractiveDiagram-BfeYCxPA.js";import{C as s}from"./CodeBlock-B1pjjoNU.js";import{M as r}from"./reactflow-Bog5v55p.js";/* empty css              */import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const g=()=>{const t=[{id:"sql",position:{x:50,y:100},data:{label:"SQL Query"},style:{background:"#1f2937",color:"white",border:"1px solid #374151",width:100}},{id:"p",position:{x:200,y:100},data:{label:"Parser"},style:{background:"#1e3a8a",color:"white",border:"1px solid #3b82f6",width:100}},{id:"lp",position:{x:350,y:100},data:{label:"Logical Plan"},style:{background:"#1f2937",color:"white",border:"1px solid #374151",width:100}},{id:"opt",position:{x:500,y:100},data:{label:"Optimizer"},style:{background:"#7c3aed",color:"white",border:"1px solid #8b5cf6",width:100}},{id:"pp",position:{x:650,y:100},data:{label:"Physical Plan"},style:{background:"#059669",color:"white",border:"1px solid #10b981",width:100}},{id:"ex",position:{x:800,y:100},data:{label:"Executor"},style:{background:"#1e3a8a",color:"white",border:"1px solid #3b82f6",width:100}},{id:"r",position:{x:950,y:100},data:{label:"Results"},style:{background:"#1f2937",color:"white",border:"1px solid #374151",width:100}}],a=[{id:"e1",source:"sql",target:"p",style:{stroke:"#9ca3af"},markerEnd:{type:r.ArrowClosed}},{id:"e2",source:"p",target:"lp",style:{stroke:"#9ca3af"},markerEnd:{type:r.ArrowClosed}},{id:"e3",source:"lp",target:"opt",style:{stroke:"#9ca3af"},markerEnd:{type:r.ArrowClosed}},{id:"e4",source:"opt",target:"pp",style:{stroke:"#9ca3af"},markerEnd:{type:r.ArrowClosed}},{id:"e5",source:"pp",target:"ex",style:{stroke:"#9ca3af"},markerEnd:{type:r.ArrowClosed}},{id:"e6",source:"ex",target:"r",style:{stroke:"#9ca3af"},markerEnd:{type:r.ArrowClosed}}];return e.jsxs("div",{className:"max-w-5xl mx-auto text-gray-300 space-y-16 pb-20",children:[e.jsxs("div",{className:"border-b border-gray-700 pb-8",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"SQL: The Deep Dive"}),e.jsx("p",{className:"text-xl text-gray-400",children:"A comprehensive guide to Structured Query Language, from query fundamentals to advanced optimization techniques."})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-blue-600 text-sm px-3 py-1 rounded-full",children:"01"}),"SQL Query Execution Pipeline"]}),e.jsxs("p",{className:"text-lg leading-relaxed mb-6",children:["Understanding how a SQL database processes your query from ",e.jsx("strong",{children:"parsing"})," to ",e.jsx("strong",{children:"execution"})," is critical for writing efficient queries."]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"The Query Execution Flow"}),e.jsx(l,{initialNodes:t,initialEdges:a,title:"SQL Query Execution Pipeline"}),e.jsxs("div",{className:"mt-4 grid grid-cols-1 md:grid-cols-4 gap-3 text-sm",children:[e.jsxs("div",{className:"bg-gray-900 p-3 rounded",children:[e.jsx("strong",{className:"text-blue-400 block mb-1",children:"1. Parser"}),"Syntax check & AST creation"]}),e.jsxs("div",{className:"bg-gray-900 p-3 rounded",children:[e.jsx("strong",{className:"text-blue-400 block mb-1",children:"2. Optimizer"}),"Cost-based query optimization"]}),e.jsxs("div",{className:"bg-gray-900 p-3 rounded",children:[e.jsx("strong",{className:"text-blue-400 block mb-1",children:"3. Planner"}),"Generate execution plan"]}),e.jsxs("div",{className:"bg-gray-900 p-3 rounded",children:[e.jsx("strong",{className:"text-blue-400 block mb-1",children:"4. Executor"}),"Execute operations"]})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-green-600 text-sm px-3 py-1 rounded-full",children:"02"}),"Join Types & Algorithms"]}),e.jsx("p",{className:"mb-6",children:"Joins are the foundation of relational databases. Understanding different join types and their implementation algorithms is crucial."}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Join Types"}),e.jsxs("div",{className:"space-y-3 text-sm",children:[e.jsxs("div",{className:"bg-gray-900 p-3 rounded",children:[e.jsx("strong",{className:"text-blue-400",children:"INNER JOIN"}),e.jsx("p",{className:"text-xs mt-1",children:"Returns matching rows from both tables"})]}),e.jsxs("div",{className:"bg-gray-900 p-3 rounded",children:[e.jsx("strong",{className:"text-green-400",children:"LEFT/RIGHT JOIN"}),e.jsx("p",{className:"text-xs mt-1",children:"Returns all from one table + matches from other"})]}),e.jsxs("div",{className:"bg-gray-900 p-3 rounded",children:[e.jsx("strong",{className:"text-purple-400",children:"FULL OUTER JOIN"}),e.jsx("p",{className:"text-xs mt-1",children:"Returns all rows with NULLs for non-matches"})]}),e.jsxs("div",{className:"bg-gray-900 p-3 rounded",children:[e.jsx("strong",{className:"text-orange-400",children:"CROSS JOIN"}),e.jsx("p",{className:"text-xs mt-1",children:"Cartesian product (every combination)"})]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Join Algorithms"}),e.jsxs("div",{className:"space-y-3 text-sm",children:[e.jsxs("div",{className:"bg-gray-900 p-3 rounded",children:[e.jsx("strong",{className:"text-yellow-400",children:"Nested Loop Join"}),e.jsx("p",{className:"text-xs mt-1",children:"O(n×m) - For small tables or when no indexes"})]}),e.jsxs("div",{className:"bg-gray-900 p-3 rounded",children:[e.jsx("strong",{className:"text-yellow-400",children:"Hash Join"}),e.jsx("p",{className:"text-xs mt-1",children:"O(n+m) - Build hash table from smaller table"})]}),e.jsxs("div",{className:"bg-gray-900 p-3 rounded",children:[e.jsx("strong",{className:"text-yellow-400",children:"Merge Join"}),e.jsx("p",{className:"text-xs mt-1",children:"O(n log n + m log m) - Requires sorted inputs"})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Join Example with Execution Plan"}),e.jsx(s,{language:"sql",title:"join_example.sql",code:`-- Query: Find all orders with customer details
SELECT 
  c.name,
  o.order_id,
  o.total_amount
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
WHERE c.country = 'USA'
  AND o.order_date >= '2024-01-01';

-- Execution plan insights:
-- 1. Filter on customers.country (index scan if indexed)
-- 2. Filter on orders.order_date (index scan if indexed)
-- 3. Choose join algorithm:
--    - Hash Join if no indexes
--    - Index Nested Loop if orders.customer_id indexed
-- 4. Project only needed columns`})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-purple-600 text-sm px-3 py-1 rounded-full",children:"03"}),"Indexes & Query Performance"]}),e.jsx("p",{className:"mb-6",children:"Indexes are data structures that improve query speed at the cost of write performance and storage."}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Index Types"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-gray-900 p-4 rounded",children:[e.jsx("strong",{className:"text-blue-400 block mb-2",children:"B-Tree (Default)"}),e.jsx("p",{className:"text-xs mb-2",children:"Balanced tree structure. Good for range queries."}),e.jsx("code",{className:"text-[10px] bg-gray-800 px-1 rounded block",children:"O(log n) lookup"})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded",children:[e.jsx("strong",{className:"text-green-400 block mb-2",children:"Hash Index"}),e.jsx("p",{className:"text-xs mb-2",children:"Fast equality checks. No range queries."}),e.jsx("code",{className:"text-[10px] bg-gray-800 px-1 rounded block",children:"O(1) lookup"})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded",children:[e.jsx("strong",{className:"text-purple-400 block mb-2",children:"GiST/GIN (Postgres)"}),e.jsx("p",{className:"text-xs mb-2",children:"For full-text search, arrays, JSON."}),e.jsx("code",{className:"text-[10px] bg-gray-800 px-1 rounded block",children:"Specialized"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:"Creating Indexes"}),e.jsx(s,{language:"sql",title:"create_index.sql",code:`-- Single column index
CREATE INDEX idx_users_email 
ON users(email);

-- Composite index (order matters!)
CREATE INDEX idx_orders_customer_date 
ON orders(customer_id, order_date);

-- Partial index (PostgreSQL)
CREATE INDEX idx_active_users 
ON users(email) 
WHERE is_active = true;

-- Covering index
CREATE INDEX idx_orders_covering 
ON orders(customer_id) 
INCLUDE (order_date, total);`})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:"When to Use Indexes"}),e.jsxs("div",{className:"space-y-3 text-sm",children:[e.jsxs("div",{className:"bg-green-900/30 p-3 rounded border border-green-700/50",children:[e.jsx("strong",{className:"text-green-400",children:"✓ Good for:"}),e.jsxs("ul",{className:"mt-2 space-y-1 text-xs",children:[e.jsx("li",{children:"• WHERE clauses (filtering)"}),e.jsx("li",{children:"• JOIN conditions"}),e.jsx("li",{children:"• ORDER BY columns"}),e.jsx("li",{children:"• Large tables with selective queries"})]})]}),e.jsxs("div",{className:"bg-red-900/30 p-3 rounded border border-red-700/50",children:[e.jsx("strong",{className:"text-red-400",children:"✗ Bad for:"}),e.jsxs("ul",{className:"mt-2 space-y-1 text-xs",children:[e.jsx("li",{children:"• Small tables (< 1000 rows)"}),e.jsx("li",{children:"• Columns with low cardinality"}),e.jsx("li",{children:"• Write-heavy tables (INSERT/UPDATE cost)"}),e.jsx("li",{children:"• Queries that scan most rows"})]})]})]})]})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-orange-600 text-sm px-3 py-1 rounded-full",children:"04"}),"Transactions & ACID Properties"]}),e.jsxs("p",{className:"mb-6",children:["Transactions ensure data integrity through ",e.jsx("strong",{children:"ACID"})," properties."]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-gray-800 p-5 rounded-xl border border-gray-700",children:[e.jsx("h4",{className:"font-bold text-blue-400 mb-2 text-lg",children:"Atomicity"}),e.jsx("p",{className:"text-sm",children:"All or nothing. If one statement fails, the entire transaction rolls back."})]}),e.jsxs("div",{className:"bg-gray-800 p-5 rounded-xl border border-gray-700",children:[e.jsx("h4",{className:"font-bold text-green-400 mb-2 text-lg",children:"Consistency"}),e.jsx("p",{className:"text-sm",children:"Transactions move the database from one valid state to another."})]}),e.jsxs("div",{className:"bg-gray-800 p-5 rounded-xl border border-gray-700",children:[e.jsx("h4",{className:"font-bold text-purple-400 mb-2 text-lg",children:"Isolation"}),e.jsx("p",{className:"text-sm",children:"Concurrent transactions don't interfere with each other."})]}),e.jsxs("div",{className:"bg-gray-800 p-5 rounded-xl border border-gray-700",children:[e.jsx("h4",{className:"font-bold text-orange-400 mb-2 text-lg",children:"Durability"}),e.jsx("p",{className:"text-sm",children:"Committed data persists even after crashes."})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Isolation Levels"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{className:"bg-gray-900",children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left p-3 text-blue-400",children:"Level"}),e.jsx("th",{className:"text-left p-3 text-blue-400",children:"Dirty Read"}),e.jsx("th",{className:"text-left p-3 text-blue-400",children:"Non-Repeatable"}),e.jsx("th",{className:"text-left p-3 text-blue-400",children:"Phantom"}),e.jsx("th",{className:"text-left p-3 text-blue-400",children:"Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-700",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono",children:"READ UNCOMMITTED"}),e.jsx("td",{className:"p-3 text-red-400",children:"✗"}),e.jsx("td",{className:"p-3 text-red-400",children:"✗"}),e.jsx("td",{className:"p-3 text-red-400",children:"✗"}),e.jsx("td",{className:"p-3 text-xs",children:"Analytics (dirty data OK)"})]}),e.jsxs("tr",{className:"bg-gray-900/50",children:[e.jsx("td",{className:"p-3 font-mono",children:"READ COMMITTED"}),e.jsx("td",{className:"p-3 text-green-400",children:"✓"}),e.jsx("td",{className:"p-3 text-red-400",children:"✗"}),e.jsx("td",{className:"p-3 text-red-400",children:"✗"}),e.jsx("td",{className:"p-3 text-xs",children:"Default (PostgreSQL)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono",children:"REPEATABLE READ"}),e.jsx("td",{className:"p-3 text-green-400",children:"✓"}),e.jsx("td",{className:"p-3 text-green-400",children:"✓"}),e.jsx("td",{className:"p-3 text-red-400",children:"✗"}),e.jsx("td",{className:"p-3 text-xs",children:"Reports, batch jobs"})]}),e.jsxs("tr",{className:"bg-gray-900/50",children:[e.jsx("td",{className:"p-3 font-mono",children:"SERIALIZABLE"}),e.jsx("td",{className:"p-3 text-green-400",children:"✓"}),e.jsx("td",{className:"p-3 text-green-400",children:"✓"}),e.jsx("td",{className:"p-3 text-green-400",children:"✓"}),e.jsx("td",{className:"p-3 text-xs",children:"Financial transactions"})]})]})]})})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Transaction Example"}),e.jsx(s,{language:"sql",title:"transaction.sql",code:`-- Bank transfer: Atomic money movement
BEGIN TRANSACTION;

-- Deduct from account A
UPDATE accounts 
SET balance = balance - 100 
WHERE account_id = 'A123';

-- Add to account B
UPDATE accounts 
SET balance = balance + 100 
WHERE account_id = 'B456';

-- Check constraints
IF (SELECT balance FROM accounts WHERE account_id = 'A123') < 0 THEN
  ROLLBACK;  -- Insufficient funds
ELSE
  COMMIT;    -- Success
END IF;`})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-pink-600 text-sm px-3 py-1 rounded-full",children:"05"}),"Query Optimization Techniques"]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"EXPLAIN ANALYZE"}),e.jsxs("p",{className:"text-sm text-gray-400 mb-4",children:["Always use ",e.jsx("code",{className:"bg-gray-900 px-1",children:"EXPLAIN ANALYZE"})," to understand your query's execution plan."]}),e.jsx(s,{language:"sql",title:"explain_analyze.sql",code:`EXPLAIN ANALYZE
SELECT * FROM orders 
WHERE customer_id = 123 
  AND order_date >= '2024-01-01';

-- Output shows:
-- - Seq Scan vs Index Scan
-- - Actual time vs Estimated time
-- - Rows scanned vs returned
-- - Join methods used`})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gray-900 p-5 rounded-lg border border-gray-700",children:[e.jsx("h4",{className:"font-bold text-green-400 mb-3",children:"✓ Best Practices"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsx("li",{children:"• SELECT only needed columns (avoid SELECT *)"}),e.jsx("li",{children:"• Use WHERE to filter early"}),e.jsx("li",{children:"• Index foreign keys and WHERE columns"}),e.jsx("li",{children:"• Use LIMIT for pagination"}),e.jsx("li",{children:"• Avoid functions in WHERE (prevents index use)"}),e.jsx("li",{children:"• Use EXISTS instead of IN for subqueries"})]})]}),e.jsxs("div",{className:"bg-gray-900 p-5 rounded-lg border border-gray-700",children:[e.jsx("h4",{className:"font-bold text-red-400 mb-3",children:"✗ Anti-Patterns"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsx("li",{children:"• N+1 queries (fetch in loop)"}),e.jsx("li",{children:"• SELECT * with large tables"}),e.jsx("li",{children:"• LIKE '%pattern%' (can't use index)"}),e.jsx("li",{children:"• OR conditions (hard to optimize)"}),e.jsx("li",{children:"• Unnecessary DISTINCT"}),e.jsx("li",{children:"• Too many joins in one query"})]})]})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-red-600 text-sm px-3 py-1 rounded-full",children:"06"}),"Advanced SQL Features"]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Window Functions"}),e.jsx("p",{className:"text-sm text-gray-400 mb-4",children:"Perform calculations across rows related to the current row."}),e.jsx(s,{language:"sql",title:"window_functions.sql",code:`-- Running total
SELECT 
  order_id,
  order_date,
  amount,
  SUM(amount) OVER (ORDER BY order_date) as running_total
FROM orders;

-- Rank within partition
SELECT 
  product_name,
  category,
  price,
  RANK() OVER (PARTITION BY category ORDER BY price DESC) as price_rank
FROM products;

-- Moving average (last 7 days)
SELECT 
  date,
  revenue,
  AVG(revenue) OVER (
    ORDER BY date 
    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
  ) as moving_avg_7d
FROM daily_sales;`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Common Table Expressions (CTEs)"}),e.jsx(s,{language:"sql",title:"cte.sql",code:`-- Recursive CTE: Organization hierarchy
WITH RECURSIVE org_chart AS (
  -- Base case: CEO
  SELECT id, name, manager_id, 1 as level
  FROM employees
  WHERE manager_id IS NULL
  
  UNION ALL
  
  -- Recursive case: direct reports
  SELECT e.id, e.name, e.manager_id, oc.level + 1
  FROM employees e
  INNER JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT * FROM org_chart ORDER BY level, name;`})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:"JSONB (PostgreSQL)"}),e.jsx(s,{language:"sql",title:"jsonb.sql",code:`-- Query JSON data
SELECT 
  id,
  data->>'name' as name,
  data->'address'->>'city' as city
FROM users
WHERE data @> '{"active": true}';

-- Create GIN index for fast JSON queries
CREATE INDEX idx_users_data 
ON users USING GIN (data);`})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:"Materialized Views"}),e.jsx(s,{language:"sql",title:"materialized_view.sql",code:`-- Pre-compute expensive aggregations
CREATE MATERIALIZED VIEW daily_summary AS
SELECT 
  DATE(created_at) as date,
  COUNT(*) as order_count,
  SUM(total) as revenue
FROM orders
GROUP BY DATE(created_at);

-- Refresh periodically
REFRESH MATERIALIZED VIEW daily_summary;`})]})]})]})]})]})};export{g as default};
