import{j as t,a8 as g,a as m,l as f,m as y,a9 as b,N as v}from"./ui-l-wn3dQa.js";import{r as a}from"./vendor-C-RugAsD.js";import{C as k}from"./CodeBlock-CZ62hYHy.js";import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const w=[{title:"Stack and Queue LeetCode MyList",url:"https://leetcode.com/problem-list/o40gdw7d/",type:"Problem List"},{title:"Monotonic Stack Patterns",url:"https://leetcode.com/discuss/study-guide/2347639/A-comprehensive-guide-and-template-for-monotonic-stack-based-problems",type:"Guide"}],l=[{id:1,title:"Stack Implementation",category:"Implementation",difficulty:"Easy",tags:["Stack","Basic"],thought:"Use array with top pointer. Push increments top, pop decrements. Check overflow/underflow.",solution:{language:"cpp",code:`#define MAX 100000

class Stack {
    int top;
public:
    int a[MAX];
    Stack() { top = -1; }
    
    bool push(int x) {
        if (top > MAX - 1) return false;
        a[++top] = x;
        return true;
    }
    
    bool isEmpty() {
        return top < 0;
    }
    
    int pop() {
        if (top < 0) return -1;
        return a[top--];
    }
    
    int peek() {
        if (top < 0) return -1;
        return a[top];
    }
};`}},{id:2,title:"Largest Rectangle in Histogram",category:"Monotonic Stack",difficulty:"Hard",tags:["Stack","Monotonic"],thought:"For each bar, find left and right boundaries using monotonic stack. Area = height × width.",solution:{language:"cpp",code:`int largestRectangleArea(vector<int>& h) {
    int n = h.size();
    vector<int> vl(n, -1), vr(n, n);

    stack<int> s;
    // Find left boundary for each bar
    for (int i = 0; i < n; i++) {
        while (s.size() > 0 && h[s.top()] >= h[i]) 
            s.pop();
        vl[i] = s.size() == 0 ? -1 : s.top();
        s.push(i);
    }
    
    while (s.size() > 0) s.pop();
    
    // Find right boundary for each bar
    for (int i = n - 1; i >= 0; i--) {
        while (s.size() > 0 && h[s.top()] >= h[i]) 
            s.pop();
        vr[i] = s.size() == 0 ? n : s.top();
        s.push(i);
    }
    
    int area = INT_MIN;
    for (int i = 0; i < n; i++) {
        int x = vl[i], y = vr[i];
        x++; y--;
        int ta = h[i] * (y - x + 1);
        area = max(area, ta);
    }
    
    return area;
}`}},{id:3,title:"Expression Evaluator (Postfix)",category:"Expression",difficulty:"Medium",tags:["Stack","Expression"],thought:"For postfix: push operands, on operator pop two operands, compute, push result.",solution:{language:"cpp",code:`// Postfix Evaluator
// Given expression = 5 3 2 3 ^ 5 - 7 -3 * + * -

// Process: Use stack of values
// Stack trace:
// 5
// 5 3
// 5 3 2
// 5 3 2 3
// op = ^: val2 = pop() = 3, val1 = pop() = 2
//         val = 2^3 = 8, push(8)
// 5 3 8
// ... continue for all operators

int evaluatePostfix(string expr) {
    stack<int> st;
    for (int i = 0; i < expr.size(); i++) {
        if (expr[i] == ' ') continue;
        
        if (isdigit(expr[i])) {
            int num = 0;
            while (i < expr.size() && isdigit(expr[i])) {
                num = num * 10 + (expr[i] - '0');
                i++;
            }
            i--;
            st.push(num);
        } else {
            int val2 = st.top(); st.pop();
            int val1 = st.top(); st.pop();
            switch (expr[i]) {
                case '+': st.push(val1 + val2); break;
                case '-': st.push(val1 - val2); break;
                case '*': st.push(val1 * val2); break;
                case '/': st.push(val1 / val2); break;
                case '^': st.push(pow(val1, val2)); break;
            }
        }
    }
    return st.top();
}`}},{id:4,title:"Infix Expression Evaluator",category:"Expression",difficulty:"Hard",tags:["Stack","Expression","Parsing"],thought:"Use two stacks: operands and operators. Handle precedence and parentheses.",solution:{language:"cpp",code:`bool delim(char c) { return c == ' '; }

bool is_op(char c) {
    return c == '+' || c == '-' || c == '*' || c == '/';
}

int priority(char op) {
    if (op == '+' || op == '-') return 1;
    if (op == '*' || op == '/') return 2;
    return -1;
}

void process_op(stack<int>& st, char op) {
    int r = st.top(); st.pop();
    int l = st.top(); st.pop();
    switch (op) {
        case '+': st.push(l + r); break;
        case '-': st.push(l - r); break;
        case '*': st.push(l * r); break;
        case '/': st.push(l / r); break;
    }
}

int evaluate(string& s) {
    stack<int> st;
    stack<char> op;
    
    for (int i = 0; i < s.size(); i++) {
        if (delim(s[i])) continue;

        if (s[i] == '(') {
            op.push('(');
        } else if (s[i] == ')') {
            while (op.top() != '(') {
                process_op(st, op.top());
                op.pop();
            }
            op.pop();
        } else if (is_op(s[i])) {
            char cur_op = s[i];
            while (!op.empty() && priority(op.top()) >= priority(cur_op)) {
                process_op(st, op.top());
                op.pop();
            }
            op.push(cur_op);
        } else {
            int number = 0;
            while (i < s.size() && isalnum(s[i]))
                number = number * 10 + s[i++] - '0';
            --i;
            st.push(number);
        }
    }

    while (!op.empty()) {
        process_op(st, op.top());
        op.pop();
    }
    return st.top();
}`}},{id:5,title:"Infix to Postfix Conversion",category:"Expression",difficulty:"Medium",tags:["Stack","Expression","Conversion"],thought:"Output operands directly. Push operators to stack respecting precedence. Pop on ) or end.",solution:{language:"cpp",code:`bool is_op(char c) {
    return c == '^' || c == '-' || c == '+' || c == '*' || c == '/';
}

int prio(char op) {
    if (op == '^') return 3;
    if (op == '*' || op == '/') return 2;
    if (op == '+' || op == '-') return 1;
    return 0;
}

string infixToPostfix(string s) {
    stack<char> st;
    string res = "";
    
    for (int i = 0; i < s.size(); i++) {
        if (s[i] == ' ') continue;

        if (s[i] == '(') {
            st.push(s[i]);
        } else if (s[i] == ')') {
            while (!st.empty() && st.top() != '(') {
                res.push_back(st.top());
                st.pop();
            }
            st.pop(); // Remove '('
        } else if (is_op(s[i])) {
            while (!st.empty() && prio(s[i]) <= prio(st.top())) {
                res.push_back(st.top());
                st.pop();
            }
            st.push(s[i]);
        } else {
            res.push_back(s[i]); // Operand
        }
    }

    while (!st.empty()) {
        res.push_back(st.top());
        st.pop();
    }
    return res;
}`}},{id:6,title:"Sliding Window Maximum",category:"Monotonic Stack",difficulty:"Hard",tags:["Deque","Sliding Window"],thought:"Use monotonic deque. Front has max. Remove smaller elements from back, expired from front.",solution:{language:"cpp",code:`vector<int> maxSlidingWindow(int *arr, int n, int k) {
    deque<int> slide;
    vector<int> vec;
    
    for (int i = 0; i < n; i++) {
        // Remove smaller elements from back
        while (!slide.empty() && arr[slide.back()] <= arr[i]) 
            slide.pop_back();
        
        slide.push_back(i);
        
        // Remove expired elements from front
        if (i - k == slide.front()) 
            slide.pop_front();
        
        // Window is complete
        if (i >= k - 1) 
            vec.push_back(arr[slide.front()]);
    }
    return vec;
}`}},{id:7,title:"Parenthesis Checker",category:"Classic",difficulty:"Easy",tags:["Stack","Brackets"],thought:"Push opening brackets, pop on closing. Check if popped bracket matches current.",solution:{language:"cpp",code:`bool isValid(string x) {
    stack<char> s;
    s.push(x[0]);
    unordered_map<char, int> m;
    m['('] = -1; m[')'] = 1;
    m['{'] = -2; m['}'] = 2;
    m['['] = -3; m[']'] = 3;
    
    for (int i = 1; i < x.length(); i++) {
        if (!s.empty()) {
            int a = m[s.top()], b = m[x[i]];
            if (a > 0) {
                return false;
            } else {
                if (a + b == 0) 
                    s.pop();
                else if (b > 0) 
                    return false;
                else 
                    s.push(x[i]);
            }
        } else {
            s.push(x[i]);
        }
    }
    return s.empty();
}`}},{id:8,title:"Min Heap Priority Queue",category:"STL",difficulty:"Easy",tags:["Priority Queue","Heap"],thought:"STL priority_queue is max heap by default. Use greater<int> for min heap.",solution:{language:"cpp",code:`// Default max heap
priority_queue<int> maxHeap;

// Min heap using greater comparator
priority_queue<int, vector<int>, greater<int>> minHeap;

// Usage
minHeap.push(5);
minHeap.push(3);
minHeap.push(8);

cout << minHeap.top(); // 3 (smallest)
minHeap.pop();
cout << minHeap.top(); // 5`}}],E=()=>{const[i,c]=a.useState(null),[r,d]=a.useState("All"),[n,u]=a.useState(""),h=e=>{c(i===e?null:e)},x=["All",...new Set(l.map(e=>e.category))],p=l.filter(e=>{const s=r==="All"||e.category===r,o=e.title.toLowerCase().includes(n.toLowerCase());return s&&o});return t.jsx("div",{className:"h-full overflow-y-auto bg-gray-900",children:t.jsxs("div",{className:"max-w-7xl mx-auto p-8 space-y-8",children:[t.jsxs("div",{className:"border-b border-gray-700 pb-6",children:[t.jsx("h1",{className:"text-4xl font-bold text-white mb-3",children:"Stack"}),t.jsx("p",{className:"text-lg text-gray-400",children:"Master stack implementations, monotonic stack patterns, expression parsing, and sliding window techniques."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:w.map((e,s)=>t.jsxs("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors group",children:[t.jsxs("div",{className:"flex items-start justify-between mb-2",children:[t.jsx("span",{className:"text-xs font-medium px-2 py-1 rounded bg-purple-900/30 text-purple-400 border border-purple-800/50",children:e.type}),t.jsx(g,{size:16,className:"text-gray-500 group-hover:text-white transition-colors"})]}),t.jsx("h3",{className:"text-white font-medium group-hover:text-purple-400 transition-colors",children:e.title})]},s))}),t.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-center justify-between bg-gray-800/50 p-4 rounded-xl border border-gray-700",children:[t.jsx("div",{className:"flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0",children:x.map(e=>t.jsx("button",{onClick:()=>d(e),className:`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${r===e?"bg-purple-600 text-white":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:e},e))}),t.jsx("input",{type:"text",placeholder:"Search problems...",value:n,onChange:e=>u(e.target.value),className:"w-full md:w-64 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-white mb-4 flex items-center gap-2",children:[t.jsx(m,{className:"text-purple-400"}),"Problems & Implementations (",p.length,")"]}),p.map(e=>t.jsxs("div",{className:"bg-gray-800 rounded-xl border border-gray-700 overflow-hidden transition-all duration-200 hover:border-gray-600",children:[t.jsxs("button",{onClick:()=>h(e.id),className:"w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-700/50 transition-colors",children:[t.jsxs("div",{className:"flex items-center gap-4 flex-1",children:[t.jsx("div",{className:`flex items-center justify-center w-8 h-8 rounded-lg font-bold text-sm border ${e.difficulty==="Easy"?"bg-green-900/30 text-green-400 border-green-800":e.difficulty==="Hard"?"bg-red-900/30 text-red-400 border-red-800":"bg-yellow-900/30 text-yellow-400 border-yellow-800"}`,children:e.id}),t.jsxs("div",{className:"flex-1",children:[t.jsxs("h3",{className:"text-lg font-semibold text-white mb-1 flex items-center gap-3",children:[e.title,e.difficulty&&t.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full border ${e.difficulty==="Easy"?"border-green-800 text-green-400":e.difficulty==="Hard"?"border-red-800 text-red-400":"border-yellow-800 text-yellow-400"}`,children:e.difficulty}),t.jsx("span",{className:"text-xs px-2 py-0.5 rounded bg-gray-700 text-gray-400",children:e.category})]}),t.jsx("div",{className:"flex flex-wrap gap-2",children:e.tags&&e.tags.map((s,o)=>t.jsx("span",{className:"text-xs text-gray-500 bg-gray-900 px-2 py-0.5 rounded",children:s},o))})]})]}),i===e.id?t.jsx(f,{className:"text-gray-400"}):t.jsx(y,{className:"text-gray-400"})]}),i===e.id&&t.jsxs("div",{className:"px-6 pb-6 pt-2 border-t border-gray-700 bg-gray-900/30",children:[e.thought&&t.jsxs("div",{className:"mb-6 bg-purple-900/10 border border-purple-800/30 p-4 rounded-lg",children:[t.jsxs("h4",{className:"text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2",children:[t.jsx(b,{size:16}),"Approach"]}),t.jsx("p",{className:"text-gray-300 text-sm italic",children:e.thought})]}),e.solution&&t.jsxs("div",{children:[t.jsxs("h4",{className:"text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider flex items-center gap-2",children:[t.jsx(v,{size:16,className:"text-purple-500"}),"Implementation (",e.solution.language,")"]}),t.jsx(k,{language:e.solution.language,code:e.solution.code})]})]})]},e.id))]})]})})};export{E as default};
