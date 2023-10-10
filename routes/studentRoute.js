const express = require("express");
const studentModels = require("../models/studentModels");
const {
	regStudents,
	getStudents,
	deleteStudents,
} = require("../controllers/studentController");
const router = express.Router();

router.get("/", getStudents);
router.post("/reg-students", regStudents);
router.delete("/del/:id", deleteStudents);

module.exports = router;
