const express = require("express");
const router = express.Router();

const { createQuiz, getAllQuizzes, getQuizById, deleteQuiz } = require("../controllers/quizzes");


router.route("/")
  .get(getAllQuizzes)
  .post(createQuiz);

router.route("/:id")
  .get(getQuizById)
  .delete(deleteQuiz);

module.exports = router;
