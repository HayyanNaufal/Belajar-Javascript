// Javascript menggunakan function scope

// global scope/ window scope 

var a = 1;

function tes() {
    var b = 2;
    console.log(b);
}

tes();
// b hanya bisa digunakan dalam function
// console.log(b);