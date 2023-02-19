const { Router } = require("express");
const {
  getAllUsers,
  addUsers,
  deleteUsers,
} = require("../controllers/userController");

const userRoute = Router();

//get all users data
userRoute.get("/", getAllUsers);

//add users in bulk
userRoute.post("/add", addUsers);

//delete all users
userRoute.delete("/", deleteUsers);

module.exports = { userRoute };
