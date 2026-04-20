# MERN Student Management Application

A containerized full-stack application built using the MERN stack to collect and manage student data. This project demonstrates backend API development, frontend integration, and multi-container deployment using Docker Compose.

---

## Description

This application allows users to submit and retrieve student details. It is designed as a simple CRUD-based system with a focus on containerization and service orchestration.

Each student record includes:

* Name
* Age
* Locality
* Course
* Academic Year
* College Name (default: SS College of Engineering)

---

## Tech Stack

Frontend:

* React
* Axios

Backend:

* Node.js
* Express

Database:

* MongoDB

DevOps / Tools:

* Docker
* Docker Compose

---

## Architecture

The application follows a 3-tier architecture:

1. Frontend (React) – User interface
2. Backend (Node.js/Express) – API layer
3. Database (MongoDB) – Data storage

All services run in separate containers and communicate over a custom Docker network.

---

## Project Structure

mern-student-app/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── Dockerfile
│
└── docker-compose.yml

---

## Setup and Installation

### Using Docker (Recommended)

1. Clone the repository

git clone <your-repo-url>
cd mern-student-app

2. Build and start the application

docker compose up --build

3. Run in detached mode (optional)

docker compose up -d --build

---

## Application Access

* Frontend: http://localhost:3000
* Backend API: http://localhost:5000/students

---

## API Endpoints

POST /students/add
Creates a new student record

GET /students
Fetches all student records

---

## Docker Configuration

Services defined in docker-compose:

* frontend
* backend
* mongo

A custom bridge network is used to enable communication between services.
The backend connects to MongoDB using the service name `mongo` as the hostname.

---

## Key Highlights

* Full-stack MERN implementation
* RESTful API design
* Dockerized frontend and backend
* Multi-container orchestration using Docker Compose
* Service-to-service communication using Docker networking

---

## Limitations

* No authentication or authorization
* No data persistence (MongoDB volume not configured)
* Basic UI without validation

---

## Future Enhancements

* Add authentication (JWT-based login system)
* Implement input validation
* Configure MongoDB volumes for persistence
* Add NGINX reverse proxy
* Deploy on AWS (EC2 or ECS)
* Integrate CI/CD pipeline

---

## Author

Sivasaran

---
