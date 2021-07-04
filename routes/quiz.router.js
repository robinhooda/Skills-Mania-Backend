const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const quizArr = require('../data/quiz.data')

router.get('/', (req, res) => {
  res.status(200).json({ success: true, allQuizzes: quizArr })
})

module.exports = router
