//oop with type safety implementation

class Member {
    name: string
    age: number
    constructor(name: string, age: number){
        this.name = name;
        this.age = age
    }

    greet(){
        console.log(`Hello, ${this.name} is ${this.age} years old`)
    }
}

const m1 =new Member("ichami",10) 
m1.greet()

//access modifiers in typescript

class BankAcc{
    private balance = 0
    constructor(public owner: string){
        this.owner = owner
    }

    deposit(amount: number):void{
        this.balance += amount
        console.log(`You just deposited ${amount}$ and your new balance is ${this.balance}$`)
    }

    //getters and setters to access and call private properties out of class
    setBalance(x: number): void{
        this.balance = x
    }

    getBalance(): number{
        return this.balance
    }

}

const acc2 = new BankAcc("ichami")
acc2.deposit(200)
acc2.setBalance(5000)
console.log(acc2.getBalance())