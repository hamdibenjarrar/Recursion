// Leap Year Checker
function checkLeapYear() {
    const year = parseInt(document.getElementById('year').value);
    let result = '';

    // Check if the year is a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        result = `${year} is a leap year.`;
    } else {
        result = `${year} is not a leap year.`;
    }

    // Display result
    document.getElementById('leapYearResult').textContent = result;
}

// Ticket Pricing
function checkTicketPrice() {
    const age = parseInt(document.getElementById('age').value);
    let price = '';

    // Determine ticket price based on age
    if (age <= 12) {
        price = 'Ticket price: $10';
    } else if (age >= 13 && age <= 17) {
        price = 'Ticket price: $15';
    } else {
        price = 'Ticket price: $20';
    }

    // Display result
    document.getElementById('ticketPriceResult').textContent = price;
}

// Fibonacci Sequence
function generateFibonacci() {
    const n = parseInt(document.getElementById('fibonacciInput').value);

    // Recursive function to find Fibonacci
    function fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    // Display result
    document.getElementById('fibonacciResult').textContent = `Fibonacci(${n}): ${fibonacci(n)}`;
}

// Palindrome Checker
function checkPalindrome() {
    const str = document.getElementById('palindromeInput').value;

    // Recursive function to check palindrome
    function isPalindrome(str) {
        str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // Normalize
        function check(start, end) {
            if (start >= end) return true; // Base case
            if (str[start] !== str[end]) return false;
            return check(start + 1, end - 1); // Recursive case
        }
        return check(0, str.length - 1);
    }

    // Display result
    const result = isPalindrome(str)
        ? `"${str}" is a palindrome.`
        : `"${str}" is not a palindrome.`;
    document.getElementById('palindromeResult').textContent = result;
}

// Power Function
function calculatePower() {
    const base = parseInt(document.getElementById('base').value);
    const exponent = parseInt(document.getElementById('exponent').value);

    // Recursive function to calculate power
    function power(base, exponent) {
        if (exponent === 0) return 1; // Base case
        return base * power(base, exponent - 1); // Recursive case
    }

    // Display result
    document.getElementById('powerResult').textContent = `${base}^${exponent} = ${power(base, exponent)}`;
}
