const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  sub: function(a, b) {
    return a - b;
  },
  multiple: function(a, b) {
    return a * b;
  },
  division: function(a, b) {
    return a / b;
  }
}

const pl = calculator.plus(5, 5);
const su = calculator.sub(5, 3);
const mu = calculator.multiple(2, 5);
const di = calculator.division(4, 2);

console.log(pl);
console.log(su);
console.log(mu);
console.log(di);
