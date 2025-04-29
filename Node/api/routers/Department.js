import express from "express"

import{
    getByCodeEdvertiser,
    getBycheapprice,
    getByNumBesdsId,
    getByCityId,
    getByCategoryId,
    getDepartById,  
    updateDepart,
    DelteDepart,
    AddDepart,
    allDepart
}from  "../controllers/Department.js"
 import {  checkAuth, isAdver } from "../middle_ware.js"

const router=express.Router()
router.get('',allDepart)
// router.post('',upload.single('image'),AddDepart)
router.post('',checkAuth,AddDepart)
router.delete('',DelteDepart)
// router.delete('',isAdver,checkAuth,DelteDepart)
router.patch('/:id',checkAuth,updateDepart)
// router.delete('',DelteDepart)
// router.patch('/:id',updateDepart)
router.get('/getDepartById/:id',getDepartById)
router.get('/getByCategoryId/:id',getByCategoryId)
router.get('/getByNumBesdsId/:num',getByNumBesdsId)
router.get('/getByCityId/:id',getByCityId)
router.get('/getBycheapprice/:num',getBycheapprice)
router.get('/getByCodeEdvertiser/:id',checkAuth,getByCodeEdvertiser)
export  default router