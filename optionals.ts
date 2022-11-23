export const printIngredient = (quantity: string, ingredient: string, extra?: string) => {
    console.log(`${quantity} ${ingredient} ${extra ?? ""}`)
}
console.log(printIngredient('1C', 'flour', 'something'));
interface User {
    id: string;
    info?: {
        email?: string;
    }
}
export const getEmail = (user: User): string => {
    if(user.info?.email){
        return user.info.email;
    }
    return '';
}
export const addWithCallback = (x: number, y: number, cb?: () => void) => {
    console.log(x, y);
    cb?.();
}

console.log(getEmail({id:'a',info:{email:''}}));