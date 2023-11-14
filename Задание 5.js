const sq = (x, n) => {
    for (let i = 1; i < n; i = i + 1) {
        x = x * x
    }
    return x
}

console.log(sq("4", 2))