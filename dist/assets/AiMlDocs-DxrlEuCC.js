import{j as e,l as C,D as k,S as T,A as D,L as G,x as w,t as x,a0 as A,ai as R,m as E,T as z,a6 as I,u as P}from"./ui-C9KrBvbE.js";import{r as g}from"./vendor-C-RugAsD.js";import{C as $}from"./CodeBlock-B1pjjoNU.js";import{M as L}from"./MathBlock-C-E8ioxg.js";import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";import"./math-Dc8nsIP1.js";const j=[{id:1,text:"The capital of France is Paris. It is known for its art, fashion, and the Eiffel Tower.",topic:"Geography"},{id:2,text:"Quantum computing uses qubits which can exist in multiple states simultaneously due to superposition.",topic:"Science"},{id:3,text:"The Great Barrier Reef is the world's largest coral reef system, located in the Coral Sea off the coast of Australia.",topic:"Geography"},{id:4,text:"Machine learning is a subset of AI that focuses on building systems that learn from data.",topic:"Technology"},{id:5,text:"Transformers are a type of neural network architecture that has revolutionized NLP through self-attention.",topic:"Technology"}],S={1:{x:20,y:30},2:{x:80,y:70},3:{x:25,y:25},4:{x:70,y:20},5:{x:75,y:15}},B=()=>{var _;const[a,c]=g.useState("idle"),[d,f]=g.useState([]),[i,y]=g.useState(""),[m,v]=g.useState([]),[o,p]=g.useState([]),[h,r]=g.useState(null),l=(t,s="info")=>{p(b=>[...b,{id:Date.now(),msg:t,type:s}].slice(-4))},n=async()=>{c("ingest"),f([]),p([]),l("Starting Data Ingestion...","step");for(const t of j)l(`Chunking: ${t.topic} document...`),await new Promise(s=>setTimeout(s,600)),f(s=>[...s,{...t,pos:S[t.id]}]);l("Vectors stored in DB","success"),c("ready")},u=async()=>{if(!i||a!=="ready")return;c("search"),l(`Embedding query: "${i}"`,"step"),await new Promise(s=>setTimeout(s,1e3)),c("retrieve"),l("Searching vector space for nearest neighbors...","step"),await new Promise(s=>setTimeout(s,1500));const t=d.filter(s=>i.toLowerCase().split(" ").some(b=>s.text.toLowerCase().includes(b)||s.topic.toLowerCase().includes(b)));v(t.length>0?t.map(s=>s.id):[1]),l(`Retrieved ${t.length||1} relevant chunks`,"success"),await new Promise(s=>setTimeout(s,1e3)),c("generate"),l("Augmenting prompt with retrieved context...","step")},M=()=>{c("idle"),f([]),v([]),p([]),y("")};return e.jsxs("div",{className:"bg-gray-950 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl flex flex-col h-[700px] font-sans",children:[e.jsxs("div",{className:"bg-gray-900 p-4 border-b border-gray-800 flex justify-between items-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 bg-blue-600 rounded-lg",children:e.jsx(C,{size:20,className:"text-white"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-black text-white uppercase tracking-widest",children:"RAG Pipeline Explorer"}),e.jsx("p",{className:"text-[10px] text-gray-500 font-bold",children:"Concept retrieval for LLMs"})]})]}),e.jsxs("div",{className:"flex gap-2",children:[a==="idle"&&e.jsxs("button",{onClick:n,className:"flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-black rounded-lg transition-all",children:[e.jsx(k,{size:14})," INGEST DOCUMENTS"]}),a!=="idle"&&e.jsx("button",{onClick:M,className:"px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-400 text-[11px] font-black rounded-lg transition-all",children:"RESET"})]})]}),e.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[e.jsxs("div",{className:"w-80 border-r border-gray-900 bg-gray-950 flex flex-col",children:[e.jsxs("div",{className:"p-6 flex-1 space-y-8 overflow-y-auto",children:[e.jsxs("div",{className:`transition-opacity ${a==="idle"?"opacity-30":"opacity-100"}`,children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(T,{size:14,className:"text-blue-400"}),e.jsx("span",{className:"text-[10px] font-black text-gray-400 uppercase",children:"1. User Query"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",placeholder:"Ask about AI, Geography...",disabled:a!=="ready"&&a!=="generate",value:i,onChange:t=>y(t.target.value),onKeyDown:t=>t.key==="Enter"&&u(),className:"w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"}),e.jsx("button",{onClick:u,disabled:!i,className:"absolute right-2 top-2 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-500 disabled:opacity-30",children:e.jsx(D,{size:14})})]})]}),e.jsxs("div",{className:`transition-opacity ${a==="search"||a==="retrieve"||a==="generate"?"opacity-100":"opacity-30"}`,children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(G,{size:14,className:"text-purple-400"}),e.jsx("span",{className:"text-[10px] font-black text-gray-400 uppercase",children:"2. Top Search Results"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(w,{children:m.map(t=>{const s=j.find(b=>b.id===t);return e.jsxs(x.div,{initial:{x:-20,opacity:0},animate:{x:0,opacity:1},className:"p-3 bg-purple-900/10 border border-purple-500/30 rounded-xl",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx(A,{size:12,className:"text-purple-400"}),e.jsxs("span",{className:"text-[9px] font-black text-purple-400 uppercase tracking-tighter",children:["Chunk ",t]})]}),e.jsxs("p",{className:"text-[10px] text-gray-400 leading-tight italic line-clamp-2",children:['"',s==null?void 0:s.text,'"']})]},t)})}),m.length===0&&e.jsx("div",{className:"text-[10px] text-gray-600 italic",children:"Enter a query to retrieve context..."})]})]}),e.jsxs("div",{className:`transition-opacity ${a==="generate"?"opacity-100":"opacity-30"}`,children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(R,{size:14,className:"text-emerald-400"}),e.jsx("span",{className:"text-[10px] font-black text-gray-400 uppercase",children:"3. Augmented Response"})]}),e.jsxs("div",{className:"p-4 bg-emerald-900/10 border border-emerald-500/30 rounded-xl",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(E,{size:14,className:"text-emerald-500"}),e.jsx("span",{className:"text-[10px] font-black text-emerald-400 uppercase",children:"LLM Generation"})]}),e.jsxs(x.p,{initial:{opacity:0},animate:{opacity:1},className:"text-[11px] text-gray-300 leading-relaxed font-mono",children:["Based on the retrieved context about ",(_=j.find(t=>t.id===m[0]))==null?void 0:_.topic,"... [Simulated Response]"]})]})]})]}),e.jsxs("div",{className:"h-32 border-t border-gray-900 bg-black/40 p-4 overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2 text-[9px] text-gray-600 font-black uppercase",children:[e.jsx(z,{size:10})," Internal Pipeline Logs"]}),e.jsx("div",{className:"space-y-1",children:e.jsx(w,{initial:!1,children:o.map(t=>e.jsxs(x.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},className:`text-[9px] font-mono ${t.type==="success"?"text-emerald-500":t.type==="step"?"text-blue-400":"text-gray-500"}`,children:[e.jsxs("span",{className:"opacity-40",children:["[",new Date(t.id).toLocaleTimeString([],{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"}),"]"]})," ",t.msg]},t.id))})})]})]}),e.jsxs("div",{className:"flex-1 relative bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-gray-950 to-black p-8",children:[e.jsxs("div",{className:"absolute top-6 left-6 z-10",children:[e.jsxs("h4",{className:"text-xs font-black text-white uppercase flex items-center gap-2",children:[e.jsx(k,{size:14,className:"text-blue-500"})," Vector Store (Embedding Space)"]}),e.jsx("p",{className:"text-[10px] text-gray-500 mt-1 max-w-xs leading-relaxed",children:"Documents are converted into multi-dimensional vectors. Similar meanings cluster together."})]}),e.jsx("div",{className:"w-full h-full relative border border-gray-900/50 rounded-2xl overflow-hidden bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay pointer-events-none"}),e.jsxs("div",{className:"absolute inset-8 border-l border-b border-gray-800/50",children:[e.jsx("div",{className:"absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-[8px] font-bold text-gray-700 uppercase",children:"Semantic Dimension 1"}),e.jsx("div",{className:"absolute left-[-30px] top-1/2 -rotate-90 -translate-y-1/2 text-[8px] font-bold text-gray-700 uppercase",children:"Semantic Dimension 2"}),e.jsx(w,{children:d.map(t=>{const s=m.includes(t.id);return e.jsxs(x.div,{initial:{scale:0,opacity:0},animate:{scale:s?1.5:1,opacity:1,x:`${t.pos.x}%`,y:`${t.pos.y}%`},className:"absolute group pointer-events-auto",onMouseEnter:()=>r(t.id),onMouseLeave:()=>r(null),style:{left:0,top:0},children:[e.jsx("div",{className:`relative -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full transition-all cursor-crosshair ${s?"bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)] z-50":"bg-blue-500/40 border border-blue-400 group-hover:bg-blue-400"}`}),(h===t.id||s)&&e.jsxs(x.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:`absolute bottom-6 left-1/2 -translate-x-1/2 w-48 p-3 rounded-xl border backdrop-blur-md z-[60] pointer-events-none ${s?"bg-purple-900/90 border-purple-500/50":"bg-gray-900/90 border-gray-700/50"}`,children:[e.jsx("div",{className:"text-[9px] font-black uppercase text-white mb-2 pb-1 border-b border-white/10",children:t.topic}),e.jsxs("p",{className:"text-[9px] text-gray-100 leading-tight italic",children:['"',t.text,'"']})]})]},t.id)})}),a==="retrieve"&&e.jsx(x.div,{initial:{opacity:0},animate:{opacity:1},className:"absolute inset-0 pointer-events-none",children:e.jsx("svg",{className:"w-full h-full",children:m.map(t=>{const s=S[t];return e.jsx(x.line,{x1:"50%",y1:"50%",x2:`${s.x}%`,y2:`${s.y}%`,stroke:"#a855f7",strokeWidth:"2",strokeDasharray:"4 4",initial:{pathLength:0},animate:{pathLength:1}},t)})})})]}),e.jsxs("div",{className:"absolute right-6 top-6 flex flex-col gap-4 w-48",children:[e.jsxs("div",{className:"p-4 bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl shadow-xl",children:[e.jsx("div",{className:"text-[10px] font-black text-gray-500 uppercase mb-3",children:"Pipeline Status"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(N,{label:"Ingestion",active:a!=="idle",complete:a==="ready"||a==="search"||a==="retrieve"||a==="generate"}),e.jsx(N,{label:"Query Embedding",active:a==="search",complete:a==="retrieve"||a==="generate"}),e.jsx(N,{label:"Retriever",active:a==="retrieve",complete:a==="generate"}),e.jsx(N,{label:"Gen AI",active:a==="generate",complete:!1})]})]}),e.jsxs("div",{className:"p-4 bg-blue-600/10 border border-blue-500/20 rounded-2xl",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(I,{size:12,className:"text-blue-400"}),e.jsx("span",{className:"text-[9px] font-black text-blue-400 uppercase",children:"Did you know?"})]}),e.jsx("p",{className:"text-[10px] text-blue-300 leading-relaxed font-medium italic",children:'Vector retrieval reduces hallucinations by giving the LLM "facts" to reference.'})]})]})]})]})]})},N=({label:a,active:c,complete:d})=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:`text-[10px] font-bold ${c?"text-white":d?"text-emerald-500":"text-gray-700"}`,children:a}),d?e.jsx(A,{size:12,className:"text-emerald-500"}):c?e.jsx(x.div,{animate:{scale:[1,1.2,1],opacity:[1,.5,1]},transition:{repeat:1/0,duration:1},className:"w-2 h-2 bg-blue-500 rounded-full"}):e.jsx("div",{className:"w-2 h-2 rounded-full bg-gray-900 border border-gray-800"})]}),q={"machine-learning":{id:"machine-learning",title:"Machine Learning",description:"Machine learning algorithms, deep learning, neural networks, and AI systems",icon:"Brain",color:"fuchsia",topics:[{id:"transformers-attention",title:"Transformers & Attention",description:"Self-attention, multi-head attention, BERT, GPT architectures",content:`
# Transformers and Attention Mechanisms

