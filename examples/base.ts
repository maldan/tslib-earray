import { EArray } from '../src/index';

const x = new EArray([1, 2, 3, 1]);
x.push(10);
console.log(x.deleteAll(1)); //
console.log(x);
