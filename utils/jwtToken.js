var jwt = require('jsonwebtoken');
const secretKey=process.env.jwtSecretKey

const jwtToken =async (user,password)=>{
    
const options={
    expiresIn:'1hr',
    issuer:'Entri',
    audience:'Entri-user'

}

    let token = await jwt.sign({user,password},secretKey,options )
    return token 


}

const verifyToken = async (req,res,next)=>{

    if(!req.headers('Authorisation')) return new Error ('Unotharised')
        let token = req.headers('Authorisation').split(' ')[1]
    if(!token){
        return new Error ('Unotharised,No token')
    }
    jwt.verify(token,secretKey,(err,payload)=> {
        if(err) return next(new Error ('Unotharised'))
            next()

    })
}





 module.exports = {jwtToken,verifyToken};