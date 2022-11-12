// var s = '';

// for (var i = 0 ; i < 10 ; i++){
//     for (var h = 0; h < 5 ; h++){
//         s += '*';
//     }
//     s += '\n';    
// }
// console.log(s);

// *
// **
// ***
// ****
// *****

// var s = '';

// for (var i = 0 ; i < 5 ; i++){
//     for (var h = 0; h <= i ; h++){
//         s += '*';
//     }
//     s += '\n';    
// }
// console.log(s);

// *****
// ****
// ***
// **
// *

// var s = '';

// for (var i = 5 ; i > 0 ; i--){
//     for (var h = i; h > 0 ; h--){
//         s += '*';
//     }
//     s += '\n';    
// }
// console.log(s);

//          *  
//         * * 
//        * * * 
//       * * * * 
//      * * * * * 
//     * * * * * * 
//    * * * * * * * 
//   * * * * * * * * 
//  * * * * * * * * * 
// * * * * * * * * * * 

function segitiga3(panjang) {
    let hasil = '';
    for (let i = panjang; i > 0; i--) {
        for (let j = 1; j <= panjang; j++) {
            if (j >= i) {
                hasil += '* ';
            } else {
                hasil += ' '
            }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga3(10));