// var angka = prompt("masukan angka :");

// switch (angka) {
//     case '1':
//         alert("anda memasukan angka 1");
//         break;
//     case '2':
//         alert("anda memasukan angka 2");
//         break;
//     case '3':
//         alert("anda memasukan angka 3");
//         break;
//     default:
//         alert("anda memasukan angka lain")
//         break;
// }

var item = prompt("cek makanan / minuman \n (Contoh : nasi, sayur, air putih, cola, burger )");

switch (item) {
    case 'nasi' :
    case 'sayur' :
    case 'air putih' :
        alert("makanan / minuman sehat");
        break;
    case 'cola' :
    case 'burger' :
        alert("makanan / minuman yang kurang sehat");
        break;

}