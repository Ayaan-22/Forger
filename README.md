# Forger Chat 💬

A modern, real-time full-stack chat application built with the MERN stack (MongoDB, Express, React, Node.js), Socket.io, and TailwindCSS. 

## ✨ Features

- **Authentication & Authorization**: Secure sign-up, log-in, and log-out flows using JWT and Bcrypt.
- **Real-time Messaging**: Instant messaging utilizing WebSockets via Socket.io.
- **Online Status**: Real-time indicators showing online/offline status of matched users.
- **Media Support**: Upload and share images natively using Cloudinary.
- **Customizable Theming**: Beautiful Dark and Light mode support using TailwindCSS, DaisyUI, and Zustand.
- **Responsive Design**: Fully responsive user interface that works seamlessly on desktop and mobile devices.

## 🛠️ Tech Stack

### Frontend
- **React 19** & **Vite**
- **TailwindCSS** & **DaisyUI**
- **Zustand** (Global State Management)
- **React Router DOM**
- **Socket.io-client**
- **Axios**
- **Lucide React** (Icons)
- **React Hot Toast** (Notifications)

### Backend
- **Node.js** & **Express**
- **MongoDB** & **Mongoose**
- **Socket.io** (WebSockets)
- **Cloudinary** (Image hosting integration)
- **JSON Web Tokens (JWT)** & **Bcrypt.js** (Security)
- **Cookie Parser**

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js and npm installed on your machine. You will also need a MongoDB database and a free Cloudinary account for managing image uploads.

### 1. Clone the repository

```bash
git clone <repository_url>
cd Forger
```

### 2. Setup the Backend

Navigate to the `server` directory and install its dependencies:
```bash
cd server
npm install
```

Create a `.env` file in the root of the `server` directory and add your environment variables:
```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLIENT_URL=http://localhost:5173
```

Start the backend server in development mode:
```bash
npm run dev
```

### 3. Setup the Frontend

Open a new terminal tab, navigate to the `client` directory and install the frontend dependencies:
```bash
cd client
npm install
```

Start the frontend application:
```bash
npm run dev
```

### 4. Running the App
The frontend interface should now be running at `http://localhost:5173` while the server actively polls on `http://localhost:5001`. Open the frontend URL in your browser to try out Forger Chat! ✨

---

## 📂 Architecture & Project Structure

```text
Forger/
├── client/          # React frontend powered by Vite
│   ├── src/
│   │   ├── components/  # Modular, reusable UI components (Navbar, Chat interface)
│   │   ├── pages/       # Application views (Home, Login, Signup, Profile, Settings)
│   │   ├── store/       # Zustand hooks (useAuthStore, useThemeStore, useChatStore)
│   │   ├── lib/         # Axios config & utilities
│   │   └── App.jsx      # Main React application rendering endpoints
── server/           # Node.js backend
│   ├── src/
│   │   ├── controllers/ # Business logic corresponding to routes
│   │   ├── lib/         # Database, Socket.io, and Cloudinary initialization logic
│   │   ├── middleware/  # Request validation and auth middlewares
│   │   ├── routes/      # Express API endpoints breakdown (auth, messages)
│   │   └── index.js     # Express server entry point
```
