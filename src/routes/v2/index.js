const express = require('express');
const router = express.Router();
router.get('/info',(req,res)=>{
    res.json({msg:"ok"})
    
})
router.get('/login',(req,res)=>{
    res.json({msg:"Congrats u r login"})
})
router.get('/signup',(req,res) =>{
    res.json({msg:"signup"})
})

module.exports = router;