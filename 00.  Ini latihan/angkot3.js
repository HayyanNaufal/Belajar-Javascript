var jumlAngkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jumlAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log('angkot no.' +noAngkot+ ' berfungsi dengan baik');
    }else{
        console.log('angkot no.' +noAngkot+ ' tidak beroperasi');
    }
}