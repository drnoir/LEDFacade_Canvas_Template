// Import required modules using ES6 import syntax
import express from 'express';
import {createServer} from 'http';
const app = express();
const httpServer = createServer(app);
const PORT = process.env.PORT || 3000;


httpServer.listen(PORT);
// Serve static files from the 'public' folder
app.use(express.static("public"));


