# Ecommerce Server

A robust backend server for an ecommerce platform built with Node.js.

## Features

- User authentication and authorization
- Product catalog management
- Shopping cart functionality
- Order processing
- Payment integration
- Admin dashboard support

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Database (MongoDB/PostgreSQL)

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory with the following variables:

```
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
API_KEY=your_api_key
```

## Running the Server

```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

### Users
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - User login
- `GET /api/users/:id` - Get user details

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create a product (Admin)

### Orders
- `POST /api/orders` - Create an order
- `GET /api/orders/:id` - Get order details
- `GET /api/orders` - Get user orders

## Project Structure

```
server/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── utils/
└── server.js
```

## Testing

```bash
npm test
```

## Contributing

Please read CONTRIBUTING.md for details on the code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
