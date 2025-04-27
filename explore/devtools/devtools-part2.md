### 1. What was the bug?

The bug was that the `value` attribute referenced from the `input` element is `string` variable. This attribute is referenced  from the `num1` and `num2` element. And so, when you call the `calculateSum` function, `result = num1 + num2`, although we expected a math operation of add two numbers, it was in actuality the string concatenation of two strings.

### 2. How would you fix it? Include a screenshot of your fix. Name it fix.png (or whatever image extension you would like to use) and add it to your expand/screenshots directory.

