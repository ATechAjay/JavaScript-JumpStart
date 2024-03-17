Document
The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree .
The DOM tree includes elements such as <body> and <table> , among many ot
hers . It provides functionality globally to the document, like how to obtain the page's URL and create new elements in the document.
Constructor Document() Creates a new Document object.
Instance properties This interface also inherits from the Node and EventTarget interfaces.
Instance methods
Document.createAttribute() Creates a new Attr object and returns it.
Document.createElement() Creates a new element with the given tag name.
Document.createEvent() Creates an event object.
Document.createTextNode() Creates a text node.
Document.prepend() Inserts a set of Node objects or string objects before the first child of the document.
Document.querySelector() Returns the first Element node within the document, in document order, that matches the specified selectors.
Document.querySelectorAll() Returns a list of all the Element nodes within the document that match the specified selectors.
Extension for HTML documents
The Document interface for HTML documents inherit from the HTMLDocument interface or is extended for such documents:
Document.clear() Deprecated This method does nothing.
Document.close() Closes a document stream for writing.
Document.write() Writes text in a document.
Events
Listen to these events using addEventListener() or by assigning an event listener to the oneventname property of this interface
scroll Fired when the document view or an element has been scrolled.
wheel Fired when the user rotates a wheel button on a pointing device (typically a mouse).
Clipboard events
copy Fired when the user initiates a copy action through the browser's user interface.
cut Fired when the user initiates a cut action through the browser's user interface.
paste Fired when the user initiates a paste action through the browser's user interface.
Lost highlights on this page:
Document.body

Returns the <body> or <frameset> node of the current document.
Document.children Read only

Returns the child elements of the current document.
Document.fonts

Returns the FontFaceSet interface of the current document.
Document.forms Read only

Returns an HTMLCollection of the <form> elements in the document.
Document.head Read only

Returns the <head> element of the current document.
Document.images Read only

Returns an HTMLCollection of the images in the document.
Document.links Read only

Returns an HTMLCollection of the hyperlinks in the document.
Document.domain Deprecated

Gets/sets the domain of the current document.
Document.append()

Inserts a set of Node objects or string objects after the last child of the document.
Document.createAttribute()

Creates a new Attr object and returns it.
Document.createElement()

Creates a new element with the given tag name.
Document.createEvent()

Creates an event object.
Document.append()

Inserts a set of Node objects or string objects after the last child of the document.
Document.createAttribute()

Creates a new Attr object and returns it.
Document.createElement()

Creates a new element with the given tag name.
Document.createEvent()

Creates an event object.
Document.createTextNode()

Creates a text node.
