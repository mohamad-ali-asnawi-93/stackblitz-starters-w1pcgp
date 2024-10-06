# Calculate your salary  

  If you have not worked in your life, here is how life works.

  ## Reference
  ### Print formatted strings
  To print statement in a format, for example:
  ```
  My name is {name}
  ```
  Here is how:
  ```javascript
  const name = 'Haris';
  console.log(`My name is ${name}`);
  ```
  This will print out: 
  ```
  My name is Haris
  ```
  ### Prompt
  If you want to create a variable called `name` and assign it to the `prompt` function with the prompt:` "What is your name? "`

  ```javascript
  const name = prompt("What is your name?");
  ```
  
  --- 

  Here is the code exercise with camel case variable names:

## Steps
  1. Create a variable called `perHourWage` and assign it to the `prompt` function with the prompt: `"How much are you earning per hour?"`
  2. Create a variable called `hours` and assign it to the `prompt` function with the prompt: `"How many hours are you working a day?"`
  3. Create a variable called `perDay` and assign it `hours` multiplied by the `perHourWage`
  4. Print the statement in this format:
  ```
  Per day, you earn: $${perDay}
  ```

  
  Output (assuming user inputted `7` as `perHourWage` and `11` as `hours`):
  ```
  Per day, you earn: $77
  ```
<details>
<summary>Answer</summary>
  
```js
const perHourWage = prompt("How much are you earning per hour?");
const hours = prompt("How many hours are you working a day?");
const perDay = perHourWage * hours;
console.log(`Per day, you earn: $${perDay}`);
```
</details>

  ## Extensions - Weekly Salary
  6. Create a variable called `days` and assign it to the `prompt` function with the prompt: `"How many days are you working a week?"`
  7. Create a variable called `perWeek` and assign it `perDay` multiplied by the `days`

  8. Print the statement in this format:
  ```
  Per week, you earn: $${perWeek}
  ```
  

  Output (assuming user inputted `5` as `days`):
  ```
  Per week, you earn: $385
  ```
<details>
<summary>Answer</summary>
  
```js
const perHourWage = prompt("How much are you earning per hour?");
const hours = prompt("How many hours are you working a day?");
const perDay = perHourWage * hours;
console.log(`Per day, you earn: $${perDay}`);

const days = prompt("How many days are you working a week?");
const perWeek = perDay * days;
console.log(`Per week, you earn: $${perWeek}`);
```
</details>

  ## Extensions - Monthly Salary
  6. Create a variable called `weeksWorked` and assign it to the `prompt` function with the prompt: `"How many weeks are you working a month?"`
  7. Create a variable called `perMonth` and assign it `perWeek` multiplied by the `weeksWorked`
  
  8. Print the statement in this format:
  ```
  Per month, you earn: $${perMonth}
  ```
 

  Output (assuming user inputted `4` as `weeksWorked`):
  ```
  Per month, you earn: $1540
  ```

  <details>
<summary>Answer</summary>
  
```js
const perHourWage = prompt("How much are you earning per hour?");
const hours = prompt("How many hours are you working a day?");
const perDay = perHourWage * hours;
console.log(`Per day, you earn: $${perDay}`);

const days = prompt("How many days are you working a week?");
const perWeek = perDay * days;
console.log(`Per week, you earn: $${perWeek}`);

const weeksWorked = prompt("How many weeks are you working a month?");
const perMonth = perWeek * weeksWorked;
console.log(`Per month, you earn: $${perMonth}`);
```
</details>