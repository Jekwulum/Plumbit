# Plumbit Application Specifications
This section details how to access the API endpoints for the Plumbit application, including the required payloads and request data for each service.

# Endpoints
## 🔐User Authentication and Management Endpoints <hr>
1. ### Register User
  - **Endpoint:** `/auth/signup`
  - **Method:** `POST`
  - **Request Body:**
```json
{
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "password": "password123",
    "confirmPassword": "password123",
    "phone": "1234567890",
    "role": "customer"
}
// roles can be "plumber"
```

2. ### Login User
 - **Endpoint:** `/auth/login`
 - **Method:** `POST`
 - **Request Body:**
```json
{
    "email": "user@example.com",
    "password": "password123"
}
```

3. ### Update Password
   - **Endpoint:** `/auth/update-password`
   - **Method:** `PATCH`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Body:**
```json
{
    "password": "newpassword123",
    "confirmPassword": "newpassword123"
}
```

## 🧑‍🤝‍🧑User Management Endpoints <hr>
1. ### Get Users
   - **Endpoint:** `/users`
   - **Method:** `GET`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```

2. ### Get User's own Profile
   - **Endpoint:** `/users/profile`
   - **Method:** `GET`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```

3. ### Get User by ID
   - **Endpoint:** `/users/:id`
   - **Method:** `GET`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Parameters:**
```json
{
    "id": "user_id"
}
```

4. ### Update User
   - **Endpoint:** `/users`
   - **Method:** `PATCH`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Body:**
```json
{
    "firstName": "John",
    "lastName": "Doe",
    "phone": "1234567890"
}
```

5. ### Delete User
   - **Endpoint:** `/users`
   - **Method:** `DELETE`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```

## 🗒️Inventory Management Endpoints <hr>
1. ### Add Part
   - **Endpoint:** `/inventory/add-part`
   - **Method:** `POST`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Body:**
```json
{
    "partName": "Pipe",
    "quantity": 50
}
```

2. ### Update Part
   - **Endpoint:** `/inventory/update-part`
   - **Method:** `PATCH`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Body:**
```json
{
    "partId": "12345",
    "partName": "Pipe",
    "quantity": 60
}
```

3. ### Check Parts Availability
   Returns availability information for the requested parts.
   - **Endpoint:** `/inventory/check-availability`
   - **Method:** `POST`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Body:**
```json
{
    "partIds": ["12345", "67890"]
}
```

4. ### Add Repair Type
   - **Endpoint:** `/inventory/add-repair-type`
   - **Method:** `POST`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Body:**
```json
{
    "repairType": "Pipe Replacement",
    "requiredParts": ["12345", "67890"]
}
```

5. ### Get Required Parts for a Repair Type
   - **Endpoint:** `/inventory/required-parts`
   - **Method:** `GET`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Query Parameters:**
```json
{
    "repairType": "Pipe Replacement"
}
```

6. ### Get Repair Types
   Returns a list of all repair types.
   - **Endpoint:** `/inventory/repair-types`
   - **Method:** `GET`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```

7. ### Update Repair Type
   - **Endpoint:** `/inventory/repair-types`
   - **Method:** `PATCH`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Body:**
```json
{
    "repairType": "Pipe Replacement",
    "requiredParts": ["12345", "67890", "11223"]
}
```

8. ### Manage Stock Levels
   - **Endpoint:** `/inventory/manage-stock-levels`
   - **Method:** `PATCH`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Body:**
```json
{
    "partsToUpdate": {
        "12345": 50,
        "67890": 20
    }
}
```

## 🔔Notifications Endpoints <hr>
1. ### Create Notification
   - **Endpoint:** `/notification/`
   - **Method:** `POST`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Body:**
```json
{
  "senderId": 12345,
  "receiverId": 67890,
  "scenario": "reservation_created"
}
// other valid scenarios: "reservation_updated", "parts_out_of_stock"
```

2. ### Get Notifications
   - **Endpoint:** `/notification/`
   - **Method:** `GET`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Query Parameters:**
```json
{
    "status": "read"
}
// status can be "unread"
```

3. ### Get Notification By ID
   - **Endpoint:** `/notification/`
   - **Method:** `GET`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Parameters:**
```json
{
    "id": 12345, // id of the notification
}
```

1. ### Get Notification For a Receiver
   - **Endpoint:** `/notification/receiver/`
   - **Method:** `GET`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Query Parameters:**
```json
{
    "id": 12345, // id of the receiver
}
```

1. ### Update Notification
   - **Endpoint:** `/notification/`
   - **Method:** `PATCH`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Parameters:**
```json
{
    "id": 12345,
}
```
   - **Request Body:**
```json
{
  "status": "read"
}
```

1. ### Delete Notification
   - **Endpoint:** `/notification/`
   - **Method:** `DELETE`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Parameters:**
```json
{
    "id": 12345, // id of the notification
}
```

## 📖Reservation Endpoints <hr>
1. ### Get Plumber Appointments
   - **Endpoint:** `/reservations/plumber-appointments`
   - **Method:** `GET`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Query Parameters:**
```json
{
    "id": 12345, // id of the plumber
    "date": "20-05-2001" // optional, and defaults to today
}
```

2. ### Get All Reservations
   - **Endpoint:** `/reservations`
   - **Method:** `GET`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Query Parameters:**
```json
{
    "plumberId": 12345, // id of the plumber - optional
    "customerId": 12345, // id of the customer - optional
}
```

3. ### Get Reservation by ID
   - **Endpoint:** `/reservations/`
   - **Method:** `GET`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Parameters:**
```json
{
    "id": 12345, // id of the reservation to retrieve
}
```

4. ### Create Reservation
   - **Endpoint:** `/reservations/`
   - **Method:** `POST`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Body:**
```json
{
  "customerId": "string",
  "plumberId": "string",
  "date": "YYYY-MM-DD",
  "repairType": "string",
  "description": "string", // Required if repairType is Other
  "status": "string" // Default: Scheduled (One of: Scheduled, In Progress, Completed, Cancelled, Pending)
  // valid repairTypes: Burst Pipe, Leak Fix, Pipe Replacement, Faucet Installation, Drain Clearance, Water Heater Replacement, Toilet Installation, Other
}
```

5. ### Update Reservation
   - **Endpoint:** `/reservations/`
   - **Method:** `PATCH`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Parameters:**
```json
{
    "id": 12345, // id of the reservation to update
}
```
   - **Request Body:**
```json
{
  "customerId": "string",
  "plumberId": "string",
  "date": "YYYY-MM-DD",
  "repairType": "string",
  "description": "string", // Required if repairType is Other
  "status": "string" // Default: Scheduled (One of: Scheduled, In Progress, Completed, Cancelled, Pending)
  // valid repairTypes: Burst Pipe, Leak Fix, Pipe Replacement, Faucet Installation, Drain Clearance, Water Heater Replacement, Toilet Installation, Other
}
```

6. 5. ### Delete Reservation
   - **Endpoint:** `/reservations/`
   - **Method:** `DELETE`
   - **Request Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```
   - **Request Parameters:**
```json
{
    "id": 12345, // id of the reservation to delete
}
```