const jwt = require("jsonwebtoken");

const verifyJwt = async (req, res) => {
  jwt.verify(
    req.token,
    process.env.LOGIN_SECTRET_KEY,
    (error, authorizedData) => {
      if (error) {
        res.status(403).json({ message: "unauthorized" });
      } else {
        res.status(200).json({
          message: "Successful log in",
          authorizedData,
        });
      }
    }
  );
};
module.exports = verifyJwt