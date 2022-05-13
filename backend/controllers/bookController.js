const asyncHandler = require('express-async-handler')

const Book = require('../models/bookModel')



const getBook = asyncHandler(async (req, res) => {
  const book = await Book.find({ user: req.user.id })

  res.status(200).json(book)
})


const setBook = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const book = await Book.create({
    text: req.body.text,
    
  })

  res.status(200).json(book)
})


const updateBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if (!book) {
    res.status(400)
    throw new Error('Goal not found')
  }

  
 

 

  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedBook)
})


const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if (!book) {
    res.status(400)
    throw new Error('Goal not found')
  }




  


  await book.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getBook,
  setBook,
  updateBook,
  deleteBook,
}