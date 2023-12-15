const express = require("express");
// const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");
const usersRoute = require("./routes/users");
require("dotenv").config();
const cors = require("cors");

// init app
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);

// running the server.
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`app is running on port ${PORT}`));
