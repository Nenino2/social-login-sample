import express from 'express';
import customRouter from './routes/custom-router'
import { notFoundHandler } from './controllers/not-found-handler'
import { errorHandler } from './controllers/error-handler'
import cors from 'cors'

export default async () => {
    // Initializate express app
    const app = express();

    app.use(cors())

    // Api routers
    app.use(`${process.env.API_PATH}`, customRouter);

    // Not found
    app.use(`*`, notFoundHandler);

    // Error Handler
    app.use(errorHandler);

    return app;
}