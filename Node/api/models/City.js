
import mongoose, { Mongoose, Schema } from "mongoose";
import Department from "./Department.js";

 const CitySchema=new Schema({
    NameCity:{
        type:String,
        require:true
    },
     arrDepartmemtInCity:[{
         type:mongoose.Types.ObjectId,
         ref:'Department'
        
     }]
})
export default mongoose.model('City',CitySchema)
