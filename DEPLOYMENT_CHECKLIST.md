# Deployment Checklist for Render

## ✅ Pre-Deployment Checklist

### Local Testing
- [ ] Run `npm run install-all` successfully
- [ ] Run `npm run dev` and verify both servers start
- [ ] Test frontend at http://localhost:3000
- [ ] Test backend health at http://localhost:5000/health
- [ ] Test chatbot functionality
- [ ] Verify all environment variables are set correctly
- [ ] Build frontend: `cd frontend && npm run build`
- [ ] Verify build output in `frontend/dist/`

### Code Quality
- [ ] All console errors resolved
- [ ] No hardcoded API keys or secrets
- [ ] All environment variables use process.env
- [ ] CORS configured correctly
- [ ] Error handling implemented
- [ ] Loading states work properly

## 🚀 Backend Deployment (Render Web Service)

### Step 1: Create Web Service
- [ ] Log in to [Render](https://render.com)
- [ ] Click "New +" → "Web Service"
- [ ] Connect GitHub repository
- [ ] Select repository: `port2` (or your repo name)

### Step 2: Configure Web Service
- [ ] **Name**: `chad-portfolio-backend` (or your choice)
- [ ] **Region**: Choose closest to your users
- [ ] **Branch**: `main` (or your branch)
- [ ] **Root Directory**: `portfolio-ai/backend`
- [ ] **Runtime**: `Node`
- [ ] **Build Command**: `npm install`
- [ ] **Start Command**: `npm start`
- [ ] **Instance Type**: `Free` (or paid plan)

### Step 3: Environment Variables
Add these environment variables:

```
FLOWISE_API_URL=https://cloud.flowiseai.com/api/v1/prediction/74ac5be7-7e7b-4dd1-ace1-ff12e997a42e
GITHUB_PROFILE_URL=https://github.com/killergamer19
PORT=5000
```

- [ ] All environment variables added
- [ ] No trailing spaces in values
- [ ] FLOWISE_API_URL is correct

### Step 4: Deploy Backend
- [ ] Click "Create Web Service"
- [ ] Wait for deployment to complete
- [ ] **Copy your backend URL** (e.g., `https://chad-portfolio-backend.onrender.com`)
- [ ] Test health endpoint: `https://your-backend.onrender.com/health`
- [ ] Test chat endpoint with Postman/curl

### Step 5: Verify Backend
```bash
# Test health check
curl https://your-backend.onrender.com/health

# Test chat endpoint
curl -X POST https://your-backend.onrender.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello, who is Chad?"}'
```

- [ ] Health check returns 200 OK
- [ ] Chat endpoint returns AI response
- [ ] No CORS errors in logs

## 🌐 Frontend Deployment (Render Static Site)

### Step 1: Create Static Site
- [ ] In Render dashboard, click "New +" → "Static Site"
- [ ] Connect GitHub repository
- [ ] Select same repository

### Step 2: Configure Static Site
- [ ] **Name**: `chad-portfolio` (or your choice)
- [ ] **Branch**: `main`
- [ ] **Root Directory**: `portfolio-ai/frontend`
- [ ] **Build Command**: `npm install && npm run build`
- [ ] **Publish Directory**: `dist`

### Step 3: Environment Variables
Add these environment variables with your **actual backend URL**:

```
VITE_API_BASE_URL=https://your-backend.onrender.com
VITE_GITHUB_PROFILE_URL=https://github.com/killergamer19
```

⚠️ **IMPORTANT**: Replace `your-backend.onrender.com` with your actual backend URL from Step 4 above!

- [ ] `VITE_API_BASE_URL` points to deployed backend
- [ ] No trailing slash in API URL
- [ ] `VITE_GITHUB_PROFILE_URL` is correct

### Step 4: Deploy Frontend
- [ ] Click "Create Static Site"
- [ ] Wait for build and deployment
- [ ] **Copy your frontend URL** (e.g., `https://chad-portfolio.onrender.com`)

### Step 5: Verify Frontend
- [ ] Open frontend URL in browser
- [ ] Hero section loads correctly
- [ ] Projects section displays
- [ ] Footer shows GitHub link
- [ ] Chatbot icon appears in bottom-right
- [ ] Click chatbot and send a test message
- [ ] Chatbot responds correctly
- [ ] No console errors

## 🔧 Post-Deployment Configuration

### Update CORS (if needed)
If you see CORS errors, update `backend/server.js`:

```javascript
app.use(cors({
  origin: 'https://your-frontend.onrender.com',
  credentials: true
}));
```

- [ ] CORS allows frontend domain
- [ ] Redeploy backend if CORS updated

### Test All Features
- [ ] Homepage loads fast
- [ ] All sections visible
- [ ] Projects links work
- [ ] GitHub links open correctly
- [ ] Chatbot opens and closes
- [ ] Send message: "What are Chad's skills?"
- [ ] AI responds correctly
- [ ] Quick prompts work
- [ ] Typing indicator shows
- [ ] Mobile responsive design works

### Performance Check
- [ ] Page loads in < 3 seconds
- [ ] Chatbot responds in < 5 seconds
- [ ] No memory leaks
- [ ] Images load properly
- [ ] Smooth animations

## 📝 Final Steps

### Update Repository
- [ ] Update README.md with live URLs
- [ ] Add screenshots to repository
- [ ] Create a `.env.production` template if needed

### Documentation
- [ ] Document your deployment URLs
- [ ] Note any custom configurations
- [ ] Save backend and frontend URLs

### Share Your Portfolio
- [ ] Add portfolio URL to GitHub profile
- [ ] Share on LinkedIn
- [ ] Add to resume
- [ ] Test from different devices

## 🎉 Deployment Complete!

**Your Live URLs:**
- Frontend: `https://your-frontend.onrender.com`
- Backend: `https://your-backend.onrender.com`

---

## 🐛 Troubleshooting

### Backend Issues
- **Deployment fails**: Check Node.js version compatibility
- **Health check fails**: Verify PORT environment variable
- **Chatbot not responding**: Check Flowise API URL and logs

### Frontend Issues
- **Build fails**: Run `npm run build` locally first
- **API calls fail**: Verify `VITE_API_BASE_URL` is correct
- **Blank page**: Check browser console for errors

### CORS Issues
- Update `cors()` configuration in `server.js`
- Ensure frontend domain is whitelisted
- Redeploy backend after CORS changes

### Render-Specific Issues
- **Cold starts**: Free tier sleeps after inactivity (30s startup)
- **Build timeouts**: Optimize dependencies
- **Memory limits**: Monitor usage in Render dashboard

## 📞 Need Help?

Check these resources:
- [Render Documentation](https://render.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Express.js Guide](https://expressjs.com/en/starter/installing.html)

---

**Good luck with your deployment! 🚀**
