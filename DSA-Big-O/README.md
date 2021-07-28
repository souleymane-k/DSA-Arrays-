1.Big O

O(1)

O(n)

2.Even or Odd O(1), because there are no loops Algorithm time is independent of the input

3.Are you here? O(n^2), nested for-loops it is iterating through every   element of an array then comparing it and iterating through another array (n*n) The complexity is being increased by a factor of the second array's length

4. Doubler O(n), one for-loop only iterating through one array.

5. Naive search O(n), one for-loop only iterating through one array.

6. Creating pairs O(n^2), one array, two for-loops nested

7. Compute the sequence creates a fibonacci sequence up to num amount of numbers, O(n) because the run-time is depender on the input number-- the higher the input, the longer it will take. It increases linearly.

8. An Efficent search O(log(n)) when the input significantly increases, the output does not. It does not check every element to succeed.

9. Random element O(1) - even though an array is inputted, it's runtime complexity is constant because it's independent of the input (no looping is happening).

10.What Am I? This function calculates if the input is a prime number (returns true if it is). The Big O is O(n) (sublinear); the time is dependent on the input but not in a strictly linear way (if it's a whole number greater than 1, it is constant, but if it's a prime number it's calculated n times).

11. TOH See code for details If you are given 5 disks, how do the rods look like after 7 recursive calls? Rod A: 1, 2, 3, 4 Rod B: none Rod C: 5, 6, 7 A -> C A -> B C -> B A -> C B -> A B -> C A -> C How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks? 3 disks: 7 moves 4 disks: 15 moves 5 disks: 31 moves What is the runtime of your algorithm? O(n^2)

12. See code

13. Recursive Big O Using solution code from recursive functions:

Count Sheep: O(n)
Power Calculator: O(n)
Reverse String: O(n)
Triangle: O(n)
Split: O(n) (mostly linear)
Factorial: O(n)
Fibonacci: O(n)

14. Iterative Big O

Count Sheep: O(n)
Power Calculator: O(n)
Reverse String: O(n)
Triangle: O(n)
Split: O(n)
Factorial: O(n)
Fibonacci: O(n)
