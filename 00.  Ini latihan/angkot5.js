var jumlAngkot = 10;
var angkotBeroperasi = 6;
var angkotLembur = 8;

for (var noAngkot = 1; noAngkot <= jumlAngkot; noAngkot++){
    if(noAngkot <= 6){
        console.log('angkot no.' +noAngkot+ ' berfungsi dengan baik');
    }else if(noAngkot === 8 || noAngkot ===10){
        console.log('angkot no.' +noAngkot+ ' sedang lembur');
    }else{
        console.log('angkot no.' +noAngkot+ ' sedang rusak');
    }
}