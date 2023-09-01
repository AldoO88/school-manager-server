const router = require("express").Router();
const { isAuthenticated } = require("../middlewares/jwt.middleware");
const schoolsRouter = require("./schools.routes");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/schools", isAuthenticated, schoolsRouter)

module.exports = router;
