import express from 'express';
import { sendMessageToFlowise } from '../services/openrouter.js';

const router = express.Router();

// POST /api/chat - Send message to AI chatbot
router.post('/', async (req, res) => {
  try {
    const { message } = req.body;

    // Validate input
    if (!message || message.trim() === '') {
      return res.status(400).json({ 
        error: 'Message is required',
        reply: 'Please provide a message to continue our conversation.'
      });
    }

    // Send message to Flowise API
    const reply = await sendMessageToFlowise(message);

    // Return the response
    res.json({ reply });

  } catch (error) {
    console.error('Chat error:', error.message);
    
    // Handle specific error cases
    if (error.response) {
      return res.status(error.response.status).json({
        error: 'AI service error',
        reply: 'I apologize, but I\'m having trouble connecting to my AI service. Please try again in a moment.'
      });
    }

    // Generic error response
    res.status(500).json({
      error: 'Internal server error',
      reply: 'I apologize for the inconvenience. Please try again later.'
    });
  }
});

export default router;
