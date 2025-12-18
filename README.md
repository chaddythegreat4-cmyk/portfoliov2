# Chad RV Abcede - AI-Powered Portfolio

A production-ready full-stack web application portfolio featuring an AI chatbot assistant powered by Flowise API.

## 🚀 Tech Stack

### Frontend
- **React** (Vite)
- **Tailwind CSS** for styling
- **Axios** for API requests

### Backend
- **Node.js** with **Express**
- **Flowise API** for AI chatbot
- **CORS** enabled
- **dotenv** for environment variables

### AI Integration
- **Flowise Cloud API** for intelligent chatbot responses
- Context-aware responses about Chad's skills, projects, and experience

## 📁 Project Structure

```
portfolio-ai/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chatbot.jsx       # AI chatbot widget
│   │   │   ├── Hero.jsx          # Hero section
│   │   │   ├── Projects.jsx      # Projects showcase
│   │   │   └── Footer.jsx        # Footer component
│   │   ├── pages/
│   │   │   └── Home.jsx          # Main page
│   │   ├── App.jsx               # Root component
│   │   ├── main.jsx              # Entry point
│   │   ├── api.js                # API client
│   │   └── index.css             # Global styles
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
├── backend/
│   ├── routes/
│   │   └── chat.js               # Chat endpoint
│   ├── services/
│   │   └── openrouter.js         # Flowise API integration
│   ├── server.js                 # Express server
│   ├── package.json
│   └── .env.example
├── package.json                  # Root package
└── README.md
```

## 🛠️ Local Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd portfolio-ai
   ```

2. **Install all dependencies (root, frontend, and backend)**
   ```bash
   npm run install-all
   ```

3. **Configure environment variables**

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

4. **Start development servers**
   ```bash
   npm run dev
   ```

   This will start:
   - Backend API on http://localhost:5000
   - Frontend app on http://localhost:3000

## 🌐 Deployment to Render

### Backend Deployment

1. **Create a new Web Service on Render**
   - Connect your GitHub repository
   - Select the `backend` directory as the root directory

2. **Configure Build & Start Commands**
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

3. **Add Environment Variables**
   ```
   FLOWISE_API_URL=https://cloud.flowiseai.com/api/v1/prediction/0c99e21b-0275-40cf-8e6c-8e521215d7a7
   GITHUB_PROFILE_URL=https://github.com/killergamer19
   PORT=5000
   ```

4. **Deploy** and note your backend URL (e.g., `https://your-backend.onrender.com`)

### Frontend Deployment

1. **Create a new Static Site on Render**
   - Connect your GitHub repository
   - Select the `frontend` directory as the root directory

2. **Configure Build Settings**
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`

3. **Add Environment Variables**
   ```
   VITE_API_BASE_URL=https://your-backend.onrender.com
   VITE_GITHUB_PROFILE_URL=https://github.com/killergamer19
   ```

4. **Deploy**

### Post-Deployment

1. Update CORS settings in `backend/server.js` if needed to allow your frontend domain
2. Test the chatbot functionality
3. Verify all API endpoints are working

## 🤖 Chatbot Features

The AI chatbot can answer questions about:
- **Skills & Technologies**: JavaScript, TypeScript, Node.js, Java, React, etc.
- **Projects**: Details about all 6 featured projects
- **Experience**: Education at University of Cebu Main
- **Contact**: GitHub profile and collaboration opportunities

### Sample Prompts
- "What technologies does Chad know?"
- "Tell me about his REST API project"
- "What is Chad's educational background?"
- "How can I contact Chad?"
- "Does Chad know TypeScript?"

## 📦 Available Scripts

### Root Directory
- `npm run install-all` - Install dependencies for all packages
- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build frontend for production
- `npm start` - Start backend server

### Frontend Directory
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend Directory
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 🔧 API Endpoints

### Health Check
```
GET /health
Response: { status: 'ok', message: '...' }
```

### Chat
```
POST /api/chat
Body: { "message": "your question here" }
Response: { "reply": "AI response" }
```

## 🎨 Customization

### Update Personal Information
1. Edit `frontend/src/components/Hero.jsx` for bio and skills
2. Edit `frontend/src/components/Projects.jsx` for projects
3. Update environment variables for GitHub URL

### Modify AI Behavior
The chatbot behavior is controlled by the Flowise API configuration. To modify:
1. Access your Flowise dashboard at https://cloud.flowiseai.com
2. Update the chatflow with ID: `0c99e21b-0275-40cf-8e6c-8e521215d7a7`
3. Modify the system prompt and knowledge base as needed

## 🐛 Troubleshooting

### Chatbot not responding
- Verify `FLOWISE_API_URL` is correct in backend `.env`
- Check backend logs for API errors
- Ensure Flowise API endpoint is active

### CORS errors
- Update CORS configuration in `backend/server.js`
- Add your frontend domain to allowed origins

### Build failures
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm run install-all`
- Verify Node.js version is 18+

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Chad RV Abcede**
- GitHub: [@killergamer19](https://github.com/killergamer19)
- Location: Philippines
- Education: IT Student at University of Cebu Main

---

Built with ❤️ using React, Node.js, and AI
