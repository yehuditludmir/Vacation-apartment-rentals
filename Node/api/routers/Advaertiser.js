import express from "express"
import { checkEmail } from "../middle_ware.js"

import {
    Login,
    Enter
}from "../controllers/Advertiser.js"


const router=express.Router()

router.post('/Enter',Enter)
router.post('',checkEmail,Login)

export  default router