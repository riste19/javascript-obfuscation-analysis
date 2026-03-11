// file1.js
// Small data processing demo (~100 lines)

// Generate numbers from 1..n
function generateNumbers(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}

// Sum array
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

// Average array
function averageArray(arr) {
    if (arr.length === 0) return 0;
    return sumArray(arr) / arr.length;
}

// Find maximum
function findMax(arr) {
    let max = -Infinity;
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

// Find minimum
function findMin(arr) {
    let min = Infinity;
    for (let num of arr) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

// Count even numbers
function countEven(arr) {
    let count = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            count++;
        }
    }
    return count;
}

// Count odd numbers
function countOdd(arr) {
    let count = 0;
    for (let num of arr) {
        if (num % 2 !== 0) {
            count++;
        }
    }
    return count;
}

// Main execution
function main() {
    const numbers = generateNumbers(100);

    const sum = sumArray(numbers);
    const avg = averageArray(numbers);
    const max = findMax(numbers);
    const min = findMin(numbers);
    const evenCount = countEven(numbers);
    const oddCount = countOdd(numbers);

    console.log("Sum:", sum);
    console.log("Average:", avg);
    console.log("Max:", max);
    console.log("Min:", min);
    console.log("Even count:", evenCount);
    console.log("Odd count:", oddCount);

    // ✅ CRITICAL: deterministic result for tester
    const finalResult = sum + evenCount + oddCount;

    console.log("RESULT:", finalResult);
}

main();