// import the Express framework.
// import the Request and Response types for type safety in TypeScript.
import express, { Request, Response } from 'express';

// create an instance of an Express application.
const app = express();

// define the port number the server will listen on.
const port = 3000;

// define a route handler for HTTP GET requests to the root URL
app.get('/', (req: Request, res: Response) => {
    // send a text response back to the client (browser).
  res.send('Hello World from TypeScript!');
});

// start the server and have it listen on the specified port.
app.listen(port, () => {
    // log a message to the console so we know the server is running.
  console.log(`Example app listening at http://localhost:${port}`);
});