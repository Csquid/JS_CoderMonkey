const monkey = {
  name: "Monkey",
  age: 23
};

function sayHello(name, age) {
  return `Hello ${name} you are ${age} years old`;
}

const greetMonkey = sayHello(monkey.name, monkey.age);

console.log(greetMonkey);
