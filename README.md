# Chat App Using MERN Stack

## Project Overview

This is a full-stack chat application developed using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and **Socket.IO** for real-time communication. It offers users a responsive and interactive chat experience, with both **global** and **private chat** options.

## Features

- **Authentication**: Secure JWT token-based authentication.
- **Global Chat**: Users can broadcast messages to all users in real-time.
- **Private Chat**: Secure one-on-one conversations.
- **Real-time Updates**: Instant message updates using WebSockets/Socket.IO.
- **User-friendly Interface**: A Material UI-based responsive design.

## Objectives

1. **Secure Authentication**: Ensure safe access with JWT-based authentication.
2. **Global Chat Integration**: Real-time global message broadcasting to all users.
3. **Private Chat Implementation**: Secure private conversations between users.
4. **Real-time Updates**: User lists, chats, and messages update in real-time.
5. **User-friendly Interface**: Intuitive navigation with Material UI.

## Tech Stack

### Frontend
- **React.js**: A JavaScript library for building user interfaces.
- **Material UI**: UI components for a modern design.
  
### Backend
- **Node.js**: JavaScript runtime for backend development.
- **Express.js**: Web framework for handling requests and routing.
  
### Database
- **MongoDB**: NoSQL database for storing user and message data.

### Real-time Communication
- **Socket.IO**: For real-time, bi-directional communication.

### Authentication
- **JWT (JSON Web Tokens)**: For secure user authentication.

## Installation

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine.
- **MongoDB**: You need to have MongoDB installed locally or use a cloud-based MongoDB service (e.g., MongoDB Atlas).

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/chat-app-mern.git
    cd chat-app-mern
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with the following content:
    ```bash
    MONGO_URI=mongodb://localhost:27017/chat-app
    JWT_SECRET=your_jwt_secret_key
    ```

4. Start the backend server:
    ```bash
    npm run server
    ```

### Frontend Setup

1. Navigate to the client directory:
    ```bash
    cd client
    ```

2. Install the frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend server:
    ```bash
    npm start
    ```

The app should now be running on [http://localhost:3000](http://localhost:3000) (frontend) and [http://localhost:5000](http://localhost:5000) (backend).

## Usage

1. Register a new account or log in with your existing credentials.
2. Use the global chat to send messages to all connected users.
3. Switch to private chat to send one-on-one messages.
4. Enjoy real-time messaging, as your chats and user lists update instantly.

## Folder Structure

├── client # React frontend │ ├── src │ ├── public │ └── package.json ├── config │ └── keys.js # MongoDB and JWT configurations ├── models │ ├── User.js # User schema │ ├── Message.js # Message schema │ └── Conversation.js # Conversation schema ├── routes │ ├── api │ └── users.js # User routes (login/register) ├── server.js # Entry point for the backend ├── package.json # Backend dependencies └── .env # Environment variables (MongoDB URI, JWT secret)


## Hardware Requirements

- **Server Infrastructure**: Physical server or cloud-based solution (AWS, Azure).
- **Client Devices**: Compatible with desktops, laptops, tablets, and smartphones.

## Software Requirements

- **Operating System**: Ubuntu, CentOS, or other Linux distributions.
- **Web Server**: Nginx or Apache for serving the application.
- **MongoDB**: Ensure MongoDB is installed and accessible.
- **Node.js**: Ensure the correct version is installed.

## License

This project is licensed under the MIT License.

---

**Author**: Abhinav Kumar  
 
