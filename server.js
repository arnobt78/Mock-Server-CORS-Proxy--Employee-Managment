const corsAnywhere = require("cors-anywhere");

const host = "0.0.0.0";
const port = 8080;

corsAnywhere
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: [], // Do not require any headers
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(port, host, () => {
    console.log(`CORS Anywhere server running on ${host}:${port}`);
  });

// corsProxyUrl: string = 'https://cors-proxy-avym.onrender.com/';

// corsProxyUrl: string = 'http://localhost:8080/';
