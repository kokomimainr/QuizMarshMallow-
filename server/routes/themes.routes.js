const router = require("express").Router();
const { Theme } = require("../db/models");
const { Question } = require("../db/models");

router.get("/", async (req, res) => {
  try {
    const themes = await Theme.findAll();
    res.json(themes);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get("/:themeId", async (req, res) => {
  try {
    const { themeId } = req.params;
    const theme = await Theme.findByPk(themeId);
    const questions = await Question.findAll({ where: { themeId } });
    res.json({theme, questions});
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get("/:themeId", async (req, res) => {
  try {
    const { themeId } = req.params;
    const themes = await Theme.findByPk(themeId);
    res.json(themes);


  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
