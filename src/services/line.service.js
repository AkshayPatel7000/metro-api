import masterData from "../data/masterData.json" with { type: "json" };

export function getAllLines() {
    return Object.entries(masterData.lines).map(
        ([id, line]) => ({
            id,
            stationCount: line.stations.length
        })
    );
}

export function getLineById(lineId) {
    const line = masterData.lines[lineId];

    if (!line) {
        return null;
    }

    return {
        id: lineId,
        stationCount: line.stations.length,
        stations: line.stations
    };
}