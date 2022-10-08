function posSum(x) {
    let sum = 0;
    x.forEach(num => num > 0 && (sum += num));
        return sum;
}

console.log(posSum([1, 2, 3.1, 4, 5]));
console.log(posSum([-2, 3.2, 4, 1, -5, -2, 83]));