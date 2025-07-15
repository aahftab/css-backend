# CSS Website Backend - Development Environment

This repository contains a Node.js/Express backend API with Docker support for easy development setup.

## Prerequisites

- Docker (version 20.10 or higher)
- Docker Compose (version 2.0 or higher)

## Development Setup

### Quick Start with Docker Compose

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd css-website-backend
   ```

2. **Build and start the development environment**:
   ```bash
   docker-compose up --build
   ```

3. **Access the application**:
   - API: http://localhost:3000
   - Debug port: 9229 (for Node.js debugging)

### Development Commands

- **Start development server**:
  ```bash
  docker-compose up
  ```

- **Start in detached mode**:
  ```bash
  docker-compose up -d
  ```

- **View logs**:
  ```bash
  docker-compose logs -f css-backend-dev
  ```

- **Stop the services**:
  ```bash
  docker-compose down
  ```

- **Rebuild the container** (after dependency changes):
  ```bash
  docker-compose up --build
  ```

- **Access container shell**:
  ```bash
  docker-compose exec css-backend-dev sh
  ```

### Alternative Docker Commands

If you prefer using Docker directly without Compose:

- **Build the image**:
  ```bash
  docker build -t css-backend-dev .
  ```

- **Run the container**:
  ```bash
  docker run -p 3000:3000 -p 9229:9229 \
    -v $(pwd)/src:/app/src:ro \
    -v $(pwd)/package.json:/app/package.json:ro \
    --name css-backend-dev \
    css-backend-dev
  ```

## Development Features

### Hot Reloading
- Changes to source files automatically restart the server
- Powered by `nodemon`
- No need to rebuild the container for code changes

### Debugging Support
- Node.js inspector enabled on port 9229
- Compatible with VS Code debugger and Chrome DevTools
- Use Chrome DevTools: navigate to `chrome://inspect`

### Environment Variables
The following environment variables are available:
- `NODE_ENV=development`
- `PORT=3000`
- `DEBUG=*` (for debug logging)

### Volume Mounts
- Source code is mounted for real-time updates
- `node_modules` is excluded to prevent conflicts
- Package files are mounted read-only

## Project Structure

```
css-website-backend/
├── src/
│   ├── app.js              # Express app configuration
│   ├── server.js           # Server entry point
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── middlewares/        # Custom middleware
│   ├── models/             # Data models
│   ├── routes/             # Route definitions
│   ├── services/           # Business logic
│   └── utils/              # Utility functions
├── Dockerfile              # Development Docker image
├── docker-compose.yml      # Docker Compose configuration
├── docker-compose.override.yml  # Development overrides
├── .dockerignore           # Docker ignore rules
└── package.json            # Node.js dependencies
```

## API Endpoints

- `GET /` - Welcome message
- `GET /gg` - Test error handling

## Troubleshooting

### Common Issues

1. **Port already in use**:
   ```bash
   # Change port in docker-compose.yml or stop existing services
   lsof -ti:3000 | xargs kill -9
   ```

2. **Permission issues**:
   ```bash
   # Reset file permissions
   sudo chown -R $USER:$USER .
   ```

3. **Container won't start**:
   ```bash
   # Check logs
   docker-compose logs css-backend-dev
   
   # Rebuild from scratch
   docker-compose down
   docker-compose build --no-cache
   docker-compose up
   ```

4. **Node modules issues**:
   ```bash
   # Remove and rebuild
   docker-compose down
   docker volume prune
   docker-compose up --build
   ```

### Health Check
The container includes a health check that verifies the API is responding:
```bash
docker-compose ps
```

## Development Workflow

1. Make changes to your code
2. Save the file
3. Nodemon automatically restarts the server
4. Test your changes at http://localhost:3000
5. Use debugger if needed (port 9229)

## Contributing

1. Make sure Docker is running
2. Start the development environment
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Need Help?

- Check the Docker logs: `docker-compose logs -f`
- Verify Docker is running: `docker --version`
- Ensure ports 3000 and 9229 are available
- Try rebuilding: `docker-compose up --build`
