const db = require("../db/models");
const { User } = db;

const signup = async (req, res) => {
  try {
    const body = req.body;
    if (!["1", "2"].includes(body.userType)) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid user type",
      });
    }

    // Notice the typo fix here: from uesrType to userType
    const newUser = await User.create({
      userType: body.userType,
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
      password: body.password,
    });

    if (!newUser) {
      return res.status(400).json({
        status: "fail",
        message: "Failed to create the user",
      });
    }
    const response = newUser.toJSON();
    delete response.password;

    console.log(response);
    res.status(201).json({
      status: "success",
      data: response,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "fail",
      message: err.message || "An error occurred during signup",
    });
  }
};

const login = async (req, res) => {};

module.exports = { signup, login };
