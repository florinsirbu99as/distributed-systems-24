# Distributed Application Lab: Nuxt.js Frontend & Ruby on Rails Backend

This project demonstrates a distributed application setup with a **Nuxt.js frontend** and a **Ruby on Rails backend**, adhering to 12-factor principles and containerized using Docker.

## **Prerequisites**
- Docker and Docker Compose installed.
- Kubernetes CLI (kubectl) and a local Kubernetes cluster (e.g., Minikube or Docker Desktop).


## **Setup and Run**

### 1. Clone the Repositories
- Clone or download this repository.

### 2. Build and Start the Containers
Run the following command in the root directory:
```bash
docker-compose up --build
````

The frontend will be accessible at: http://localhost:3001.
The backend API will be accessible at: http://localhost:3000.


## Environment Variables
Frontend
API_URL: Backend API base URL.
Backend
RAILS_ENV: Rails environment (default: development).
PORT: Backend application port (default: 3000).


## Kubernetes Deployment

To deploy the application in a Kubernetes cluster:

Navigate to the kubernetes/ directory:
```bash
cd kubernetes/
`````
Apply the manifests:
```bash
kubectl apply -f frontend-deployment.yaml
kubectl apply -f backend-deployment.yaml
````

## 12-Factor Compliance
This application adheres to 12-factor principles:

1. Codebase: Single codebase for frontend and backend, version-controlled in Git.
2. Dependencies: All dependencies are explicitly declared in package.json (frontend) and Gemfile (backend).
3. Config: Environment variables are used for configuration (.env for frontend, Rails ENV for backend).
4. Backing Services: Backend and frontend communicate over networked URLs.
5. Build, Release, Run: Containerized for consistent build and run environments.
6. Processes: Stateless containers with no persistent local storage.
7. Port Binding: Each app binds to its own port.
8. Concurrency: Kubernetes enables scalability.
9. Disposability: Containers start and stop gracefully.
10. Dev/Prod Parity: Containers replicate production-like environments.
11. Logs: Logs are written to standard output and can be aggregated.
12. Admin Processes: Admin tasks (e.g., database setup) are executed using container exec commands.

## API Documentation
The backend API documentation is available via Swagger at: http://localhost:3000/api-docs.

## Testing
Use the following tools to test the application:

Frontend: Access the frontend UI and verify data rendering.
Backend: Use Postman or Curl to test API endpoints.
