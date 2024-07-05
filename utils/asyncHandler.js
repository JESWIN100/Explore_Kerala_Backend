const asyncHandler = (fn)=>async(req,res,next)=>{
 

    try {
        await fn(req,res,next)
        
    } catch (err) {
        if(err.joi)err.status=422
         res.status(err.status || 500).send({status:false,error:err.message})
            }
}

 module.exports = asyncHandler 