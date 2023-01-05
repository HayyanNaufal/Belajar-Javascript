// function tambah(a,b) {
//     return a + b;
// }

// var hasil = tambah(2,3);

// console.log(hasil); 



// function tambah(a,b) {
//     return a + b;
// }

// var a = 5;
// var b = 5;

// var hasil = tambah(a,b);

// console.log(hasil); 



// function tambah(a,b) {
//     return a + b;
// }

// var a = parseInt(prompt('masukan nilai 1 :'));
// var b = parseInt(prompt('masukan nilai 2 :'));

// var hasil = tambah(a,b);

// console.log(hasil); 



// function tambah(a,b) {
//     return a + b;
// }
// // angka enam di abaikan
// var hasil = tambah(2,3,6);

// console.log(hasil);



function tambah() {
    var hasil = 0;

    for (let i = 0; i < arguments.length; i++) {
        hasil += arguments[i];    
    }
    return hasil;
}

var coba = tambah(10,10,10);
console.log(coba)