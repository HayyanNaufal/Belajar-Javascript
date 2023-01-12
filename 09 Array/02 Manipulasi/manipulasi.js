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

var arr = ['hayyan', 'naufal', 'nofa', 'nita', 'fian'];
var arr2 = arr.slice(2,4);
console.log(arr2.join());