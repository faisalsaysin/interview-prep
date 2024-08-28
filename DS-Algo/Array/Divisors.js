// Time complexity O(sqrt N)
function divisor_efficient(n) {
    let result = []
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            result.push(i) 
            if (n / i !== i) {
                result.push(n / i);
            }
        }
               
    }
    return result;
}

function divisor_brute(n) {
    let result = []
    for (let i = 1; i <= n; i++) {
        if(n % i === 0)
            result.push(i)        
    }
    return result;
}

console.log(divisor_brute(36))
console.log(divisor_efficient(36))