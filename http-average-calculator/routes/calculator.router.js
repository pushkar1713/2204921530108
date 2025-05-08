import { Router } from "express";
import validate from "../middleware/validate.middleware.js";
import dispatcher from "../middleware/dispatcher.middleware.js";

const router = Router();

router.get("/:id", validate, dispatcher);

export default router;
