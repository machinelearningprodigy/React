import name from './module1.mjs'
console.log(name); //daniel since c is the default export in modul1.mjs. If the file name is .js it will lead to error


import {a,c,d} from './module1.mjs' //we can't rename it to a1,b1..
console.log(a);