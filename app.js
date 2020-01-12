let animals = ["bear", "raccoon", "hamstar"];

animals.forEach(animal => {
  console.log(animal);
})

let birds = ["cockatiel", "owl", "dove"];

birds.forEach(b => {
  console.log(b);
})

//This loops thru the birds ^^

class Bird {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  sayBreed() 
  {
    console.log(`${this.name} is a ${this.breed}`)
  }
}
let c = new Bird("coocoo", "cockatiel");

c.sayBreed();

let TEST = new Bird("TESTER", "TESTBIRD");

TEST.sayBreed();