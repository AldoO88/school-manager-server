const router = require("express").Router();
const { isAuthenticated } = require("../middlewares/jwt.middleware");
const schoolsRouter = require("./schools.routes");
const periodRouter = require('./period.routes')
const studentRouter = require('./period.routes')
const groupRouter = require('./group.routes');

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/schools", isAuthenticated, schoolsRouter);
router.use("/periods", isAuthenticated, periodRouter);
router.use("/students", isAuthenticated, studentRouter);
router.use("/groups", isAuthenticated, groupRouter);

module.exports = router;
