import axios from 'axios';

// Get API base URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Send a message to the chatbot
 * @param {string} message - User's message
 * @returns {Promise<Object>} Response with reply field
 */
export const sendChatMessage = async (message) => {
  try {
    const response = await api.post('/api/chat', { message });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    
    // Return user-friendly error message
    if (error.response) {
      return {
        reply: error.response.data?.reply || 'Sorry, I encountered an error. Please try again.',
        error: true
      };
    } else if (error.request) {
      return {
        reply: 'Unable to connect to the server. Please check your connection.',
        error: true
      };
    } else {
      return {
        reply: 'An unexpected error occurred. Please try again.',
        error: true
      };
    }
  }
};

export default api;
