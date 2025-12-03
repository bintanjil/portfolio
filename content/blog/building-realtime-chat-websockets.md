---
title: "Building Real-Time Chat with WebSockets"
date: "2024-11-28"
category: "Dev Notes"
tags: ["WebSockets", "Real-time", "Node.js", "Socket.io"]
excerpt: "Implementing a scalable real-time chat system using WebSockets and Socket.io."
---

# Building Real-Time Chat with WebSockets

Real-time communication is essential for modern web applications. Here's how I built a scalable chat system.

## Why WebSockets?

Traditional HTTP is request-response based:
- Client sends request
- Server responds
- Connection closes

**WebSockets provide:**
- Persistent bidirectional connection
- Low latency
- Real-time updates

## Architecture Overview

```
Client (React) <-> Socket.io <-> Node.js Server <-> Redis PubSub <-> Database
```

## Implementation

### Server Setup

```javascript
const io = require('socket.io')(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
  });
  
  socket.on('send-message', async (data) => {
    const message = await saveMessage(data);
    io.to(data.roomId).emit('receive-message', message);
  });
  
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});
```

### Client Integration

```typescript
import { io, Socket } from 'socket.io-client';

const socket: Socket = io(process.env.NEXT_PUBLIC_SERVER_URL);

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.emit('join-room', roomId);

socket.on('receive-message', (message) => {
  setMessages(prev => [...prev, message]);
});
```

## Scaling Considerations

### 1. Redis Adapter

For multiple server instances:

```javascript
const RedisAdapter = require('@socket.io/redis-adapter');
const { createClient } = require('redis');

const pubClient = createClient({ url: 'redis://localhost:6379' });
const subClient = pubClient.duplicate();

io.adapter(RedisAdapter(pubClient, subClient));
```

### 2. Message Persistence

Store messages in PostgreSQL for history:

```sql
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  room_id VARCHAR(255) NOT NULL,
  user_id INTEGER NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 3. Rate Limiting

Prevent spam:

```javascript
const rateLimit = new Map();

socket.on('send-message', (data) => {
  const userId = socket.userId;
  const now = Date.now();
  const userLimit = rateLimit.get(userId);
  
  if (userLimit && now - userLimit < 1000) {
    return socket.emit('error', 'Rate limit exceeded');
  }
  
  rateLimit.set(userId, now);
  // Process message
});
```

## Performance Metrics

After optimization:
- **Latency**: <50ms
- **Concurrent Users**: 10,000+
- **Messages/second**: 5,000+

## Lessons Learned

1. **Connection Management**: Always handle reconnection logic
2. **Error Handling**: Network issues are common
3. **Security**: Validate all incoming data
4. **Monitoring**: Track connection counts and message rates

WebSockets are powerful but require careful implementation!
