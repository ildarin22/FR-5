// Вывод в консоль числа от 1 до 19 с помощью цикла

let i = 1;
while (i < 20) {
  console.log(i);
  i = i + 1;
}

console.log("**************************************");
// Вывести в консоль числа от 1 до 19 с  с проверкой условия после тела цикла (do ... while)

let k = 1;
do {
  console.log(k);
  k = k + 1;
} while (k < 20);
console.log("**************************************");
// Перепишите свои while циклы на циклы for

for (let l = 1; l < 20; l++) {
  console.log(l);
}
console.log("**************************************");
// Цикл for c continue

for (let j = 1; j < 20; j++) {
  if (j % 2 == 1) continue;
  console.log(j);
}
