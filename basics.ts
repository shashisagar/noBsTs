let userName:string="jayMataDi";
let hasLoggedIn:boolean=true;
userName += " ram";
console.log(userName);
let myNumber:number=10;
let myRegex:RegExp=/ef/;
console.log(myRegex);
const names:string[] = userName.split(" ");
console.log(names);
const myValue:Array<number>=[1,2,3];
console.log(myValue);
interface Person {
    first: string;
    last: string;
}
const myPerson : Person = {
    first: "ram",
    last:"shyam"
}
console.log(myPerson);
const ids: Record<number,string> = {
   10 : "a",
   20: "b"
}
ids[30] ="c";
console.log(ids[10]);
if(ids[30]==="D") {
}
for(let i=0;i<10;i++) {
    console.log(i);
}
[1,2,3].forEach((v) => console.log(v));
const m:number[]=[4,5,6].map((m) => m*10);
console.log(m);