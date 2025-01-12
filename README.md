## CORS-Proxy-Server-Employee-API (Backend/ Server-Side for Employee-Managment-App-Angular18 Project)

This project is a simple CORS proxy server using the `cors-anywhere` package. It allows you to bypass the same-origin policy in web browsers by proxying your requests through this server.

**Frontend UI Source Code:** https://github.com/arnobt78/Employee-Management-App-Angular18

## Project Structure

- `.gitignore`: Specifies files and directories to be ignored by Git.
- `package.json`: Contains metadata about the project and its dependencies.
- `package-lock.json`: Contains the exact versions of dependencies installed.
- `server.js`: The main server file that sets up and runs the CORS proxy.

## Prerequisites

- Node.js (version 22.12.0 or later)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/arnobt78/cors-proxy.git
    cd cors-proxy
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## Running the Server

To start the CORS proxy server, run the following command:

```sh
npm start
 ```

This will start the server on 0.0.0.0 at port 8080. You should see the following message in the console:
`CORS Anywhere server running on 0.0.0.0:8080`

##Usage

To use the CORS proxy, make a request to the server with the target URL as a query parameter. For example:
`http://localhost:8080/http://example.com`
This will proxy the request to http://example.com and return the response.

##Configuration

The server is configured to allow all origins and requires the origin and x-requested-with headers. It also removes the cookie and cookie2 headers from the request.

You can modify these settings in the `server.js` file:
```
corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
  console.log(`CORS Anywhere server running on ${host}:${port}`);
});
```

## Deployment

To deploy this project on Render, follow these steps:

1. Create a new web service on Render.
2. Connect your GitHub repository.
3. Set the build command to `npm install`.
4. Set the start command to `npm start`.

Render will automatically install the dependencies and start the server.
