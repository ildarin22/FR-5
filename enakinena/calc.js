// Calculate - 1

function calc(a, b, operation) {
  if (operation === "add") {
    return Number(a) + Number(b);
  } else if (operation === "subtract") {
    return Number(a) - Number(b);
  } else if (operation === "multi") {
    return Number(a) * Number(b);
  }
}
console.log(calc(2, 3, "add"));

// Calculate - 2

function calc(a, b, operation) {
  if (operation === "add") {
    return a + b;
  } else if (operation === "subtract") {
    return a - b;
  } else if (operation === "multi") {
    return a * b;
  }
}
console.log(calc(2, 3, "subtract"));

// Calculate - 3 - switch case

function calc(a, b, operation) {
  switch (operation) {
    case "add":
      alert(Number(a) + Number(b));
      break;

    case "subtract":
      alert(a - b);
      break;

    case "multi":
      alert(a * b);
      break;

    default:
      alert("Что то не известное");
      break;
  }
}
calc(10, 2, "multi");
calc(10, 2, "subtract");
calc(5, 10, "add");
