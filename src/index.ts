class Human {
    public name: string;
    private age: number;
    public gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const yeongGyu = new Human("YeongGyu", 31, "male")

const sayHi = (parson: Human): string => {
    return `Hello ${parson.name}, you are ${parson.age}, you are a ${parson.gender}`;
}

console.log(sayHi(yeongGyu));

export {};
