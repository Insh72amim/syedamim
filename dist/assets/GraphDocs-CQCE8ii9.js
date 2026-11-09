import{j as t,a8 as f,a as v,l as y,m as x,a9 as m,N as b}from"./ui-l-wn3dQa.js";import{r as s}from"./vendor-C-RugAsD.js";import{C as j}from"./CodeBlock-CZ62hYHy.js";import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const w=[{title:"Graph For Beginners - LeetCode",url:"https://leetcode.com/discuss/study-guide/655708/Graph-For-Beginners-Problems-or-Pattern-or-Sample-Solutions",type:"Guide"},{title:"Graph Algorithms - LeetCode",url:"https://leetcode.com/discuss/study-guide/1326900/graph-algorithms-problems-to-practice",type:"Guide"},{title:"Graph Problems to Solve",url:"https://leetcode.com/problem-list/o6kpz32s/",type:"Problem List"}],c=[{id:1,title:"Graph Representation - Adjacency",category:"Basics",difficulty:"Easy",tags:["Graph","Representation"],thought:"Adjacency List is space efficient O(V+E). Adjacency Matrix is O(V^2) but allows O(1) edge lookup.",solution:{language:"cpp",code:`// Adjacency List - Non weighted graph
vector<vector<int>> adj(N);
adj[1].push_back(2);
adj[2].push_back(3);
adj[2].push_back(4);

// Adjacency List - Weighted graph
vector<vector<pair<int,int>>> adj(N);
adj[1].push_back({2,5}); // node 2, weight 5
adj[2].push_back({3,7}); // node 3, weight 7

// Process all neighbors of node 's'
for (auto u : adj[s]) {
    // process neighbor u
}

// Adjacency Matrix
int adj[N][N];
adj[i][j] = 0; // 0 or 1 for unweighted
adj[i][j] = 10; // weight for weighted graph`}},{id:2,title:"Graph Representation - Edge List",category:"Basics",difficulty:"Easy",tags:["Graph","Representation"],thought:"Edge list is useful for algorithms like Kruskal where we need to sort edges.",solution:{language:"cpp",code:`// Non weighted graph
vector<pair<int,int>> edges;
edges.push_back({1,2});
edges.push_back({2,3});

// Weighted Graph
vector<tuple<int,int,int>> edges;
edges.push_back({1,2,5}); // from, to, weight

// Processing edges
for(auto u : edges){
    int a, b, w;
    tie(a, b, w) = u;
}`}},{id:3,title:"Depth First Search (DFS)",category:"Traversal",difficulty:"Easy",tags:["DFS","Traversal"],thought:"Go as deep as possible, then backtrack. Use recursion or stack.",solution:{language:"cpp",code:`vector<int> adj[N];
bool vis[N];

void dfs(int s) {
    if (vis[s]) return;
    vis[s] = true;
    // process node s
    for (auto u : adj[s]) {
        dfs(u);
    }
}`}},{id:4,title:"Breadth First Search (BFS)",category:"Traversal",difficulty:"Easy",tags:["BFS","Traversal"],thought:"Explore level by level. Use queue. Good for shortest path in unweighted graph.",solution:{language:"cpp",code:`queue<int> q;
bool vis[N];
int distance[N];

vis[x] = true;
distance[x] = 0;
q.push(x);

while (!q.empty()) {
    int s = q.front(); 
    q.pop();
    for (auto u : adj[s]) {
        if (vis[u]) continue;
        vis[u] = true;
        distance[u] = distance[s] + 1;
        q.push(u);
    }
}`}},{id:5,title:"Detect Cycle in Undirected Graph",category:"Traversal",difficulty:"Medium",tags:["Cycle","DFS"],thought:"During DFS, if we visit a node that is already visited and is not parent, cycle exists.",solution:{language:"cpp",code:`bool checkForCycle(int node, int parent, vector<int> &vis, vector<int> adj[]) {
    vis[node] = 1; 
    for(auto it : adj[node]) {
        if(!vis[it]) {
            if(checkForCycle(it, node, vis, adj)) 
                return true; 
        }
        else if(it != parent)
            return true; 
    }
    return false; 
}

bool isCycle(int V, vector<int> adj[]) {
    vector<int> vis(V+1, 0); 
    for(int i = 0; i < V; i++) {
        if(!vis[i]) {
            if(checkForCycle(i, -1, vis, adj)) 
                return true; 
        }
    }
    return false;
}`}},{id:6,title:"Detect Cycle in Directed Graph",category:"Traversal",difficulty:"Medium",tags:["Cycle","DFS","Directed"],thought:"Use recursion stack. If node is in current recursion stack and visited again, cycle exists.",solution:{language:"cpp",code:`bool isCycleUtil(int i, vector<vector<int>> &adj,
             vector<bool>& vis, vector<bool>& rec) {
    if(rec[i]) return true;  // in current path
    if(vis[i]) return false; // already processed
    
    vis[i] = true;
    rec[i] = true;
    
    for(auto u : adj[i]) {
        if(isCycleUtil(u, adj, vis, rec)) 
            return true;
    }
    
    rec[i] = false; // backtrack
    return false;
}

bool hasCycle(int n, vector<vector<int>>& adj) {
    vector<bool> vis(n, false), rec(n, false);
    for(int i = 0; i < n; i++) {
        if(!vis[i] && isCycleUtil(i, adj, vis, rec)) 
            return true;
    }
    return false;
}`}},{id:7,title:"Bipartite Check",category:"Traversal",difficulty:"Medium",tags:["Bipartite","BFS","Coloring"],thought:"Try to 2-color the graph. If any adjacent nodes have same color, not bipartite.",solution:{language:"cpp",code:`bool isBipartite(vector<vector<int>>& graph) {
    int n = graph.size();
    vector<int> col(n, -1);
    
    for(int i = 0; i < n; i++) {
        if(col[i] != -1) continue;
        
        queue<int> q;
        q.push(i);
        col[i] = 0;
        
        while(!q.empty()) {
            int node = q.front();
            q.pop();
            
            for(auto u : graph[node]) {
                if(col[u] == -1) {
                    col[u] = 1 - col[node]; // opposite color
                    q.push(u);
                }
                else if(col[u] == col[node]) {
                    return false; // same color = not bipartite
                }
            }
        }
    }
    return true;
}`}},{id:8,title:"Floyd-Warshall Algorithm",category:"Shortest Path",difficulty:"Medium",tags:["All Pairs","DP"],thought:"O(n^3) for all pairs shortest path. dp[i][j] = min dist from i to j.",solution:{language:"cpp",code:`// Initialize distance matrix
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
        if (i == j)
            distance[i][j] = 0;
        else if (adj[i][j])
            distance[i][j] = adj[i][j];
        else
            distance[i][j] = INF;
    }
}

// Floyd-Warshall
for (int k = 1; k <= n; k++) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            distance[i][j] = min(distance[i][j], 
                                 distance[i][k] + distance[k][j]);
        }
    }
}`}},{id:9,title:"Bellman-Ford Algorithm",category:"Shortest Path",difficulty:"Medium",tags:["Single Source","Negative Weights"],thought:"O(VE). Relax all edges V-1 times. Can detect negative cycles.",solution:{language:"cpp",code:`// Graph as edge list: vector<tuple<int, int, int>> edges
vector<int> bellmanFord(int n, int src, vector<tuple<int,int,int>>& edges) {
    vector<int> dist(n + 1, INF);
    dist[src] = 0;
    
    // Relax all edges n-1 times
    for (int i = 1; i <= n - 1; i++) {
        for (auto& e : edges) {
            int a, b, w;
            tie(a, b, w) = e;
            if (dist[a] != INF)
                dist[b] = min(dist[b], dist[a] + w);
        }
    }
    
    return dist;
}`}},{id:10,title:"Dijkstra's Algorithm",category:"Shortest Path",difficulty:"Medium",tags:["Single Source","Priority Queue"],thought:"O((V+E)logV). Greedy BFS with priority queue. No negative weights.",solution:{language:"cpp",code:`vector<int> dijkstra(vector<vector<pair<int,int>>>& adj, int src) {
    int n = adj.size();
    vector<int> dist(n, INT_MAX);
    vector<bool> vis(n, false);
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
    
    dist[src] = 0;
    pq.push({0, src}); // {distance, node}
    
    while (!pq.empty()) {
        int d = pq.top().first;
        int node = pq.top().second;
        pq.pop();
        
        if (vis[node]) continue;
        vis[node] = true;
        
        for (auto& [child, weight] : adj[node]) {
            if (dist[node] + weight < dist[child]) {
                dist[child] = dist[node] + weight;
                pq.push({dist[child], child});
            }
        }
    }
    return dist;
}`}},{id:11,title:"Kruskal's Algorithm",category:"MST",difficulty:"Medium",tags:["MST","Union Find"],thought:"Sort edges by weight. Add edge if it does not form cycle (use Union-Find).",solution:{language:"cpp",code:`vector<int> parent, rank_;

int find(int x) {
    if (parent[x] != x)
        parent[x] = find(parent[x]); // path compression
    return parent[x];
}

void unite(int a, int b) {
    a = find(a); b = find(b);
    if (rank_[a] < rank_[b]) swap(a, b);
    parent[b] = a;
    if (rank_[a] == rank_[b]) rank_[a]++;
}

int kruskal(int n, vector<tuple<int,int,int>>& edges) {
    // edges: {weight, u, v}
    sort(edges.begin(), edges.end());
    
    parent.resize(n);
    rank_.resize(n, 0);
    for (int i = 0; i < n; i++) parent[i] = i;
    
    int mst = 0;
    for (auto& [w, u, v] : edges) {
        if (find(u) != find(v)) {
            unite(u, v);
            mst += w;
        }
    }
    return mst;
}`}},{id:12,title:"Prim's Algorithm",category:"MST",difficulty:"Medium",tags:["MST","Priority Queue"],thought:"Start from any node. Greedily pick minimum edge to unvisited node.",solution:{language:"cpp",code:`int prim(int n, vector<vector<pair<int,int>>>& adj) {
    vector<bool> vis(n, false);
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
    
    pq.push({0, 0}); // {weight, node}
    int mst = 0;
    
    while (!pq.empty()) {
        auto [w, node] = pq.top();
        pq.pop();
        
        if (vis[node]) continue;
        vis[node] = true;
        mst += w;
        
        for (auto& [weight, neighbor] : adj[node]) {
            if (!vis[neighbor]) {
                pq.push({weight, neighbor});
            }
        }
    }
    return mst;
}`}},{id:13,title:"Topological Sort (DFS)",category:"Directed",difficulty:"Medium",tags:["Topological Sort","DAG"],thought:"DFS and add node to result after processing all children. Reverse at end.",solution:{language:"cpp",code:`vector<int> result;
vector<bool> vis;

void dfs(int x, vector<vector<int>>& adj) {
    if (vis[x]) return;
    vis[x] = true;
    for (auto u : adj[x])
        dfs(u, adj);
    result.push_back(x); // add after children
}

vector<int> topologicalSort(int n, vector<vector<int>>& adj) {
    vis.assign(n, false);
    result.clear();
    
    for (int i = 0; i < n; i++)
        if (!vis[i]) dfs(i, adj);
    
    reverse(result.begin(), result.end());
    return result;
}`}},{id:14,title:"Kahn's Algorithm (BFS Topological Sort)",category:"Directed",difficulty:"Medium",tags:["Topological Sort","BFS","Indegree"],thought:"Process nodes with indegree 0. Remove them and decrease indegree of neighbors.",solution:{language:"cpp",code:`vector<int> kahnTopologicalSort(int V, vector<vector<int>>& adj) {
    vector<int> indegree(V, 0);
    for (int i = 0; i < V; i++)
        for (auto u : adj[i])
            indegree[u]++;
    
    queue<int> q;
    for (int i = 0; i < V; i++)
        if (indegree[i] == 0)
            q.push(i);
    
    vector<int> result;
    while (!q.empty()) {
        int node = q.front();
        q.pop();
        result.push_back(node);
        
        for (auto u : adj[node]) {
            indegree[u]--;
            if (indegree[u] == 0)
                q.push(u);
        }
    }
    
    // Check for cycle
    if (result.size() != V) {
        return {}; // cycle exists
    }
    return result;
}`}},{id:15,title:"Bridges in Graph",category:"Connectivity",difficulty:"Hard",tags:["Bridge","Tarjan"],thought:"Edge (u,v) is bridge if tin[u] < low[v]. Use Tarjan algorithm.",solution:{language:"cpp",code:`int timer = 0;
vector<int> tin, low;
vector<bool> vis;
vector<pair<int,int>> bridges;

void dfs(int node, int parent, vector<vector<int>>& adj) {
    vis[node] = true;
    tin[node] = low[node] = timer++;
    
    for (auto u : adj[node]) {
        if (u == parent) continue;
        
        if (vis[u]) {
            low[node] = min(low[node], tin[u]); // back edge
        } else {
            dfs(u, node, adj);
            low[node] = min(low[node], low[u]);
            
            if (tin[node] < low[u]) // bridge condition
                bridges.push_back({node, u});
        }
    }
}

vector<pair<int,int>> findBridges(int n, vector<vector<int>>& adj) {
    tin.assign(n, -1);
    low.assign(n, -1);
    vis.assign(n, false);
    bridges.clear();
    timer = 0;
    
    for (int i = 0; i < n; i++)
        if (!vis[i])
            dfs(i, -1, adj);
    
    return bridges;
}`}},{id:16,title:"Articulation Points",category:"Connectivity",difficulty:"Hard",tags:["Cut Vertex","Tarjan"],thought:"Node u is articulation point if: (1) root with 2+ children, or (2) tin[u] <= low[child].",solution:{language:"cpp",code:`int timer = 0;
vector<int> tin, low;
vector<bool> vis;

void dfs(vector<vector<int>>& adj, vector<int>& res, int node, int parent) {
    vis[node] = true;
    tin[node] = low[node] = timer++;
    int children = 0;
    
    for (auto u : adj[node]) {
        if (u == parent) continue;
        
        if (vis[u]) {
            low[node] = min(low[node], tin[u]);
        } else {
            dfs(adj, res, u, node);
            low[node] = min(low[node], low[u]);
            children++;
            
            if (tin[node] <= low[u] && parent != -1)
                res.push_back(node);
        }
    }
    
    if (parent == -1 && children > 1)
        res.push_back(node);
}

vector<int> findArticulationPoints(int n, vector<vector<int>>& adj) {
    tin.assign(n, -1);
    low.assign(n, -1);
    vis.assign(n, false);
    vector<int> res;
    
    for (int i = 0; i < n; i++)
        if (!vis[i])
            dfs(adj, res, i, -1);
    
    return res;
}`}},{id:17,title:"Kosaraju's SCC Algorithm",category:"Connectivity",difficulty:"Hard",tags:["SCC","Strongly Connected"],thought:"Two DFS: first to get finish order, second on reversed graph to find SCCs.",solution:{language:"cpp",code:`void dfs1(int node, vector<vector<int>>& adj, vector<bool>& vis, vector<int>& order) {
    vis[node] = true;
    for (auto u : adj[node])
        if (!vis[u]) dfs1(u, adj, vis, order);
    order.push_back(node);
}

void dfs2(int node, vector<vector<int>>& rev, vector<bool>& vis, vector<int>& scc) {
    vis[node] = true;
    scc.push_back(node);
    for (auto u : rev[node])
        if (!vis[u]) dfs2(u, rev, vis, scc);
}

vector<vector<int>> kosaraju(int n, vector<vector<int>>& adj) {
    // Step 1: Get finish order
    vector<int> order;
    vector<bool> vis(n, false);
    for (int i = 0; i < n; i++)
        if (!vis[i]) dfs1(i, adj, vis, order);
    
    // Step 2: Build reversed graph
    vector<vector<int>> rev(n);
    for (int i = 0; i < n; i++)
        for (auto u : adj[i])
            rev[u].push_back(i);
    
    // Step 3: DFS on reversed graph in reverse finish order
    vector<vector<int>> sccs;
    fill(vis.begin(), vis.end(), false);
    
    for (int i = n - 1; i >= 0; i--) {
        int node = order[i];
        if (!vis[node]) {
            vector<int> scc;
            dfs2(node, rev, vis, scc);
            sccs.push_back(scc);
        }
    }
    return sccs;
}`}},{id:18,title:"Max Flow - Ford-Fulkerson (Edmonds-Karp)",category:"Flow",difficulty:"Hard",tags:["Max Flow","BFS"],thought:"Find augmenting paths using BFS. Update residual graph. Repeat until no path exists.",solution:{language:"cpp",code:`int n;
vector<vector<int>> capacity;
vector<vector<int>> adj;

int bfs(int s, int t, vector<int>& parent) {
    fill(parent.begin(), parent.end(), -1);
    parent[s] = -2;
    queue<pair<int,int>> q;
    q.push({s, INT_MAX});
    
    while (!q.empty()) {
        int cur = q.front().first;
        int flow = q.front().second;
        q.pop();
        
        for (int next : adj[cur]) {
            if (parent[next] == -1 && capacity[cur][next] > 0) {
                parent[next] = cur;
                int new_flow = min(flow, capacity[cur][next]);
                if (next == t) return new_flow;
                q.push({next, new_flow});
            }
        }
    }
    return 0;
}

int maxFlow(int s, int t) {
    int flow = 0;
    vector<int> parent(n);
    int new_flow;
    
    while ((new_flow = bfs(s, t, parent)) > 0) {
        flow += new_flow;
        int cur = t;
        while (cur != s) {
            int prev = parent[cur];
            capacity[prev][cur] -= new_flow;
            capacity[cur][prev] += new_flow;
            cur = prev;
        }
    }
    return flow;
}`}},{id:19,title:"Eulerian Path & Circuit",category:"Paths",difficulty:"Medium",tags:["Eulerian","Path"],thought:"Eulerian Circuit: all even degree. Eulerian Path: exactly 2 odd degree nodes.",solution:{language:"cpp",code:`// Existence check for Eulerian Path/Circuit (Undirected Graph)

bool hasEulerianCircuit(int n, vector<vector<int>>& adj) {
    // All vertices with non-zero degree must be connected
    // All vertices must have even degree
    for (int i = 0; i < n; i++) {
        if (adj[i].size() % 2 != 0)
            return false;
    }
    return true;
}

bool hasEulerianPath(int n, vector<vector<int>>& adj) {
    // Exactly 0 or 2 vertices with odd degree
    int oddCount = 0;
    for (int i = 0; i < n; i++) {
        if (adj[i].size() % 2 != 0)
            oddCount++;
    }
    return (oddCount == 0 || oddCount == 2);
}

// For Directed Graph:
// Eulerian Circuit: indegree == outdegree for all
// Eulerian Path: one node (indeg = outdeg + 1), 
//                one node (outdeg = indeg + 1), 
//                rest equal`}},{id:20,title:"Tree - Count Nodes in Subtree",category:"Tree",difficulty:"Easy",tags:["Tree","DP"],thought:"DFS and count nodes in each subtree using DP.",solution:{language:"cpp",code:`vector<int> subtreeCount;
vector<vector<int>> adj;

void dfs(int node, int parent) {
    subtreeCount[node] = 1;
    for (auto child : adj[node]) {
        if (child == parent) continue;
        dfs(child, node);
        subtreeCount[node] += subtreeCount[child];
    }
}

// Tree traversal avoiding parent
void treeTraversal(int node, int parent) {
    // process node
    for (auto child : adj[node]) {
        if (child != parent) {
            treeTraversal(child, node);
        }
    }
}`}}],F=()=>{const[r,a]=s.useState(null),[o,u]=s.useState("All"),[d,g]=s.useState(""),p=e=>{a(r===e?null:e)},h=["All",...new Set(c.map(e=>e.category))],l=c.filter(e=>{const i=o==="All"||e.category===o,n=e.title.toLowerCase().includes(d.toLowerCase());return i&&n});return t.jsx("div",{className:"h-full overflow-y-auto bg-gray-900",children:t.jsxs("div",{className:"max-w-7xl mx-auto p-8 space-y-8",children:[t.jsxs("div",{className:"border-b border-gray-700 pb-6",children:[t.jsx("h1",{className:"text-4xl font-bold text-white mb-3",children:"Graphs"}),t.jsx("p",{className:"text-lg text-gray-400",children:"Master graph algorithms: traversal, shortest paths, MST, connectivity, and flow networks."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:w.map((e,i)=>t.jsxs("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors group",children:[t.jsxs("div",{className:"flex items-start justify-between mb-2",children:[t.jsx("span",{className:"text-xs font-medium px-2 py-1 rounded bg-purple-900/30 text-purple-400 border border-purple-800/50",children:e.type}),t.jsx(f,{size:16,className:"text-gray-500 group-hover:text-white transition-colors"})]}),t.jsx("h3",{className:"text-white font-medium group-hover:text-purple-400 transition-colors",children:e.title})]},i))}),t.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-center justify-between bg-gray-800/50 p-4 rounded-xl border border-gray-700",children:[t.jsx("div",{className:"flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0",children:h.map(e=>t.jsx("button",{onClick:()=>u(e),className:`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${o===e?"bg-purple-600 text-white":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:e},e))}),t.jsx("input",{type:"text",placeholder:"Search algorithms...",value:d,onChange:e=>g(e.target.value),className:"w-full md:w-64 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-white mb-4 flex items-center gap-2",children:[t.jsx(v,{className:"text-purple-400"}),"Algorithms & Implementations (",l.length,")"]}),l.map(e=>t.jsxs("div",{className:"bg-gray-800 rounded-xl border border-gray-700 overflow-hidden transition-all duration-200 hover:border-gray-600",children:[t.jsxs("button",{onClick:()=>p(e.id),className:"w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-700/50 transition-colors",children:[t.jsxs("div",{className:"flex items-center gap-4 flex-1",children:[t.jsx("div",{className:`flex items-center justify-center w-8 h-8 rounded-lg font-bold text-sm border 
                    ${e.difficulty==="Easy"?"bg-green-900/30 text-green-400 border-green-800":e.difficulty==="Hard"?"bg-red-900/30 text-red-400 border-red-800":"bg-yellow-900/30 text-yellow-400 border-yellow-800"}`,children:e.id}),t.jsxs("div",{className:"flex-1",children:[t.jsxs("h3",{className:"text-lg font-semibold text-white mb-1 flex items-center gap-3",children:[e.title,e.difficulty&&t.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full border 
                          ${e.difficulty==="Easy"?"border-green-800 text-green-400":e.difficulty==="Hard"?"border-red-800 text-red-400":"border-yellow-800 text-yellow-400"}`,children:e.difficulty}),t.jsx("span",{className:"text-xs px-2 py-0.5 rounded bg-gray-700 text-gray-400",children:e.category})]}),t.jsx("div",{className:"flex flex-wrap gap-2",children:e.tags&&e.tags.map((i,n)=>t.jsx("span",{className:"text-xs text-gray-500 bg-gray-900 px-2 py-0.5 rounded",children:i},n))})]})]}),r===e.id?t.jsx(y,{className:"text-gray-400"}):t.jsx(x,{className:"text-gray-400"})]}),r===e.id&&t.jsxs("div",{className:"px-6 pb-6 pt-2 border-t border-gray-700 bg-gray-900/30",children:[e.thought&&t.jsxs("div",{className:"mb-6 bg-purple-900/10 border border-purple-800/30 p-4 rounded-lg",children:[t.jsxs("h4",{className:"text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2",children:[t.jsx(m,{size:16}),"Key Insight"]}),t.jsx("p",{className:"text-gray-300 text-sm italic",children:e.thought})]}),e.solution&&t.jsxs("div",{children:[t.jsxs("h4",{className:"text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider flex items-center gap-2",children:[t.jsx(b,{size:16,className:"text-purple-500"}),"Implementation (",e.solution.language,")"]}),t.jsx(j,{language:e.solution.language,code:e.solution.code})]})]})]},e.id))]})]})})};export{F as default};
