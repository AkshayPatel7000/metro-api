import {
    getAllStations,
    getStationById,
    getStationsByLine,
    getStationLines,
    findNearestStation
} from "../services/station.service.js";

export function getStations(req, res) {
    const stations = getAllStations();

    res.json({
        success: true,
        count: stations.length,
        data: stations
    });
}

export function getStation(req, res) {
    const { id } = req.params;

    const station = getStationById(id);

    if (!station) {
        return res.status(404).json({
            success: false,
            message: "Station not found"
        });
    }

    res.json({
        success: true,
        data: station
    });
}

export function getStationsForLine(req, res) {
    const { lineId } = req.params;

    const stations = getStationsByLine(lineId);

    if (!stations) {
        return res.status(404).json({
            success: false,
            message: "Metro line not found"
        });
    }

    res.json({
        success: true,
        line: lineId,
        count: stations.length,
        data: stations
    });
}

export function getLinesForStation(req, res) {
    const { id } = req.params;

    const lines = getStationLines(id);

    if (!lines) {
        return res.status(404).json({
            success: false,
            message: "Station not found"
        });
    }

    res.json({
        success: true,
        stationId: id,
        data: lines
    });
}
export function getNearestStation(req, res) {
    const lat = Number(req.query.lat);
    const lng = Number(req.query.lng);

    if (
        !Number.isFinite(lat) ||
        !Number.isFinite(lng)
    ) {
        return res.status(400).json({
            success: false,
            message: "Valid lat and lng are required"
        });
    }

    const result = findNearestStation(lat, lng);

    res.json({
        success: true,
        data: result
    });
}