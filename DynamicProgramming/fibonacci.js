function fibonacci(n) {
    if (n < 2)
        return n;
    else return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibinacciDynamic() {
    let cache = {}
    return function fib(n) {
        if (n in cache) return cache[n];
        else {
            if (n < 2)
                return n;
            else {
                cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
                return cache[n];
            }
        }
    }
}

let fibonaccidy =  fibinacciDynamic();
console.log(fibonaccidy(10))