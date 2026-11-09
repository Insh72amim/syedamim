import{j as t,a8 as p,a as f,l as x,m as w,a9 as y,N as b}from"./ui-l-wn3dQa.js";import{r as a}from"./vendor-C-RugAsD.js";import{C as j}from"./CodeBlock-CZ62hYHy.js";import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const v=[{title:"Substring Problem Patterns",url:"https://leetcode.com/problems/minimum-window-substring/solutions/26808/Here-is-a-10-line-template-that-can-solve-most-substring-problems/",type:"Guide"},{title:"Sliding Window Patterns",url:"https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/1175088/C++-Maximum-Sliding-Window-Cheatsheet-Template/",type:"Guide"},{title:"String Question Patterns",url:"https://leetcode.com/discuss/study-guide/2001789/Collections-of-Important-String-questions-Pattern",type:"Guide"}],d=[{id:1,title:"Sliding Window Template",category:"Sliding Window",difficulty:"Medium",tags:["Sliding Window","Two Pointers"],thought:"Expand right to grow window, contract left when condition violated. Track optimal answer.",solution:{language:"cpp",code:`// Sliding Window Template for Substring Problems
// Time: O(n), Space: O(k) where k = charset size

int slidingWindowTemplate(string s) {
    unordered_map<char, int> map;
    int left = 0, right = 0;
    int counter = 0; // Check condition
    int result = 0;
    
    while (right < s.size()) {
        char c = s[right];
        // Update counter/map for expansion
        map[c]++;
        // if (condition) counter++;
        right++;
        
        // Contract window
        while (/* window needs shrink */) {
            char d = s[left];
            // Update counter/map for contraction
            map[d]--;
            // if (condition) counter--;
            left++;
        }
        
        // Update result
        result = max(result, right - left);
    }
    return result;
}

// Example: Longest Substring Without Repeating Characters
int lengthOfLongestSubstring(string s) {
    unordered_map<char, int> freq;
    int left = 0, result = 0;
    
    for (int right = 0; right < s.size(); right++) {
        freq[s[right]]++;
        
        // Shrink window while duplicate exists
        while (freq[s[right]] > 1) {
            freq[s[left]]--;
            left++;
        }
        
        result = max(result, right - left + 1);
    }
    return result;
}`}},{id:2,title:"Minimum Window Substring",category:"Sliding Window",difficulty:"Hard",tags:["Sliding Window","Hash Map"],thought:"Expand until all chars found, then contract to find minimum. Track characters needed.",solution:{language:"cpp",code:`string minWindow(string s, string t) {
    unordered_map<char, int> need, have;
    
    // Count required characters
    for (char c : t) need[c]++;
    
    int required = need.size();
    int formed = 0;
    int left = 0;
    int minLen = INT_MAX, minStart = 0;
    
    for (int right = 0; right < s.size(); right++) {
        char c = s[right];
        have[c]++;
        
        // Check if current character satisfies requirement
        if (need.count(c) && have[c] == need[c]) {
            formed++;
        }
        
        // Contract window
        while (formed == required) {
            // Update result
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }
            
            char d = s[left];
            have[d]--;
            if (need.count(d) && have[d] < need[d]) {
                formed--;
            }
            left++;
        }
    }
    
    return minLen == INT_MAX ? "" : s.substr(minStart, minLen);
}`}},{id:3,title:"Regular Expression Matching",category:"Pattern Matching",difficulty:"Hard",tags:["DP","Regex"],thought:"DP where dp[i][j] = s[0..i-1] matches p[0..j-1]. Handle . and * specially.",solution:{language:"cpp",code:`bool isMatch(string s, string p) {
    int n = s.size(), m = p.size();
    vector<vector<bool>> dp(n + 1, vector<bool>(m + 1, false));
    
    dp[0][0] = true;
    
    // Handle patterns like a*, a*b*, a*b*c* that match empty string
    for (int i = 0; i < m; i++) {
        if (p[i] == '*' && dp[0][i-1]) {
            dp[0][i + 1] = true;
        }
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            // Direct match or '.'
            if (s[i] == p[j] || p[j] == '.') {
                dp[i + 1][j + 1] = dp[i][j];
            }
            // Handle '*'
            if (p[j] == '*') {
                // Zero occurrences
                if (p[j - 1] != s[i] && p[j - 1] != '.') {
                    dp[i + 1][j + 1] = dp[i + 1][j - 1];
                } else {
                    // Zero, one, or more occurrences
                    dp[i + 1][j + 1] = dp[i + 1][j - 1] ||  // zero
                                       dp[i + 1][j] ||      // one
                                       dp[i][j + 1];        // more
                }
            }
        }
    }
    return dp[n][m];
}`}},{id:4,title:"Expression Tree from Postfix",category:"Expression",difficulty:"Hard",tags:["Stack","Tree","Expression"],thought:"Push operands as nodes. On operator, pop two nodes as children, push new node.",solution:{language:"cpp",code:`class Node {
public:
    virtual ~Node() {};
    virtual int evaluate() const = 0;
protected:
    string val;
    Node *left;
    Node *right;
};

class MyNode : public Node {
public:
    MyNode(string val) {
        this->val = val;
        this->left = nullptr;
        this->right = nullptr;
    }

    MyNode(string val, Node *left, Node *right) {
        this->val = val;
        this->left = left;
        this->right = right;
    }

    int evaluate() const {
        if (!(val == "+" || val == "-" || val == "*" || val == "/"))
            return stoi(val);
        
        int leftVal = left->evaluate();
        int rightVal = right->evaluate();
        
        if (val == "+") return leftVal + rightVal;
        if (val == "-") return leftVal - rightVal;
        if (val == "*") return leftVal * rightVal;
        if (val == "/") return leftVal / rightVal;
        return 0;
    }
};

class TreeBuilder {
public:
    Node* buildTree(vector<string>& postfix) {
        stack<MyNode*> stk;
        
        for (auto& s : postfix) {
            MyNode* node;
            if (s == "+" || s == "-" || s == "*" || s == "/") {
                auto right = stk.top(); stk.pop();
                auto left = stk.top(); stk.pop();
                node = new MyNode(s, left, right);
            } else {
                node = new MyNode(s);
            }
            stk.push(node);
        }
        return stk.top();
    }
};`}},{id:5,title:"KMP Pattern Matching",category:"Pattern Matching",difficulty:"Hard",tags:["KMP","String Matching"],thought:"Build failure function for pattern. Use it to skip comparisons on mismatch.",solution:{language:"cpp",code:`// KMP Algorithm - O(n + m) time
vector<int> computeLPS(string& pattern) {
    int m = pattern.size();
    vector<int> lps(m, 0);
    
    int len = 0;
    int i = 1;
    
    while (i < m) {
        if (pattern[i] == pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len != 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

vector<int> KMPSearch(string& text, string& pattern) {
    int n = text.size(), m = pattern.size();
    vector<int> lps = computeLPS(pattern);
    vector<int> matches;
    
    int i = 0; // text index
    int j = 0; // pattern index
    
    while (i < n) {
        if (text[i] == pattern[j]) {
            i++;
            j++;
        }
        
        if (j == m) {
            matches.push_back(i - j);
            j = lps[j - 1];
        } else if (i < n && text[i] != pattern[j]) {
            if (j != 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    return matches;
}`}},{id:6,title:"Two Pointers - Fast & Slow",category:"Patterns",difficulty:"Medium",tags:["Two Pointers","Fast Slow"],thought:"Slow pointer processes, fast pointer explores. Common for in-place modifications.",solution:{language:"cpp",code:`// Two Pointers Pattern: Fast & Slow

// Example 1: Remove duplicates from sorted array
int removeDuplicates(vector<int>& nums) {
    if (nums.empty()) return 0;
    
    int slow = 0;
    for (int fast = 1; fast < nums.size(); fast++) {
        if (nums[fast] != nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
}

// Example 2: Move zeros to end
void moveZeroes(vector<int>& nums) {
    int slow = 0;
    for (int fast = 0; fast < nums.size(); fast++) {
        if (nums[fast] != 0) {
            swap(nums[slow], nums[fast]);
            slow++;
        }
    }
}

// Example 3: Linked List cycle detection
bool hasCycle(ListNode* head) {
    ListNode *slow = head, *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}`}}],C=()=>{const[r,c]=a.useState(null),[s,u]=a.useState("All"),[l,g]=a.useState(""),m=e=>{c(r===e?null:e)},h=["All",...new Set(d.map(e=>e.category))],o=d.filter(e=>{const i=s==="All"||e.category===s,n=e.title.toLowerCase().includes(l.toLowerCase());return i&&n});return t.jsx("div",{className:"h-full overflow-y-auto bg-gray-900",children:t.jsxs("div",{className:"max-w-7xl mx-auto p-8 space-y-8",children:[t.jsxs("div",{className:"border-b border-gray-700 pb-6",children:[t.jsx("h1",{className:"text-4xl font-bold text-white mb-3",children:"Strings"}),t.jsx("p",{className:"text-lg text-gray-400",children:"Master sliding window, pattern matching, regex, and string manipulation algorithms."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:v.map((e,i)=>t.jsxs("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-emerald-500 transition-colors group",children:[t.jsxs("div",{className:"flex items-start justify-between mb-2",children:[t.jsx("span",{className:"text-xs font-medium px-2 py-1 rounded bg-emerald-900/30 text-emerald-400 border border-emerald-800/50",children:e.type}),t.jsx(p,{size:16,className:"text-gray-500 group-hover:text-white transition-colors"})]}),t.jsx("h3",{className:"text-white font-medium group-hover:text-emerald-400 transition-colors",children:e.title})]},i))}),t.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-center justify-between bg-gray-800/50 p-4 rounded-xl border border-gray-700",children:[t.jsx("div",{className:"flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0",children:h.map(e=>t.jsx("button",{onClick:()=>u(e),className:`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${s===e?"bg-emerald-600 text-white":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:e},e))}),t.jsx("input",{type:"text",placeholder:"Search problems...",value:l,onChange:e=>g(e.target.value),className:"w-full md:w-64 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500"})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-white mb-4 flex items-center gap-2",children:[t.jsx(f,{className:"text-emerald-400"}),"Problems & Implementations (",o.length,")"]}),o.map(e=>t.jsxs("div",{className:"bg-gray-800 rounded-xl border border-gray-700 overflow-hidden transition-all duration-200 hover:border-gray-600",children:[t.jsxs("button",{onClick:()=>m(e.id),className:"w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-700/50 transition-colors",children:[t.jsxs("div",{className:"flex items-center gap-4 flex-1",children:[t.jsx("div",{className:`flex items-center justify-center w-8 h-8 rounded-lg font-bold text-sm border ${e.difficulty==="Easy"?"bg-green-900/30 text-green-400 border-green-800":e.difficulty==="Hard"?"bg-red-900/30 text-red-400 border-red-800":"bg-yellow-900/30 text-yellow-400 border-yellow-800"}`,children:e.id}),t.jsxs("div",{className:"flex-1",children:[t.jsxs("h3",{className:"text-lg font-semibold text-white mb-1 flex items-center gap-3",children:[e.title,e.difficulty&&t.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full border ${e.difficulty==="Easy"?"border-green-800 text-green-400":e.difficulty==="Hard"?"border-red-800 text-red-400":"border-yellow-800 text-yellow-400"}`,children:e.difficulty}),t.jsx("span",{className:"text-xs px-2 py-0.5 rounded bg-gray-700 text-gray-400",children:e.category})]}),t.jsx("div",{className:"flex flex-wrap gap-2",children:e.tags&&e.tags.map((i,n)=>t.jsx("span",{className:"text-xs text-gray-500 bg-gray-900 px-2 py-0.5 rounded",children:i},n))})]})]}),r===e.id?t.jsx(x,{className:"text-gray-400"}):t.jsx(w,{className:"text-gray-400"})]}),r===e.id&&t.jsxs("div",{className:"px-6 pb-6 pt-2 border-t border-gray-700 bg-gray-900/30",children:[e.thought&&t.jsxs("div",{className:"mb-6 bg-emerald-900/10 border border-emerald-800/30 p-4 rounded-lg",children:[t.jsxs("h4",{className:"text-sm font-semibold text-emerald-400 mb-2 flex items-center gap-2",children:[t.jsx(y,{size:16}),"Approach"]}),t.jsx("p",{className:"text-gray-300 text-sm italic",children:e.thought})]}),e.solution&&t.jsxs("div",{children:[t.jsxs("h4",{className:"text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider flex items-center gap-2",children:[t.jsx(b,{size:16,className:"text-emerald-500"}),"Implementation (",e.solution.language,")"]}),t.jsx(j,{language:e.solution.language,code:e.solution.code})]})]})]},e.id))]})]})})};export{C as default};
