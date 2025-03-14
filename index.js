//oop with type safety implementation
var Member = /** @class */ (function () {
    function Member(name, age) {
        this.name = name;
        this.age = age;
    }
    Member.prototype.greet = function () {
        console.log("Hello, ".concat(this.name, " is ").concat(this.age, " years old"));
    };
    return Member;
}());
var m1 = new Member("ichami", 10);
m1.greet();
//access modifiers in typescript
var BankAcc = /** @class */ (function () {
    function BankAcc(owner) {
        this.owner = owner;
        this.balance = 0;
        this.owner = owner;
    }
    BankAcc.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("You just deposited ".concat(amount, "$ and your new balance is ").concat(this.balance, "$"));
    };
    //getters and setters to access and call private properties out of class
    BankAcc.prototype.setBalance = function (x) {
        this.balance = x;
    };
    BankAcc.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAcc;
}());
var acc2 = new BankAcc("ichami");
acc2.deposit(200);
acc2.setBalance(5000);
console.log(acc2.getBalance());
var Developer = /** @class */ (function () {
    function Developer(name, age) {
        this.name = name;
        this.age = age;
    }
    Developer.prototype.greet = function () {
        console.log("Hi ".concat(this.name));
    };
    return Developer;
}());
var dev1 = new Developer("ichami", 10);
dev1.greet();
