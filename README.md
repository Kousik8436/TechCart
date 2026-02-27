# Simple MERN Stack Product Website

A full-stack product management application built with MongoDB, Express.js, React, and Node.js (MERN stack). This application allows users to create, read, update, and delete products with a modern, responsive UI.

## Features

- ✨ Create, Read, Update, and Delete (CRUD) products
- 🎨 Modern UI with Chakra UI
- 🌓 Dark/Light mode support
- 📱 Responsive design
- ⚡ Fast development with Vite
- 🔄 State management with Zustand
- 🗄️ MongoDB database with Mongoose ODM

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Chakra UI** - Component library
- **Zustand** - State management
- **React Router** - Routing

## Project Structure

```
├── backend/
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── controllers/
│   │   └── product.controller.js  # Product CRUD logic
│   ├── models/
│   │   └── product.model.js   # Product schema
│   ├── routes/
│   │   └── product.route.js   # API routes
│   └── server.js              # Express server setup
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   ├── pages/             # Page components
│   │   ├── store/             # Zustand store
│   │   ├── App.jsx            # Main app component
│   │   └── main.jsx           # Entry point
│   └── package.json
├── .env                       # Environment variables
├── .gitignore
└── package.json               # Root package.json
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Simple Mern stack Product Website"
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd frontend
   npm install
   cd ..
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   MONGO_URL=<your-mongodb-connection-string>
   PORT=5000
   ```

## Running the Application

### Development Mode

1. **Start the backend server**
   ```bash
   npm run dev
   ```
   Server runs on `http://localhost:5000`

2. **Start the frontend (in a new terminal)**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend runs on `http://localhost:5173`

### Production Mode

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

## Product Schema

```javascript
{
  name: String (required),
  price: Number (required),
  image: String (required),
  createdAt: Date,
  updatedAt: Date
}
```

## Scripts

- `npm run dev` - Run backend in development mode with nodemon
- `npm run build` - Build frontend for production
- `npm start` - Run backend in production mode
- `cd frontend && npm run dev` - Run frontend in development mode

## Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGO_URL` | MongoDB connection string |
| `PORT` | Server port (default: 5000) |
| `NODE_ENV` | Environment mode (development/production) |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

ISC

## Author

Your Name

---

Made with ❤️ using MERN Stack
