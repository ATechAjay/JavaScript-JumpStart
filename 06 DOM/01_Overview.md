https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents/document-window-navigator.png

When writing web pages and apps, one of the most common things you'll want to do is manipulate the document structure in some way. This is usually done by using the Document Object Model (DOM), a set of APIs for controlling HTML and styling information that makes heavy use of the Document object.
The important parts of a web browser Web browsers are very complicated pieces of software with a lot of moving parts, many of which can't be controlled or manipulated by a web developer using JavaScript. You might think that such limitations are a bad thing, but browsers are locked down for good reasons, mostly centering around security. Imagine if a website could get access to your stored passwords or other sensitive information, and log into websites as if it were you?
Despite the limitations, Web APIs still give us access to a lot of functionality that enable us to do a great many things with web pages.
The window is the browser tab that a web page is loaded into; this is represented in JavaScript by the Window object. Using methods available on this object you can do things like return the window's size (see Window.innerWidth and Window.innerHeight ), manipulate the document loaded into that window, store data specific to that document on the client-side (for example using a local database or other storage mechanism), attach an event handler to the current window, and more.
The navigator represents the state and identity of the browser (i.e. the user-agent) as it exists on the web. In JavaScript, this is represented by the Navigator object. You can use this object to retrieve things like the user's preferred language, a media stream from the user's webcam, etc.
The document (represented by the DOM in browsers) is the actual page loaded into the window, and is represented in JavaScript by the Document object. You can use this object to return and manipulate information on the HTML and CSS that comprises the document, for example get a reference to an element in the DOM, change its text content, apply new styles to it, create new elements and add them to the current element as children, or even delete it altogether.
The document object model
The document currently loaded in each one of your browser tabs is represented by a document object model.
This is a "tree structure" representation created by the browser that enables the HTML structure to be easily accessed by programming languages
<! doctype html > < html lang = " en-US " > < head > < meta charset = " utf-8 " /> < title > Simple DOM example </ title > </ head > < body > < section > < img src = " dinosaur.png " alt = " A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth. " /> < p > Here we will add a link to the < a href = " https://www.mozilla.org/ " > Mozilla homepage </ a > </ p > </ section > </ body > </ html

> Note: This DOM tree diagram was created using Ian Hickson's Live DOM viewer .
> Each entry in the tree is called a node . You can see in the diagram above that some nodes represent elements (identified as HTML , HEAD , META and so on) and others represe
> nt text (identified as #text ). There are other types of nodes as well , but these are the main ones you'll encounter.
> Nodes are also referred to by their position in the tree relative to other nodes:
> Root node : The top node in the tree, which in the case of HTML is always the HTML node (other markup vocabularies like SVG and custom XML will have different root elements).
> Child node : A node directly inside another node. For example, IMG is a child of SECTION in the above example.
> Descendant node : A node anywhere inside another node. For example, IMG is a child of SECTION in the above example, and it is also a descendant. IMG is not a child of BODY , as it is two levels below it in the tree, but it is a descendant of BODY .
> Parent node : A node which has another node inside it. For example, BODY is the parent node of SECTION in the above example.
> ibling nodes : Nodes that sit on the same level in the DOM tree. For example, IMG and P are siblings in the above example.
> It is useful to familiarize yourself with this terminology before working with the DOM, as a number of the code terms you'll come across make use of them.

Document Object Model (DOM)
The Document Object Model ( DOM ) connects web pages to scripts or programming languages by representing the structure of a document
such as the HTML representing a web page—in memory. Usually it refers to JavaScript, even though modeling HTML, SVG, or XML documents as objects are not part of the core JavaScript language.
The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.
Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.
