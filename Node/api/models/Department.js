import mongoose, { Schema } from "mongoose";



const DepartmentSchema=new Schema({
    NameDepart:{
        type:String,
    },
    DepartDescreption:{
        type:String,
        
    },
    image:{
        type:String,
    },
    CodeCategory:{
        type:mongoose.Types.ObjectId,
        ref:'Category'
    },
    CodeCity:{
        type:mongoose.Types.ObjectId,
        ref:'City'
    },

    address:{

        type:String,
    },
    Numbeds:{
        type:Number
    },
    addotions:{
        type:String

    },
    priceDepart:{
        type:Number
    },
    CodeAdvertiser:{
        type:mongoose.Types.ObjectId,
        ref:'advertiser'
    }


})
export default mongoose.model('Department',DepartmentSchema)
