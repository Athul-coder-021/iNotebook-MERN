const express = require('express');
const User = require('../models/User');
const router = express.Router();

const { body,validationResult } = require('express-validator');

router.post('/',[
    body('name','Enter a Valid name').isLength({min:3}),
    body('email','Enter a Valid email').isEmail(),
    body('password','Password must be atleast 5 characters').isLength({min:5}),
],(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()});
    }
    console.log(req.body)
    //video 46 we wrote like this to store data
    // const user = User(req.body);
    // user.save();
    // res.send(req.body)

    User.create({
        name : req.body.name,
        email:req.body.email,
        password:req.body.password,
    }).then(user=>res.json(user))
    .catch(err=>{console.log(err) 
    res.json ({error:'please enter a unique value for email'})});
})

module.exports = router