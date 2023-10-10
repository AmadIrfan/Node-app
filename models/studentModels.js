const mongodb = require("mongoose");

let student = new mongodb.Schema(
	{
		name: {
			type: String,
		},
		registrationNo: {
			type: String,
		},
		fatherName: {
			type: String,
		},
		dob: {
			type: Date,
		},
		contact: {
			type: String,
		},
	},
	{ timestamps: true }
);
module.exports = mongodb.model("/student", student);
