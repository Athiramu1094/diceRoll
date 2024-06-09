This project is a simple React application that includes a Dice component. The Dice component generates a random number between 1 and 6 and displays the result. A button is provided to roll the die and display a new result.
Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
Multiplying by 6 scales this up to a range of 0 to just under 6.
Math.floor() rounds down to the nearest whole number, giving a range of 0 to 5.
Adding 1 shifts the range to 1 to 6, simulating a six-sided die roll.
