let x = 'Довод';
x = x.toLowerCase()
let massive = x.split("")
let reveseMassive = massive.reverse()
let reverseX = massive.join("")

if (reverseX === x) {
    console.log(`${x} -- является палиндромом`)
}
else {
     console.log(`${x} -- не является палиндромом`)
}

