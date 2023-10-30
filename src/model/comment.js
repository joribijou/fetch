
import mongoose from "mongoose";

const commentSchemas= new mongoose.Schema({

comment:{
    type:String
},

postedAt:{
    type:Date,
    default:new Date(Date.now())
}

})
const Comment=mongoose.model("Comment",commentSchemas)
export default Comment