import { Router } from "express";
import * as postCtrl from "../controllers/posts.js";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router();

/*---------- Public Routes ----------*/
router.get("/", postCtrl.index);
router.post("/", postCtrl.create);

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken);

export { router };
