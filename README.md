

# MERN Stack E-commerce Application

## Overview

This project is a basic e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes features such as product CRUD operations, user authentication, and authorization using Passport.js and JWT. The application will be expanded in the future to include more e-commerce functionalities.

## Table of Contents

- [Features](#features)

- [Technologies Used](#technologies-used)

- [Prerequisites](#prerequisites)

- [Installation](#installation)

- [Configuration](#configuration)

- [Running the Application](#running-the-application)

- [API Documentation](#api-documentation)

- [Future Improvements](#future-improvements)

- [Contributing](#contributing)

- [License](#license)

## Features

- User Authentication and Authorization

  - Register

  - Login

  - JWT-based authentication

- Product Management

  - Create, Read, Update, Delete (CRUD) operations for products

- Secure password storage using bcryptjs

- Cross-Origin Resource Sharing (CORS) enabled

- Environment configuration using dotenv

## Technologies Used

### Backend

- Node.js

- Express.js

- MongoDB

- Mongoose

- Passport.js

- JWT (jsonwebtoken)

- bcryptjs

- CORS

- Nodemon

### Frontend

- React.js 

## Prerequisites

- Node.js 

- MongoDB 

- npm 

## Installation

1\. **Clone the repository:**

   ```

   git clone https://github.com/nasiriubat/mern-ecom.git

   cd mern-ecom


2\. **Install backend dependencies:**

   ``` bash

   cd backend

   npm install

3\. **Set up environment variables:**

   Create a `.env` file in the `backend` directory and add the following variables:

   ```env

   PORT=5000

   MONGODB_URI=your_mongodb_connection_string

   JWT_SECRET=your_jwt_secret


## Running the Application

1\. **Start the backend server:**

   ``` bash

   npm run dev


   This will start the server using nodemon for automatic restarts on file changes.

2\. **Frontend setup:**

   Follow similar steps to set up and run the frontend (React) part of the application if it's in a separate directory.

## API Documentation

### User Authentication

- **Register**

  - `POST /api/auth/register`

  - Request body: `{ "username": "string", "password": "string" }`

  - Response: `{ "message": "User registered successfully" }`

- **Login**

  - `POST /api/auth/login`

  - Request body: `{ "username": "string", "password": "string" }`

  - Response: `{ "token": "JWT token" }`

### Product Management

- **Create Product**

  - `POST /api/products`

  - Request body: `{ "name": "string", "description": "string", "price": number }`

  - Response: `{ "message": "Product created successfully" }`

- **Get All Products**

  - `GET /api/products`

  - Response: `[{ "id": "string", "name": "string", "description": "string", "price": number }]`

- **Get Product by ID**

  - `GET /api/products/:id`

  - Response: `{ "id": "string", "name": "string", "description": "string", "price": number }`

- **Update Product**

  - `PUT /api/products/:id`

  - Request body: `{ "name": "string", "description": "string", "price": number }`

  - Response: `{ "message": "Product updated successfully" }`

- **Delete Product**

  - `DELETE /api/products/:id`

  - Response: `{ "message": "Product deleted successfully" }`

## Future Improvements

- Implement order management (create, read, update, delete orders)

- Add payment integration

- Enhance product search and filtering

- Implement user roles and permissions

- Add unit and integration tests

## Contributing

Contributions are welcome! Please follow these steps:

1\. Fork the repository.

2\. Create a new branch (`git checkout -b feature/YourFeature`).

3\. Commit your changes (`git commit -m 'Add some feature'`).

4\. Push to the branch (`git push origin feature/YourFeature`).

5\. Open a pull request.

## License

This project is licensed under the MIT License.



