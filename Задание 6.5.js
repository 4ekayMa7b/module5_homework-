const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
let arrValues = [];

for (let value of Object.values(obj)) {
    if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i = i + 1) { // Был бы рад, если объясните, как здесь сделать цикл через forEach() <3
            arrValues.push(value[i])
        }
         continue;
    }
    arrValues.push(value)
}

console.log(arrValues)