const info=function(req,res){
    return res.json({
        success:true,
        message:"ap is live for info",
        "error":{},
        date :{}
    })
}
module.exports = info