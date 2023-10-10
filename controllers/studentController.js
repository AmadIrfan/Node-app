const studentModels = require("../models/studentModels");

async function getStudents(req, res) {
	try {
		let stud = await studentModels.find();
		res.status(200).json({
			status: "ok",
			"status-code": 200,
			student: stud,
		});
	} catch (error) {
		res.status(505).json({
			status: "internal server error ",
			result: error,
		});
	}
}
async function regStudents(req, res) {
	try {
		let { registrationNo } = req.body;
		console.log(req.body);
		const stuAld = await studentModels.findOne({ registrationNo });
		if (stuAld) {
			console.log("-----> already ha");
			res.status(401).json({
				status: "error",
				message: "student with this Registration Number already exist",
			});
			return;
		} else {
			console.log("nhi ha");
			let stud = await studentModels.create(req.body);
			res.status(200).json({
				status: "ok",
				student: stud,
				message: "Successfully added student",
			});
		}
	} catch (error) {
		res.status(505).json({
			status: "internal server error ",
			message: error.message,
		});
	}
}
async function deleteStudents(req, res) {
	try {
		let id = req.params.id;
		let stu = await studentModels.findByIdAndDelete(id);
		console.log(stu);
		console.log(!stu);
		if (!stu) {
			res.status(500).json({
				status_code: 500,
				status: "error",
				message: "student with this id not exists",
			});
			return;
		}
		res.status(200).json({
			status_code: 200,
			name: stu.name,
			message: "Successfully deleted",
		});
	} catch (err) {
		res.status(500).json({
			status_code: 500,
			message: err,
			status: "error",
		});
	}
}
module.exports = {
	deleteStudents,
	getStudents,
	regStudents,
};
