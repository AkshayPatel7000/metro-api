import masterData from "../data/masterData.json" with { type: "json" };

import { distanceInMeters } from "../utils/geo.js";

export function getAllStations() {
    return Object.values(masterData.stations);
}

export function getStationById(id) {
    return masterData.stations[id] || null;
}

export function getStationsByLine(lineId) {
    const line = masterData.lines[lineId];

    if (!line) {
        return null;
    }

    return line.stations
        .map((stationId) => masterData.stations[stationId])
        .filter(Boolean);
}

export function getStationLines(id) {
    const station = getStationById(id);

    if (!station) {
        return null;
    }

    return station.lines;
}

export function findNearestStation(lat, lng) {
    let nearestStation = null;
    let minimumDistance = Infinity;

    for (const station of Object.values(masterData.stations)) {
        const distance = distanceInMeters(
            lat,
            lng,
            station.coordinates.lat,
            station.coordinates.lng
        );

        if (distance < minimumDistance) {
            minimumDistance = distance;
            nearestStation = station;
        }
    }

    if (!nearestStation) {
        return null;
    }

    return {
        station: nearestStation,
        distance: Math.round(minimumDistance)
    };
}