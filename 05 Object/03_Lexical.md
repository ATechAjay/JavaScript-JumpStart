We know that our DNA is transmitted through our forefathers.

Great-grandfather to Grandfather
Grandfather to Father
Father to Son...

Indirectly, could I say that Son has the DNA of all their parents? Like: great-grandfather, grandfather, father.

And if you agree with me, can I write these statements as follows:

- Son is "lexically" associated with father.
- Father is "lexically" associated with grandfather.
- Grandfather is "lexically" associated with Great-Grandfather, and so on...

# Similarly, In JavaScript:

A function that is lexically associated with another function, can access the scope of the parent function. In other words, a child function (Inner function) can get access to thier parent functions variable.

But please, remember vice-versa is not true!

Meaning that the parent function cannot get access to its child function's variable. Or, the inner function's variables are inaccessible from the parent function.

Example 1:
In this example, I have created two variables called "global" but their scope is different.

var global = 69; has a Global scope, While:
var global = 6969; has a Function Scope.

JavaScript first finds the "global" variable inside the function:
a. If that variable is found inside the function, then it will be executed; otherwise...
b. JavaScript looks up its lexical scope, which is a parent "global" variable.

But in our case, thankfully JavaScript finds the "global" variable inside the function, so there is no need to look forward.
