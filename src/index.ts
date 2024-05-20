// src/index.ts or src/app.ts
import express, { Application, Request, Response, NextFunction } from 'express';
import rootRouter from './routes/index';
import { errorMiddleware } from './middlewares/errorMiddleware';
import cors from 'cors';
require('dotenv').config()





class App {
    public app: Application;
    constructor() {
        this.app = express();
        this.setMiddlewares();
        this.setRoutes();
        this.setErrorMiddlewares();
       
       
    }

    

    
    private setMiddlewares(): void {
        // It's good to have a middleware that parses incoming requests with JSON payloads.
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true })); // `true` allows for rich objects and arrays to be encoded into the URL-encoded format.
        // CORS and other security-related middleware would also go here.
    }
    private setRoutes(): void {
        // Prefixing the routes with '/api' is a common convention for indicating that this is an API endpoint.
        this.app.use('/api', rootRouter)
        // Here you would add the other routes in a similar manner.
        // Example: this.app.use('/api/users', userRoutes);
    }

    private setErrorMiddlewares(): void {
        // Error handling middleware should be the last middleware added.
        this.app.use(errorMiddleware);
    }
   
    public listen(): void {
        const PORT = process.env.PORT || 3000; // Good use of environment variable for the PORT with a fallback.
        this.app.listen(PORT, async () => {
            console.log(`Server is running on http://localhost:${PORT}`); // Informative startup log is useful.
        });
    }
}
// This part initiates your app listening, so it makes sense to be outside of the App class.
const app = new App();
app.listen();