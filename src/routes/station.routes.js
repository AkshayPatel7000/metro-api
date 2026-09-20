import { Router } from "express";

import {
    getStations,
    getStation,
    getStationsForLine,
    getLinesForStation,
    getNearestStation
} from "../controllers/station.controller.js";

const router = Router();

router.get("/", getStations);

router.get("/nearest", getNearestStation);

router.get("/line/:lineId", getStationsForLine);

router.get("/:id", getStation);

router.get("/:id/lines", getLinesForStation);

export default router;