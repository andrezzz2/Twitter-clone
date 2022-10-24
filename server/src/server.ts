import path from 'path';
import express, { Request, Response, NextFunction } from 'express';
import {usersRouter} from './routes/usersRoutes';
import 'dotenv/config';


// **** Init express **** //

const app = express();


// **** Set basic express settings **** //

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// **** Add API routes **** //

// Add APIs
//app.use('/api', BaseRouter);
// Setup error handler
app.use('/users', usersRouter);

// Setup error handler
app.use((
  err: Error,
  _: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  return res.status(404).json({ error: err.message });
});


// **** Serve front-end content **** //


// Set static directory (js and css).
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));


// **** Export default **** //

export default app;
