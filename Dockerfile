# Development Dockerfile for CSS Website Backend
# Use Node.js LTS version for stability
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install system dependencies for development
RUN apk add --no-cache \
    git \
    curl \
    bash \
    && npm install -g nodemon

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Copy package files first for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Change ownership to nodejs user
RUN chown -R nodejs:nodejs /app
USER nodejs

# Expose port for the application
EXPOSE 3000

# Expose port for debugging (Node.js inspector)
EXPOSE 9229

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:3000/ || exit 1

# Default command for development with hot reload and debugging
CMD ["npm", "run", "dev"]