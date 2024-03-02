const statusCode = require('http-status-code');
const login = function(req,res){
    return res.status(statusCode.SUCESS).json({
        msg:"login success",
        succes:true,
        data :req.body
    })
}
module.exports = login