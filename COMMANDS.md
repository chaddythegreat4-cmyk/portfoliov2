# Useful Commands Reference

## 🚀 Quick Start

```bash
# Navigate to project
cd portfolio-ai

# Install all dependencies
npm run install-all

# Start development servers (frontend + backend)
npm run dev
```

## 📦 Installation Commands

```bash
# Install root dependencies only
npm install

# Install frontend dependencies
cd frontend && npm install

# Install backend dependencies
cd backend && npm install

# Install everything at once (recommended)
npm run install-all
```

## 🔧 Development Commands

```bash
# Start both frontend and backend in development mode
npm run dev

# Start frontend only (from root)
cd frontend && npm run dev

# Start backend only (from root)
cd backend && npm run dev

# Start backend with nodemon (from backend directory)
cd backend && npm run dev
```

## 🏗️ Build Commands

```bash
# Build frontend for production
npm run build

# Build from frontend directory
cd frontend && npm run build

# Preview production build
cd frontend && npm run preview
```

## 🚀 Production Commands

```bash
# Start backend server (production)
cd backend && npm start

# Or from root
npm start
```

## 🧪 Testing Commands

```bash
# Test backend health endpoint
curl http://localhost:5000/health

# Test chat endpoint (Windows PowerShell)
Invoke-RestMethod -Uri http://localhost:5000/api/chat -Method POST -ContentType "application/json" -Body '{"message":"Hello"}'

# Test chat endpoint (bash/Git Bash)
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello"}'
```

## 🗑️ Cleanup Commands

```bash
# Remove all node_modules
rm -rf node_modules frontend/node_modules backend/node_modules

# Windows PowerShell equivalent
Remove-Item -Recurse -Force node_modules, frontend\node_modules, backend\node_modules

# Remove build artifacts
rm -rf frontend/dist

# Clean and reinstall
npm run install-all
```

## 📝 Git Commands

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Chad RV Abcede portfolio"

# Add remote repository
git remote add origin https://github.com/yourusername/portfolio-ai.git

# Push to GitHub
git push -u origin main
```

## 🌐 Deployment Commands

```bash
# Install Render CLI (optional)
npm install -g render-cli

# Deploy using Render CLI
render deploy

# Or simply push to GitHub and let Render auto-deploy
git push origin main
```

## 🔍 Debugging Commands

```bash
# Check Node version
node --version

# Check npm version
npm --version

# List all running Node processes
# Windows
tasklist | findstr node

# Linux/Mac
ps aux | grep node

# Kill process on port 5000 (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Kill process on port 5000 (Linux/Mac)
lsof -ti:5000 | xargs kill -9

# View backend logs (when running)
# Logs appear in the terminal where you ran npm run dev

# Check for port conflicts
netstat -ano | findstr :5000
netstat -ano | findstr :3000
```

## 📊 Package Management

```bash
# Update all dependencies
npm update

# Check for outdated packages
npm outdated

# Install specific package (frontend example)
cd frontend && npm install package-name

# Install specific package (backend example)
cd backend && npm install package-name

# Install dev dependency
npm install --save-dev package-name

# Remove package
npm uninstall package-name
```

## 🔧 Environment Setup

```bash
# Copy environment files (if .env doesn't exist)
# Backend
cp backend/.env.example backend/.env

# Frontend
cp frontend/.env.example frontend/.env

# Windows PowerShell
Copy-Item backend\.env.example backend\.env
Copy-Item frontend\.env.example frontend\.env
```

## 🎨 Code Quality Commands

```bash
# Format code (if you add Prettier)
npx prettier --write .

# Lint code (if you add ESLint)
npx eslint .

# Type check (if you add TypeScript)
npx tsc --noEmit
```

## 📱 Mobile Testing

```bash
# Get your local IP address
# Windows
ipconfig

# Linux/Mac
ifconfig

# Access from mobile device
# http://YOUR_LOCAL_IP:3000
# Example: http://192.168.1.100:3000
```

## 🧹 Cache Clearing

```bash
# Clear npm cache
npm cache clean --force

# Clear Vite cache
cd frontend && rm -rf node_modules/.vite

# Windows PowerShell
Remove-Item -Recurse -Force frontend\node_modules\.vite
```

## 📦 Useful npm Scripts

From the **root** directory:

| Command | Description |
|---------|-------------|
| `npm run install-all` | Install all dependencies |
| `npm run dev` | Start development servers |
| `npm run build` | Build frontend for production |
| `npm start` | Start backend server |

From the **frontend** directory:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

From the **backend** directory:

| Command | Description |
|---------|-------------|
| `npm start` | Start server |
| `npm run dev` | Start with nodemon |

## 🚨 Troubleshooting Commands

```bash
# Port 5000 already in use?
# Change PORT in backend/.env to 5001
# Then update VITE_API_BASE_URL in frontend/.env

# Dependencies not installing?
# Clear lock files and reinstall
rm package-lock.json frontend/package-lock.json backend/package-lock.json
npm run install-all

# Build failing?
# Try clean install
cd frontend
rm -rf node_modules dist
npm install
npm run build

# Can't connect to backend from frontend?
# Check if backend is running
curl http://localhost:5000/health

# CORS errors?
# Verify VITE_API_BASE_URL matches your backend URL
cat frontend/.env
```

## 🌟 Production Verification

```bash
# After deployment, verify your live sites:

# Backend health check
curl https://your-backend.onrender.com/health

# Backend chat test
curl -X POST https://your-backend.onrender.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Who is Chad?"}'

# Frontend accessibility
curl -I https://your-frontend.onrender.com
```

## 💡 Pro Tips

```bash
# Run backend and frontend in separate terminals for better visibility
# Terminal 1:
cd portfolio-ai/backend && npm run dev

# Terminal 2:
cd portfolio-ai/frontend && npm run dev

# Use nodemon for auto-restart during development (already configured)
cd backend && npm run dev

# Open multiple projects in VS Code
code portfolio-ai

# Generate project tree structure
tree /F portfolio-ai
# or
ls -R portfolio-ai
```

---

**Need more help?** Check the other documentation files:
- [README.md](README.md) - Full documentation
- [QUICK_START.md](QUICK_START.md) - Quick setup guide
- [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) - Deployment steps
