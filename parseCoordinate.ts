type Coordinate = {
    x: number;
    y: number;
}
function parseCoordinate(x: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate = {
        x: 0,
        y: 0
    };

    if (typeof arg1 === 'object') {
        coord = { ...(arg1 as Coordinate) };
    } else if (typeof arg1 === 'string') {
        (arg1 as string).split(',').forEach(str => {
            const [key, val] = str.split(':') as [keyof Coordinate, string];
            coord[key] = parseInt(val, 10);
        });
    }
    else {
        coord.x = arg1 as Coordinate['x'];
        coord.y = arg2 as Coordinate['y'];
    }
    return coord;
}
console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 2, y: 0 }));
console.log(parseCoordinate('x:12,y:22'));
