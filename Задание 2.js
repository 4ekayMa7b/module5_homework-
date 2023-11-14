function func(a) {
    let valid = (a <= 1000 && a !== 0) ? true : false;
    switch (valid) {
        case true:
            for (let i = 2; i <= Math.ceil(Math.sqrt(a)); i = i + 1) {
                if (a % i === 0) return "bad";
                }
            return "good"
        case false: 
            return "Invalid"
    }
}
console.log(func(10))