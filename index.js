"use strict";
//2a
console.log('Hello World :3');
const kitten = {
    name: 'sir meowsalot',
    sayHi: function () { console.log(`Hello, my name is ${this.name}`); }
};
kitten.sayHi();
//2b
function add(a, b) { return a + b; }
let addfive = add.bind(null, 5);
console.log(addfive(6));
