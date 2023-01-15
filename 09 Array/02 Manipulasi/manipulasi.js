// Manipulasi array

// * menambah elemen pada array
// * menghapus elemen pada array
// * menampilkan seluruh isi array

// 1. menambah isi array


// var arr = ['a', 1, false];
// console.log(arr[2]);

// var arr = [];
// arr[0] = "hayyan";
// arr[1] = "naufal";
// arr[2] = "nofa";
// console.log(arr);

// 2. menghapus isi array

// var arr = ['hayyan', 'naufal', 'nofa'];
// arr[2] = undefined;
// console.log(arr)

// 3. menampilkan isi array

// var arr = ['hayyan', 'naufal', 'nofa'];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// method pada array


// 1. join (menggabungkan seluruh isi array dan mengubahnya menjadi string)

// console.log(arr.join(' - '));

// 2. push & pop (push memasukan elemen baru di akhir array, pop menghilangkan elemen terakhir pada array)

// arr.push('nisa','vera','icha');
// console.log(arr.join(' - '));

// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift (unshift memasukan elemen baru di awal array, shift menghilahngkan elemen awal pada array)

// arr.unshift('nisa','vera','icha');
// console.log(arr.join(' - '));

// arr.shift();
// console.log(arr.join(' - '));


// 4. splice (menyisipkan elemen array di tengah)

// arr,.splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2,..)

// arr.splice(2, 0, 'tambah','fian');
// console.log(arr.join());

// 5.slice (mengiris array menjadi array baru)
// slice(awal,akhir)

// var arr = ['hayyan', 'naufal', 'nofa', 'nita', 'fian'];
// var arr2 = arr.slice(2,4);
// console.log(arr2.join());

// 6. foreach

// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['hayyan', 'naufal', 'nofa', 'nita', 'fian'];

// angka.forEach(function(e){
//     console.log(e)
// })

// nama.forEach(function(e , i) {
//     console.log('mahasiswa ke ' + (i + 1) + ' adalah ' + e);
// })

// 7. map (mengembalikan isi array)

// var angka = [1,2,3,4,5,6,6,7,5];

// var angka2 = angka.map(function (e) {
//     return e * 2;
// })

// console.log(angka2.join());

// 8. sort

// var angka = [1,6,10,9,30,8,3,4,6,7,5];
// angka.sort(function (a, b) {
//     return a-b;
// });

// console.log(angka.join());

// 9. filter 

// jika tidak ada akan mengembalikan nilai kosong
// var angka = [1,6,10,9,30,8,3,6,7,5];

// var angka2 = angka.filter(function (x) {
//     return x > 6;
// }) 
// console.log(angka2);

// 10. find (hanya menampilkan satu nilai)

var angka = [1,6,10,9,30,8,3,6,7,5];

var angka2 = angka.find(function (x) {
    return x > 9;
}) 
console.log(angka2);