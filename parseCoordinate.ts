type Coordinate = {
    x: number;
    y: number;
}
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate = {
        x: 0,
        y: 0
    };

    if (typeof arg1 === 'object') {
        coord = { ...(arg1 as Coordinate) };
    } else {
        coord.x = arg1 as Coordinate['x'];
        coord.y = arg2 as Coordinate['y'];
    }
    return coord;
}
console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 2, y: 0 }));  