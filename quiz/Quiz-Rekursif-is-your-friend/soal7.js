/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  //code here
  if (equation < 10) {
    return String(equation);
  }

  let divider = 1;
  let tempEquation = equation;
  while (tempEquation >= 10) {
    tempEquation = Math.floor(tempEquation / 10);
    divider *= 10;
  }

  let firstPart = Math.floor(equation / divider) * divider;
  let remainingPart = equation % divider;

  if (remainingPart === 0) {
    return String(firstPart);
  } else {
    return String(firstPart) + '+' + parseNumber(remainingPart);
  }
};

console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3