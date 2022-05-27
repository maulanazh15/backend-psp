/**
 * jumlahkan semua angka dan string yang menjadi parameter
 */

 function sum(...param) {
	// code kamu disini
	var temp = 0;
	console.log(param);
	for (var i = 0; i < param.length; i++) {
		if (typeof param[i] == "number") {
			temp += param[i];
		} else if(typeof param[i] == "string") {
			temp += parseInt(param[i]);
		}
	}
	return temp;
}
/**
 * contoh
 * sum(1,2,'3','4')
 * 10
 */

console.log(sum(3, 6, "3", "2", 5, 7));
console.log(sum("5", 5, "2", 2));
console.log(sum("123123123"));
