const express = require('express')
const router = express.Router()

const Controller = require('../controllers');

//? penamaan resource itu plural

router.get('/movies', Controller.getAllMovies)
router.post('/movies', Controller.postMovie)
router.get('/movies/:id', Controller.getOneMovie)
router.delete('/movies/:id', Controller.deleteOneMovie)

module.exports = router