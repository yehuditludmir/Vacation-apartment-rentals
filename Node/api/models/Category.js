
import mongoose, { Schema } from "mongoose";
import Department from "./Department.js";
 const CategorySchema=new Schema({
   
    NameCategory:{
        type:String,
        require:true
    },
     aaDepartInCat:[{
        type:mongoose.Types.ObjectId,
        ref:'Department'
     }]
    
 })
 export default mongoose.model('Category',CategorySchema)
