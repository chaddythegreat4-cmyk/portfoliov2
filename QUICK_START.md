# Quick Start Guide - Chad RV Abcede Portfolio

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd portfolio-ai
npm run install-all
```

### Step 2: Start Development Servers
```bash
npm run dev
```

This command will start:
- ✅ Backend API on http://localhost:5000
- ✅ Frontend app on http://localhost:3000

### Step 3: Open Your Browser
Navigate to **http://localhost:3000** and your portfolio is live! 🎉

## 🤖 Test the AI Chatbot

Click the blue chat icon in the bottom-right corner and try these questions:
- "What are Chad's skills?"
- "Tell me about his projects"
- "What technologies does he use?"
- "How can I contact Chad?"

## 📝 Environment Variables (Already Configured!)

The `.env` files are already set up for local development:

**Backend** (`backend/.env`):
```env
FLOWISE_API_URL=https://cloud.flowiseai.com/api/v1/prediction/0c99e21b-0275-40cf-8e6c-8e521215d7a7
GITHUB_PROFILE_URL=https://github.com/killergamer19
PORT=5000
```

**Frontend** (`frontend/.env`):
```env
VITE_API_BASE_URL=http://localhost:5000
VITE_GITHUB_PROFILE_URL=https://github.com/killergamer19
```

## 🏗️ Build for Production

```bash
# Build frontend
npm run build

# The production files will be in frontend/dist/
```

## 🌐 Deploy to Render

### Deploy Backend:
1. Create a **Web Service** on Render
2. Connect your repo and select `backend` folder
3. Build: `npm install`
4. Start: `npm start`
5. Add the same environment variables from `backend/.env`

### Deploy Frontend:
1. Create a **Static Site** on Render
2. Connect your repo and select `frontend` folder
3. Build: `npm install && npm run build`
4. Publish directory: `dist`
5. Update `VITE_API_BASE_URL` to your backend URL

## 🎨 Features

✅ Modern, responsive UI with Tailwind CSS
✅ AI chatbot powered by Flowise API
✅ Real-time chat with typing indicators
✅ 6 featured projects from GitHub
✅ Contact information and skills showcase
✅ Production-ready and optimized

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Change PORT in backend/.env to 5001 or another port
# Update VITE_API_BASE_URL in frontend/.env accordingly
```

**Chatbot not responding?**
- Check if backend is running on http://localhost:5000
- Verify the Flowise API URL is correct
- Check backend logs for errors

## 📦 Project Structure

```
portfolio-ai/
├── frontend/           # React + Vite + Tailwind
│   ├── src/
│   │   ├── components/ # UI components
│   │   ├── pages/      # Page components
│   │   └── api.js      # API client
│   └── dist/           # Production build
├── backend/            # Node.js + Express API
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   └── server.js       # Entry point
└── package.json        # Root scripts
```

## 🔗 Useful Commands

| Command | Description |
|---------|-------------|
| `npm run install-all` | Install all dependencies |
| `npm run dev` | Start dev servers |
| `npm run build` | Build for production |
| `npm start` | Start backend only |

---

**Made with ❤️ by Chad RV Abcede**

Need help? Check the full [README.md](README.md) for detailed documentation.
