# Why DOM is essential

1. Create HTML elements.
2. Modify the HTML elements.
3. Delete the HTML elements.

# Node and its type

In JavaScript, the Document Object Model (DOM) represents the structure of an HTML as a tree of objects. Each object in the DOM tree is called a NODE.

There are several types of nodes in the DOM tree; here are a few of them:

a. Document Node
b. Element Node
c. Text Node
d. Comment Node
e. Attribute Node, and many more...

a. Document Node

The root node of the Document Object Model (DOM) tree is called the `Document Node`. It represents the entire document and serves as the starting point for the HTML. In a web browser, it is typically accessed using a `document`.

From the document object, we can traverse the DOM tree to access and manipulate other elements and nodes within the `document`.

```js
let documentNode = document;
```

b. Element Node

Element nodes represent HTML elements in the `document`. Such as `<div>`, `<p>`, `<a>`, etc. They form the structure of the DOM tree and can contain other nodes (like `<p>` in the below example), including other elements, text nodes, attributes, etc.

```html
<div>
  <p>Text node goes here...</p>
</div>
```

c. Text Node

Text nodes represent the `textual content` within an element. For example, the text content inside a `<p>` element would be represented by a `text node`.

> It is important to note that text nodes cannot have child nodes.

```html
<p>This is actual text node.</p>
<!--  -->
```

c. Comment Node

Comment nodes represent comments in the HTML source code. They can be accessed using the `Comment` object and are typically found within the DOM tree where the corresponding comment exists in the HTML.

We can also create an HTML comment from JavaScript using `createComment()` method.

```html
<!-- The comment goes here... -->
```

d. Attribute Node

An `Attribute Node` is a specific type of node in the DOM that represents an `attribute` of an HTML element.

```html
<img src="example.jpg" alt="An example image" />
```

In the above example, The `src` and `alt` attributes are attributes of the `<img>` element. Each of these attributes is represented as an Attribute Node in the DOM. Attribute Nodes are child nodes of the element they belong to.

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

How the DOM API is organized behind the scenes?

EventTarget?
