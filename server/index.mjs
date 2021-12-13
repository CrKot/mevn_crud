import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './src/routes/index.mjs';

dotenv.config();

const app = express();

const PORT = process.env.PORT_BACK;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: process.env.FRONT_URL,
  credentials: true,
}));

app.use('/', routes);

mongoose.connect(process.env.DB_CONNECTION, {
  auth: {
    authdb: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  authSource: 'admin',
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected mongodb');
  })
  .catch(e => console.error(e));

app.listen(PORT, () => {
  console.log('Server started');
});
