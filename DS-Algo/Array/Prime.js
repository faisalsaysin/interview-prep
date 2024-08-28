// Time Complexitity = O(NLog(Log N) + Q) and Space Complexity = O(N)
//Most optimal solution for range problem
function getCountPrimeFromRangeOptimal(low, high) {
    const sieve = getPrime_efficient(high);
    let count = 0;
    for (let i = 0; i < sieve.length; i++) {
        count = count + sieve[i];
        sieve[i] = count;
    }
    return sieve[high] - sieve[low - 1]
}

// Time Complexitity = O(Q x NLog(Log N)) and Space Complexity = O(N)
//Modified sieve of eratosthene question
function getCountPrimeFromRange(low, high) {
    const sieve = getPrime_efficient(high);
    let count = 0;
    for (let i = low; i <= high; i++) {
        if (sieve[i]) {
            count++
        }
    }
    return count;
}

// Time Complexitity = O(NLog(Log N)) and Space Complexity = O(N)
function getPrime_efficient(highRange) {
    const prime = new Array(highRange + 1).fill(1);
    prime[0] = prime[1] = 0;
    for (let i = 2; i * i <= highRange; i++){
        if (prime[i]) {
            for (let j = i * i; j <= highRange; j += i){
                prime[j] = 0;
            }
        }
    }
    return prime;
}

// Time Complexitity = O(N x Sqrt(N)) and Space Complexity = O(1)
function getPrime_brute(highRange) {
    for (let i = lowRange; i <= highRange; i++){
        let flag = true;
        for (let j = 2; j <= i / 2; j++){
            if (i % j === 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            console.log(i);
        }
    }
}

// getPrime_brute(100);

// const primes = getPrime_efficient(10);
// for (let i = 2; i <= primes.length; i++){
//     if (primes[i]) {
//         console.log(i)
//     }
// }

console.log(getCountPrimeFromRange(10, 30));
console.log(getCountPrimeFromRangeOptimal(10, 30));