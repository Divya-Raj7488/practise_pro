require("dotenv").config();
const express = require("express");
const DbConnect = require("./config/dbConnect");
const cors = require("cors");
const corsOptions = require("./config/cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
// const checkToken = require("./middleware/checkToken");
const app = express();
const path = require('path')

DbConnect();
app.use('/uploads',express.static(path.join(__dirname, "uploads")));
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    limits: { fileSize: 50 * 1024 * 1024 },
    tempFileDir: "/tmp/",
  })
);
// app.use("*", checkToken);
app.use("/user", require("./routes/user"));
app.listen(process.env.PORT, () => {
  console.log(`app is listening on port 3000`);
});
app.get("/", (req, res) => {
  res.send("<h1>hey there</h1>");
});
