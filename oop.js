//this is what we call a factory function
// function createCircle(radius){
//     return {
//         radius,
//         draw: function (){
//             console.log("draw")
//         }
//     }
// }

// const circle = createCircle(1)
// circle.draw()

// //constructor function 
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.greet = function (){
//         console.log(`Hey ${this.name} you are ${this.age} years old`)
//     }
//     //prototype and inheritance
//     //methods defined on the prototypes are shared on all instances
//     Person.prototype.sayHi = () =>{
//         console.log(`Hi ${this.name}`)    
//     }
//     //saves memory because methods aren't duplicated for every object
// }

// const p1 = new Person("ichami",10)
// p1.greet()
// p1.sayHi()

/*ES6 Classes (modern way) */
//cleaner and more intuinitive way to use OOP
//a js class is not an object, it is a template for for JS objects
class Student {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(){console.log(`Hi, i'm ${this.name}`)}
}
//behind the scene, it's still using prototypes
//when you have a class, you can use the class to create objects
const s1 = new Student('brandon',6)
s1.greet()


/*inheritance */
//use the extend keyword to create an inherited class
class Animal {
    constructor(name){
        this.name = name
    }

    speak(){console.log(`${this.name} makes a sound`)}
}

class Dog extends Animal {
    constructor(name,breed){
        super(name); //calls the parent constructor
        this.breed = breed;
    }

    speak(){console.log(`${this.name} barks`)} 
}
//inheritance
const d1 = new Dog("whisky","german-shepherd")
d1.speak()

/*encapsulation and private fields */
class BankAccount{
    #balanace = 0 //private property, not accessible outside the class unless through getters and setter
    constructor(owner){
        this.owner = owner
    }

    deposit(amount){
        this.#balanace +=amount
        console.log(`Deposited ${amount}, New balance ${this.#balanace}`)
    }

    //get the balance
    getBalance(){console.log(`Your current balance is ${this.#balanace}`)}

    //now we can use setters and getters to access private fields
    setBalance(x){
        this.#balanace = x
    }
}

const acc = new BankAccount("ichami")
acc.deposit(100000000)
acc.getBalance()
// console.log(acc.#balance); //❌ Error: Private field
acc.setBalance(200000)
acc.getBalance()

/*static methods and properties */
//static class methods and properties are declared on the class itself
// you cannot call a method on an object, only on an object class
class MathHelper{
    static add(x,y){
        return x+y
    }
}

console.log(MathHelper.add(1,2))

//some key difference in js oop and ts
//Typescript takes oop to the next level by adding interfaces,type safety and access modifiers
//which will be implemented in the index.ts file
//Ts type safety implementation

