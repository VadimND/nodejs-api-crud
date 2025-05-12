# 🚀 Node.js CRUD API

## 📝 Description

This is a simple CRUD API. It allows creating, reading, updating, and deleting user data via HTTP requests.

## 🛠 Installation

1. Clone the repository:
   `git clone https://github.com/VadimND/nodejs-api-crud.git`

2. Navigate to the project directory:
   `cd nodejs-api-crud`

3. Switch to the development branch:
   `git checkout develop`

4. Install dependencies:
   `npm install`

## ⚙️ Configuration

By default, the application runs on port 3000.
To change the port, create a .env file in the root directory with the following content:
PORT=your_desired_port

Default endpoint: http://localhost:3000/api/users

## 🏁 Running the Application

`npm run start:dev` - start server in development mode

`npm run start:prod` - start server in production mode

`npm run start:multi` - start server with balancer and multiple workers

## 🧪 Running Tests

`npm run test` - run unit tests

## 📌 Technical Requirements

- Written in TypeScript
- Compatible with Node.js v22 LTS
- Fully asynchronous API
