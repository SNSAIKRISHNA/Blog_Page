const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");



const userRoutes = require("./routers/userRoutes");
const blogRoutes = require("./routers/blogRoutes");
const staticRouter = require("./routers/staticRouter");
const { checkForToken } = require("./middlewares/auth");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/wifiBlog")
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log("MongoDb Connection Error"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.static(path.resolve("./public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(checkForToken);

app.use("/", staticRouter);
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

app.listen(3000, () => {
  console.log("Server is running  on port 3000");
});
