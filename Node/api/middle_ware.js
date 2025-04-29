import advertiser from "./models/advertiser.js"
import Department from "./models/Department.js"
import jwt, { decode } from 'jsonwebtoken'
import multer from 'multer';
import path  from 'path';

export const checkEmail=(req,res,next)=>{
    
    const Email=req.body.Email
     if(Email && /[@]/.test(Email))
        return next()
   res.status(400).send('email invalid')
}

export const checkAuth = (req, res, next) => {

    const {aid}=req.params

    if (!req.headers.authorization) {
        return res.status(401).send('Authorization failed!')
    }

    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
        return res.status(401).send('Authorization failed!')
    }

    jwt.verify(token, 'HT2yg75FXgfvy', (error, decoded) => {
        if (error || !decoded) {
            return res.status(401).send('Authentication failed!')
        }
        if (decoded) {
            next()
        }
    })
    
}

export const isAdver=(req,res,next)=>{
    const {_id} = req.query
    const {aid}= req.query
    console.log(_id);
    console.log(aid);
    if(!aid ||!_id)
        return res.status(400).send('אין פרטים תואמים')
    Department.findById(_id)
    .then(d=>{
        if(d.CodeAdvertiser==aid)
                return next()
       return res.status(400).send('אין לך דירה כזו') 
    })
    .catch(err=>{
        res.status(400).send('אין  דירה כזו')
    })
}


// הגדרת ה-Middleware לאחסון הקבצים
// const storage = multer.diskStorage({
// //     destination: (req, file, cb) => {
// //         cb(null, 'uploads'); // תיקיית יעד
// //     },
// //     filename: (req, file, cb) => {
// //         cb(null, `${Date.now()}-${file.originalname}`);
// //     },
// // });
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({ storage: storage });
