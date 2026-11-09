import{j as t,a8 as x,a as p,l as f,m as y,a9 as b,N as w}from"./ui-l-wn3dQa.js";import{r as s}from"./vendor-C-RugAsD.js";import{C as v}from"./CodeBlock-CZ62hYHy.js";import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const j=[{title:"Binary Search 101",url:"https://leetcode.com/problems/binary-search/solutions/423162/binary-search-101/",type:"Guide"},{title:"Binary Search LeetCode MyList",url:"https://leetcode.com/problem-list/oclgn8us/",type:"Problem List"},{title:"Python Binary Search Template",url:"https://leetcode.com/discuss/study-guide/786126/Python-Powerful-Ultimate-Binary-Search-Template.-Solved-many-problems",type:"Guide"}],d=[{id:1,title:"Lower Bound",category:"Bounds",difficulty:"Easy",tags:["Binary Search","STL"],thought:"Returns first element >= target. If multiple equal values, returns first occurrence.",solution:{language:"cpp",code:`// lower_bound: first element NOT LESS than val (>= val)
// Returns iterator to first such value

// Example:
// x = 5
// A = 1, 4, 5, 5, 5, 6
// lower_bound(5) = index 2 (value 5)

// x = 6  
// B = 1, 4, 5, 5, 6, 7
// lower_bound(6) = index 4 (value 6)

// Implementation
int lower_bound_impl(vector<int>& arr, int target) {
    int lo = 0, hi = arr.size();
    
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (arr[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo; // First element >= target
}

// STL usage
auto it = lower_bound(arr.begin(), arr.end(), target);
int index = it - arr.begin();`}},{id:2,title:"Upper Bound",category:"Bounds",difficulty:"Easy",tags:["Binary Search","STL"],thought:"Returns first element > target. Useful for finding range of equal elements.",solution:{language:"cpp",code:`// upper_bound: first element GREATER than val (> val)
// Returns iterator to first such value

// Example:
// x = 5
// A = 1, 4, 5, 5, 5, 6
// upper_bound(5) = index 5 (value 6)

// x = 8
// B = 1, 4, 5, 5, 6, 7
// upper_bound(8) = index 6 (past end, not found)

// Implementation
int upper_bound_impl(vector<int>& arr, int target) {
    int lo = 0, hi = arr.size();
    
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (arr[mid] <= target) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo; // First element > target
}

// STL usage
auto it = upper_bound(arr.begin(), arr.end(), target);
int index = it - arr.begin();

// Count occurrences of target
int count = upper_bound(arr.begin(), arr.end(), target) 
          - lower_bound(arr.begin(), arr.end(), target);`}},{id:3,title:"Binary Search Template",category:"Template",difficulty:"Medium",tags:["Binary Search","Template"],thought:"Three key decisions: search space, condition, answer update. Template handles edge cases.",solution:{language:"cpp",code:`// Universal Binary Search Template
// Find minimum x such that condition(x) is true

int binarySearch(int lo, int hi) {
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (condition(mid)) {
            hi = mid;      // Mid might be answer, search left
        } else {
            lo = mid + 1;  // Mid is not answer, search right
        }
    }
    return lo;
}

// Alternative: Find maximum x such that condition(x) is true
int binarySearchMax(int lo, int hi) {
    while (lo < hi) {
        int mid = lo + (hi - lo + 1) / 2; // Note: +1 to avoid infinite loop
        if (condition(mid)) {
            lo = mid;      // Mid might be answer, search right
        } else {
            hi = mid - 1;  // Mid is not answer, search left
        }
    }
    return lo;
}

// Standard binary search for exact match
int binarySearchExact(vector<int>& arr, int target) {
    int lo = 0, hi = arr.size() - 1;
    
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -1; // Not found
}`}},{id:4,title:"Search in Rotated Sorted Array",category:"Classic",difficulty:"Medium",tags:["Binary Search","Rotated Array"],thought:"One half is always sorted. Check which half target is in and adjust search space.",solution:{language:"cpp",code:`int search(vector<int>& nums, int target) {
    int lo = 0, hi = nums.size() - 1;
    
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        
        if (nums[mid] == target) {
            return mid;
        }
        
        // Left half is sorted
        if (nums[lo] <= nums[mid]) {
            if (target >= nums[lo] && target < nums[mid]) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        // Right half is sorted
        else {
            if (target > nums[mid] && target <= nums[hi]) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
    }
    return -1;
}`}},{id:5,title:"Find Peak Element",category:"Classic",difficulty:"Medium",tags:["Binary Search","Peak"],thought:"If mid < mid+1, peak is on right. If mid > mid+1, peak is on left or at mid.",solution:{language:"cpp",code:`int findPeakElement(vector<int>& nums) {
    int lo = 0, hi = nums.size() - 1;
    
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        
        if (nums[mid] > nums[mid + 1]) {
            // Peak is on left side (including mid)
            hi = mid;
        } else {
            // Peak is on right side
            lo = mid + 1;
        }
    }
    return lo;
}`}},{id:6,title:"Binary Search on Answer",category:"Patterns",difficulty:"Hard",tags:["Binary Search","Optimization"],thought:"When answer is in a range and you can verify if x is valid, binary search on x.",solution:{language:"cpp",code:`// Pattern: Binary Search on Answer
// Use when: answer is in range [lo, hi] and you can check
// if a given answer x is valid in O(f(n))

// Example: Koko Eating Bananas
// Find minimum eating speed to finish all bananas in h hours
int minEatingSpeed(vector<int>& piles, int h) {
    int lo = 1;
    int hi = *max_element(piles.begin(), piles.end());
    
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        
        if (canFinish(piles, h, mid)) {
            hi = mid;  // Try to find smaller speed
        } else {
            lo = mid + 1;  // Need faster speed
        }
    }
    return lo;
}

bool canFinish(vector<int>& piles, int h, int speed) {
    long hours = 0;
    for (int pile : piles) {
        hours += (pile + speed - 1) / speed; // Ceiling division
    }
    return hours <= h;
}

// Similar problems:
// - Split Array Largest Sum
// - Capacity to Ship Packages
// - Allocate Minimum Pages`}}],E=()=>{const[r,c]=s.useState(null),[a,h]=s.useState("All"),[l,m]=s.useState(""),u=e=>{c(r===e?null:e)},g=["All",...new Set(d.map(e=>e.category))],o=d.filter(e=>{const i=a==="All"||e.category===a,n=e.title.toLowerCase().includes(l.toLowerCase());return i&&n});return t.jsx("div",{className:"h-full overflow-y-auto bg-gray-900",children:t.jsxs("div",{className:"max-w-7xl mx-auto p-8 space-y-8",children:[t.jsxs("div",{className:"border-b border-gray-700 pb-6",children:[t.jsx("h1",{className:"text-4xl font-bold text-white mb-3",children:"Binary Search"}),t.jsx("p",{className:"text-lg text-gray-400",children:"Master lower/upper bound, binary search templates, and binary search on answer patterns."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:j.map((e,i)=>t.jsxs("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-indigo-500 transition-colors group",children:[t.jsxs("div",{className:"flex items-start justify-between mb-2",children:[t.jsx("span",{className:"text-xs font-medium px-2 py-1 rounded bg-indigo-900/30 text-indigo-400 border border-indigo-800/50",children:e.type}),t.jsx(x,{size:16,className:"text-gray-500 group-hover:text-white transition-colors"})]}),t.jsx("h3",{className:"text-white font-medium group-hover:text-indigo-400 transition-colors",children:e.title})]},i))}),t.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-center justify-between bg-gray-800/50 p-4 rounded-xl border border-gray-700",children:[t.jsx("div",{className:"flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0",children:g.map(e=>t.jsx("button",{onClick:()=>h(e),className:`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${a===e?"bg-indigo-600 text-white":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:e},e))}),t.jsx("input",{type:"text",placeholder:"Search problems...",value:l,onChange:e=>m(e.target.value),className:"w-full md:w-64 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-white mb-4 flex items-center gap-2",children:[t.jsx(p,{className:"text-indigo-400"}),"Problems & Implementations (",o.length,")"]}),o.map(e=>t.jsxs("div",{className:"bg-gray-800 rounded-xl border border-gray-700 overflow-hidden transition-all duration-200 hover:border-gray-600",children:[t.jsxs("button",{onClick:()=>u(e.id),className:"w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-700/50 transition-colors",children:[t.jsxs("div",{className:"flex items-center gap-4 flex-1",children:[t.jsx("div",{className:`flex items-center justify-center w-8 h-8 rounded-lg font-bold text-sm border ${e.difficulty==="Easy"?"bg-green-900/30 text-green-400 border-green-800":e.difficulty==="Hard"?"bg-red-900/30 text-red-400 border-red-800":"bg-yellow-900/30 text-yellow-400 border-yellow-800"}`,children:e.id}),t.jsxs("div",{className:"flex-1",children:[t.jsxs("h3",{className:"text-lg font-semibold text-white mb-1 flex items-center gap-3",children:[e.title,e.difficulty&&t.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full border ${e.difficulty==="Easy"?"border-green-800 text-green-400":e.difficulty==="Hard"?"border-red-800 text-red-400":"border-yellow-800 text-yellow-400"}`,children:e.difficulty}),t.jsx("span",{className:"text-xs px-2 py-0.5 rounded bg-gray-700 text-gray-400",children:e.category})]}),t.jsx("div",{className:"flex flex-wrap gap-2",children:e.tags&&e.tags.map((i,n)=>t.jsx("span",{className:"text-xs text-gray-500 bg-gray-900 px-2 py-0.5 rounded",children:i},n))})]})]}),r===e.id?t.jsx(f,{className:"text-gray-400"}):t.jsx(y,{className:"text-gray-400"})]}),r===e.id&&t.jsxs("div",{className:"px-6 pb-6 pt-2 border-t border-gray-700 bg-gray-900/30",children:[e.thought&&t.jsxs("div",{className:"mb-6 bg-indigo-900/10 border border-indigo-800/30 p-4 rounded-lg",children:[t.jsxs("h4",{className:"text-sm font-semibold text-indigo-400 mb-2 flex items-center gap-2",children:[t.jsx(b,{size:16}),"Approach"]}),t.jsx("p",{className:"text-gray-300 text-sm italic",children:e.thought})]}),e.solution&&t.jsxs("div",{children:[t.jsxs("h4",{className:"text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider flex items-center gap-2",children:[t.jsx(w,{size:16,className:"text-indigo-500"}),"Implementation (",e.solution.language,")"]}),t.jsx(v,{language:e.solution.language,code:e.solution.code})]})]})]},e.id))]})]})})};export{E as default};
