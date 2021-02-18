function countPrimeNumbers() {
    let c = 0;
    for (let i = 2; i <= 100; i++) {
        let prime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            c++;
        }
    }
    return c;
}

const start = performance.now();
setTimeout(()=> {
    for (let i = 1; i <= 100; i++) {
        countPrimeNumbers();
    }
}, 0)
const end = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${end - start} milliseconds.`);