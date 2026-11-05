import{j as t,a7 as x,a as h,i as y,k as f,a8 as b,J as v}from"./ui-C9KrBvbE.js";import{r as n}from"./vendor-C-RugAsD.js";import{C as q}from"./CodeBlock-B1pjjoNU.js";import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const w=[{title:"Stack and Queue LeetCode MyList",url:"https://leetcode.com/problem-list/o40gdw7d/",type:"Problem List"},{title:"Line Sweep Algorithms",url:"https://leetcode.com/discuss/post/2166045/line-sweep-algorithms-by-c0d3m-8ebq/",type:"Guide"},{title:"LeetCode Design Questions",url:"https://leetcode.com/problem-list/o47wehhe/",type:"Problem List"}],l=[{id:1,title:"Circular Queue Implementation",category:"Implementation",difficulty:"Medium",tags:["Queue","Circular"],thought:"Use array with front and rear pointers. Wrap around using modulo operator.",solution:{language:"cpp",code:`class Queue {
public:
    int front, rear, size;
    unsigned capacity;
    int *array;
};

Queue* createQueue(unsigned capacity) {
    Queue *queue = new Queue();
    queue->capacity = capacity;
    queue->front = queue->size = 0;
    queue->rear = capacity - 1;
    queue->array = new int[queue->capacity];
    return queue;
}

int isFull(Queue *queue) {
    return (queue->size == queue->capacity);
}

int isEmpty(Queue *queue) {
    return (queue->size == 0);
}

void enqueue(Queue *queue, int item) {
    if (isFull(queue)) return;
    queue->rear = (queue->rear + 1) % queue->capacity;
    queue->array[queue->rear] = item;
    queue->size++;
}

int dequeue(Queue *queue) {
    if (isEmpty(queue)) return INT_MIN;
    int item = queue->array[queue->front];
    queue->front = (queue->front + 1) % queue->capacity;
    queue->size--;
    return item;
}

int front(Queue *queue) {
    if (isEmpty(queue)) return INT_MIN;
    return queue->array[queue->front];
}

int rear(Queue *queue) {
    if (isEmpty(queue)) return INT_MIN;
    return queue->array[queue->rear];
}`}},{id:2,title:"BFS Pattern with Queue",category:"Patterns",difficulty:"Easy",tags:["BFS","Queue","Graph"],thought:"Push start node, process level by level. Use queue size to track level boundaries.",solution:{language:"cpp",code:`// BFS Template for Level Order Processing
void bfs(int start, vector<vector<int>>& adj) {
    int n = adj.size();
    vector<bool> visited(n, false);
    vector<int> distance(n, -1);
    queue<int> q;
    
    q.push(start);
    visited[start] = true;
    distance[start] = 0;
    
    while (!q.empty()) {
        int levelSize = q.size();
        
        // Process all nodes at current level
        for (int i = 0; i < levelSize; i++) {
            int node = q.front();
            q.pop();
            
            // Process node here
            
            for (int neighbor : adj[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    distance[neighbor] = distance[node] + 1;
                    q.push(neighbor);
                }
            }
        }
    }
}`}},{id:3,title:"Line Sweep Algorithm",category:"Patterns",difficulty:"Medium",tags:["Line Sweep","Events"],thought:"Convert intervals to events (+1 at start, -1 at end). Sort and sweep to find overlaps.",solution:{language:"cpp",code:`// Line Sweep Pattern
// Use case: Finding max overlapping intervals, meeting rooms

int minMeetingRooms(vector<vector<int>>& intervals) {
    // Create events: +1 for start, -1 for end
    vector<pair<int, int>> events;
    
    for (auto& interval : intervals) {
        events.push_back({interval[0], 1});  // start
        events.push_back({interval[1], -1}); // end
    }
    
    // Sort by time, if equal, process ends before starts
    sort(events.begin(), events.end(), [](auto& a, auto& b) {
        if (a.first != b.first) return a.first < b.first;
        return a.second < b.second; // -1 before +1
    });
    
    int maxRooms = 0, currentRooms = 0;
    for (auto& [time, delta] : events) {
        currentRooms += delta;
        maxRooms = max(maxRooms, currentRooms);
    }
    
    return maxRooms;
}

// Alternative: Separate arrays approach
int minMeetingRooms2(vector<vector<int>>& intervals) {
    vector<int> starts, ends;
    for (auto& i : intervals) {
        starts.push_back(i[0]);
        ends.push_back(i[1]);
    }
    sort(starts.begin(), starts.end());
    sort(ends.begin(), ends.end());
    
    int rooms = 0, endPtr = 0;
    for (int start : starts) {
        if (start < ends[endPtr]) {
            rooms++;
        } else {
            endPtr++;
        }
    }
    return rooms;
}`}},{id:4,title:"Monotonic Queue Pattern",category:"Patterns",difficulty:"Hard",tags:["Deque","Monotonic"],thought:"Maintain deque with monotonic property. Front always has optimal element.",solution:{language:"cpp",code:`// Monotonic Queue for Sliding Window Minimum/Maximum
// Time: O(n), Space: O(k)

class MonotonicQueue {
    deque<pair<int, int>> dq; // {value, index}
    
public:
    // For sliding window maximum
    void push(int val, int idx) {
        // Remove smaller elements from back
        while (!dq.empty() && dq.back().first <= val) {
            dq.pop_back();
        }
        dq.push_back({val, idx});
    }
    
    // Remove expired elements
    void pop(int windowStart) {
        while (!dq.empty() && dq.front().second < windowStart) {
            dq.pop_front();
        }
    }
    
    int getMax() {
        return dq.empty() ? INT_MIN : dq.front().first;
    }
};

// Usage for Sliding Window Maximum
vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    MonotonicQueue mq;
    vector<int> result;
    
    for (int i = 0; i < nums.size(); i++) {
        mq.push(nums[i], i);
        mq.pop(i - k + 1);
        
        if (i >= k - 1) {
            result.push_back(mq.getMax());
        }
    }
    return result;
}`}}],M=()=>{const[s,d]=n.useState(null),[a,c]=n.useState("All"),[o,m]=n.useState(""),g=e=>{d(s===e?null:e)},p=["All",...new Set(l.map(e=>e.category))],u=l.filter(e=>{const r=a==="All"||e.category===a,i=e.title.toLowerCase().includes(o.toLowerCase());return r&&i});return t.jsx("div",{className:"h-full overflow-y-auto bg-gray-900",children:t.jsxs("div",{className:"max-w-7xl mx-auto p-8 space-y-8",children:[t.jsxs("div",{className:"border-b border-gray-700 pb-6",children:[t.jsx("h1",{className:"text-4xl font-bold text-white mb-3",children:"Queue"}),t.jsx("p",{className:"text-lg text-gray-400",children:"Master queue implementations, BFS patterns, line sweep algorithms, and monotonic queue techniques."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:w.map((e,r)=>t.jsxs("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors group",children:[t.jsxs("div",{className:"flex items-start justify-between mb-2",children:[t.jsx("span",{className:"text-xs font-medium px-2 py-1 rounded bg-cyan-900/30 text-cyan-400 border border-cyan-800/50",children:e.type}),t.jsx(x,{size:16,className:"text-gray-500 group-hover:text-white transition-colors"})]}),t.jsx("h3",{className:"text-white font-medium group-hover:text-cyan-400 transition-colors",children:e.title})]},r))}),t.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-center justify-between bg-gray-800/50 p-4 rounded-xl border border-gray-700",children:[t.jsx("div",{className:"flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0",children:p.map(e=>t.jsx("button",{onClick:()=>c(e),className:`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${a===e?"bg-cyan-600 text-white":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:e},e))}),t.jsx("input",{type:"text",placeholder:"Search problems...",value:o,onChange:e=>m(e.target.value),className:"w-full md:w-64 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500"})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-white mb-4 flex items-center gap-2",children:[t.jsx(h,{className:"text-cyan-400"}),"Problems & Implementations (",u.length,")"]}),u.map(e=>t.jsxs("div",{className:"bg-gray-800 rounded-xl border border-gray-700 overflow-hidden transition-all duration-200 hover:border-gray-600",children:[t.jsxs("button",{onClick:()=>g(e.id),className:"w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-700/50 transition-colors",children:[t.jsxs("div",{className:"flex items-center gap-4 flex-1",children:[t.jsx("div",{className:`flex items-center justify-center w-8 h-8 rounded-lg font-bold text-sm border ${e.difficulty==="Easy"?"bg-green-900/30 text-green-400 border-green-800":e.difficulty==="Hard"?"bg-red-900/30 text-red-400 border-red-800":"bg-yellow-900/30 text-yellow-400 border-yellow-800"}`,children:e.id}),t.jsxs("div",{className:"flex-1",children:[t.jsxs("h3",{className:"text-lg font-semibold text-white mb-1 flex items-center gap-3",children:[e.title,e.difficulty&&t.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full border ${e.difficulty==="Easy"?"border-green-800 text-green-400":e.difficulty==="Hard"?"border-red-800 text-red-400":"border-yellow-800 text-yellow-400"}`,children:e.difficulty}),t.jsx("span",{className:"text-xs px-2 py-0.5 rounded bg-gray-700 text-gray-400",children:e.category})]}),t.jsx("div",{className:"flex flex-wrap gap-2",children:e.tags&&e.tags.map((r,i)=>t.jsx("span",{className:"text-xs text-gray-500 bg-gray-900 px-2 py-0.5 rounded",children:r},i))})]})]}),s===e.id?t.jsx(y,{className:"text-gray-400"}):t.jsx(f,{className:"text-gray-400"})]}),s===e.id&&t.jsxs("div",{className:"px-6 pb-6 pt-2 border-t border-gray-700 bg-gray-900/30",children:[e.thought&&t.jsxs("div",{className:"mb-6 bg-cyan-900/10 border border-cyan-800/30 p-4 rounded-lg",children:[t.jsxs("h4",{className:"text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-2",children:[t.jsx(b,{size:16}),"Approach"]}),t.jsx("p",{className:"text-gray-300 text-sm italic",children:e.thought})]}),e.solution&&t.jsxs("div",{children:[t.jsxs("h4",{className:"text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider flex items-center gap-2",children:[t.jsx(v,{size:16,className:"text-cyan-500"}),"Implementation (",e.solution.language,")"]}),t.jsx(q,{language:e.solution.language,code:e.solution.code})]})]})]},e.id))]})]})})};export{M as default};
