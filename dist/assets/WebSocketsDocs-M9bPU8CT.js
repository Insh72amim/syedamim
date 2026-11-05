import{j as e}from"./ui-C9KrBvbE.js";import"./vendor-C-RugAsD.js";import{I as o}from"./InteractiveDiagram-BfeYCxPA.js";import{C as s}from"./CodeBlock-B1pjjoNU.js";import{M as t}from"./reactflow-Bog5v55p.js";/* empty css              */import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const x=()=>{const r=[{id:"clientA",position:{x:40,y:150},data:{label:"Client A (Browser)"},style:{width:160,background:"#1f2937",color:"white",border:"1px solid #374151"}},{id:"clientB",position:{x:40,y:260},data:{label:"Client B (Mobile)"},style:{width:160,background:"#1f2937",color:"white",border:"1px solid #374151"}},{id:"edge",position:{x:250,y:200},data:{label:"Edge / CDN"},style:{width:150,background:"#7c3aed",color:"white",border:"1px solid #a855f7"}},{id:"gateway",position:{x:430,y:200},data:{label:"WS Gateway"},style:{width:150,background:"#1e3a8a",color:"white",border:"1px solid #3b82f6"}},{id:"server",position:{x:610,y:200},data:{label:"Realtime Service"},style:{width:170,background:"#064e3b",color:"white",border:"1px solid #10b981"}},{id:"pubsub",position:{x:610,y:60},data:{label:"Pub/Sub Bus"},style:{width:170,background:"#78350f",color:"white",border:"1px solid #f59e0b"}},{id:"clientC",position:{x:820,y:150},data:{label:"Client C"},style:{width:140,background:"#1f2937",color:"white",border:"1px solid #374151"}}],a=[{id:"ca-edge",source:"clientA",target:"edge",label:"HTTP upgrade",markerEnd:{type:t.ArrowClosed},style:{stroke:"#a855f7"}},{id:"cb-edge",source:"clientB",target:"edge",label:"TLS tunnel",markerEnd:{type:t.ArrowClosed},style:{stroke:"#a855f7"}},{id:"edge-gw",source:"edge",target:"gateway",label:"Sticky connection",markerEnd:{type:t.ArrowClosed},style:{stroke:"#60a5fa"}},{id:"gw-server",source:"gateway",target:"server",label:"Frames (JSON/Binary)",animated:!0,markerEnd:{type:t.ArrowClosed},style:{stroke:"#34d399"}},{id:"server-bus",source:"server",target:"pubsub",label:"Broadcast events",markerEnd:{type:t.ArrowClosed},style:{stroke:"#fbbf24"}},{id:"server-clientC",source:"server",target:"clientC",label:"Push updates",animated:!0,markerEnd:{type:t.ArrowClosed},style:{stroke:"#34d399"}},{id:"bus-gw",source:"pubsub",target:"gateway",label:"Fan-out to shards",markerEnd:{type:t.ArrowClosed},style:{stroke:"#fbbf24",strokeDasharray:"6 4"}}];return e.jsxs("div",{className:"max-w-4xl",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4 text-white",children:"WebSockets: The Deep Dive"}),e.jsx("p",{className:"text-xl text-gray-300 mb-8",children:"A communication protocol providing full-duplex, bidirectional communication channels over a single TCP connection. WebSockets enable real-time data exchange between clients and servers with minimal overhead."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"What are WebSockets?"}),e.jsx("p",{className:"text-gray-300 mb-4",children:"WebSockets provide a persistent connection between a client and server, allowing both parties to send data at any time. Unlike HTTP's request-response model, WebSockets support true bidirectional communication."}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-4",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-green-400",children:"Key Benefits"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Real-time Communication:"})," Instant bidirectional data transfer"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Low Latency:"})," No overhead of HTTP headers on every message"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Persistent Connection:"})," Single TCP connection stays open"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Efficient:"})," Reduced bandwidth compared to polling"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Browser Support:"})," Native support in all modern browsers"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Firewall Friendly:"})," Works over standard HTTP ports (80/443)"]})]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"High-Level Flow"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6 space-y-4",children:[e.jsx("p",{className:"text-gray-300",children:"Real-time stacks pin WebSocket connections at the edge, then route them to gateway shards that maintain session state and publish events to backend workers. The same service pushes updates out to all subscribed clients without renegotiating connections."}),e.jsxs("ul",{className:"space-y-2 text-sm text-gray-300",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-purple-400",children:"•"}),e.jsx("span",{children:"Clients perform a single HTTP upgrade and stay connected for hours."})]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-purple-400",children:"•"}),e.jsx("span",{children:"Gateways handle heartbeats, auth refresh, and backpressure."})]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-purple-400",children:"•"}),e.jsx("span",{children:"Backend services publish domain events through a pub/sub bus for broadcast."})]})]})]}),e.jsx(o,{initialNodes:r,initialEdges:a,title:"WebSocket Delivery Path",height:"360px"})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"How WebSockets Work"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-green-400",children:"1. Handshake"}),e.jsx("p",{className:"text-gray-300 mb-3",children:"WebSocket connection starts with an HTTP upgrade request."}),e.jsx(s,{language:"http",code:`GET /chat HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13

HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=`})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-green-400",children:"2. Data Frames"}),e.jsx("p",{className:"text-gray-300",children:"After handshake, data is sent in frames (text or binary). Each frame has minimal overhead, making WebSockets very efficient for frequent messages."})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-green-400",children:"3. Connection Close"}),e.jsx("p",{className:"text-gray-300",children:"Either party can initiate connection closure. A close frame is sent, followed by TCP connection termination."})]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"Client Implementation"}),e.jsx(s,{language:"javascript",title:"Browser WebSocket Client",code:`// Create WebSocket connection
const socket = new WebSocket('wss://localhost:8080');

// Connection opened
socket.addEventListener('open', (event) => {
  console.log('Connected to server');
  
  // Send message
  socket.send(JSON.stringify({
    type: 'join',
    username: 'Alice'
  }));
});

// Listen for messages
socket.addEventListener('message', (event) => {
  console.log('Message from server:', event.data);
  
  const data = JSON.parse(event.data);
  
  switch (data.type) {
    case 'chat':
      displayMessage(data.username, data.message);
      break;
    case 'user_joined':
      console.log(\`\${data.username} joined\`);
      break;
    case 'user_left':
      console.log(\`\${data.username} left\`);
      break;
  }
});

// Connection closed
socket.addEventListener('close', (event) => {
  console.log('Disconnected from server');
  console.log('Code:', event.code, 'Reason:', event.reason);
  
  // Attempt to reconnect
  if (event.code !== 1000) {
    setTimeout(() => reconnect(), 3000);
  }
});

// Handle errors
socket.addEventListener('error', (error) => {
  console.error('WebSocket error:', error);
});

// Send chat message
function sendMessage(message) {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({
      type: 'chat',
      message: message
    }));
  } else {
    console.error('WebSocket is not open');
  }
}

// Close connection
function disconnect() {
  socket.close(1000, 'User disconnected');
}

// Check connection state
console.log('ReadyState:', {
  'CONNECTING': socket.CONNECTING,  // 0
  'OPEN': socket.OPEN,              // 1
  'CLOSING': socket.CLOSING,        // 2
  'CLOSED': socket.CLOSED           // 3
});`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"Server Implementation"}),e.jsx(s,{language:"javascript",title:"Node.js WebSocket Server (ws library)",code:`const WebSocket = require('ws');
const http = require('http');

// Create HTTP server
const server = http.createServer();

// Create WebSocket server
const wss = new WebSocket.Server({ server });

// Store connected clients
const clients = new Map();

// Handle new connections
wss.on('connection', (ws, req) => {
  console.log('New client connected from:', req.socket.remoteAddress);
  
  let clientId = null;
  let username = null;
  
  // Handle messages from client
  ws.on('message', (data) => {
    try {
      const message = JSON.parse(data);
      
      switch (message.type) {
        case 'join':
          username = message.username;
          clientId = generateId();
          clients.set(clientId, { ws, username });
          
          // Broadcast user joined
          broadcast({
            type: 'user_joined',
            username: username
          }, clientId);
          
          // Send current users list
          ws.send(JSON.stringify({
            type: 'users',
            users: Array.from(clients.values()).map(c => c.username)
          }));
          break;
          
        case 'chat':
          // Broadcast chat message
          broadcast({
            type: 'chat',
            username: username,
            message: message.message,
            timestamp: new Date().toISOString()
          }, clientId);
          break;
      }
    } catch (error) {
      console.error('Error processing message:', error);
    }
  });
  
  // Handle client disconnect
  ws.on('close', (code, reason) => {
    console.log(\`Client disconnected: \${username}\`);
    
    if (clientId) {
      clients.delete(clientId);
      
      // Broadcast user left
      broadcast({
        type: 'user_left',
        username: username
      });
    }
  });
  
  // Handle errors
  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
  
  // Send ping to keep connection alive
  const pingInterval = setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.ping();
    }
  }, 30000);
  
  ws.on('close', () => clearInterval(pingInterval));
});

// Broadcast message to all clients except sender
function broadcast(message, senderId = null) {
  const data = JSON.stringify(message);
  
  clients.forEach((client, id) => {
    if (id !== senderId && client.ws.readyState === WebSocket.OPEN) {
      client.ws.send(data);
    }
  });
}

// Start server
const PORT = 8080;
server.listen(PORT, () => {
  console.log(\`WebSocket server running on port \${PORT}\`);
});

function generateId() {
  return Math.random().toString(36).substring(7);
}`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"Socket.IO - Enhanced WebSockets"}),e.jsx("p",{className:"text-gray-300 mb-4",children:"Socket.IO is a popular library that provides additional features on top of WebSockets, including automatic reconnection, rooms, and fallback to HTTP long polling."}),e.jsx(s,{language:"javascript",title:"Socket.IO Server",code:`const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

// Middleware
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (validateToken(token)) {
    next();
  } else {
    next(new Error('Authentication error'));
  }
});

// Handle connections
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  
  // Join a room
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    console.log(\`User \${socket.id} joined room \${roomId}\`);
    
    // Notify others in the room
    socket.to(roomId).emit('user-joined', {
      userId: socket.id,
      timestamp: Date.now()
    });
  });
  
  // Handle chat message
  socket.on('chat-message', (data) => {
    // Emit to everyone in the room except sender
    socket.to(data.roomId).emit('chat-message', {
      userId: socket.id,
      message: data.message,
      timestamp: Date.now()
    });
  });
  
  // Private message
  socket.on('private-message', (data) => {
    io.to(data.recipientId).emit('private-message', {
      senderId: socket.id,
      message: data.message
    });
  });
  
  // Broadcast to everyone
  socket.on('announcement', (data) => {
    io.emit('announcement', {
      message: data.message,
      timestamp: Date.now()
    });
  });
  
  // Handle disconnect
  socket.on('disconnect', (reason) => {
    console.log('User disconnected:', socket.id, reason);
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});`}),e.jsx(s,{language:"javascript",title:"Socket.IO Client",code:`import { io } from 'socket.io-client';

// Connect to server
const socket = io('https://localhost:3000', {
  auth: {
    token: 'your-auth-token'
  },
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000
});

// Connection events
socket.on('connect', () => {
  console.log('Connected:', socket.id);
});

socket.on('disconnect', (reason) => {
  console.log('Disconnected:', reason);
  
  if (reason === 'io server disconnect') {
    // Server forcefully disconnected, reconnect manually
    socket.connect();
  }
});

socket.on('connect_error', (error) => {
  console.error('Connection error:', error.message);
});

// Join room
socket.emit('join-room', 'room123');

// Listen for events
socket.on('user-joined', (data) => {
  console.log('User joined:', data.userId);
});

socket.on('chat-message', (data) => {
  console.log(\`\${data.userId}: \${data.message}\`);
});

// Send message
function sendMessage(roomId, message) {
  socket.emit('chat-message', {
    roomId,
    message
  });
}

// Send private message
function sendPrivateMessage(recipientId, message) {
  socket.emit('private-message', {
    recipientId,
    message
  });
}

// Disconnect
function disconnect() {
  socket.disconnect();
}`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"Common Use Cases"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-green-400",children:"Chat Applications"}),e.jsx("p",{className:"text-gray-300",children:"Real-time messaging between users with instant delivery and typing indicators"})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-green-400",children:"Live Notifications"}),e.jsx("p",{className:"text-gray-300",children:"Push notifications to users without polling"})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-green-400",children:"Collaborative Editing"}),e.jsx("p",{className:"text-gray-300",children:"Multiple users editing same document simultaneously"})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-green-400",children:"Live Sports Updates"}),e.jsx("p",{className:"text-gray-300",children:"Real-time scoreboards and game statistics"})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-green-400",children:"Trading Platforms"}),e.jsx("p",{className:"text-gray-300",children:"Live stock prices and order book updates"})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-green-400",children:"Multiplayer Games"}),e.jsx("p",{className:"text-gray-300",children:"Real-time game state synchronization"})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-green-400",children:"Live Dashboards"}),e.jsx("p",{className:"text-gray-300",children:"Real-time analytics and monitoring displays"})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-green-400",children:"IoT Data Streams"}),e.jsx("p",{className:"text-gray-300",children:"Continuous sensor data transmission"})]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"Best Practices"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-green-400",children:"1. Implement Reconnection Logic"}),e.jsx(s,{language:"javascript",code:`class WebSocketClient {
  constructor(url) {
    this.url = url;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.reconnectDelay = 1000;
    this.connect();
  }
  
  connect() {
    this.ws = new WebSocket(this.url);
    
    this.ws.onopen = () => {
      console.log('Connected');
      this.reconnectAttempts = 0;
    };
    
    this.ws.onclose = (event) => {
      if (event.code !== 1000 && this.reconnectAttempts < this.maxReconnectAttempts) {
        this.reconnectAttempts++;
        const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1);
        
        console.log(\`Reconnecting in \${delay}ms...\`);
        setTimeout(() => this.connect(), delay);
      }
    };
  }
}`})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-green-400",children:"2. Implement Heartbeat/Ping-Pong"}),e.jsx(s,{language:"javascript",code:`// Client
let pingInterval;

socket.addEventListener('open', () => {
  pingInterval = setInterval(() => {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ type: 'ping' }));
    }
  }, 30000);
});

