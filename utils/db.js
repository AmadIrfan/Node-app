const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const url1 = `mongodb+srv://amadirfan443:gTqJrbaWEKoPaJ4U@cluster0.xqm7ufv.mongodb.net/`;
// const url = "mongodb://127.0.0.1:27017/students";
mongoose.connect(url1, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
	console.log("error");
});

db.once("open", () => {
	console.log("connected with db");
});
