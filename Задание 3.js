let a = 12;
let b = 33;

function example(func){
    second = b;
    return function(){
        console.log(func() + second)
    }
}

function argFunc(){
    let first = a;
    return first;
}

const resultFunc = example(argFunc);

resultFunc();

// Тема сложнейшая, честно говоря. Хотелось бы больше информации о вложенных функциях.