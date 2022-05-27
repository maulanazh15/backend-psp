/**
 * disediakan array yang menunujukkan harga stock/saham dalam beberapa hari [array]
 * carilah maksimal keuntungan yang mungkin didapat
 * keuntungan = jual - beli
 * anda hanya bisa sell setelah anda buy
 * untung selalu dimulai dari 0
 */

 function maxUntung(prices) {
    //code kamu disini
    untung = [];
    for (var i = 1; i < prices.length; i++) {
      untung.push(prices[i] - prices[0]);
    }
    untungMax = 0;
    for (var i = 0; i < untung.length; i++) {
      if (untung[i] > untungMax) {
        untungMax = untung[i];
      }
    }
    return untungMax;
  }
  
  /**
   * contoh
   * maxUntung([1,2,3,4])
   * 3
   * penjelasan:
   * buy di hari 1 (index 0) dan sell di hari terakhir (index 3)
   */
  console.log(maxUntung([1, 2, 3, 4, 5, 3]));
  console.log(maxUntung([4, 7, 2, 3, 9, 3]));
  console.log(maxUntung([9, 7, 6, 4, 2, 1]));
  