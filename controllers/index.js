const { Movie } = require('../models');

class Controller {
  static getAllMovies(req, res) {
    Movie.findAll()
      .then((response) => {
        console.log(response);
        res.status(200).json({
          message: 'Success get',
          data: response
        })
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: 'Internal Server Error'
        })
      })
  }

  static getOneMovie(req, res) {
    Movie.findByPk(req.params.id)
      .then((data) => {
        res.status(200).json(data)
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: 'Internal Server Error'
        })
      })
  }

  // static postMovie(req, res) {
  //   const { title, releaseYear, imageUrl, genreId } = req.body
  //   Movie.create({ title, releaseYear, imageUrl, genreId })
  //     .then((data) => {
  //       res.status(201).json({
  //         message: `Movie with id ${data.id} has been created`
  //       })
  //     })
  //     .catch((err) => {

  //       //! tidak boleh mengirimkan 2 res atau lebih dalam satu waktu

  //       if (err.name === 'SequelizeValidationError') {
  //         console.log(err);
  //         return res.status(400).json({
  //           message: err.errors[0].message
  //         })
  //       }
  //       res.status(500).json({
  //         message: 'Internal Server Error'
  //       })
  //     })
  // }

  //? pertama kita tambahkan 'async'
  //? yg promise => jadiin await
  static async postMovie(req, res) {
    try {
      const { title, releaseYear, imageUrl, genreId } = req.body

      const data = await Movie.create({ title, releaseYear, imageUrl, genreId })

      res.status(201).json({ message: `Movies with id ${data.id} has been created` })

    } catch (err) {
      if (err.name === 'SequelizeValidationError') {
        return res.status(400).json({ message: err.errors[0].message })
      }
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  static async deleteOneMovie(req, res) {
    try {
      const movie = await Movie.findByPk(req.params.id)

      if (!movie) {
        return res.status(404).json({ message: `Movie with id ${req.params.id} not found` })
      }

      await Movie.destroy({ where: { id: +req.params.id } })

      res.status(200).json({ message: `Movie with id ${req.params.id} deleted successfully` })
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
}

module.exports = Controller