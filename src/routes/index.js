import  express  from "express"
import userRoutes from "./userRoutes"
import newsRoutes from "./newsRoutes"
import messageRoutes from "./messageRoutes"
import commentRoutes from "./commentRoutes"



const router=express.Router();

router.use("/user",userRoutes)
router.use("/news",newsRoutes)
router.use("/message",messageRoutes)
router.use("/comment",commentRoutes)

export default router