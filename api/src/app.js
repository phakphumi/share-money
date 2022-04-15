import express from 'express';
import recordsRouter from './routes/records.routes.js';

const app = express();

app.use('/records', recordsRouter)

app.listen(8080, () => {
  console.log(`Server listening at port: ${8080}`)
});