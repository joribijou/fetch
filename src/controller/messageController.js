import Message from "../model/message";
import errorResponse from "../utils/errorResponse";
import successResponse from "../utils/SuccessResponse";

class MessageController{
    static async createMessage(req,res){
        const {email,message}=req.body;
        const msg=await Message.create({email,message})
        if(!msg){
            return errorResponse(res,401,`message are not sent`)
        }else{
            return successResponse(res,201,`message are successfuly sent`,msg)
        }
    }
    static async getAllMessage(req,res){
        const msg=await Message.find()
        if(!msg || msg.length==0){
            return errorResponse(res,401,` message  not found`)
        }else{
            return successResponse(res,200,`message ${msg.length} successfuly retrieved`,msg)
        }

    }
    static async deleteAllMessage(req,res){
        const msg=await Message.deleteMany()
        if(!msg){
            return errorResponse(res,401,`message not deleted`)
        }else{
            return successResponse(res,200,`message are deleted`)
        }
    }

}
export default MessageController