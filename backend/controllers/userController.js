const axios = require("axios");
const { User } = require("../model/User.model");

const getAllUsers = async (req, res) => {
  let users;

  try {
    users = await User.find();
  } catch (error) {
    return res.status(400).json(error.message);
  }

  if (users.length <= 0) {
    return res.status(404).json({ message: "Users not found" });
  }

  return res.status(200).json(users);
};

const addUsers = async (req, res) => {
  const fetchedData = await axios.get("https://randomuser.me/api/?results=55");

  const data = fetchedData.data.results;
  let result;

  try {
    result = await User.insertMany(data);
  } catch (error) {
    return res.status(400).json(error.message);
  }

  if (!result) {
    return res.status(404).json({ message: "Failed to add users" });
  }

  return res.status(200).json(result);
};

const deleteUsers = async (req, res) => {
  let deleted;

  try {
    deleted = await User.deleteMany();
  } catch (error) {
    return res.status(500).json(error.message);
  }

  if (!deleted) {
    return res.status(400).json({ message: "Failed to delete" });
  }

  return res.status(200).json({ message: "Successfully deleted the users" });
};

module.exports = {
  getAllUsers,
  addUsers,
  deleteUsers,
};
