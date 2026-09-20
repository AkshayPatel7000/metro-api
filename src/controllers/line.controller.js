import {
    getAllLines,
    getLineById
} from "../services/line.service.js";

export function getLines(req, res) {
    res.json({
        success: true,
        data: getAllLines()
    });
}

export function getLine(req, res) {
    const { lineId } = req.params;

    const line = getLineById(lineId);

    if (!line) {
        return res.status(404).json({
            success: false,
            message: "Metro line not found"
        });
    }

    res.json({
        success: true,
        data: line
    });
}