socket.addEventListener('message', (event) => {
  const data = JSON.parse(event.data);
  if (data.type === 'pong') {
    // Server is alive
  }
});

socket.addEventListener('close', () => {
  clearInterval(pingInterval);
});

// Server
ws.on('message', (data) => {
  const message = JSON.parse(data);
  if (message.type === 'ping') {
    ws.send(JSON.stringify({ type: 'pong' }));
  }
});`})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-green-400",children:"3. Handle Message Ordering"}),e.jsx(s,{language:"javascript",code:`// Add sequence numbers to messages
let sequenceNumber = 0;

function sendMessage(data) {
  const message = {
    ...data,
    seq: sequenceNumber++,
    timestamp: Date.now()
  };
  socket.send(JSON.stringify(message));
}

// On receiver side
let expectedSeq = 0;
const messageBuffer = [];

socket.onmessage = (event) => {
  const message = JSON.parse(event.data);
  
  if (message.seq === expectedSeq) {
    processMessage(message);
    expectedSeq++;
    
    // Process buffered messages
    while (messageBuffer.length > 0) {
      const buffered = messageBuffer.find(m => m.seq === expectedSeq);
      if (buffered) {
        processMessage(buffered);
        messageBuffer.splice(messageBuffer.indexOf(buffered), 1);
        expectedSeq++;
      } else {
        break;
      }
    }
  } else if (message.seq > expectedSeq) {
    // Buffer out-of-order message
    messageBuffer.push(message);
  }
};`})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-green-400",children:"4. Implement Rate Limiting"}),e.jsx(s,{language:"javascript",code:`// Server-side rate limiting
const rateLimits = new Map();

