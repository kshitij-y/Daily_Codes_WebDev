class Animal {
    constructor(name,  legCount, speaks){
        this.name=name;
        this.legCount=legCount;
        this.speaks=speaks;
    }
    static type() {
        console.log("Animal");
        // this is used directly on class not on its objects
    }

    speak() {
        console.log("hi there " + this.speaks);
    }
}
let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow");

cat.speak();
Animal.type();