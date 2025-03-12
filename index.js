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
}

const p1 = new Person("ichami",10)
p1.greet()