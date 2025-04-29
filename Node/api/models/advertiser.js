
import mongoose, { Schema } from "mongoose";
import Department from "./Department.js";

const AdvertiserSchema= new Schema({
    Email:{
        type:String,
        require:true,
        //  match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    
    },
    password:{
        type:String,
        require:true
    },
    Phone:{
        type: String,
        length:10,
        require:true
    },
    otherPhone:{
        type:String,
        require:true
    },
     ArrDepartment:[{
          type:mongoose.Types.ObjectId,
          ref:'Department'

    }]
   

})
export default mongoose. model('advertiser',AdvertiserSchema)
