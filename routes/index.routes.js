const router = require("express").Router();
const { isAuthenticated } = require("../middlewares/jwt.middleware");
const schoolsRouter = require("./schools.routes");
const periodRouter = require('./period.routes')
const studentRouter = require('./students.routes')
const groupRouter = require('./group.routes');
const teacherRouter = require('./teacher.routes')
const subjectRouter = require('./subjects.routes')

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/schools", isAuthenticated, schoolsRouter);
router.use("/periods", isAuthenticated, periodRouter);
router.use("/students", isAuthenticated, studentRouter);
router.use("/subjects", isAuthenticated, subjectRouter);
router.use("/groups", isAuthenticated, groupRouter);
router.use("/teachers", isAuthenticated, teacherRouter);


module.exports = router;
