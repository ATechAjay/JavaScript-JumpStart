# What are DOM selectors

DOM selectors are used to select HTML elements or nodes or objects. In other words, DOM selectors are used to selecting HTML elements within a document using JavaScript.

# Types of DOM selectors

There are 2 types of DOM selectors.

1. Single element selector (Singular selector)
2. Multiple elements selector (Plural selector)

# Single element selector

We can select only one element of the HTML within a document using a single element selector. These are the following single element selector:

a. getElementById
b. querySelector

# ID selector

We can select an element with its unique ID using the `getElementById` selector. This selector returns `null` if there is no match.

Here is the syntax:

```js
document.getElementById("ID");
```

# Select by query selector

This is also a single element sector, which is used to select any HTML element it can be ID, Class, Element. And it returns the first element.

Here is the syntax:

```js
document.querySelector(".class");
document.querySelector("#Id");
document.querySelector("tag");
```

# Multiple elements selector

We can select multiple HTML elements within a document. These are the following multiple element selector:
a. getElementsByClassName
b. getElementsByTagName
c. querySelectorAll

> We we see `Elements`, think as the multiple element selector.

# Select by the class name

It's a multi-element selector that returns the list of elements like an array, known as `HTMLCollection`. We can access those `HTMLCollection` using an index similar to an array. And of course, we can add multiple classes separated by space.

To apply some style or modified HTML elements, you need to select each item from the `HTMLCollection` by using a loop.

# Select by tag name

This is also used to select multiple HTML elements using the tag names. It also returns the `HTMLCollection` as the output.

Similar to the class name selector, to apply some style or modified HTML elements, you need to select each item from the `HTMLCollection` by using a loop.

# Select by queryselectorAll

This is also used to select multiple HTML elements, but this returns `NodeList` as the output.

We can not modifiy elements as the array but to apply some style or modified HTML elements, you need to select each item from the `NodeList` by using a loop.
