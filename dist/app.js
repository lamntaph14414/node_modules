"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a = 10;
const b = 30;
const myName = "Ngo Anh Lam";
const myAge = 20; // union
const status = true;
const myObj = { id: 1, name: "Lam" };
const numberArr = [1, 3, 3, 4];
const stringArr = ["a", "b", "c"];
const objectArr = [{ id: 1, name: "A" }, { id: 2, name: "B" }];
function sum(numA, numB) {
    return numA + numB;
}
sum(a, b);
const show = (a, b) => {
    return [a, b];
};
show(10, "20");
const getProducts = (products) => {
    const result = products.map(item => `<div>${item.name}</div>`);
};
getProducts([{ id: 1, name: "A" }, { id: 2, name: "B" }]);
//# sourceMappingURL=app.js.map