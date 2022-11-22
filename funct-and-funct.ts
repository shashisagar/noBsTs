export function printToFile(text:string,callback:() => void):void {
    console.log(text);
    callback();
}
export type MutateNumber = (v:number) => number;
export function arrayMutate(numbers:number[],mutate:MutateNumber) : number[] {
    return numbers.map(mutate);
}
console.log(arrayMutate([1,2,3],(v) => v*10));
export type AdderFunction = (val: number) => number;
export function createAdder(num:number) : AdderFunction {
    return (val: number) => num + val;
}
const addOne = createAdder(1);
console.log(addOne(55));