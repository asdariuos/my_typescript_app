
//2a. Using bind to preserve 'this'
console.log('Hello World :3');
const kitten = {

    name:  'sir meowsalot',

    sayHi: function() { console.log(`Hello, my name is ${this.name}`); }

}

kitten.sayHi();    

//2b. Using bind for partial application
function add(a:number, b:number) { return a + b; }

let addfive = add.bind(null,5);

console.log(addfive(6));

//3.  Create a git repository and push it to your github account