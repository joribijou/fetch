import express from "express";
import NewsController from "../controller/newsController";
import VerifyAccess from "../middlewares/verifyAccess";

const router = express.Router();
router.post("/", NewsController.createNews);
router.get("/", NewsController.getAllNews);
router.patch("/:id", VerifyAccess("admin"), NewsController.updateNews);
router.get("/:id", NewsController.getOneNews);
router.delete("/:id", VerifyAccess("admin"), NewsController.deleteOneNews);
router.delete("/", NewsController.deleteAllNews);
export default router;