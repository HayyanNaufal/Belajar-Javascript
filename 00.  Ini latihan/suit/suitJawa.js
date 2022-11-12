// Algoritma
var tanya = true;
while (tanya) {
    
    // Menangkap pilihan player
    var player = prompt('pilih : gajah, semut, orang');

    // membangkitkan bilangan random
    var comp = Math.random();

    if(comp < 0.34){
        comp = 'gajah';
    } else if(comp >= 0.34 && comp < 0.67){
        comp = 'semut';
    } else{
        comp = 'orang';
    }

    // menentukan rules
    var hasil = '';

    if(comp == player){
        hasil = 'SERI !';
    } else if (player == 'gajah') {
        // if(comp == 'orang'){
        //     hasil = 'MENANG !';
        // }
        // else{
        //     hasil = 'KALAH !';
        // }
        hasil = (comp == 'orang') ? 'MENANG !' : 'KALAH !';
    } 
    else if (player == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH !' : 'MENANG !';
    } 
    else if (player == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH !' : 'MENANG !';
    }
    else {
        hasil = 'kamu memasukan pilihan yang salah';
    }

    // tampilkan hasil

    console.log(comp);
    alert('Kamu memilih = ' + player + ' dan Komputer memilih ' + comp + '\nMaka hasilnya ' + hasil);

    tanya = confirm('lagi?');
}

alert('Sudah nyerah 🤣');