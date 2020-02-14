import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import routes from './routes';

const app = express();

// Application-Level Middleware

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes

app.use('/users', routes.user);
app.use('/photos', routes.photos);

// Start

app.listen(process.env.PORT, () =>
  console.log(`Backend Running successfully ${process.env.PORT}!`),
);
