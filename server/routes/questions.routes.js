const router = require("express").Router();
const { Question } = require("../db/models");


router.get("/", async (req, res) => {
  try {
    const questions = await Question.findAll();
    res.json(questions);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get("/:questionId", async (req, res) => {
  try {
    const { questionId } = req.params;
    const question = await Question.findByPk(id);
    res.status(200).json(question);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
