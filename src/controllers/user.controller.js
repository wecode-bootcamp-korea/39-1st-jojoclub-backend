const userService = require("../services/user.service");

const signUp = async (req, res) => {
  try {
    const { name, email, password, phoneNumber, address } = req.body;

    if (!name || !email || !password || !phoneNumber || !address) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    await userService.signUp(name, email, password, phoneNumber, address);
    return res.status(201).json({
      message: "SIGNUP_SUCCESS",
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const accessToken = await userService.signIn(email, password);

    res.status(200).json({ accessToken: accessToken });
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

module.exports = { signUp, signIn };
