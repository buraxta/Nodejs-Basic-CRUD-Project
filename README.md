# Nodejs-Basic-CRUD-Project

This project is a basic Node.js API built with Express.js and Mongoose to perform CRUD operations on a MongoDB database. This application is aimed at beginners who want to learn how to build an API and use MongoDB.
## Installation

To run this application:

1. Clone the repository: `git clone https://github.com/buraxta/Nodejs-Basic-CRUD-Project.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

## Endpoints

### GET /

Returns a greeting message.

### GET /blog

Returns a blog greeting message.

### GET /products

Returns an array of all products in the database.

### GET /products/:id

Returns a single product by id.

### POST /products

Creates a new product in the database.

### PUT /products/:id

Updates an existing product by id.

### DELETE /products/:id

Deletes an existing product by id.

## Dependencies

- express
- mongoose

## Configuration

The connection string to the database is set in the `connect` method of Mongoose in the code. You can modify it according to your needs.

## License

This project is released under the [MIT License](https://opensource.org/licenses/MIT).
