# Movie Booking Backend (Node + Express + MongoDB)

## Folder structure
Place this `backend` folder NEXT TO your existing React project, like:

```
movie-ticket-booking/
  client/   <- your existing React app
  backend/  <- this folder
```

## Setup steps (VS Code)

1. Open the `movie-ticket-booking` parent folder in VS Code (so you see both `client` and `backend`).
2. Open a terminal in VS Code, `cd backend`
3. Run `npm install` to install all dependencies (express, mongoose, bcryptjs, jsonwebtoken, cors, dotenv, nodemon)
4. Rename `.env.example` to `.env` and fill in:
   - `MONGO_URI` — get a free connection string from MongoDB Atlas (atlas.mongodb.com)
   - `JWT_SECRET` — any random long string
5. Run `npm run dev` to start the server with nodemon (auto-restarts on changes)
6. Server runs at `http://localhost:5000`

## What's included
- `models/` — User, Movie, Show, Booking (Mongoose schemas)
- `controllers/` — auth logic (signup/login) and booking logic (create/cancel/history)
- `middleware/authMiddleware.js` — verifies JWT, protects routes
- `routes/` — authRoutes, bookingRoutes, showRoutes
- `server.js` — entry point

## API endpoints

| Method | Route | Auth required | Description |
|---|---|---|---|
| POST | /api/auth/register | No | Sign up |
| POST | /api/auth/login | No | Log in, returns JWT |
| GET | /api/shows | No | List shows (optional ?movieId=) |
| GET | /api/shows/:id | No | Seat map for one show |
| POST | /api/bookings | Yes | Book seats `{ showId, seatNumbers }` |
| GET | /api/bookings/me | Yes | Your booking history |
| DELETE | /api/bookings/:id | Yes | Cancel a booking |

For protected routes, send the JWT from login/register in the header:
`Authorization: Bearer <token>`

## Connecting from your React app
In your React app, install axios: `npm install axios`
Set the base URL to `http://localhost:5000/api` and store the JWT (e.g. in localStorage) after login, then attach it as the Authorization header on booking requests.

## Adding test data
There's no admin UI yet for adding movies/shows. Easiest way to test:
use a tool like Postman/Thunder Client, or temporarily add a POST route, or insert documents directly via MongoDB Atlas's web UI for `movies` and `shows` collections. Seats can be seeded as an array like:
`[{ seatNumber: "A1", status: "available" }, { seatNumber: "A2", status: "available" }, ...]`
