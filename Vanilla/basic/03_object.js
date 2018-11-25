const monkey= {
  name: "Monkey",
  age: 23,
  gender: "Male",
  isHandSome: false,
  favMoives: ["Along the gods", "LOTR", "OldBoy"],
  favFood:
    [
      {
        name: "Ramen",
        fatty: false
      },
      {
        name: "Cheese Burger",
        fatty: true
      }
    ]
};

console.log(monkey.favFood[0].name);
