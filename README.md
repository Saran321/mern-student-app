# Three Tier Application using Docker Compose

## Overview

This project is a basic three-tier application built using:

* Frontend: React
* Backend: Node.js (Express)
* Database: MongoDB

The application is containerized using Docker and managed with Docker Compose. It demonstrates container networking, volumes for data persistence, and multi-service architecture.

---

## Project Structure

```
three-tier-app/
│
├── frontend/
│   ├── Dockerfile
│   └── React application
│
├── backend/
│   ├── Dockerfile
│   ├── server.js
│   └── package.json
│
├── docker-compose.yml
```

---

## Architecture

User → Frontend → Backend → MongoDB

* Frontend communicates with backend via HTTP
* Backend connects to MongoDB using service name as host
* Docker Compose creates a default network for communication

---

## Technologies Used

* Node.js
* Express
* React
* MongoDB
* Docker
* Docker Compose

---

## Setup and Run

### 1. Clone the repository

```
git clone <your-repo-url>
cd three-tier-app
```

### 2. Run the application

```
docker compose up -d --build
```

---

## Access the Application

* Frontend: http://localhost:3000
* Backend: http://localhost:5000

---

## API Endpoints

### Add Data

```
POST /add
Content-Type: application/json

{
  "name": "example"
}
```

### Get Data

```
GET /items
```

---

## Docker Details

### Services

* frontend
* backend
* mongo

### Volume

* mongo-data: used to persist MongoDB data

### Network

* Default network created by Docker Compose
* Services communicate using service names (e.g., mongo)

---

## Useful Commands

### View running containers

```
docker ps
```

### View logs

```
docker compose logs -f
```

### Stop containers

```
docker compose down
```

---

## Notes

* MongoDB data is persisted using Docker volumes
* No manual network configuration is required
* Ensure ports 3000 and 5000 are free before running

---
