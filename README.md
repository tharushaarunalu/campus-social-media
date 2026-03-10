# 🎓 Campus Social Media

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2014.0.0-brightgreen)](https://nodejs.org/)

A modern, full-stack social networking platform designed specifically for campus communities. Connect with fellow students, join groups, and stay updated with campus life.

---

## 🚀 Features

- **🔐 Secure Authentication**: User registration and login with encrypted passwords using `bcryptjs`.
- **👥 Group Management**: Create, search, and join campus groups to collaborate on projects or interests.
- **🤝 Friend System**: Send and accept friend requests to build your campus network.
- **💬 Real-time Messaging**: Instant communication powered by `Socket.io`.
- **👤 Dynamic Profiles**: Customizable user profiles and edit functionalities.
- **📱 Responsive Design**: A clean UI built with `EJS` that works on all devices.

---

## 🛠️ Tech Stack

- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (via [Mongoose](https://mongoosejs.com/))
- **Frontend**: [EJS (Embedded JavaScript templates)](https://ejs.co/), Vanilla CSS
- **Real-time**: [Socket.io](https://socket.io/)
- **Auth**: [Passport.js](https://www.passportjs.org/), [JSON Web Tokens (JWT)](https://jwt.io/)

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local or Atlas)
- npm (Node Package Manager)

---

## ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/tharushaarunalu/campus-social-media.git
   cd campus-social-media
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the application**:
   - For development (with nodemon):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

5. **Access the app**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

---

## 📁 Project Structure

```text
campus-social-media/
├── auth/           # Authentication logic
├── config/         # Configuration files
├── controllers/    # Route controllers
├── middleware/     # Custom middlewares
├── models/         # Mongoose models
├── public/         # Static assets (CSS, JS, Images)
├── routes/         # Express routes
├── views/          # EJS templates
├── server.js       # Main entry point
└── .env            # Environment variables
```

---

## 🌐 Deployment

### ⚠️ A Note on GitHub Pages
GitHub Pages is specifically designed for **static websites** (HTML/CSS/JS). Since this project is a dynamic **Node.js application** with a **MongoDB database**, it cannot be hosted directly via GitHub Pages' standard "Settings > Pages" method.

### 🚀 Recommended Host: Render.com
For hosting this Node.js app for free, we recommend [Render](https://render.com/).

1. **Create a Render Account**: Sign up at [render.com](https://render.com/).
2. **New Web Service**: Click **"New +"** and select **"Web Service"**.
3. **Connect GitHub**: Connect your GitHub account and select this repository (`campus-social-media`).
4. **Build Settings**:
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. **Environment Variables**:
   Go to the **"Environment"** tab in Render and add your variables:
   - `MONGO_URI`: Your MongoDB connection string.
   - `JWT_SECRET`: A secure secret key for authentication.
   - `PORT`: 3000 (usually handled automatically by Render).

Render will provide you with a public URL (e.g., `https://campus-social-media.onrender.com`) where your site will be live!

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.
