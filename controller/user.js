const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const jwt = require('jsonwebtoken');
const Card = require("../models/cardModel");

async function register(req, res) {
  const { email, password, fullName } = req.body;
  try {
    if (!email || !password || !fullName) {
      return res.json({success: false, message: "Please provide fields"});
    }
    const userExists = await User.findOne({email})
    if(userExists){
        return res.json({success: false, message: 'User exists. Please login'})
    }

    const hashPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));
    const newUser = new User({ ...req.body, password: hashPassword });
    await newUser.save()
    req.session.user = newUser
    req.session.save()
    return res.json({success: true, message: "User created successfully!"});
  } catch (error) {
    console.log(error,'the error')
    res.json({success: false, message: "Something went wrong! Please try again later."});
  }
}

async function login(req, res) {
    try {
        const {email, password} = req.body
        if(!email || !password){
            return res.json({success: false, message: 'Please enter all fields'})
        }
        const user = await User.findOne({email})
        if(!user){
            return res.json({success: false, message: 'User not found. Please register'})
        }
        const passIsMatch = await bcrypt.compare(password, user.password)
        if(!passIsMatch){
            return res.json({success: false, message: 'Credentials incorrect.'})
        }
        req.session.user = user
        req.session.save()

        res.json({success: true, message: 'Login Successful'})
    } catch (error) {
        res.json({success: false, message: 'Something went wrong'})
    }
}

async function addCard(req, res) {
    try {
        const {cvv, cardNo, cardType} = req.body
        const userId = req.session.user._id
        if(!cvv || !cardNo || !cardType){
            return res.json({success: false, message: 'Please enter valid fields'})
        }
        const newCard = new Card({...req.body, userId})
        await newCard.save()
        return res.json({success: true, message: 'Card details added'})
    } catch (error) {
        res.json({success: false, message: 'Something went wrong. Please try again later'})
    }
}

async function getProfile(req, res) {
    const user = req.session.user
    res.json({success: true, user})
}

async function getCards(req, res) {
    try {
        const cards = await Card.find()
        res.json({success: true, cards})
    } catch (error) {
        res.json({success: false, message: 'Something went wrong'})
    }
}

async function logout(req, res) {
    const user = req.session.user
    if(user){
        await req.session.destroy()
    }
    res.json({success: true, message: 'Logged out successfully'})
}



module.exports = {
  register,
  login,
  addCard,
  getProfile,
  logout,
  getCards
};
