import  express  from "express";
import UserController from "../controller/userController";
import DataChequer from "../middlewares/dataChequer";

 const router=express.Router();

router.post(
    
    "/",
    DataChequer.userRegisterIsEmpty,
    DataChequer.emailExist, 
UserController.createUser
    );
    
router.get("/",UserController.getAllUsers)
router.delete("/",UserController.deleteAllUsers)
router.get('/:ido',UserController.getOneUser)
router.delete("/:id",UserController.deleteOneUser)
router.patch("/:id",UserController.updateUser)
router.post("/login",UserController.login)

export default router;