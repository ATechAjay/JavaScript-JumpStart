# Overview of function

A function is an essential concept in coding , which allow you to store a piece of code that does a single task inside a defined block, and then call that code whenever you need it using a single short command — rather than having to type out the same code multiple times.

# Where do I find functions?

In JavaScript, you'll find functions everywhere. Pretty much anytime you make use of a JavaScript structure that features a pair of parentheses `( )` and you're not using a common built-in language structure like a `for` loop , `while` or `do...while` loop , or `if...else` statement , you are making use of a function.

# Built-in browser functions

We've used functions built in to the browser a lot in this course. Every time we manipulated a text string, for example:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string
```

###### Or every time we manipulated an array

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string
```

# Or every time we generate a random number:

```js
const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number
```

The JavaScript language has many built-in functions to allow you to do useful things without having to write all that code yourself.

In fact, some of the code you are calling when you invoke, or run, or execute a built in browser function couldn't be written in JavaScript. Many of these functions are calling parts of the background browser code, which is written largely in low-level system languages like `C++`, not web languages like JavaScript.

Some built-in browser functions are not part of the core JavaScript language. Some are defined as part of browser APIs, which build on top of the default language to provide even more functionality.

# Functions versus methods

Functions that are part of objects are called `methods`.

# Invoking functions

To actually use a function after it has been defined, you've got to run or invoke it. This is done by including the name of the function in the code somewhere, followed by parentheses ().

```js
function myFunction() {
  alert("hello");
}
myFunction(); // calls the function once
```

> This form of creating a function is also known as `function declaration`. It is always `hoisted`, so you can call function above function definition and it will work fine.

# Function parameters

Some functions require parameters to be specified when you are invoking or calling them. These are values that need to be included inside the function parentheses (), which it needs to do its job properly.

> `Parameters` are sometimes called `arguments`, `properties`, or even `attributes`.

As an example, the browser's built-in `Math.random()` function doesn't require any parameters. When called, it always returns a random number between 0 and 1:

```js
const myNumber = Math.random();
```

The browser's built-in string `replace()` function however needs two parameters:

1. The substring to find in the main string.
2. And the substring to replace that string with.

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> When you need to specify multiple parameters, they are separated by commas `,`.

# Optional parameters

Sometimes parameters are optional — you don't have to define them. If you don't, the function will generally adopt some kind of default behavior. As an example, the array `join()` function's parameter is optional:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString); // returns 'I love chocolate frogs'
const madeAnotherString = myArray.join();
console.log(madeAnotherString); // returns 'I,love,chocolate,frogs'
```

If no parameter is included to define a joining/delimiting character, a comma is used by default.

# Default parameters

If you're writing a function and want to support optional parameters, you can define default values by adding `=` after the name of the parameter, followed by the default value:

```js
function hello(name = "Chris") {
  console.log(`Hello ${name} !`);
}
hello("Ari"); // Hello Ari!
hello(); // Hello Chris!
```

# Anonymous functions and arrow functions

```js
function myFunction() {
  alert("hello");
}
```

But you can also create a function that doesn't have a name:

```js
(function () {
  alert("hello");
});
```

> The above function is called an `anonymous function`, because it has no name.

You'll often see anonymous functions when a function expects to receive another function as a parameter.

> This form of creating a function is also known as `function expression`. Unlike function declaration, function expressions are not hoisted.

###### Example of an anonymous function

For example, let's say you want to run some code when the user types into a text box. To do this you can call the `addEventListener()` function of the text box.
This function expects you to pass it (at least) two parameters:

1. The name of the event to listen for, which in this case is `keydown` a function to run when the event happens.
2. When the user presses a key, the browser will call the function you provided, and will pass it a parameter containing information about this event, including the particular key that the user pressed:

```js
function logKey(event) {
  console.log(`You pressed " ${event.key} ".`);
}
textBox.addEventListener("keydown", logKey);
```

Instead of defining a `separate logKey() function`, you can pass an `anonymous function` into `addEventListener()`:

```js
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed " ${event.key} ".`);
});
```

# Arrow functions

There's an alternative form you can use, called an `arrow function`. Instead of function`(event)` , you write `(event) =>`:

```js
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed " ${event.key} ".`);
});
```

If the function only takes one parameter, you can omit the parentheses around the parameter:

```js
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed " ${event.key} ".`);
});
```

Finally, if your function contains only one line that's a return statement, you can also omit the braces and the return keyword, and implicitly return the expression.

```js
const originals = [1, 2, 3];
const doubled = originals.map((item) => item * 2);
console.log(doubled); // [2, 4, 6]
```

So in the example above, `(item) => item * 2` is the arrow function equivalent of:

```js
function doubleItem(item) {
  return item * 2;
}
```

You can use the same concise syntax to rewrite the addEventListener example:

```js
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed " ${event.key} ".`)
);
```

In this case, the value of console.log() , which is undefined , is implicitly returned from the callback function.

> MDN recommend that you use arrow functions, as they can make your code shorter and more readable.

> There are some subtle differences between arrow functions and normal functions.

# Function scope and conflicts

When you create a function, the variables and other things defined inside the function are inside their own separate scope , meaning that they are locked away in their own separate compartments, unreachable from code outside the functions.

The `top level` outside all your functions is called the `global scope` . Values defined in the global scope are accessible from everywhere in the code.

JavaScript is set up like this for various reasons — but mainly because of security and organization. Sometimes you don't want variables to be accessible from everywhere in the code.

External scripts that you call in from elsewhere could start to mess with your code and cause problems because they happen to be using the same variable names as other parts of the code, causing conflicts. This might be done maliciously, or just by accident.

For example, say you have an HTML file that is calling in two external JavaScript files, and both of them have a variable and a function defined that use the same name:

```html
<!-- Excerpt from my HTML -->
<script src=" first.js "></script>
<script src="second.js "></script>
<script>
  greeting();
</script>
```

```js
// first.js
const name = "Chris";
function greeting() {
  alert(`Hello ${name} : welcome to our company.`);
}
// second.js
const name = "Zaptec";
function greeting() {
  alert(`Our company is called ${name} .`);
}
```

Both functions you want to call are called `greeting()` , but you can only ever access the `first.js` file's greeting() function (the second one is ignored).

In addition, an error results when attempting (in the second.js file) to assign a new value to the name variable — because it was already declared with `const` , and so can't be reassigned.

###### Real-world Analogy

![Zoo imgae](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions/mdn-mozilla-zoo.png)

It is a bit like a `zoo`. The `lions`, `zebras`, `tigers`, and `penguins` are kept in their `own enclosures`, and `only have access to the things inside their enclosures`, in the same manner as the function scopes.

If they were able to get into other enclosures, problems would occur. At best, different animals would feel really uncomfortable inside unfamiliar habitats — a lion or tiger would feel terrible inside the penguins' watery, icy domain.

At worst, the lions and tigers might try to eat the penguins! The zoo keeper is like the global scope — they have the keys to access every enclosure, to restock food, tend to sick animals, etc.