ws.on('message', (data) => {
  const clientId = getClientId(ws);
  const now = Date.now();
  
  if (!rateLimits.has(clientId)) {
    rateLimits.set(clientId, { count: 0, resetTime: now + 60000 });
  }
  
  const limit = rateLimits.get(clientId);
  
  if (now > limit.resetTime) {
    limit.count = 0;
    limit.resetTime = now + 60000;
  }
  
  if (limit.count >= 100) {  // Max 100 messages per minute
    ws.send(JSON.stringify({
      type: 'error',
      message: 'Rate limit exceeded'
    }));
    return;
  }
  
  limit.count++;
  // Process message
});`})]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"Security Considerations"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-green-400",children:"Use WSS (WebSocket Secure)"}),e.jsx(s,{language:"javascript",code:`// Always use wss:// in production
const socket = new WebSocket('wss://example.com');

// Server with TLS
const https = require('https');
const fs = require('fs');

const server = https.createServer({
  cert: fs.readFileSync('/path/to/cert.pem'),
  key: fs.readFileSync('/path/to/key.pem')
});

const wss = new WebSocket.Server({ server });`})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-green-400",children:"Validate Origin"}),e.jsx(s,{language:"javascript",code:`wss.on('connection', (ws, req) => {
  const origin = req.headers.origin;
  const allowedOrigins = ['https://example.com', 'https://app.example.com'];
  
  if (!allowedOrigins.includes(origin)) {
    ws.close(1008, 'Origin not allowed');
    return;
  }
  
  // Process connection
});`})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-green-400",children:"Authenticate Connections"}),e.jsx(s,{language:"javascript",code:`// Client sends token
const socket = new WebSocket('wss://example.com?token=jwt_token');

