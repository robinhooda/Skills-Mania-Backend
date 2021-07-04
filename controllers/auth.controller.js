const User = require('../models/user.model')

const addNewUser = async (req, res, hashPassword) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashPassword,
  })

  try {
    const savedUser = await user.save()
    
    res.status(201).json({
      success: true,
      user: savedUser,
      
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'error while registering a new user',
      error: err.message,
    })
  }
}

module.exports = { addNewUser }
