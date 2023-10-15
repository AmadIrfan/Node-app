const studentModels = require("../models/studentModels");

async function getStudents(req, res) {
	try {
		let stud = await studentModels.find();
		res.status(200).json({
			status: "ok",
			status_code: 200,
			student: stud,
		});
	} catch (error) {
		res.status(505).json({
			status: "ok",
			status_code: 505,
			message: "internal server error ",
			result: err.message,
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
				status_code: 404,
				message: "student with this Registration Number already exist",
			});
			return;
		} else {
			console.log("nhi ha");
			let stud = await studentModels.create(req.body);
			res.status(200).json({
				status: "ok",
				student: stud,

				status_code: 200,
				message: "Successfully added student",
			});
		}
	} catch (err) {
		res.status(505).json({
			status: "error",

			status_code: 505,
			status: "internal server error ",
			message: err.message,
		});
	}
}

async function deleteStudents(req, res) {
	try {
		let id = req.params.id;
		let stu = await studentModels.findByIdAndDelete(id);
		console.log(id);
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
			status: "ok",
			message: "Successfully deleted",
		});
	} catch (err) {
		res.status(500).json({
			status_code: 500,
			message: err.message,
			status: "error",
		});
	}
}

async function updateStudents(req, res) {
	try {
		const id = req.params.id;
		let stu = await studentModels.findByIdAndUpdate(id, req.body);
		res.status(200).json({
			status_code: 200,
			name: stu.name,
			status: "ok",
			message: "Successfully update student",
		});
	} catch (err) {
		res.status(500).json({
			status_code: 500,
			message: err.message,
			status: "error",
		});
	}
}

module.exports = {
	deleteStudents,
	getStudents,
	regStudents,
	updateStudents,
};
