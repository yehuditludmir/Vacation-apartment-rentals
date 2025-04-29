import mongoose from "mongoose"
import advertiser from "../models/advertiser.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'




export const Enter=(req,res)=>{
    console.log("---------@@@@@@@@@-----------");
    const{Email,password}=req.body
    console.log(Email);
    console.log(password);
    
advertiser.find().where({Email:{$eq:Email}})
   .then(async adver=>{
        if(adver.length==0)
           return res.status(400).send(`email not found`)
        let[ad]=adver
        console.log(password);
        if(ad.password!=password)
            return res.status(400).send(`password not match`)
        const token =await jwt.sign(
            { Email},
            process.env.SECRET,
            {
                expiresIn: '5m', // hours
               
            })
        res.status(200).send({adver,token})
})
.catch(err=>{
    res.status(404).send({error:`${err}`})
})
}

export const Login=(req,res)=>{

    const {Email,password,Phone,otherPhone}=req.body
   
    advertiser.find().where({Email:{ $eq :Email}})
    .then(d=>{ 
            if(d.length>0)
               return res.status(400).send({mesage:`this Email is not valid`})
    

    bcrypt.hash(password, 10, (error, hash) => {
                    if (error) {
                        return res.status(500).send({ error: error.message })
                    }
     const newAdvertiser=new advertiser({Email,password,Phone,otherPhone,ArrDepartment:[]})
    newAdvertiser.save()
    .then(async adve=>
    {
        const token = await jwt.sign(
            { Email},
            process.env.SECRET,
            {
                expiresIn: '5m', // hours
                // expiresIn: '10m', // minutes
                // expiresIn: '30d', // days
                // expiresIn: '20ms', // mili seconds
                // expiresIn: '60s' // seconds
            }
        )
        res.status(200).send({adve ,token})
    })
})
    
})
.catch(err=>{
    res.status(400).send({error:err})
})
 
}

