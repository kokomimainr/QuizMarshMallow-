const router = require("express").Router();
const themesRouter = require("./themes.routes");
const questionsRouter = require("./questions.routes");

router.use("/themes", themesRouter);
router.use("/questions", questionsRouter);

module.exports = router;
