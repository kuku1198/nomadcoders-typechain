interface Human {
    name: string;
    age: number;
    gender: string;
}

const parson = {
    name: "YeongGyu",
    age: 31,
    gender: "male",
};

const sayHi = (parson: Human): string => {
    return `Hello ${parson.name}, you are ${parson.age}, you are a ${parson.gender}`;
}

console.log(sayHi(parson));

export {};
