// rekursif adalah sebuah fungsi yang memanggil dirinya sendiri


// rekursif harus berkhir dan menghasilkan nilai


// base case adalah kondisi akhir dari rekursif yang menghasilkan nilai

function tampilAngka(n) {
    // base case
    if (n === 0) {
        return;
    }
    // end

    console.log(n);
    return tampilAngka(n-1);
}

tampilAngka(10);

// contoh pemanfaatan rekursif 

// faktorial

function faktorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * faktorial(n - 1);
}

// semua looping bisa dibuat rekursif, tapi tidak sebaliknya