
class Animal {
    constructor(name, legCount) {
      this.name = name
      this.legCount = legCount
    }
    static typeLog() {
        console.log("I am an Animal");          //static method common for each object, can be called on class, without instantiating the object
    }
    describe() {
      return `${this.name} has ${this.legCount} legs`
    }
  }
  
  
var dog = new Animal("dog", 4);     // actual object of the class

var dog2 =  {          //not an object actually
    name: "dog",
    legCount: 4
}