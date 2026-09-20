export function distanceInMeters(
    lat1,
    lon1,
    lat2,
    lon2
) {
    const R = 6371000;

    const dLat =
        ((lat2 - lat1) * Math.PI) / 180;

    const dLon =
        ((lon2 - lon1) * Math.PI) / 180;

    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;

    const clampedA = Math.min(1, Math.max(0, a));

    return (
        2 *
        R *
        Math.atan2(
            Math.sqrt(clampedA),
            Math.sqrt(1 - clampedA)
        )
    );
}