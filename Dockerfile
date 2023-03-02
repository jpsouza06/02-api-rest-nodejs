FROM node:18-alpine AS builder
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install && npm run build
ENTRYPOINT [ "node", "build/server.js" ]
