# Mr. Roboger's Neighborhood
## by Ethan Firpo, 3/3/20

## Description
This website takes a user inputted number and auto-generates a response message by analyzing all numbers between 0 and the inputted number.

## Setup
Clone this repository.

Open index.html in the web browser of your choice.

## Technology

HTML
CSS
Bootstrap Style Library
JavaScript
jQuery Script Library

## Specs

### Behavior: Program will create an array of numbers from 0 to user-inputted-number.
#### Sample Input: 23
#### Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

### Behavior: Program will replace all numbers in range containing a 1, but not containing a 2 or 3, with "beep"
#### Sample Input: 23
#### Expected Output: [0, beep, 2, 3, 4, 5, 6, 7, 8, 9, beep, beep, 12, 13, beep, beep, beep, beep, beep, beep, 20, 21, 22, 23]

### Behavior: Program will replace all numbers in range containing a 2, but not containing a 3, with "boop"
#### Sample Input: 23
#### Expected Output: [0, beep, boop, 3, 4, 5, 6, 7, 8, 9, beep, beep, boop, 13, beep, beep, beep, beep, beep, beep, boop, boop, 23]

### Behavior: Program will replace all numbers in range containing a 3 with "won't you be my neighbor?"
#### Sample Input: 23
#### Expected Output: [0, beep, boop, won't you be my neighbor?, 4, 5, 6, 7, 8, 9, beep, beep, boop, won't you be my neighbor?, beep, beep, beep, beep, beep, beep, boop, boop, won't you be my neighbor?]

### Behavior: Program will output completed array as text to user.
#### Sample Input: 23
#### Expected Output: 0, beep, boop, won't you be my neighbor?, 4, 5, 6, 7, 8, 9, beep, beep, boop, won't you be my neighbor?, beep, beep, beep, beep, beep, beep, boop, boop, won't you be my neighbor?

## Legal

#### MIT License

### Copyright (c) 2020 Ethan Alexander Firpo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
