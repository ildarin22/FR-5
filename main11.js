// 11 Функции

function calc( a, operation, b) {
    
    if (operation == '+') {
        return a + b;
    }
    else if (operation == '*') {
        return a * b;
    }
    else if (operation == '-') {
        return a - b;
    }
  }
  let add = calc(15, '+', 41); // 56
  let multi = calc(25, '*', 4); // 100
  let subtract = calc(89, '-', 16); // 73
  console.log(add);
  console.log(multi);
  console.log(subtract);