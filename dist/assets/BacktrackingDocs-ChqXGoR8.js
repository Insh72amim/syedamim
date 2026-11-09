import{j as t,a8 as b,a as x,l as h,m as f,a9 as v,N as k}from"./ui-l-wn3dQa.js";import{r as a}from"./vendor-C-RugAsD.js";import{C as y}from"./CodeBlock-CZ62hYHy.js";import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const j=[{title:"Backtracking Patterns - LeetCode",url:"https://leetcode.com/problems/permutations/solutions/18239/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partioning)/",type:"Guide"},{title:"Backtracking MyList",url:"https://leetcode.com/problem-list/ogcizgl5/",type:"Problem List"},{title:"Subsets Pattern",url:"https://leetcode.com/problems/subsets/solutions/27281/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partitioning)/",type:"Guide"}],l=[{id:1,title:"Permutations Template",category:"Permutation",difficulty:"Medium",tags:["Backtracking","Permutation"],thought:"Try each unused element at current position. Mark used, recurse, then backtrack.",solution:{language:"cpp",code:`// Generate all permutations
vector<int> permutation;
vector<bool> chosen;
int n;

void search() {
    if (permutation.size() == n) {
        // Process permutation here
        return;
    }
    
    for (int i = 0; i < n; i++) {
        if (chosen[i]) continue;
        
        chosen[i] = true;
        permutation.push_back(i);
        
        search();
        
        chosen[i] = false;
        permutation.pop_back();
    }
}

// Usage
void generatePermutations(int size) {
    n = size;
    chosen.assign(n, false);
    search();
}`}},{id:2,title:"Subsets Template",category:"Subset",difficulty:"Medium",tags:["Backtracking","Subset","Power Set"],thought:"For each element, either include or exclude it. Generates 2^n subsets.",solution:{language:"cpp",code:`// Generate all subsets (power set)
vector<vector<int>> result;
vector<int> current;

void generateSubsets(vector<int>& nums, int index) {
    result.push_back(current);
    
    for (int i = index; i < nums.size(); i++) {
        current.push_back(nums[i]);
        generateSubsets(nums, i + 1);
        current.pop_back();
    }
}

// Alternative: Bit manipulation approach
vector<vector<int>> subsets(vector<int>& nums) {
    int n = nums.size();
    int total = 1 << n; // 2^n subsets
    vector<vector<int>> result;
    
    for (int mask = 0; mask < total; mask++) {
        vector<int> subset;
        for (int i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                subset.push_back(nums[i]);
            }
        }
        result.push_back(subset);
    }
    return result;
}`}},{id:3,title:"Combination Sum Template",category:"Combination",difficulty:"Medium",tags:["Backtracking","Combination"],thought:"Include element and try again with same element (if allowed) or move to next.",solution:{language:"cpp",code:`// Combination Sum - elements can be reused
void combinationSum(vector<int>& candidates, int target, 
                    int index, vector<int>& current, 
                    vector<vector<int>>& result) {
    if (target == 0) {
        result.push_back(current);
        return;
    }
    if (target < 0) return;
    
    for (int i = index; i < candidates.size(); i++) {
        current.push_back(candidates[i]);
        // Pass i (not i+1) to allow reuse
        combinationSum(candidates, target - candidates[i], 
                       i, current, result);
        current.pop_back();
    }
}

// Combination Sum II - elements used once, skip duplicates
void combinationSum2(vector<int>& candidates, int target,
                     int index, vector<int>& current,
                     vector<vector<int>>& result) {
    if (target == 0) {
        result.push_back(current);
        return;
    }
    
    for (int i = index; i < candidates.size(); i++) {
        // Skip duplicates
        if (i > index && candidates[i] == candidates[i-1]) 
            continue;
        if (candidates[i] > target) break;
        
        current.push_back(candidates[i]);
        combinationSum2(candidates, target - candidates[i],
                        i + 1, current, result);
        current.pop_back();
    }
}`}},{id:4,title:"Palindrome Partitioning",category:"Partition",difficulty:"Medium",tags:["Backtracking","Palindrome"],thought:"Try all partition points. If prefix is palindrome, recurse on suffix.",solution:{language:"cpp",code:`bool isPalindrome(string& s, int l, int r) {
    while (l < r) {
        if (s[l++] != s[r--]) return false;
    }
    return true;
}

void partition(string& s, int start, vector<string>& current,
               vector<vector<string>>& result) {
    if (start >= s.size()) {
        result.push_back(current);
        return;
    }
    
    for (int end = start; end < s.size(); end++) {
        if (isPalindrome(s, start, end)) {
            current.push_back(s.substr(start, end - start + 1));
            partition(s, end + 1, current, result);
            current.pop_back();
        }
    }
}

vector<vector<string>> partition(string s) {
    vector<vector<string>> result;
    vector<string> current;
    partition(s, 0, current, result);
    return result;
}`}},{id:5,title:"N-Queens",category:"Classic",difficulty:"Hard",tags:["Backtracking","Chess"],thought:"Place queen row by row. Check column, diagonal conflicts before placing.",solution:{language:"cpp",code:`bool isSafe(vector<string>& board, int row, int col, int n) {
    // Check column
    for (int i = 0; i < row; i++)
        if (board[i][col] == 'Q') return false;
    
    // Check upper-left diagonal
    for (int i = row-1, j = col-1; i >= 0 && j >= 0; i--, j--)
        if (board[i][j] == 'Q') return false;
    
    // Check upper-right diagonal
    for (int i = row-1, j = col+1; i >= 0 && j < n; i--, j++)
        if (board[i][j] == 'Q') return false;
    
    return true;
}

void solve(int row, int n, vector<string>& board,
           vector<vector<string>>& result) {
    if (row == n) {
        result.push_back(board);
        return;
    }
    
    for (int col = 0; col < n; col++) {
        if (isSafe(board, row, col, n)) {
            board[row][col] = 'Q';
            solve(row + 1, n, board, result);
            board[row][col] = '.';
        }
    }
}

vector<vector<string>> solveNQueens(int n) {
    vector<vector<string>> result;
    vector<string> board(n, string(n, '.'));
    solve(0, n, board, result);
    return result;
}`}},{id:6,title:"Longest Increasing Subsequence",category:"DP + Backtracking",difficulty:"Medium",tags:["LIS","DP"],thought:"DP: dp[i] = max LIS ending at i. For each j < i, if nums[i] > nums[j], update.",solution:{language:"cpp",code:`// O(n²) DP approach
int lengthOfLIS(vector<int>& nums) {
    int n = nums.size();
    vector<int> dp(n, 1);
    
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < i; ++j) {
            if (nums[i] > nums[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
            }
        }
    }
    return *max_element(dp.begin(), dp.end());
}

// O(n log n) Binary Search approach
int lengthOfLIS_optimized(vector<int>& nums) {
    vector<int> tails; // tails[i] = smallest tail for LIS of length i+1
    
    for (int num : nums) {
        auto it = lower_bound(tails.begin(), tails.end(), num);
        if (it == tails.end()) {
            tails.push_back(num);
        } else {
            *it = num;
        }
    }
    return tails.size();
}`}}],_=()=>{const[i,u]=a.useState(null),[s,d]=a.useState("All"),[o,g]=a.useState(""),m=e=>{u(i===e?null:e)},p=["All",...new Set(l.map(e=>e.category))],c=l.filter(e=>{const r=s==="All"||e.category===s,n=e.title.toLowerCase().includes(o.toLowerCase());return r&&n});return t.jsx("div",{className:"h-full overflow-y-auto bg-gray-900",children:t.jsxs("div",{className:"max-w-7xl mx-auto p-8 space-y-8",children:[t.jsxs("div",{className:"border-b border-gray-700 pb-6",children:[t.jsx("h1",{className:"text-4xl font-bold text-white mb-3",children:"Backtracking"}),t.jsx("p",{className:"text-lg text-gray-400",children:"Master permutations, combinations, subsets, and classic backtracking problems like N-Queens."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:j.map((e,r)=>t.jsxs("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-pink-500 transition-colors group",children:[t.jsxs("div",{className:"flex items-start justify-between mb-2",children:[t.jsx("span",{className:"text-xs font-medium px-2 py-1 rounded bg-pink-900/30 text-pink-400 border border-pink-800/50",children:e.type}),t.jsx(b,{size:16,className:"text-gray-500 group-hover:text-white transition-colors"})]}),t.jsx("h3",{className:"text-white font-medium group-hover:text-pink-400 transition-colors",children:e.title})]},r))}),t.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-center justify-between bg-gray-800/50 p-4 rounded-xl border border-gray-700",children:[t.jsx("div",{className:"flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0",children:p.map(e=>t.jsx("button",{onClick:()=>d(e),className:`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${s===e?"bg-pink-600 text-white":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:e},e))}),t.jsx("input",{type:"text",placeholder:"Search problems...",value:o,onChange:e=>g(e.target.value),className:"w-full md:w-64 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-pink-500"})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-white mb-4 flex items-center gap-2",children:[t.jsx(x,{className:"text-pink-400"}),"Problems & Implementations (",c.length,")"]}),c.map(e=>t.jsxs("div",{className:"bg-gray-800 rounded-xl border border-gray-700 overflow-hidden transition-all duration-200 hover:border-gray-600",children:[t.jsxs("button",{onClick:()=>m(e.id),className:"w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-700/50 transition-colors",children:[t.jsxs("div",{className:"flex items-center gap-4 flex-1",children:[t.jsx("div",{className:`flex items-center justify-center w-8 h-8 rounded-lg font-bold text-sm border ${e.difficulty==="Easy"?"bg-green-900/30 text-green-400 border-green-800":e.difficulty==="Hard"?"bg-red-900/30 text-red-400 border-red-800":"bg-yellow-900/30 text-yellow-400 border-yellow-800"}`,children:e.id}),t.jsxs("div",{className:"flex-1",children:[t.jsxs("h3",{className:"text-lg font-semibold text-white mb-1 flex items-center gap-3",children:[e.title,e.difficulty&&t.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full border ${e.difficulty==="Easy"?"border-green-800 text-green-400":e.difficulty==="Hard"?"border-red-800 text-red-400":"border-yellow-800 text-yellow-400"}`,children:e.difficulty}),t.jsx("span",{className:"text-xs px-2 py-0.5 rounded bg-gray-700 text-gray-400",children:e.category})]}),t.jsx("div",{className:"flex flex-wrap gap-2",children:e.tags&&e.tags.map((r,n)=>t.jsx("span",{className:"text-xs text-gray-500 bg-gray-900 px-2 py-0.5 rounded",children:r},n))})]})]}),i===e.id?t.jsx(h,{className:"text-gray-400"}):t.jsx(f,{className:"text-gray-400"})]}),i===e.id&&t.jsxs("div",{className:"px-6 pb-6 pt-2 border-t border-gray-700 bg-gray-900/30",children:[e.thought&&t.jsxs("div",{className:"mb-6 bg-pink-900/10 border border-pink-800/30 p-4 rounded-lg",children:[t.jsxs("h4",{className:"text-sm font-semibold text-pink-400 mb-2 flex items-center gap-2",children:[t.jsx(v,{size:16}),"Approach"]}),t.jsx("p",{className:"text-gray-300 text-sm italic",children:e.thought})]}),e.solution&&t.jsxs("div",{children:[t.jsxs("h4",{className:"text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider flex items-center gap-2",children:[t.jsx(k,{size:16,className:"text-pink-500"}),"Implementation (",e.solution.language,")"]}),t.jsx(y,{language:e.solution.language,code:e.solution.code})]})]})]},e.id))]})]})})};export{_ as default};
