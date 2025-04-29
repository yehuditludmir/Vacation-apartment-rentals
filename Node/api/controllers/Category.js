import Category from "../models/Category.js"

export const allcCategory=(req,res)=>{
    Category.find()
    .then(cat=>{
       res.status(200).send(cat)
    })
    .catch(err=>{
     res.status(404).send(err)
    })
 }
 export const AddCategory=(req,res)=>{
 
     const {NameCategory}=req.body
 
     const NewCat=new Category({
        NameCategory,aaDepartInCat:[]
         })
         NewCat.save()
     .then(cat=>{
         res.status(200).send({messagge:`Add Category ${cat} succed`})
     })
     .catch(err=>{
         res.status(400).send({err})
     })
 }