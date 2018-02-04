import header from "./modules/header.js";
import { square, diag, plusSevenTimesTwo } from "./modules/lib.js";

console.log(square(11));
console.log(diag(4, 3));
console.log(plusSevenTimesTwo(3));
console.log(timesTwo(3));

document.body.innerHTML = header;
