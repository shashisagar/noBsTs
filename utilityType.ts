interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
console.log(pointPart);

interface Car {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000 // `Required` forces mileage to be defined
};
console.log(myCar);

const nameAgeMap: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
};
console.log(nameAgeMap);

type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};
console.log(point);

type PointPrinter = (p: { x: number; y: number; }) => void;
const point2: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};
console.log(point2);