const express=require('express');
const router=express.Router();
const passport=require('passport');

// @Des auth with google
// Route GET /auth/google
router.get('/google',passport.authenticate('google',{scope:['profile']}));

// @Des Google auth callback
// Route GET /auth/google/callback'
router.get('/google/callback',
passport.authenticate('google',{failureRedirect:'/'}),(req,res)=>{
    res.redirect('/dashboard');
}
);


// @desc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

module.exports= router;