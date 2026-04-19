📊 Ops Dashboard (Assignment 3)
🚀 Overview
This project is a simulated Operations Dashboard that allows users to monitor and manage jobs in real time. It demonstrates core frontend concepts like state management, optimistic UI updates, and system simulation.

✨ Features


📋 Queue Panel

Displays list of jobs with status
Highlights selected job



📄 Details Panel

Shows selected job information
Supports actions: Retry, Pause, Cancel



📜 Timeline Panel

Displays activity logs
Shows both formatted time and relative time



🔄 Polling (Live Simulation)

Jobs update automatically every few seconds
Simulates real-time system behavior



⚡ Optimistic UI + Rollback

UI updates instantly on action
Automatically rolls back if action fails



🌐 URL State Sync

Selected job is stored in URL
Maintains state after refresh




🧠 Tech Stack

React (Vite)
JavaScript (ES6+)
Context API (State Management)
CSS (Custom styling)


📂 Project Structure
src/
├── components/
├── context/
├── data/
├── hooks/
├── pages/
├── styles/
├── utils/
├── App.jsx
└── main.jsx


⚙️ Installation & Setup
# Clone the repository
git clone <your-repo-link>

# Install dependencies
npm install

# Run the app
npm run dev


🌐 Live Demo
👉 https://operationsdashboards.netlify.app/

🧪 Key Concepts Implemented

Component-based architecture
Global state using Context API
Polling using custom hooks
Optimistic updates with rollback
Time formatting & relative time display
URL state synchronisation


🎯 Conclusion
This project simulates a real-world operations dashboard with dynamic data updates, error handling, and interactive UI, focusing on scalability and user experience.

