function power_efficient(x, n) {
    let sum = 1;
    let temp = n;
    while (temp > 0) {
        if (n % 2 === 1) {
            sum *= x
            temp = temp - 1;
        } else {
            sum *= x * x;
            temp /= 2;
        }
    }
    return sum;
}

function power_brute(x, n) {
    let sum = 1;
    for (let i = 1; i <= n; i++) {
        sum *= x;
    }
    return sum;
}


console.log(power_brute(5, 5))
console.log(power_efficient(5,5))