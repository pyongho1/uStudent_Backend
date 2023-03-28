import { Router } from "express";
import * as postCtrl from "../controllers/posts.js";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router();

/*---------- Public Routes ----------*/
router.get("/", postCtrl.index);
router.get("/:id", postCtrl.show);

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken);
router.post("/", checkAuth, postCtrl.create);
router.delete("/:id", checkAuth, postCtrl.delete);

export { router };
