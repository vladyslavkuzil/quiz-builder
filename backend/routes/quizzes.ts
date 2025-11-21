const express = require("express")
const router = express.Router()

const { createQuiz, getAllQuizzes, getQuizById, deleteQuiz } = require("../controllers/quizzes")


router.route("/quizzes").get(getAllQuizzes).post(createQuiz)
router.route("/quizzes/:id").get(getQuizById).delete(deleteQuiz)


module.exports = router
