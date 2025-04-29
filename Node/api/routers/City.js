import express from "express"

import{allcity,
    Addcity
}from "../controllers/City.js"
import { checkAuth } from "../middle_ware.js"

const router=express.Router()

router.get('',allcity)
// router.post('',checkAuth,Addcity)
/router.post('',checkAuth,Addcity)



export  default router