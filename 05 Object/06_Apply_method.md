# The apply() method

The apply method is very similar to the [call() method](05_Call_method.md), The only difference is their way of `passing arguments` to the function.

The `apply()` method takes arguments as an `array`, but the `call( )` method takes arguments separately as we already know in the last section.

```js
const person1 = {
  firstName: "Ajay",
  lastName: "Yadav",
  fullName(dist, state, country) {
    console.log(
      `${this.firstName} ${this.lastName} from ${dist} ${state} ${country}`
    );
  },
};

person1.fullName("Siwan", "Bihar", "India.");
// Ajay Yadav from Siwan Bihar India.

const person2 = {
  firstName: "Narendra",
  lastName: "Modi",
};

const method = person1.fullName; // Assign the function.
method.apply(person2, ["Patel Nagar", " Gujarat", "India."]);
// Narendra Modi from Patel Nagar  Gujarat India.
```

As you can see in the last line of the above code snippet, I have passed two parameters to the `apply()` method:

1. An object, now the `this` keyword is pointing to the `person2` object.
2. An array as the second parameter of the `apply()` method.

# Improvement, Store an array into seprate variable

We can also pass a variable containing array items as the second parameter of the apply() method. Let's see:

1. First, we need to create an array.

```js
const person2Add = ["Patel Nagar", " Gujarat", "India."];
```

2. And then at the place of second parameter we can use the array variable.

```js
const person2Add = ["Patel Nagar", "Gujarat", "India."];
method.apply(person2, person2Add);
```
