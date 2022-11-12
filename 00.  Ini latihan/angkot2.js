var jumlAngkot = 10;
var noAngkot = 1;
var angkotBeroperasi = 7;

while(noAngkot <= angkotBeroperasi){
    console.log('angkot no. ' + noAngkot + ' beroperasi dengan baik');
    noAngkot++;
}
for(angkotBeroperasi = angkotBeroperasi + 1; angkotBeroperasi <= jumlAngkot; angkotBeroperasi++ ){
    console.log('angkot no. ' +angkotBeroperasi+ ' tidak beroperasi');
}