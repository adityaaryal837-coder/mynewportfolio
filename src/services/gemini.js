import axios from 'axios';

// IMPORTANT: Replace with your actual Gemini API key in .env file
// VITE_GEMINI_API_KEY=your_key_here
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'PLACEHOLDER_KEY';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

export const chatWithGemini = async (message, history = []) => {
  if (API_KEY === 'PLACEHOLDER_KEY') {
    return "Please configure the Gemini API key in your .env file to enable the AI assistant.";
  }

  try {
    const formattedHistory = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    const response = await axios.post(API_URL, {
      contents: [
        ...formattedHistory,
        {
          role: "user",
          parts: [{
            text: `
            You are a helpful AI assistant for Aditya's portfolio website. 
            Aditya is a creative full-stack developer specializing in futuristic design and robust applications.
            Answer questions about Aditya's skills (React, Node, AI), projects (Neural Nexus, Ether Real), and experience.
            Keep your responses concise, professional, and slightly futuristic in tone.
            
            Current user message: ${message}
          ` }]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my neural network. Please check your API key and try again later.";
  }
};
