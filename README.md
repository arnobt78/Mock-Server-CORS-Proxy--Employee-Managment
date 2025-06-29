# CORS Proxy Server - Employee Management API

A **backend/server-side CORS proxy service** built for the [Employee Management App (Angular 18 frontend)](https://github.com/arnobt78/Employee-Management-App-Angular18). This project demonstrates how to set up and use a CORS proxy server using Node.js and the `cors-anywhere` package to bypass browser same-origin policies, enabling seamless integration between frontend and backend APIs.

---

## Table of Contents

- [Project Summary](#project-summary)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [How to Run](#how-to-run)
- [Usage Examples](#usage-examples)
- [API & Proxy Routes](#api--proxy-routes)
- [Configuration & Customization](#configuration--customization)
- [Deployment Guide](#deployment-guide)
- [Learning Outcomes](#learning-outcomes)
- [Keywords](#keywords)
- [Full Example Code](#full-example-code)
- [Conclusion](#conclusion)

---

## Project Summary

This CORS Proxy Server acts as a **bridge between your frontend app and external APIs or backend services** that do not support Cross-Origin Resource Sharing (CORS). It is especially useful in development environments where CORS policies can block legitimate requests from your frontend.

This backend is designed to be paired with the Angular 18 Employee Management App. It allows your frontend to make API calls to any third-party or backend service as if they were same-origin, enhancing development flexibility and enabling full-stack learning.

---

## Features

- **CORS Proxying:** Bypasses browser CORS restrictions for API requests.
- **Easy Setup:** Minimal configuration using Node.js and npm.
- **Customizable:** Modify allowed origins, headers, and other proxy behaviors.
- **Learning-Oriented:** Clear, simple codebase for educational purposes.
- **Deployment-Ready:** Can be deployed to cloud platforms like Render.

---

## Project Structure

```
Mock-Server-CORS-Proxy--Employee-Managment/
├── .gitignore               # Git ignored files
├── README.md                # Project documentation
├── package.json             # Project metadata, scripts, dependencies
├── package-lock.json        # Locked dependency versions
└── server.js                # Main server/proxy logic
```

---

## Technologies Used

- **Node.js** (>= v22.12.0)
- **npm** (Node Package Manager)
- **[cors-anywhere](https://www.npmjs.com/package/cors-anywhere)** package

---

## Installation & Setup

### Prerequisites

- Install **Node.js** (version 22.12.0 or later) from [nodejs.org](https://nodejs.org/)
- Install **npm** (comes with Node.js)

### Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/arnobt78/Mock-Server-CORS-Proxy--Employee-Managment.git
   cd Mock-Server-CORS-Proxy--Employee-Managment
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

---

## How to Run

To start the proxy server, run:

```sh
npm start
```

You should see:
```
CORS Anywhere server running on 0.0.0.0:8080
```

This means your proxy is listening on all network interfaces, port 8080.

---

## Usage Examples

To proxy a request to `http://example.com`, use the following URL in your frontend or browser:

```
http://localhost:8080/http://example.com
```

**Example in JavaScript (fetch):**
```js
fetch('http://localhost:8080/http://example.com')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## API & Proxy Routes

- `GET /:url` - Proxies the request to the specified URL.
- `POST /:url` (and other HTTP verbs) - Also proxied.

**How it works:**  
You append the target URL you want to reach after your proxy’s root path.  
Example: To reach `https://api.github.com`, call `http://localhost:8080/https://api.github.com`.

---

## Configuration & Customization

By default, the server:

- Allows all origins (`originWhitelist: []`)
- Requires the `origin` and `x-requested-with` headers
- Removes `cookie` and `cookie2` headers for security

These settings are defined in `server.js`:

```js
const corsAnywhere = require('cors-anywhere');
const host = '0.0.0.0';
const port = 8080;

corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
  console.log(`CORS Anywhere server running on ${host}:${port}`);
});
```

**To customize:**
- Edit `originWhitelist` for allowed origins.
- Change required/removed headers as needed.

---

## Deployment Guide

**To deploy on Render:**

1. Create a new web service on [Render](https://render.com/).
2. Connect your GitHub repository.
3. Set the build command to:
   ```
   npm install
   ```
4. Set the start command to:
   ```
   npm start
   ```
5. Render will install dependencies and start the server automatically.

---

## Learning Outcomes

By studying and running this project, you will:

- Understand what CORS is and why it matters in web development.
- Learn how to set up a proxy server to bypass CORS for educational or development purposes.
- Gain experience with Node.js server basics and using npm packages.
- See how to structure a minimal backend service for frontend API consumption.
- Learn about safe header manipulation and origin controls.

---

## Keywords

```
CORS, Proxy, Node.js, Backend, API, Proxy Server, Employee Management, Angular, JavaScript, cors-anywhere, Render, npm, HTTP, Cross-Origin, Full Stack, Development, Learning, Server, Security, Origin, Headers, Deployment, Cloud
```

---

## Full Example Code

### server.js

```js
const corsAnywhere = require('cors-anywhere');
const host = '0.0.0.0';
const port = 8080;

corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
  console.log(`CORS Anywhere server running on ${host}:${port}`);
});
```

### package.json (snippet)

```json
{
  "name": "mock-server-cors-proxy-employee-managment",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "cors-anywhere": "^0.4.4"
  }
}
```

---

## Conclusion

This project provides a practical, learning-focused example of setting up a CORS proxy for web development. It is perfect for students, educators, and full-stack developers who want to understand CORS, backend proxying, and Node.js server basics. Use it as a standalone backend for your Employee Management App or as a template for other CORS-related needs.

For more details and frontend integration, see the [Employee Management App (Angular 18)](https://github.com/arnobt78/Employee-Management-App-Angular18).

---
