# What is call() method

The `call()` method invokes a method (or a function) from the owner object. An object can invoke a method that belongs to another object using the `call()` method.

### An example:

I've created an object called `creator1`. Inside this object, there are 3 properties, and the last one is a method (function) of the object.

So,how do I call this function that is kept inside this object?

```js
let creator1 = {
  name: "Ajay Yadav",
  niche: "Front-end developer",
  intro() {
    console.log(`${this.name} is a ${this.niche}.`);
  },
};
```

It so simple, We can call this function uisng the dot (.) operator followed by parentheses ().

```js
creator1.intro(); // Ajay Yadav is a Front-end developer.
```

Now let suppose there is an another object called `creator2`. And if we want to access the same method or function of the first `creator1` object, then how can we do it?

Well, here we can leverage the power of `call()` method without having it in the second `creator2` object. But before implementing it, let see the syntax.

# Syntax of the call() method

Here is the syntax of the call() method:

```js
functionName.call(thisArgs, Arg1, Arg2, Arg3,...,ArgN);
```

Syntax explanation:

- functionName: A function that is kept inside the owner object.
- thisArgs: It's a new object in which we are going to use the owner object's method.
- Arg1, Arg2, Arg3,...,ArgN: These are the arguments passed into the method of the owner object.

> Functions are first-class-citizens in JavaScript. That's why we can assign a function to a variable as a value but without parentheses.

Such as:

```js
const sum = function (a, b) {
  return a + b;
};

const assignedFunction = sum;
```

[Coming back to the previous example:](#an-example)
To extract the method of the object, we need to keep it in another variable. And we already know that we can assign a function to a variable as a value.

1. So, first of all, we need to assign the method of the owner object into a separate variable, but without parentheses, because we are not going to call the function but instead store the function as a value in a variable. Such as:

```js
creator1.intro; // It's a function as a value.
```

2. Now we have to invoke the `call()` method using the dot(.) operator followed by the name of the function with parentheses. Like:

```js
creator1.intro.call(); // Invoking the call() method.
```

3. And in the next step, we need to pass the new object in which the owner object's method is being used as the argument of the call() method.

```js
creator1.intro.call(creator2); // Pointing the "this" keyword to the creator2 object.
```

4. Finally, if the method of the owner object received any parameters, then it needed to pass them as the second, third, ... arguments of the call method.

```js
creator1.intro.call(creator2, arg1, arg2,..., argN); // Passing arguments.
```

Since in our case, there are no requirements for any arguments to the method, that's why we did not pass any second arguments to the `call()` method.

Here is the complete code:

```js
let creator1 = {
  name: "Ajay Yadav",
  niche: "Front-end developer",
  intro() {
    console.log(`${this.name} is a ${this.niche}.`);
  },
};

creator1.intro(); // Ajay Yadav is a Front-end developer.
let creator2 = {
  name: "Gulam Anas",
  niche: "Flutter developer",
};

creator1.intro.call(creator2); //Now the "this" keyword is pointing to the "creator2" object.

creator2.intro(); // Gulam Anas is a Flutter developer.
```

# Pass an arguments to the call() method

So, let suppose I want to pass `24_000` as the argument to the object method. In this example, `24_000` is an argument that is passed to the `intro()` function.

```js
let creator1 = {
  name: "Ajay Yadav",
  niche: "Front-end developer",
  intro(followers) {
    console.log(
      `${this.name} is a ${this.niche} and he has ${followers} followers.`
    );
  },
};

let creator2 = {
  name: "Gulam Anas",
  niche: "Flutter developer",
};

creator1.intro.call(creator2, 6_000); //Now the "this" keyword is pointing to the "creator2" object.
```

We can also pass more than one arguments by the call() method to the object's method, here is how:

```js
let creator1 = {
  name: "Ajay Yadav",
  niche: "Front-end developer",
  intro(followers, platform) {
    console.log(
      `${this.name} is a ${this.niche} and he has ${followers} followers on ${platform}.`
    );
  },
};

let creator2 = {
  name: "Gulam Anas",
  niche: "Flutter developer",
};

creator1.intro.call(creator2, 6_000, "Twitter"); //Now the "this" keyword is pointing to the "creator2" object.
```

# Lets improve the code

Since functions are `first-class-citizen` in JavaScript that's why we can store it into a variable. Now we do not need to use the dot (.) operator twice. So, the `intro()` function is now assigned to the `creatorMethod` variable. Like:

```js
let creator1 = {
  name: "Ajay Yadav",
  niche: "Front-end developer",
  intro(followers, platform) {
    console.log(
      `${this.name} is a ${this.niche} and he has ${followers} followers on ${platform}.`
    );
  },
};

const creatorMethod = creator1.intro; // But without parenthese.

let creator2 = {
  name: "Gulam Anas",
  niche: "Flutter developer",
};

creator1.intro.call(creator2, 6_000, "Twitter"); //Now the "this" keyword is pointing to the "creator2" object.
```

# creator1.intro(24000, "Twitter") === creatorMethod(24000, "Twitter") ?

Is it both declarations are the same thing? What do you think?

Well, NO...

```js
const creatorMethod = creator1.intro; // Assign the method to a variable.

creatorMethod(24000, "Twitter"); // But in case "this" is not pointing to anywhere, in result undefined.
creator1.intro(24000, "Twitter"); // "this" points to the "creator1" object.
```

Let's discuss more about it:

```js
creator1.intro(24000, "Twitter");
```

When you call `creator1.intro(24000, "Twitter");`, you are directly invoking the `intro` method on the `creator1` object. In this context, the `this` keyword inside the `intro` method refers to the `creator1` object, and the method executes successfully.

```js
creatorMethod(24000, "Twitter");
```

However, when you assign the `creator1.intro` method to the `creatorMethod` variable and then try to call `creatorMethod(24000, "Twitter");`, the context (the object to which this refers) is lost.

In this case, `creatorMethod` is treated as a regular function, and the `this` keyword is no longer associated with any object. Therefore, the code will not work as expected because `this.name` and `this.niche` inside `creatorMethod` will not refer to any specific object, and it will result in an error.

But to make the `creatorMethod` call work properly, you can use the `call()` method here as well, as you did in your `creator2` object.

```js
creatorMethod.call(creator1, 24000, "Twitter");
```

# Seperate everything, then apply call()

There is no need to put a method or function inside an object; instead, any function can be used as a method of the object.

> In short, we can say that the `call()` method defines the direction of the `this` keyword.

```js
// Seperate function
const intro = function (followers, platform) {
  console.log(
    `${this.name} is a ${this.niche} and he has ${followers} followers on ${platform}.`
  );
};

// Object 1
let creator1 = {
  name: "Ajay Yadav",
  niche: "Front-end developer",
};

// Object 2
let creator2 = {
  name: "Gulam Anas",
  niche: "Flutter developer",
};

// Using the call(), "this" keyword is pointing to the desired object according to our needs.

intro.call(creator1, 24000, "Twitter");
intro.call(creator2, 6000, "Twitter");
```
