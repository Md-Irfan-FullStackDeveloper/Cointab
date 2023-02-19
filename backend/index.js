const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
require("dotenv").config();
const {userRoute} = require('./routes/userRoute')

const port = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  return res.send('API is running')
})

app.use('/api/user', userRoute)


app.listen(port, async () => {
  try {
    await connection;
    console.log("Db connected successfully");
  } catch (error) {
    console.log("Error in connnecting db");
    console.log(error.message);
  }
});
