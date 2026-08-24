# Flores Skincare 🌸

> *"Skincare isn't just routine—it's self-care that heals."*

## About The Project 📖

Flores Skincare is a personal project born from a journey with hormonal acne and acne scars. For me, skincare became more than just products,it became a source of comfort, healing, and empowerment. 

As someone who spent countless hours browsing e-commerce platforms searching for solutions that worked, I wanted to create a space that understands the struggle. This project is my way of combining my personal experience with my passion for development, bringing together the world of skincare and modern technology.

## The Story Behind Flores 🌺

This isn't just another e-commerce site. It's a reflection of a personal transformation—from feeling defeated by skin issues to finding empowerment through self-care. Every product listed is a testament to the journey of finding what works, learning about ingredients, and embracing the process of healing.

The name "Flores" (meaning "flowers") represents growth, bloom, and the beauty that comes from nurturing yourself—inside and out.

## What's Built So Far 🏗️

### Frontend
- **React** with Vite for fast development
- Connected to backend via proxy configuration
- Real-time status monitoring for backend connectivity

### Backend
- **Express.js** server
- CORS configured for secure frontend-backend communication
- Health check endpoint (`/api/health`) to verify connection

### Tech Stack
```
Frontend: React + Vite
Backend: Node.js + Express
Development: Nodemon for auto-restart
Proxy: Vite proxy configuration for seamless API calls
```

## Current Progress ✅

The foundation is in place:
- ✅ Frontend and backend are talking to each other
- ✅ Development environment is set up with hot reloading
- ✅ API endpoint is active and returning responses
- ✅ Server runs smoothly on port 5000

## Images to show progress

<img width="1903" height="914" alt="Screenshot 2026-08-24 235131" src="https://github.com/user-attachments/assets/346ea0d5-4c50-4a7f-ba40-7b46bd9072d3" />

<img width="1899" height="468" alt="Screenshot 2026-08-25 002444" src="https://github.com/user-attachments/assets/5a70c0ed-3a20-47a2-8703-aebeee45ccbd" />

<img width="1916" height="1016" alt="Screenshot 2026-08-25 003016" src="https://github.com/user-attachments/assets/cdbc8c7d-30c6-4008-bb99-559a554f23ed" />

## How It Works 🔧

The frontend fetches data from the backend through a Vite proxy:

```javascript
// Frontend connects to backend health check
fetch("/api/health")
  .then(response => response.json())
  .then(data => console.log("Connected!", data.message));
```

The backend responds with:

```json
{
  "success": true,
  "message": "Flores backend is connected 🌸"
}
```

## Getting Started 🚀

### Prerequisites
- Node.js
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/flores-skincare.git
```

2. Install dependencies
```bash
# Frontend
npm install

# Backend
cd backend
npm install
```

3. Run the development servers
```bash
# Backend (from backend directory)
npm run dev

# Frontend (from root directory)
npm run dev
```

The backend will run on `http://localhost:5000` and the frontend on `http://localhost:5173`.

## Future Vision 🔮

While I'm proud of what's been built, the vision for Flores Skincare is much bigger:

- **AWS Integration** - Moving to the cloud for scalability
- **Product Database** - Curated skincare products
- **User Authentication** - Secure user accounts
- **Shopping Cart** - Seamless e-commerce experience
- **Skin Care Education** - Ingredient guides and skin health resources
- **Community Features** - Reviews and shared experiences

## Why This Matters 💜

This project represents:
- **Personal Healing** - Turning struggle into strength
- **Technical Growth** - Learning full-stack development
- **Empathy in Design** - Building for others who share similar experiences
- **Diversity in Tech** - Showing that tech can be personal and meaningful

## Connect With The Project 🌐

This is a work in progress, and every step forward is meaningful. Whether you're here to learn, to contribute, or just because you relate to the story—welcome.

---

*"Flores" - because even through the struggle, we bloom.* 🌸
