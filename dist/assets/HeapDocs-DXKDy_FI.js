import{j as t,a7 as x,a as h,i as f,k as y,a8 as b,J as v}from"./ui-C9KrBvbE.js";import{r as n}from"./vendor-C-RugAsD.js";import{C as j}from"./CodeBlock-B1pjjoNU.js";import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const w=[{title:"Heap LeetCode MyList",url:"https://leetcode.com/problem-list/o47dbbme/",type:"Problem List"},{title:"Top K Elements Pattern",url:"https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed",type:"Guide"}],p=[{id:1,title:"Build Max Heap from Array",category:"Implementation",difficulty:"Medium",tags:["Heap","Heapify"],thought:"Start from last non-leaf node (n/2-1) and heapify down. O(n) time complexity.",solution:{language:"cpp",code:`void heapify(int arr[], int n, int i) {
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest])
        largest = l;

    if (r < n && arr[r] > arr[largest])
        largest = r;

    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}

void buildHeap(int arr[], int n) {
    // Start from last non-leaf node
    int startIdx = (n / 2) - 1;
    for (int i = startIdx; i >= 0; i--) {
        heapify(arr, n, i);
    }
}`}},{id:2,title:"Find K Pairs with Smallest Sums",category:"Top K",difficulty:"Medium",tags:["Heap","Priority Queue"],thought:"Use max heap of size K. Push pairs, if sum < top sum, replace top.",solution:{language:"cpp",code:`struct mycompare {
    bool operator()(pair<int, int>& p1, pair<int, int>& p2) {
        return p1.first + p1.second < p2.first + p2.second;
    }
};

vector<vector<int>> kSmallestPairs(vector<int>& nums1, 
                                    vector<int>& nums2, int k) {
    vector<vector<int>> res;
    priority_queue<pair<int,int>, vector<pair<int, int>>, mycompare> pq;
    
    for (int i = 0; i < min((int)nums1.size(), k); i++) {
        for (int j = 0; j < min((int)nums2.size(), k); j++) {
            if (pq.size() < k) {
                pq.push(make_pair(nums1[i], nums2[j]));
            } else if (nums1[i] + nums2[j] < 
                       pq.top().first + pq.top().second) {
                pq.push(make_pair(nums1[i], nums2[j]));
                pq.pop();
            }
        }
    }
    
    while (!pq.empty()) {
        vector<int> v;
        v.push_back(pq.top().first);
        v.push_back(pq.top().second);
        res.push_back(v);
        pq.pop();
    }
    return res;
}`}},{id:3,title:"K-way Merge Pattern",category:"Patterns",difficulty:"Hard",tags:["Heap","Merge","K-way"],thought:"Insert first element of each array in min heap. Pop min, push next from same array.",solution:{language:"cpp",code:`// K-way Merge: Merge K sorted arrays
// Time: O(N log K) where N = total elements

vector<int> mergeKSortedArrays(vector<vector<int>>& arrays) {
    // {value, array_index, element_index}
    priority_queue<tuple<int,int,int>, 
                   vector<tuple<int,int,int>>,
                   greater<tuple<int,int,int>>> pq;
    
    // Insert first element of each array
    for (int i = 0; i < arrays.size(); i++) {
        if (!arrays[i].empty()) {
            pq.push({arrays[i][0], i, 0});
        }
    }
    
    vector<int> result;
    while (!pq.empty()) {
        auto [val, arr_idx, elem_idx] = pq.top();
        pq.pop();
        result.push_back(val);
        
        // Push next element from same array
        if (elem_idx + 1 < arrays[arr_idx].size()) {
            pq.push({arrays[arr_idx][elem_idx + 1], 
                     arr_idx, elem_idx + 1});
        }
    }
    return result;
}`}},{id:4,title:"Two Heaps - Find Median",category:"Patterns",difficulty:"Hard",tags:["Heap","Two Heaps","Median"],thought:"Use max heap for left half, min heap for right half. Balance sizes to get median.",solution:{language:"cpp",code:`// Two Heaps Pattern for Running Median
class MedianFinder {
    priority_queue<int> maxHeap; // left half
    priority_queue<int, vector<int>, greater<int>> minHeap; // right half
    
public:
    void addNum(int num) {
        // Add to max heap (left half)
        maxHeap.push(num);
        
        // Balance: largest of left <= smallest of right
        minHeap.push(maxHeap.top());
        maxHeap.pop();
        
        // Balance sizes: left can have at most 1 more
        if (minHeap.size() > maxHeap.size()) {
            maxHeap.push(minHeap.top());
            minHeap.pop();
        }
    }
    
    double findMedian() {
        if (maxHeap.size() > minHeap.size()) {
            return maxHeap.top();
        }
        return (maxHeap.top() + minHeap.top()) / 2.0;
    }
};`}},{id:5,title:"Top K Elements Pattern",category:"Patterns",difficulty:"Medium",tags:["Heap","Top K"],thought:"For top K largest: use min heap of size K. For K smallest: use max heap of size K.",solution:{language:"cpp",code:`// Top K Elements Pattern
// Time: O(N log K), Space: O(K)

// Find K largest elements
vector<int> findKLargest(vector<int>& nums, int k) {
    // Min heap of size K
    priority_queue<int, vector<int>, greater<int>> minHeap;
    
    for (int num : nums) {
        minHeap.push(num);
        if (minHeap.size() > k) {
            minHeap.pop(); // Remove smallest
        }
    }
    
    vector<int> result;
    while (!minHeap.empty()) {
        result.push_back(minHeap.top());
        minHeap.pop();
    }
    return result;
}

// Find K smallest elements
vector<int> findKSmallest(vector<int>& nums, int k) {
    // Max heap of size K
    priority_queue<int> maxHeap;
    
    for (int num : nums) {
        maxHeap.push(num);
        if (maxHeap.size() > k) {
            maxHeap.pop(); // Remove largest
        }
    }
    
    vector<int> result;
    while (!maxHeap.empty()) {
        result.push_back(maxHeap.top());
        maxHeap.pop();
    }
    return result;
}`}}],q=()=>{const[r,d]=n.useState(null),[i,m]=n.useState("All"),[o,c]=n.useState(""),u=e=>{d(r===e?null:e)},g=["All",...new Set(p.map(e=>e.category))],l=p.filter(e=>{const a=i==="All"||e.category===i,s=e.title.toLowerCase().includes(o.toLowerCase());return a&&s});return t.jsx("div",{className:"h-full overflow-y-auto bg-gray-900",children:t.jsxs("div",{className:"max-w-7xl mx-auto p-8 space-y-8",children:[t.jsxs("div",{className:"border-b border-gray-700 pb-6",children:[t.jsx("h1",{className:"text-4xl font-bold text-white mb-3",children:"Heap & Priority Queue"}),t.jsx("p",{className:"text-lg text-gray-400",children:"Master heap operations, K-way merge, two heaps pattern, and top K element problems."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:w.map((e,a)=>t.jsxs("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors group",children:[t.jsxs("div",{className:"flex items-start justify-between mb-2",children:[t.jsx("span",{className:"text-xs font-medium px-2 py-1 rounded bg-orange-900/30 text-orange-400 border border-orange-800/50",children:e.type}),t.jsx(x,{size:16,className:"text-gray-500 group-hover:text-white transition-colors"})]}),t.jsx("h3",{className:"text-white font-medium group-hover:text-orange-400 transition-colors",children:e.title})]},a))}),t.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-center justify-between bg-gray-800/50 p-4 rounded-xl border border-gray-700",children:[t.jsx("div",{className:"flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0",children:g.map(e=>t.jsx("button",{onClick:()=>m(e),className:`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${i===e?"bg-orange-600 text-white":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:e},e))}),t.jsx("input",{type:"text",placeholder:"Search problems...",value:o,onChange:e=>c(e.target.value),className:"w-full md:w-64 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500"})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-white mb-4 flex items-center gap-2",children:[t.jsx(h,{className:"text-orange-400"}),"Problems & Implementations (",l.length,")"]}),l.map(e=>t.jsxs("div",{className:"bg-gray-800 rounded-xl border border-gray-700 overflow-hidden transition-all duration-200 hover:border-gray-600",children:[t.jsxs("button",{onClick:()=>u(e.id),className:"w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-700/50 transition-colors",children:[t.jsxs("div",{className:"flex items-center gap-4 flex-1",children:[t.jsx("div",{className:`flex items-center justify-center w-8 h-8 rounded-lg font-bold text-sm border ${e.difficulty==="Easy"?"bg-green-900/30 text-green-400 border-green-800":e.difficulty==="Hard"?"bg-red-900/30 text-red-400 border-red-800":"bg-yellow-900/30 text-yellow-400 border-yellow-800"}`,children:e.id}),t.jsxs("div",{className:"flex-1",children:[t.jsxs("h3",{className:"text-lg font-semibold text-white mb-1 flex items-center gap-3",children:[e.title,e.difficulty&&t.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full border ${e.difficulty==="Easy"?"border-green-800 text-green-400":e.difficulty==="Hard"?"border-red-800 text-red-400":"border-yellow-800 text-yellow-400"}`,children:e.difficulty}),t.jsx("span",{className:"text-xs px-2 py-0.5 rounded bg-gray-700 text-gray-400",children:e.category})]}),t.jsx("div",{className:"flex flex-wrap gap-2",children:e.tags&&e.tags.map((a,s)=>t.jsx("span",{className:"text-xs text-gray-500 bg-gray-900 px-2 py-0.5 rounded",children:a},s))})]})]}),r===e.id?t.jsx(f,{className:"text-gray-400"}):t.jsx(y,{className:"text-gray-400"})]}),r===e.id&&t.jsxs("div",{className:"px-6 pb-6 pt-2 border-t border-gray-700 bg-gray-900/30",children:[e.thought&&t.jsxs("div",{className:"mb-6 bg-orange-900/10 border border-orange-800/30 p-4 rounded-lg",children:[t.jsxs("h4",{className:"text-sm font-semibold text-orange-400 mb-2 flex items-center gap-2",children:[t.jsx(b,{size:16}),"Approach"]}),t.jsx("p",{className:"text-gray-300 text-sm italic",children:e.thought})]}),e.solution&&t.jsxs("div",{children:[t.jsxs("h4",{className:"text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider flex items-center gap-2",children:[t.jsx(v,{size:16,className:"text-orange-500"}),"Implementation (",e.solution.language,")"]}),t.jsx(j,{language:e.solution.language,code:e.solution.code})]})]})]},e.id))]})]})})};export{q as default};
