# PocketLife - Server

Express backend for the PocketLife app.

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) installed

## Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `server/` directory:
   ```
   PORT=3000
   ```

## Starting the App

```bash
npm run start
```

This starts the server with nodemon, which automatically restarts on file changes. The server will be available at `http://localhost:3000`.

## Project Structure

```
server/
├── app.js        # Express app configuration and routes
├── server.js     # Entry point — loads env and starts the server
├── package.json
└── .env          # Local environment variables (not committed)
```
