// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;
while (checkz < 5){
    checkz++;
};

// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2
var i = 0;
while (i < 3){
    checkz -= 2;
    i++;
}

// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);

/* This code adds all elements of the `numbers` array together. The for loop
goes through each element of the array, and adds that element's value to the
variable `total` each time the loop runs. At the end, it logs the value of
`total` to the console. */
