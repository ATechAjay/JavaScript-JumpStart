Window
The Window interface represents a window containing a DOM document; the document property points to the DOM document loaded in that window.
A global variable, window , representing the window in which the script is running, is exposed to JavaScript code.
The Window interface is home to a variety of functions, namespaces, objects, and constructors which are not necessarily directly associated with the concept of a user interface window. However, the Window interface is a suitable place to include these items that need to be globally available.
In a tabbed browser, each tab is represented by its own Window object; the global window seen by JavaScript code running within a given tab always represents the tab in which the code is running.
Instance properties
Instance methods
This interface inherits methods from the EventTarget interface.
Lost highlights on this page:
Window.caches Read only

Returns the CacheStorage object associated with the current context. This object enables functionality such as storing assets for offline use, and generating custom responses to requests.
Window.clientInformation Read only

An alias for Window.navigator.
Window.closed Read only

This property indicates whether the current window is closed or not.
Window.console Read only

Returns a reference to the console object which provides access to the browser's debugging console.
Window.document Read only

Returns a reference to the document that the window contains.
Window.fullScreen Non-standard

This property indicates whether the window is displayed in full screen or not.
Window.history Read only

Returns a reference to the history object.
Window.innerHeight Read only

Gets the height of the content area of the browser window including, if rendered, the horizontal scrollbar.
indow.innerWidth Read only

Gets the width of the content area of the browser window including, if rendered, the vertical scrollbar.
Window.menubar Read only

Returns the menubar object.
Window.localStorage Read only

Returns a reference to the local storage object used to store data that may only be accessed by the origin that created it.
Window.location

Gets/sets the location, or current URL, of the window object.
Window.navigator Read only

Returns a reference to the navigator object.
Window.alert()

Displays an alert dialog.
Window.blur()

Sets focus away from the window.
Window.clearInterval()

Cancels the repeated execution set using setInterval().
Window.clearTimeout()

Cancels the delayed execution set using setTimeout().
Window.close()

Closes the current window.
Window.confirm()

Displays a dialog with a message that the user needs to respond to.
Window.fetch()

Starts the process of fetching a resource from the network.
Window.find() Non-standard

Searches for a given string in a window.
Window.focus()

Sets focus on the current window.
Window.getComputedStyle()

Gets computed style for the specified element. Computed style indicates the computed values of all CSS properties of the element.
Window.open()

Opens a new window.
Window.prompt()

Returns the text entered by the user in a prompt dialog.
Window.scroll()

Scrolls the window to a particular place in the document.
Window.setInterval()

Schedules a function to execute every time a given number of milliseconds elapses.
Window.setTimeout()

Schedules a function to execute in a given amount of time.
