import bodyParser from 'body-parser'
import express from 'express'
import AdvertiserRouter from './api/routers/Advaertiser.js'
import CategoryRouter from './api/routers/Category.js'
import CityRouter from './api/routers/City.js'
import DepartmentRouter from './api/routers/Department.js'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


const app=express()
const port=3009

dotenv.config()

mongoose.connect(process.env.LOCAL_URI)
    .then( x=> {
        console.log('connect to mongoDB! 👍😊');
    })
    .catch(err => {
        console.log('ooooffffffffffff');
    })

//  mongoose.connect('mongodb://user:pwd@ds261755.mlab.com:61755/myapp', { useMongoClient: true } , (erreur) => {
//     if(!erreur) 
//     console.log('Connexion etablie');
// })
// npm i --save-dev ts-node

app.use(bodyParser.json())
app.use(cors())

app.use('/Department',DepartmentRouter)
app.use('/City',CityRouter)
app.use('/Category',CategoryRouter)
app.use('/Advrtiser',AdvertiserRouter )
app.listen(port,()=>{
    console.log(`hello to ${port}`)})
