import express from "express"

import {
    allcCategory,AddCategory
}from "../controllers/Category.js"

import { checkAuth } from "../middle_ware.js"


const router=express.Router()
router.get('',allcCategory)
router.post('',checkAuth,AddCategory)

export  default router