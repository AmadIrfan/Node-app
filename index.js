const express = require("express");
const app = express();
const db = require("./utils/db");
const cors = require("cors");

require("dotenv").config();

const body_parser = require("body-parser");

const students = require("./routes/studentRoute");

app.use(cors());
app.use(body_parser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
	console.log(`${req.method} : ${req.headers.host}${req.url} `);
	next();
});

app.use("/students", students);

app.get("/", (req, res) => {
	res.send("welcome to my app");
});

app.listen(process.env.PORT, () => {
	console.log(process.env.PORT);
	console.log(`server is running on port ${process.env.PORT}`);
});
