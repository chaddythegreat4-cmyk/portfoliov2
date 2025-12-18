import axios from 'axios';

// Flowise API configuration
const FLOWISE_API_URL = process.env.FLOWISE_API_URL || 'https://cloud.flowiseai.com/api/v1/prediction/0c99e21b-0275-40cf-8e6c-8e521215d7a7';

/**
 * Send a message to the Flowise AI chatbot
 * @param {string} userMessage - The user's message
 * @returns {Promise<string>} - The AI's response
 */
export async function sendMessageToFlowise(userMessage) {
  try {
    // Prepare the request payload for Flowise
    const payload = {
      question: userMessage
    };

    // Send POST request to Flowise API
    const response = await axios.post(FLOWISE_API_URL, payload, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 30000 // 30 second timeout
    });

    // Extract the response text
    // Flowise typically returns { text: "..." } or just a string
    const reply = response.data?.text || response.data?.answer || response.data || 'I received your message but couldn\'t generate a response.';

    return typeof reply === 'string' ? reply : JSON.stringify(reply);

  } catch (error) {
    console.error('Flowise API Error:', error.response?.data || error.message);
    
    // Provide user-friendly error messages
    if (error.response) {
      throw new Error(`AI service returned status ${error.response.status}`);
    } else if (error.request) {
      throw new Error('Could not reach AI service');
    } else {
      throw new Error('Error configuring request to AI service');
    }
  }
}
