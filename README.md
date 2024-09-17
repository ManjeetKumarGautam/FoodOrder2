# Food Order Application

A full-stack food ordering application built with the MERN stack (MongoDB, Express, React, and Node.js).

## Features

- Users can view available food items.
- Users can add food items to their cart.
- Users can place orders and track them.
- Admins can add, edit, or delete food items.
- Responsive design for seamless user experience on mobile and desktop.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: Redux (optional)
- **Styling**: CSS/Bootstrap/Material-UI

## Prerequisites

- **Node.js** installed on your machine
- **MongoDB** installed locally or an account on MongoDB Atlas
- **Git** for version control

## Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/food-order-app.git
cd food-order-app
```

2. Install dependencies for both frontend and backend
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables
Create a .env file in the backend directory with the following configuration:
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

4. Start MongoDB (if you're using a local instance):
```bash
mongod
```

5. Run the backend server
```bash
cd backend
npm start
```

6. Run the frontend server
```bash
cd ../frontend
npm start
```

## Usage
Visit http://localhost:3000 for the frontend.
The backend runs on http://localhost:5000.

## API Endpoints
- **GET /api/foods**: Fetch all food items
- **POST /api/orders**: Place a new order
- **GET /api/orders/**: Fetch a specific order
- **PUT /api/foods/**: Update a food item (Admin only)
- **DELETE /api/foods/**: Delete a food item (Admin only)

## Folder Structure

Copy code
├── backend
│   ├── config           # Database and other configurations
│   ├── controllers      # Business logic for food and order routes
│   ├── models           # Mongoose schemas
│   ├── routes           # API routes
│   └── server.js        # Entry point for the backend server
├── frontend
│   ├── public           # Static files
│   ├── src
│   │   ├── components   # React components
│   │   ├── pages        # Main pages (Home, Cart, Checkout, etc.)
│   │   ├── redux        # Redux actions and reducers (optional)
│   │   ├── App.js       # Main application file
│   │   └── index.js     # React entry point
└── README.md
## Dependencies
**Backend**
- Express for building the API
- Mongoose for interacting with MongoDB
- JWT for authentication (optional)
- bcrypt.js for password encryption (optional)

**Frontend**
- React for the UI
- Axios for API calls
- React Router for navigation
- Redux for state management (optional)