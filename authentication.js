var authenticate = ((req,res,next)=>{
    console.log("authentication for authenticate.js");
    next();
})

module.exports = authenticate;