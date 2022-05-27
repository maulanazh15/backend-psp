/**
 * fungsi yang membalikkan kalimat/string
 * dilarang menggunakan method reverse()
 */

 function balikString(str) {
    // code kamu disini
    temp = '';
    for (var i = str.length-1; i >= 0 ; i--) {
        temp +=str[i];
    }
    return temp; 
  }
  /**
   * contoh
   * balikString('halo dek')
   * ked olah
   */
  console.log(balikString("hello world"));
  console.log(balikString("bolak balik"));
  console.log(balikString("evil o live"));
  