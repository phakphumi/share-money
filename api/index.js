import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json('hello world')
})

app.listen(8080, () => {
  console.log(`Server listening at port: ${8080}`)
});