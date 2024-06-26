
# Project Description
**Plumbit** is a comprehensive reservation system tailored for a local plumbing company, designed to streamline the process of booking plumbing repairs. The system enables users to book the repairs they need, providing plumbers with a dashboard data that displays their appointments and the parts required for upcoming repairs. In case of out-of-stock parts, a separate list is generated to inform plumbers about what they need to procure from the parts store.

# Features
## Microservice Architecture:
**Plumbit** utilizes a microservice architecture to ensure scalability, flexibility, and efficient management of plumbing repair bookings. The microservices communicate with each other and the API-gateway via **gRPC**, while the API-gateway communicates with clients via **REST** for handling incoming requests.
1. ### 🧑‍🤝‍🧑User-service (Node (TypeScript) and MongoDB):
   - Handles user authentication and management.
   - Manages user data and profiles.
   - Ensures secure login and registration processes.

2. ### 🔔Notification-service (Python and MongoDB):
   - Manages the delivery of notifications to users and plumbers.

3. ### 🗒️Inventory-service (Node (TypeScript) and PostgreSQL):
   - Manages parts inventory for plumbing repairs.
   - Tracks and updates stock levels.
   - Generates out-of-stock lists.

4. ### 📖Reservation-service (Python and PostgreSQL):
   - Manages the booking of plumbing repairs.
   - Handles scheduling and rescheduling of appointments.
   - Provides a dashboard data for plumbers to view their daily appointments.

5. ### 🛡️API-gateway (Node (TypeScript)):
   - Routes requests to the appropriate microservices.
   - Handles validation and authentication of incoming requests.
   - Provides a single entry point for the client applications to interact with the system.

# Running the Application
The Plumbit application is containerized using Docker, making it easy to deploy and manage. Follow the steps below to run the application in different environments.

## Environment Variables
Each service requires specific environment variables to function correctly. These variables should be defined in an environment file (docker.env for development or prod.env for production). An .env.example file is provided for each service to guide you on what variables need to be loaded. Create a .env file for each service and set the environment as shown below.
```makefile
ENVIRONMENT=development # or production
```

## Development Environment
If you want to use Docker images for the databases, follow these steps:

1. Load Environment Variables: Ensure you have a docker.env file in each service directory with the necessary environment variables.

2. Run Docker Compose: Use the docker-compose.dev.yml file to start the services along with the database containers.

```shell
docker-compose -f docker-compose.dev.yml up --build
```

## Production Environment
If your databases are hosted on the cloud or elsewhere, follow these steps:

1. Load Environment Variables: Ensure you have a prod.env file in each service directory with the necessary environment variables.

2. Run Docker Compose: Use the docker-compose.yml file to start the services without the database containers.

```shell
docker-compose -f docker-compose.yml up --build
```
## Running Locally (Optional)
Running the application locally can tedious. Here’s how:
1. Load Environment Variables: In the .env file in each service directory. Set the values of <app-name>-service-network to localhost. For example:
```makefile
USER_SERVICE_NETWORK=localhost
RESERVATION_SERVICE_NETWORK=localhost
INVENTORY_SERVICE_NETWORK=localhost
NOTIFICATION_SERVICE_NETWORK=localhost
```
2. Start Services Locally: Start each service manually by navigating to its directory and running the appropriate command.
   - For the Node applications
  ```shell
  npm install
  npm run dev
  ```
  - For the python applications
    1. Create a virtual environment
      ```shell
      python -m venv virtualenv
      ```
    2. Activate the virtual environment (on windows)
      ```shell
      virtualenv\Scripts\activate
      ```
    - Activate the virtual environment (on Mac/Linux)
      ```shell
      source virtualenv/Scripts/activate
      ```
    3. Install packages
      ```shell
      pip install -r requirements.txt
      ```
    4. Run the server (windows)
      ```shell
      python src\server.py
      ```
    - Run the server (Linux/Mac)
      ```shell
      python src/server.py
      ```

# Read the specs.md to understand how to use the application