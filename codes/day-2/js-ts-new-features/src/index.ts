//const { add, subtract } = require('./utility')
import { add, subtract } from "./utility";
//'from' returns the object assigned to exports property of the module object representing the 'utility' file
//{ add: add, subtract: subtract }
console.log(add(12, 3))
console.log(subtract(12, 3));