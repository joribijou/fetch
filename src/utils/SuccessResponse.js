const successResponse=(res,status,msg,data)=>{
    res.status(status).json({
        message:msg,
        data:data
    })

}

export default successResponse