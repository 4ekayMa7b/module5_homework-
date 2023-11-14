var arr = [ 2, "erre", 5, 6, 7, null, 1, 0, "joker :)", 2, 3 ];


function numberFind() {
    let evens = [];
    let odds = [];
    let zeros = [];
    for (var i = 0; i < arr.length; i = i + 1) {
        if (Number.isFinite(arr[i])) {
           if (arr[i] === 0) zeros.push(arr[i]);
            else {
                if (arr[i] % 2 === 0) {
                    evens.push(arr[i]);
                }
                else {
                    odds.push(arr[i]);
                }
                
            }
        }
    }
    console.log(evens.length)
    console.log(odds.length)
    console.log(zeros.length)
}

numberFind()