var number = 5; 

if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

/* 
The remainder operator % is used to see what remains after dividing a number by another given number the maximum 
amount of times. When used with % 2 === 0, it outputs even numbers. For example, 6 will continuously get separated into 
chunks of 2 until the remainder is 0, but 7 can be separated into chunks of 2 only 3 times, and will then have a 
remaining amount of 1. The else statement catches numbers with anything remaining other than 0. 

For a better visual take the number 6 and separate it into chunks of 2: 
2 
2
2
(We were able to separate 6 into chunks of two until nothing remained.)

Now take the number 7 and separate it into chunks of 2: 
2 
2
2
1 
(We were able to separate 7 into three chunks of two, but there was still 1 remaining.)
*/