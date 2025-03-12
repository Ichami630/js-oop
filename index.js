//this is what we call a factory function
function createCircle(radius){
    return {
        radius,
        draw: function (){
            console.log("draw")
        }
    }
}

const circle = createCircle(1)
circle.draw()

//constructor function 
function Person(name, age){
    this.name = name;
    this.age = age;
    this.greet = function (){
        console.log(`Hey ${this.name} you are ${this.age} years old`)
    }
    //prototype and inheritance
    //methods defined on the prototypes are shared on all instances
    Person.prototype.sayHi = () =>{
        console.log(`Hi ${this.name}`)    
    }
    //saves memory because methods aren't duplicated for every object
}

const p1 = new Person("ichami",10)
p1.greet()
p1.sayHi()