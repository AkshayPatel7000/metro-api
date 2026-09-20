import { Router } from "express";

import {
    getLines,
    getLine
} from "../controllers/line.controller.js";

const router = Router();

router.get("/", getLines);

router.get("/:lineId", getLine);

export default router;