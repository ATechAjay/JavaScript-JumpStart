# How to get the Parent Element

We can get the parent node of an element by using the JavaScript parentNode attribute of the Node object.

```js
let parent = node.parentNode;
```

The `parentNode` is read-only property. The `Document` and `DocumentFragment` nodes do not have a parent. Therefore, the `parentNode` will always be `null`.

If you create a new node but haven’t attached it to the DOM tree, the `parentNode` of that node will also be `null`.

JavaScript parentNode example

```html
<body>
  <div id="main">
    <p class="note">This is a note!</p>
  </div>

  <script>
    let note = document.querySelector(".note");
    console.log(note.parentNode);
  </script>
</body>
```

Getting Child Elements of a Node in JavaScript
Suppose that you have the following HTML fragment:

<body>
  <ul id="menu">
    <li class="first">Home</li>
    <li>Products</li>
    <li class="current">Customer Support</li>
    <li>Careers</li>
    <li>Investors</li>
    <li>News</li>
    <li class="last">About Us</li>
  </ul>
</body>
Get the first child element

To get the first child element of a specified element, you use the firstChild property of the element:

let firstChild = parentElement.firstChild;
Code language: JavaScript (javascript)

If the parentElement does not have any child element, the firstChild returns null. The firstChild property returns a child node which can be any node type such as an element node, a text node, or a comment node. The following script shows the first child of the #menu element:

let content = document.getElementById('menu');
let firstChild = content.firstChild.nodeName;
console.log(firstChild);
Output:

#text
Code language: CSS (css)

The Console window show #text because a text node is inserted to maintain the whitespace between the openning <ul> and <li> tags. This whitespace creates a #text node.

Note that any whitespace such as a single space, multiple spaces, returns, and tabs will create a #text node. To remove the #text node, you can remove the whitespaces as follows:

<article id="content"><h2>Heading</h2><p>First paragraph</p></article>
Code language: HTML, XML (xml)

Or to get the first child with the Element node only, you can use the firstElementChild property:
let firstElementChild = parentElement.firstElementChild;
let content = document.getElementById('menu');
console.log(content.firstElementChild);
Code language: JavaScript (javascript)

Output:

<li class="first">Home</li>
Get the last child element

To get the last child element of a node, you use the lastChild property:

let lastChild = parentElement.lastChild;
Code language: JavaScript (javascript)

In case the parentElement does not have any child element, the lastChild returns null. Similar to the the firstChild property, the lastChild property returns the first element node, text node, or comment node. If you want to select only the last child element with the element node type, you use the lastElementChild property:

let lastChild = parentElement.lastElementChild;
let menu = document.getElementById('menu');
console.log(main.lastElementChild);
Code language: JavaScript (javascript)

Output:

<li class="last">About Us</li>
Code language: HTML, XML (xml)

Get all child elements

To get a live NodeList of child elements of a specified element, you use the childNodes property:
let children = parentElement.childNodes;
Code language: JavaScript (javascript)

The childNodes property returns all child elements with any node type. To get the child element with only the element node type, you use the children property:

let children = parentElement.children;
Summary

The firstChild and lastChild return the first and last child of a node, which can be any node type including text node, comment node, and element node.
The firstElementChild and lastElementChild return the first and last child Element node.
The childNodes returns a live NodeList of all child nodes of any node type of a specified node. The children return all child Element nodes of a specified node.
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
JavaScript Siblings
how to select the next siblings, previous siblings, and all siblings of an element.

Let’s say you have the following list of items:

<ul id="menu">
    <li>Home</li>
    <li>Products</li>
    <li class="current">Customer Support</li>
    <li>Careers</li>
    <li>Investors</li>
    <li>News</li>
    <li>About Us</li>
</ul>
Code language: HTML, XML (xml)

Get the next siblings

To get the next sibling of an element, you use the nextElementSibling attribute:

let nextSibling = currentNode.nextElementSibling;
Code language: JavaScript (javascript)

The nextElementSibling returns null if the specified element is the last one in the list.

The following example uses the nextElementSibling property to get the next sibling of the list item that has the current class:

let current = document.querySelector('.current');
let nextSibling = current.nextElementSibling;

console.log(nextSibling);
Code language: JavaScript (javascript)

Output:

<li>Careers</li>
To get all the next siblings of an element, you can use the following code:

let current = document.querySelector('.current');
let nextSibling = current.nextElementSibling;

while(nextSibling) {
console.log(nextSibling);
nextSibling = nextSibling.nextElementSibling;
}
Code language: JavaScript (javascript)

Get the previous siblings

To get the previous siblings of an element, you use the previousElementSibling attribute:

let current = document.querySelector('.current');
let prevSibling = currentNode.previousElementSibling;
Code language: JavaScript (javascript)

The previousElementSibling property returns null if the current element is the first one in the list.

The following example uses the previousElementSibling property to get the previous siblings of the list item that has the current class:

let current = document.querySelector('.current');
let prevSiblings = current.previousElementSibling;

console.log(prevSiblings);
Code language: JavaScript (javascript)

And the following example selects all the previous siblings of the list item that has the current class:

let current = document.querySelector('.current');
let prevSibling = current.previousElementSibling;
while(prevSibling) {
console.log(prevSibling);
prevSibling = current.previousElementSibling;
}
Code language: JavaScript (javascript)

Get all siblings of an element

To get all siblings of an element, we’ll use the logic:

    First, select the parent of the element whose siblings you want to find.
    Second, select the first child element of that parent element.
    Third, add the first element to an array of siblings.
    Fourth, select the next sibling of the first element.
    Finally, repeat the 3rd and 4th steps until there are no siblings left. In case the sibling is the original element, skip the 3rd step.

The following function illustrates the steps:

let getSiblings = function (e) {
// for collecting siblings
let siblings = [];
// if no parent, return no sibling
if(!e.parentNode) {
return siblings;
}
// first child of the parent node
let sibling = e.parentNode.firstChild;

    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;

};
Summary

The nextElementSibling returns the next sibling of an element or null if the element is the last one in the list.
The previousElementSibling returns the previous sibling of an element or null if the element is the first one in the list.
To get all siblings of an element, you can use a helper function that utilizes the nextElementSibling property.
