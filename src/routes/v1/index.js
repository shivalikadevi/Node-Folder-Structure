const express = require('express');
const router = express.Router();
const {InfoController, LoginController} = require('../../controllers')
router.get('/info',InfoController)
router.get('/login',LoginController)

router.get('/signup',(req,res) =>{
    res.json({msg:"signup"})
})

module.exports = router;