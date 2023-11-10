let arr1 = ["x", "o", "x"] 
let arr2 = ["o", "x", "o"] 

for (let i = 0; i < 3; i = i + 1) {
    if (i % 2 === 0) {
        console.log(arr1.join(" "))
    }
    else {
        console.log(arr2.join(" "))
    }
}