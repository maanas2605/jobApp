const express = require("express");
const router = express.Router();

const {
  createJob,
  editJob,
  deleteJob,
  viewJob,
  viewAllJob,
} = require("../controller/jobsController");
const verifyUser = require("../middleware/verifyUser");

router.use(express.urlencoded({ extended: false }));
router.use(verifyUser);
router.route("/create").post(createJob);
router.route("/edit/:id").patch(editJob);
router.route("/delete/:id").delete(deleteJob);
router.route("/view/:id").get(viewJob);
router.route("/viewAll").get(viewAllJob);

module.exports = router;
