import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware for logging
app.use(morgan('dev'));

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
