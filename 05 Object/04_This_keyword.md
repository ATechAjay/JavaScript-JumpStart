# What's the THIS keyword

So let's start by defining what the `this` keyword is. In JavaScript, the `this` keyword always refers to an `object`. The thing about it is that the object it refers to will vary depending on how and where this is being called.

> An important comment is that `this` is not a variable – it's a `keyword`, so its value can't be changed or reassigned.

# How to Call this By Itself

If we call this by itself, meaning not within a function, object, or whatever, it will refer to the global window object. If you print it like `console.log('this alone', this);` you'll get this in your `console: [object Window]`.

# How to Call this in an Object Method

But if we call `this` within an object method, like in the following example:

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  getThis: function () {
    return this;
  },
};

console.log("this in object method", person.getThis());
```

And given this, we can use `this` to access other properties and methods from the same object:

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  getFullName: function () {
    return this.name + " " + this.lastName;
  },
};
console.log("this in object method", person.getFullName());
```

# How to Call this in a Function

If we call `this` within a function like in the following example:

```js
function test() {
  console.log("this in a function", this);
}

test();
```

In this case, `this` will now refer again to the general `window` object, and we'll get this in our `console: [object Window]`.

# A note about arrow functions

In arrow functions, JavaScript sets the `this lexically`. This means that the arrow function doesn't create its own execution context but inherits the `this` from the outer function where the arrow function is defined.

In most cases, this means `this` will refer to the `window` object as well:

```js
const show = () => this;
console.log("arrow function this", show());
```

It's important to notice this because, for example, if we try to implement an arrow function to it as an object method, we won't be able to access the object through the `this` keyword:

```js
const person = {
  name: "Pedro",
  surname: "Sanchez",
  sayName: () => this.name + " " + this.surname,
};

console.log(person.sayName());
```

A note about strict-mode

When using strict-mode, calling this within a function will return undefined.

"use strict";

function show() {
console.log(this);
}

show();
Strict mode makes several changes to regular JavaScript semantics:

    Eliminates some JavaScript silent errors by changing them to throw errors.
    Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
    Prohibits some syntax likely to be defined in future versions of ECMAScript.

How to Use this in an Event Listener

When using this in an event listener, this will refer to the DOM element that fired the event.

document.getElementById('testBtn').addEventListener('click', function() {
console.log('this in a event', this);
})

In our case, we added the event listener to a button element: <button id="testBtn">TEST</button>
this Methods (call, apply and bind)
javascript provides three native methods that can be used to manipulate the way the this keyword behaves. These methods are call, apply and bind. Let's see how they work.
How to Use the Call Method
Said in a simpler way, we can call a method indicating to which object the keyword this will refer to.
const person1 = {
name: 'Pedro',
surname: 'Sanchez',
sayName: function() {
return this.name + " " + this.surname;
}
}

const person2 = {
name: 'Jimena',
surname: 'Juarez'
}

console.log(person1.sayName.call(person2));
Here we have two person objects. Each with its name and surname properties, and the person1 object has a sayName method.

Then we call the person1 sayName method in the following way: person1.sayName.call(person2).

By doing this, we're indicating that when the sayName method executes, the this keyword won't refer to the object that "owns" the method (person1) but to the object we passed as parameter (person2).
Keep in mind that if the given method accepts arguments, we can pass them as well when we invoke it with call:

const person1 = {
name: 'Pedro',
surname: 'Sanchez',
sayName: function(city, country) {
return this.name + " " + this.surname + ", " + city + ", " + country;
}
}

const person2 = {
name: 'Jimena',
surname: 'Juarez'
}

console.log(person1.sayName.call(person2, "DF", "Mexico"));
How to Use the Apply Method

The apply method works very similarly to call. The only difference between them is that call accepts parameters as a list separated by colons (as the last example we saw), and apply accepts them as an array.

So if we want to replicate the same example using apply we'd have to do it like this:
const person1 = {
name: 'Pedro',
surname: 'Sanchez',
sayName: function(city, country) {
return this.name + " " + this.surname + ", " + city + ", " + country;
}
}

const person2 = {
name: 'Jimena',
surname: 'Juarez'
}

console.log(person1.sayName.apply(person2, ["DF", "Mexico"]));
How to Use the Bind Method

Same as call and apply , the bind method indicates the object to which the this keyword will refer when a given method executes.

But the difference with bind is that it will return a new function, without executing it. While with call and apply the function executed right away, using bind we must execute it separately.
const person1 = {
name: 'Pedro',
surname: 'Sanchez',
sayName: function() {
return this.name + " " + this.surname
}
}

const person2 = {
name: 'Jimena',
surname: 'Juarez'
}

const sayPerson2Name = person1.sayName.bind(person2)

console.log(sayPerson2Name())
