var x = "12"

if (x === +x) console.log("It's number!")
if (x !== +x) {
    if (+x == 1 || +x == 0) {
        console.log("It's boolean!")
    }
    else console.log("It's string!")
}