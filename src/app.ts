export {};

const a: number = 10;
const b: number = 30;

// Khai b
// type User = {
//     id: number;
//     name: string
// }
interface User{
    id: number, // required
    name: string// required
    status?: boolean // required optional chaining
}
    
const myName: string = "Ngo Anh Lam";
const myAge : number | string = 20; // union
const status: boolean = true;
const myObj: User = {id: 1, name: "Lam"};


const numberArr: number[] = [1,3,3,4];
const stringArr: string[] = ["a","b","c"];
const objectArr: User[] = [{id: 1, name: "A"}, {id: 2, name: "B"}];


function sum(numA: number, numB:number):number{
    return numA + numB;
}
sum(a,b)

const show = <T, U>(a: T, b:U):[T,U] =>{
    return [a, b];
    
}
show(10,"20");
 type Product = {
     id: number,
     name: string
 }
 const getProducts = <T extends Product>(products: T[]) => {
     const result = products.map(item => `<div>${item.name}</div>`)
 }
 getProducts([{id:1, name:"A"}, {id:2, name:"B"}]);