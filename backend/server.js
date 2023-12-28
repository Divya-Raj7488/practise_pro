require("dotenv").config();
const express = require("express");
const DbConnect = require("./config/dbConnect");
const cors = require("cors");
const corsOptions = require("./config/cors");
const cookieParser = require('cookie-parser')

const app = express();

DbConnect();
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser())
app.use("/user", require("./routes/user"));
app.listen(process.env.PORT, () => {
  console.log(`app is listening on port 3000`);
});
app.get("/", (req, res) => {
  res.send("<h1>hey there</h1>");
});
