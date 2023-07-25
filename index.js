const express = require("express");
var cookieParser = require("cookie-parser");

require("dotenv").config({ path: "./config/.env" });

require("./config/DBConnection");
const useRouter = require("./routes/router");

const app= express();

//app uses
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api", useRouter);
const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server is running at ${port}`));