let start = 5;
let end = 10;

const count = function func(a, b) {
    console.log(start)
    start = start + 1
}

const intervalId = setInterval(count, 1000, start, end)

setTimeout(function(){
    clearInterval(intervalId)
}, (end - start)*1000 + 2000)