The Transformer architecture, introduced in the paper "Attention Is All You Need" (2017), revolutionized Natural Language Processing (NLP). Unlike Recurrent Neural Networks (RNNs), Transformers process input data in parallel, allowing for much faster training on larger datasets.

### Self-Attention Mechanism
The core of the Transformer is the self-attention mechanism, which relates different positions of a single sequence in order to compute a representation of the sequence.

**The Equation:**
\`\`\`math
\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V
\`\`\`

Where:
- **Q**: Query matrix
- **K**: Key matrix
- **V**: Value matrix
- **$d_k$**: Dimension of keys (scaling factor)

### Multi-Head Attention
Instead of performing a single attention function, the Transformer uses multiple attention "heads" to focus on different parts of the input simultaneously.

\`\`\`python
class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, num_heads):
        super(MultiHeadAttention, self).__init__()
        self.num_heads = num_heads
        self.d_model = d_model
        
        assert d_model % self.num_heads == 0
        
        self.depth = d_model // self.num_heads
        
        self.wq = nn.Linear(d_model, d_model)
        self.wk = nn.Linear(d_model, d_model)
        self.wv = nn.Linear(d_model, d_model)
        
        self.dense = nn.Linear(d_model, d_model)
        
    def split_heads(self, x, batch_size):
        x = x.view(batch_size, -1, self.num_heads, self.depth)
        return x.transpose(1, 2)
\`\`\`

### Architectures
1.  **Encoder-Only (BERT)**: Bidirectional Encoder Representations from Transformers. Good for classification and answer extraction.
2.  **Decoder-Only (GPT)**: Generative Pre-trained Transformer. Good for text generation.
3.  **Encoder-Decoder (T5, BART)**: Good for translation and summarization.
        `},{id:"gradient-descent-optimization",title:"Optimization Algorithms",description:"SGD, Adam, RMSprop, learning rate schedules",content:`
# Optimization Algorithms

Optimization algorithms are used to update the parameters of a neural network to minimize the loss function.

### Gradient Descent
The most basic optimization algorithm. It updates weights in the opposite direction of the gradient of the loss function.

\`\`\`math
\\theta_{t+1} = \\theta_t - \\eta \\nabla J(\\theta_t)
\`\`\`

Where $\\eta$ is the learning rate.

### Stochastic Gradient Descent (SGD)
Updates parameters using only a single sample (or a small batch) at a time. It is faster but noisier.

### Momentum
Helps accelerate SGD in the relevant direction and dampens oscillations.
\`\`\`math
v_t = \\gamma v_{t-1} + \\eta \\nabla J(\\theta)
\`\`\`
\`\`\`math
\\theta = \\theta - v_t
\`\`\`

### Adam (Adaptive Moment Estimation)
Combines the benefits of AdaGrad and RMSProp. It adapts the learning rate for each parameter.

\`\`\`python
# Adam Update Rule Implementation Concept
m_t = beta1 * m_{t-1} + (1 - beta1) * g_t
v_t = beta2 * v_{t-1} + (1 - beta2) * g_t^2

m_hat = m_t / (1 - beta1^t)
v_hat = v_t / (1 - beta2^t)

theta_{t+1} = theta_t - learning_rate * m_hat / (sqrt(v_hat) + epsilon)
\`\`\`
        `},{id:"cnn-architectures",title:"CNN Architectures",description:"ResNet, VGG, Inception, EfficientNet, Vision Transformers",content:`
# Convolutional Neural Networks (CNNs)

CNNs are specialized neural networks for processing data that has a known grid-like topology, such as time-series data (1-D grid) and image data (2-D grid).

### Core Components
1.  **Convolutional Layer**: Applies filters (kernels) to the input to create feature maps.
2.  **Pooling Layer**: Reduces the spatial dimensions (downsampling). Max Pooling is the most common.
3.  **Fully Connected Layer**: Used at the end for classification.

### Famous Architectures

#### VGG (Visual Geometry Group)
Known for its simplicity, using only $3 \\times 3$ convolutional layers stacked on top of each other in increasing depth.

#### ResNet (Residual Network)
Introduced "skip connections" (residual blocks) to allow training of very deep networks (e.g., ResNet-50, ResNet-101) by mitigating the vanishing gradient problem.

\`\`\`math
y = F(x, \\{W_i\\}) + x
\`\`\`

#### EfficientNet
Uses a compound scaling method to scale network depth, width, and resolution uniformly.

\`\`\`python
import torch.nn as nn

# Basic Residual Block
class ResidualBlock(nn.Module):
    def __init__(self, in_channels, out_channels, stride=1):
        super(ResidualBlock, self).__init__()
        self.conv1 = nn.Conv2d(in_channels, out_channels, kernel_size=3, stride=stride, padding=1)
        self.bn1 = nn.BatchNorm2d(out_channels)
        self.relu = nn.ReLU(inplace=True)
        self.conv2 = nn.Conv2d(out_channels, out_channels, kernel_size=3, stride=1, padding=1)
        self.bn2 = nn.BatchNorm2d(out_channels)
        
        self.shortcut = nn.Sequential()
        if stride != 1 or in_channels != out_channels:
            self.shortcut = nn.Sequential(
                nn.Conv2d(in_channels, out_channels, kernel_size=1, stride=stride),
                nn.BatchNorm2d(out_channels)
            )

    def forward(self, x):
        out = self.relu(self.bn1(self.conv1(x)))
        out = self.bn2(self.conv2(out))
        out += self.shortcut(x)
        out = self.relu(out)
        return out
\`\`\`
        `},{id:"generative-models",title:"Generative Models",description:"GANs, VAEs, Diffusion Models, Normalizing Flows",content:`
# Generative Models

Generative models are a class of ML models trained to generate new data instances that resemble the training data.

### 1. Generative Adversarial Networks (GANs)
Consists of two networks fighting against each other:
-   **Generator ($G$)**: Tries to maximize the probability of making the Discriminator mistake its output for real data.
-   **Discriminator ($D$)**: Tries to effectively distinguish between real data and data generated by $G$.

**Minimax Game:**
\`\`\`math
\\min_G \\max_D V(D, G) = \\mathbb{E}_{x \\sim p_{data}(x)}[\\log D(x)] + \\mathbb{E}_{z \\sim p_z(z)}[\\log(1 - D(G(z)))]
\`\`\`

### 2. Variational Autoencoders (VAEs)
Encodes input into a distribution (latent space) rather than a single point.
**Loss Function**: Reconstruction Loss + KL Divergence (regularizer).

### 3. Diffusion Models
State-of-the-art for image generation (e.g., DALL-E 2, Stable Diffusion).
They work by strictly destroying structure in data through a forward diffusion process (adding noise) and then learning to recover the structure through a reverse diffusion process (removing noise).

**Forward Process ($q$)**:
\`\`\`math
q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1 - \\beta_t} x_{t-1}, \\beta_t I)
\`\`\`
        `},{id:"mlops-deployment",title:"MLOps & Deployment",description:"Model serving, monitoring, A/B testing, CI/CD",content:`
# MLOps and Model Deployment

MLOps (Machine Learning Operations) is a set of practices that aims to deploy and maintain machine learning models in production reliably and efficiently.

### Key Components

1.  **Model Registery**: Centralized repository for storing and versioning trained models (e.g., MLflow, AWS SageMaker Registry).
2.  **Model Serving**:
    -   **Batch Inference**: Generating predictions on a large batch of data offline.
    -   **Online Inference**: Generating predictions in real-time via REST/gRPC APIs (e.g., TensorFlow Serving, TorchServe, Triton).
3.  **Monitoring**:
    -   **Data Drift**: Change in model input data distribution.
    -   **Concept Drift**: Change in the relationship between input variables and the target variable.

### CI/CD for ML (CT - Continuous Training)
Unlike traditional software, ML systems need a CT pipeline.
-   **Trigger**: New data availability or performance degradation.
-   **Steps**: Data validation -> Model retraining -> Model evaluation -> Deployment.

\`\`\`yaml
# Example GitHub Actions Workflow for ML
name: Train and Deploy
on: [push]
jobs:
  train-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Python
        uses: actions/setup-python@v2
      - name: Install dependencies
        run: pip install -r requirements.txt
      - name: Train Model
        run: python train_model.py
      - name: Evaluate Model
        run: python evaluate_model.py
      - name: Deploy to Cloud
        if: success()
        run: python deploy.py
\`\`\`
        `},{id:"llm-engineering",title:"LLM Engineering",description:"Foundations of Large Language Models: selection, prompting, and optimization.",content:`
# LLM Engineering Fundamentals

Mastering Large Language Models (LLMs) requires moving beyond simple chat interfaces to structured engineering practices.

### 1. Model Selection & Tokenization
LLMs don't read text; they process **tokens**. Understanding tokenization is crucial for cost and performance optimization.
- **Subword Tokenization (BPE)**: Most modern LLMs (GPT, Llama) use Byte-Pair Encoding.
- **Context Window**: The maximum number of tokens a model can process at once.

### 2. Prompt Engineering Patterns
Advanced techniques to improve model reliability and accuracy.
- **Zero-Shot / Few-Shot**: Providing no examples vs. a few examples in the prompt.
- **Chain of Thought (CoT)**: Encouraging the model to "think step-by-step".
- **Self-Consistency**: Generating multiple paths and taking the majority vote.

### 3. Fine-tuning vs. RAG
When to use each approach:
| Aspect | Fine-tuning | RAG |
| :--- | :--- | :--- |
| **New Knowledge** | Excellent for style/format | Excellent for dynamic facts |
| **Cost** | High (training) | Medium (infrastructure) |
| **Transparency** | Black box | Source attribution (Citations) |
| **Frequency** | Low (static) | High (real-time) |

\`\`\`python
# Simple Chain-of-Thought Prompt
prompt = """
Q: Roger has 5 tennis balls. He buys 2 more cans of tennis balls. 
Each can has 3 tennis balls. How many tennis balls does he have now?
A: Let's think step by step.
"""
\`\`\`
`},{id:"rag-pipeline",title:"RAG Pipeline",description:"Retrieval Augmented Generation: architectural patterns and implementation.",content:`
# Retrieval Augmented Generation (RAG)

RAG connects LLMs to your private, real-time data without the need for constant retraining.

### The RAG Workflow
1. **Ingestion**: 
   - **Load**: Extract text from PDFs, Docs, DBs.
   - **Chunk**: Split long text into smaller pieces (Fixed-size, Semantic).
   - **Embed**: Convert chunks into high-dimensional vectors.
2. **Retrieval**: 
   - User query is embedded.
   - Search the Vector DB for the top-k most similar chunks.
3. **Generation**: 
   - Prompt = Context (Retrieved Chunks) + User Query.
   - LLM generates answer based *only* on the context.

### Challenges in RAG
- **Lost in the Middle**: LLMs often ignore information in the middle of a large context.
- **Retrieval Quality**: If the retrieved chunks are irrelevant, the answer will be wrong.
- **Hallucination**: Even with RAG, models might invent facts if the threshold is low.

\`\`\`python
# Conceptual RAG Workflow
query = "What are the latest revenue numbers?"
relevant_docs = vector_db.search(query, k=3)
context = "\\n".join([doc.page_content for doc in relevant_docs])

prompt = f"Context: {context}\\nQuestion: {query}\\nAnswer:"
response = llm.generate(prompt)
\`\`\`
`},{id:"vector-databases",title:"Vector Databases",description:"Managing high-dimensional data at scale.",content:`
# Vector Databases

Traditional DBs use exact matches (SQL) or keyword matches (NoSQL). Vector DBs use **Similarity Search**.

### How they work
Vector databases store **Embeddings** (arrays of floats representing meaning). They use Approximate Nearest Neighbor (ANN) algorithms to find similar vectors quickly.

### Key Concepts
- **Distance Metrics**:
  - **Cosine Similarity**: Measures the angle between vectors (good for text).
  - **Euclidean Distance (L2)**: Measures straight-line distance.
  - **Dot Product**: Measures both magnitude and direction.
- **Indexing Algorithms**:
  - **HNSW (Hierarchical Navigable Small World)**: Graph-based, very fast and accurate.
  - **IVF (Inverted File Index)**: Cluster-based, good for large datasets.

### Popular Vector DBs
- **Dedicated**: Pinecone, Milvus, Qdrant, Weaviate.
- **Extensions**: pgvector (PostgreSQL), Redis.
`},{id:"agentic-frameworks",title:"Agentic Frameworks",description:"Building autonomous AI agents with specialized tools.",content:`
# AI Agents & Frameworks

Agents are LLMs that can use **Tools** (search, calculators, APIs) to achieve complex goals.

### The Agent Loop (ReAct)
1. **Thought**: Reason about what to do next.
2. **Action**: Choose a tool and input.
3. **Observation**: Get the result from the tool.
4. **Repeat**: Until the final answer is reached.

### Modern Frameworks
- **LangChain**: The "Swiss Army Knife" for LLM apps. Modular and flexible.
- **LlamaIndex**: Specialized in data-centric agents and RAG.
- **AutoGPT / BabyAGI**: Autonomous agents that can self-reason.

\`\`\`python
# Simple LangChain Tool Usage
from langchain.agents import load_tools, initialize_agent

tools = load_tools(["serpapi", "llm-math"], llm=llm)
agent = initialize_agent(tools, llm, agent="zero-shot-react-description")
agent.run("Who is the current CEO of Tesla and what is their age raised to the power of 0.5?")
\`\`\`
`}]}},V={getSection:a=>q[a]},J=({section:a,onBack:c})=>{const[d,f]=g.useState(null),i=V.getSection("machine-learning");if(g.useEffect(()=>{a&&i&&i.topics.find(p=>p.id===a)&&f(a)},[a]),g.useEffect(()=>{!d&&i&&i.topics.length>0&&f(i.topics[0].id)},[i,d]),!i)return e.jsx("div",{className:"p-8 text-gray-300",children:"Section not found"});const y=i.topics.find(o=>o.id===d),m=o=>o.split(/(\$[^$]+\$)/g).map((h,r)=>h.startsWith("$")&&h.endsWith("$")?e.jsx("span",{className:"mx-1",children:e.jsx(L,{math:h.slice(1,-1),inline:!0})},r):h.split(/(\*\*[^*]+\*\*)/g).map((n,u)=>n.startsWith("**")&&n.endsWith("**")?e.jsx("strong",{className:"text-white font-bold",children:n.slice(2,-2)},`${r}-${u}`):n)),v=o=>{if(!o)return null;const p=o.split(/```(\w+)?\n([\s\S]*?)```/),h=[];for(let r=0;r<p.length;r++)if(r%3===0){const l=p[r].trim();l&&h.push(e.jsx("div",{className:"prose prose-invert max-w-none mb-4",children:l.split(`
`).map((n,u)=>n.startsWith("# ")?e.jsx("h1",{className:"text-3xl font-bold text-white mb-6",children:n.replace("# ","")},u):n.startsWith("### ")?e.jsx("h3",{className:"text-xl font-bold text-fuchsia-400 mt-6 mb-3",children:m(n.replace("### ",""))},u):n.startsWith("#### ")?e.jsx("h4",{className:"text-lg font-bold text-gray-200 mt-4 mb-2",children:m(n.replace("#### ",""))},u):n.startsWith("- ")?e.jsxs("div",{className:"flex items-start gap-2 ml-4 mb-2",children:[e.jsx("span",{className:"text-fuchsia-400 mt-1.5",children:"•"}),e.jsx("span",{className:"text-gray-300 leading-relaxed",children:m(n.replace("- ",""))})]},u):n.match(/^\d+\. /)?e.jsxs("div",{className:"flex items-start gap-2 ml-4 mb-2",children:[e.jsx("span",{className:"text-fuchsia-400 font-mono mt-0.5",children:n.match(/^\d+\./)[0]}),e.jsx("span",{className:"text-gray-300 leading-relaxed",children:m(n.replace(/^\d+\. /,""))})]},u):n.trim()?e.jsx("p",{className:"text-gray-300 mb-3 leading-relaxed",children:m(n)},u):null)},r))}else if(r%3===1){const l=p[r]||"text",n=p[r+1];l==="math"?h.push(e.jsx("div",{className:"my-6",children:e.jsx(L,{math:n})},r)):h.push(e.jsx("div",{className:"my-6",children:e.jsx($,{language:l,code:n})},r))}return h};return e.jsxs("div",{className:"h-full flex flex-col bg-gray-900",children:[e.jsxs("div",{className:"flex flex-col border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-10",children:[e.jsxs("div",{className:"p-4 flex items-center gap-4",children:[e.jsx("button",{onClick:c,className:"p-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-400 hover:text-white",children:e.jsx(P,{size:20})}),e.jsx("h1",{className:"text-xl font-bold text-white capitalize flex items-center gap-2",children:"AI & Machine Learning"})]}),i.topics.length>0&&e.jsx("div",{className:"px-4 pb-0 flex items-center gap-2 overflow-x-auto scrollbar-hide mask-linear-fade",children:i.topics.map(o=>e.jsx("button",{onClick:()=>f(o.id),className:`px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${d===o.id?"border-fuchsia-500 text-fuchsia-400 bg-fuchsia-500/5":"border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-700"}`,children:o.title},o.id))})]}),e.jsx("div",{className:"flex flex-1 overflow-hidden",children:e.jsx("div",{className:"flex-1 overflow-y-auto p-8",children:e.jsx("div",{className:"max-w-4xl mx-auto",children:y&&e.jsxs("div",{className:"animate-fadeIn",children:[v(y.content),d==="rag-pipeline"&&e.jsxs("div",{className:"mt-12 pt-12 border-t border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-bold text-white mb-6",children:"Interactive RAG Pipeline Explorer"}),e.jsx("div",{className:"bg-gray-800/30 rounded-2xl border border-gray-700/50 p-1 overflow-hidden",children:e.jsx(B,{})})]})]})})})})]})};export{J as default};
