# Ultra-Premium Futuristic Portfolio

A high-end, glassmorphic portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Advanced Glassmorphism**: High-end UI components with backdrop blur and subtle borders.
- **Cinematic Background**: Fullscreen autoplay muted loop video.
- **AI Assistant**: Integrated Gemini AI chatbot to answer questions about the portfolio owner.
- **Dynamic Lighting**: Mouse-follow glow effect and animated gradients.
- **Smooth Animations**: Powered by Framer Motion for entrance, scroll, and hover interactions.
- **Responsive Design**: Optimized for all devices from mobile to desktop.

## Getting Started

1. **Clone or Extract** the project.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Configure API Key**:
   Open `.env` and replace `your_gemini_api_key_here` with your actual Gemini API Key from [Google AI Studio](https://aistudio.google.com/).
4. **Run Development Server**:
   ```bash
   npm run dev
   ```
5. **Build for Production**:
   ```bash
   npm run build
   ```

## Customization

- **Background Video**: Replace the video source in `src/App.jsx` or add a local file to `public/videos/` and update the path.
- **Personal Info**: Update names, roles, and project details in the corresponding files within `src/sections/`.
- **Colors**: Customize the design system in `tailwind.config.js`.

## Tech Stack

- React (Functional Components)
- Vite (Build Tool)
- Tailwind CSS (Styling)
- Framer Motion (Animations)
- Lucide React (Icons)
- Axios (API Requests)
- Gemini API (AI Assistant)
