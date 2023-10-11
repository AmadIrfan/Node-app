const express = require("express");
const studentModels = require("../models/studentModels");
const {
	regStudents,
	getStudents,
	deleteStudents,
	updateStudents,
} = require("../controllers/studentController");
const router = express.Router();
router.get("/", getStudents);
router.post("/reg-students", regStudents);
router.delete("/del/:id", deleteStudents);
router.put("/:id", updateStudents);
// router.patch("/:id");

	module.exports = router;
