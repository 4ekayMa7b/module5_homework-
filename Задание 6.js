var arr = [ 2, 2, 3 ];

if (new Set(arr).size !== arr.length) {
    console.log("Duplicate elements found.")
}
else {
    console.log("No duplicates found.")
}
if (new Set(arr).size === 1) {
    console.log("And only duplicates found.")
}