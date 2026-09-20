import express from "express";
import cors from "cors";

import stationRoutes from "./routes/station.routes.js";
import lineRoutes from "./routes/line.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "Metro API is running",
        timestamp: new Date().toISOString()
    });
});

app.use("/api/stations", stationRoutes);
app.use("/api/lines", lineRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

export default app;