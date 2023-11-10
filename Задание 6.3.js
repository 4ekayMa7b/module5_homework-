let number = prompt('До какого числа создать массив?)', );
let typeNumber = +number;
let arr = [];

for (let i = 0; i <= number; i = i + 1) {
    arr.push(i)
}

console.log(arr)