// Server validates token  
wss.on('connection', (ws, req) => {
  const url = new URL(req.url, 'wss://example.com');
  const token = url.searchParams.get('token');
  
  if (!validateJWT(token)) {
    ws.close(1008, 'Invalid authentication');
    return;
  }
  
  const user = getUserFromToken(token);
  // Store user info with connection
});`})]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"Scaling WebSocket Applications"}),e.jsx(s,{language:"javascript",title:"Using Redis for Multi-Server Setup",code:`const Redis = require('ioredis');
const { Server } = require('socket.io');

const io = new Server(server);

// Create Redis pub/sub clients
const pub = new Redis();
const sub = new Redis();

// Subscribe to Redis channel
sub.subscribe('messages');

// Forward Redis messages to WebSocket clients
sub.on('message', (channel, message) => {
  if (channel === 'messages') {
    const data = JSON.parse(message);
    io.to(data.room).emit(data.event, data.payload);
  }
});

// Publish WebSocket messages to Redis
io.on('connection', (socket) => {
  socket.on('chat-message', (data) => {
    pub.publish('messages', JSON.stringify({
      room: data.room,
      event: 'chat-message',
      payload: data
    }));
  });
});`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"WebSockets vs HTTP Polling"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-800",children:[e.jsx("th",{className:"border border-gray-700 px-4 py-3 text-left text-white",children:"Aspect"}),e.jsx("th",{className:"border border-gray-700 px-4 py-3 text-left text-white",children:"WebSockets"}),e.jsx("th",{className:"border border-gray-700 px-4 py-3 text-left text-white",children:"HTTP Polling"})]})}),e.jsxs("tbody",{className:"text-gray-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-700 px-4 py-3 font-semibold",children:"Connection"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Persistent (one TCP connection)"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"New connection per request"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-700 px-4 py-3 font-semibold",children:"Latency"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Very low (milliseconds)"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Higher (poll interval + RTT)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-700 px-4 py-3 font-semibold",children:"Overhead"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Minimal (small frame headers)"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"High (full HTTP headers)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-700 px-4 py-3 font-semibold",children:"Server Push"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Native support"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Not supported"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-700 px-4 py-3 font-semibold",children:"Bandwidth"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Efficient"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Wasteful (empty responses)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-700 px-4 py-3 font-semibold",children:"Complexity"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Moderate"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Simple"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-700 px-4 py-3 font-semibold",children:"Use Case"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Real-time applications"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Occasional updates"})]})]})]})})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"Popular WebSocket Libraries"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-green-400",children:"Socket.IO"}),e.jsx("p",{className:"text-gray-300",children:"Feature-rich library with rooms, namespaces, and auto-reconnection"})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-green-400",children:"ws (Node.js)"}),e.jsx("p",{className:"text-gray-300",children:"Fast and lightweight WebSocket implementation"})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-green-400",children:"uWebSockets.js"}),e.jsx("p",{className:"text-gray-300",children:"Ultra-fast WebSocket server for high performance"})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-green-400",children:"Primus"}),e.jsx("p",{className:"text-gray-300",children:"Abstraction layer supporting multiple real-time frameworks"})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-green-400",children:"SockJS"}),e.jsx("p",{className:"text-gray-300",children:"WebSocket emulation with fallback options"})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-green-400",children:"SignalR (.NET)"}),e.jsx("p",{className:"text-gray-300",children:"Real-time web functionality for .NET applications"})]})]})]})]})};export{x as default};
