/**
 * cek apakah tanda kurung imbang dan sesuai pasangan atau tidak
 */

 function imbang(str) {
    //kode kamu disini
    
    if (str.length % 2 != 0) {
        return false;
    } else {
        var temp = {};
        var temp2 = [];
        for (var i = 0; i < str.length; i++) {
            temp.hasOwnProperty(str[i]) ? temp[str[i]]++ : temp[str[i]] = 1;
        }
        for (var i in temp) {
            temp2.push(temp[i]);
        }
        for (var i = 0; i < temp2.length/2; i++) {
            if (temp2[i] != temp2[temp2.length - i - 1]) {
                return false;
            }
            return true;
        }
    }

  }
  
  /**
   * contoh
   * imbang("[()]")
   * imbang("[(])")
   * true
   * false
   */
  console.log(imbang("[()]"))
  console.log(imbang("[({()})]"));
  console.log(imbang("({({[})})"));
  console.log(imbang("(((({{{[]}})))))"));
  