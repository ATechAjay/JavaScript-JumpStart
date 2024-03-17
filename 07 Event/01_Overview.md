What is an event?

Events are things that happen in the system you are programming — the system produces (or "fires") a signal of some kind when an event occurs, and provides a mechanism by which an action can be automatically taken (that is, some code running) when the event occurs. Events are fired inside the browser window, and tend to be attached to a specific item that resides in it. This might be a single element, a set of elements, the HTML document loaded in the current tab, or the entire browser window. There are many different types of events that can occur.

For example:
The user selects, clicks, or hovers the cursor over a certain element.
The user chooses a key on the keyboard.
The user resizes or closes the browser window.
A web page finishes loading.
A form is submitted.
A video is played, paused, or ends.
An error occurs.
To react to an event, you attach an event handler to it.
that runs when the event fires. When such a block of code is defined to run in response to an event, we say we are registering an event handler. Note: Event handlers are sometimes called event listeners — they are pretty much interchangeable for our purposes, although strictly speaking, they work together. The listener listens out for the event happening, and the handler is the code that is run in response to it happening.

Note: Web events are not part of the core JavaScript language — they are defined as part of the APIs built into the browser.
<button>Change color</button>
it adds an event handler to the button's "click" event, and the handler reacts to the event by setting the page background to a random color:
const btn = document.querySelector("button");functionrandom(number){return Math.floor(Math.random()\*(number +1));} btn.addEventListener("click",()=>{const rndCol =`rgb(${random(255)}, ${random(255)}, ${random(255)})`; document.body.style.backgroundColor = rndCol;});
Using addEventListener()
objects that can fire events have an addEventListener() method, and this is the recommended mechanism for adding event handlers.
const btn = document.querySelector("button");functionrandom(number){return Math.floor(Math.random()\*(number +1));} btn.addEventListener("click",()=>{const rndCol =`rgb(${random(255)}, ${random(255)}, ${random(255)})`; document.body.style.backgroundColor = rndCol;});
So it defines an addEventListener() function, which we are calling here. We're passing in two parameters:
the string "click", to indicate that we want to listen to the click event.
a function to call when the event happens. In our case, the function generates a random RGB color and sets the background-color of the page <body> to that color.
It is fine to make the handler function a separate named function, like this:
const btn = document.querySelector("button");functionrandom(number){return Math.floor(Math.random()\*(number +1));}functionchangeBackground(){const rndCol =`rgb(${random(255)}, ${random(255)}, ${random(255)})`; document.body.style.backgroundColor = rndCol;} btn.addEventListener("click", changeBackground);
Some events, such as click, are available on nearly any element. Others are more specific and only useful in certain situations: for example, the play event is only available on some elements, such as <video>.
Removing listeners
If you've added an event handler using addEventListener(), you can remove it again using the removeEventListener() method. For example, this would remove the changeBackground() event handler:
btn.removeEventListener("click", changeBackground);
Adding multiple listeners for a single event
By making more than one call to addEventListener(), providing different handlers, you can have multiple handlers for a single event:
myElement.addEventListener("click", functionA); myElement.addEventListener("click", functionB
Both functions would now run when the element is clicked.
Other event listener mechanisms
We recommend that you use addEventListener() to register event handlers. It's the most powerful method and scales best with more complex programs. However, there are two other ways of registering event handlers that you might see: event handler properties and inline event handlers.
Event handler properties
Objects (such as buttons) that can fire events also usually have properties whose name is on followed by the name of the event. For example, elements have a property onclick. This is called an event handler property.
const btn = document.querySelector("button");functionrandom(number){return Math.floor(Math.random()\*(number +1));} btn.onclick=()=>{const rndCol =`rgb(${random(255)}, ${random(255)}, ${random(255)})`; document.body.style.backgroundColor = rndCol;};
You can also set the handler property to a named function:
const btn = document.querySelector("button");functionrandom(number){return Math.floor(Math.random()\*(number +1));}functionbgChange(){const rndCol =`rgb(${random(255)}, ${random(255)}, ${random(255)})`; document.body.style.backgroundColor = rndCol;} btn.onclick = bgChange;
With event handler properties, you can't add more than one handler for a single event. For example, you can call addEventListener('click', handler) on an element multiple times, with different functions specified in the second argument:
element.addEventListener("click", function1); element.addEventListener("click", function2)
This is impossible with event handler properties because any subsequent attempts to set the property will overwrite earlier ones:
element.onclick = function1; element.onclick = function2;
Inline event handlers — don't use these
You might also see a pattern like this in your code:
<buttononclick="bgChange()">Press me</button>
functionbgChange(){const rndCol =`rgb(${random(255)}, ${random(255)}, ${random(255)})`; document.body.style.backgroundColor = rndCol;}
the attribute value is literally the JavaScript code you want to run when the event occurs. The above example invokes a function defined inside a <script> element on the same page, but you could also insert JavaScript directly inside the attribute, for example:
<buttononclick="alert('Hello, this is my old-fashioned event handler!');"> Press me </button>
You can find HTML attribute equivalents for many of the event handler properties; however, you shouldn't use these they are considered bad practice. It might seem easy to use an event handler attribute if you are doing something really quick, but they quickly become unmanageable and inefficient.
You should never use the HTML event handler attributes — those are outdated, and using them is bad practice.
Event objects
Sometimes, inside an event handler function, you'll see a parameter specified with a name such as event, evt, or e. This is called the event object, and it is automatically passed to event handlers to provide extra features and information.
const btn = document.querySelector("button");functionrandom(number){return Math.floor(Math.random()\*(number +1));}functionbgChange(e){const rndCol =`rgb(${random(255)}, ${random(255)}, ${random(255)})`; e.target.style.backgroundColor = rndCol; console.log(e);} btn.addEventListener("click", bgChange);
Here you can see we are including an event object, e, in the function, and in the function setting a background color style on e.target — which is the button itself. The target property of the event object is always a reference to the element the event occurred upon. So, in this example, we are setting a random background color on the button, not the page.
Note: You can use any name you like for the event object — you just need to choose a name that you can then use to reference it inside the event handler function. e/evt/event is most commonly used by developers because they are short and easy to remember. It's always good to be consistent — with yourself, and with others if possible.
Preventing default behavior
Sometimes, you'll come across a situation where you want to prevent an event from doing what it does by default.
for example, a custom registration form. When you fill in the details and click the submit button, the natural behavior is for the data to be submitted to a specified page on the server for processing, and the browser to be redirected to a "success message" page
The trouble comes when the user has not submitted the data correctly — as a developer, you want to prevent the submission to the server and give an error message saying what's wrong and what needs to be done to put things right.
First, a simple HTML form that requires you to enter your first and last name:

<form><div><labelfor="fname">First name: </label><inputid="fname"type="text"/></div><div><labelfor="lname">Last name: </label><inputid="lname"type="text"/></div><div><inputid="submit"type="submit"/></div></form><p></p>
 Now some JavaScript — here we implement a very simple check inside a handler for the submit event (the submit event is fired on a form when it is submitted) that tests whether the text fields are empty. If they are, we call the preventDefault() function on the event object — which stops the form submission — and then display an error message in the paragraph below our form to tell the user what's wrong:
const form = document.querySelector("form");const fname = document.getElementById("fname");const lname = document.getElementById("lname");const para = document.querySelector("p"); form.addEventListener("submit",(e)=>{if(fname.value ===""|| lname.value ===""){ e.preventDefault(); para.textContent ="You need to fill in both names!";}});
Obviously, this is pretty weak form validation — it wouldn't stop the user from validating the form with spaces or numbers entered into the fields, for example — but it is OK for example purposes.
Event bubbling
Event bubbling describes how the browser handles events targeted at nested elements.
Setting a listener on a parent element
<divid="container"><button>Click me!</button></div><preid="output"></pre>
 inside another element, a <div> element. We say that the <div> element here is the parent of the element it contains. What happens if we add a click event handler to the parent, then click the button?
const output = document.querySelector("#output");functionhandleClick(e){ output.textContent +=`You clicked on a ${e.currentTarget.tagName} element\n`;}const container = document.querySelector("#container"); container.addEventListener("click", handleClick);
You'll see that the parent fires a click event when the user clicks the button:

You clicked on a DIV element

This makes sense: the button is inside the <div>, so when you click the button you're also implicitly clicking the element it is inside.
Bubbling example

What happens if we add event listeners to the button and the parent?

<body><divid="container"><button>Click me!</button></div><preid="output"></pre></body>
 try adding click event handlers to the button, its parent (the <div>), and the <body> element that contains both of them:
const output = document.querySelector("#output");functionhandleClick(e){ output.textContent +=`You clicked on a ${e.currentTarget.tagName} element\n`;}const container = document.querySelector("#container");const button = document.querySelector("button"); document.body.addEventListener("click", handleClick); container.addEventListener("click", handleClick); button.addEventListener("click", handleClick);
You'll see that all three elements fire a click event when the user clicks the button:

You clicked on a BUTTON element
You clicked on a DIV element
You clicked on a BODY element

    the click on the button fires first
    followed by the click on its parent (the <div> element)
    followed by the <div> element's parent (the <body> element).

We describe this by saying that the event bubbles up from the innermost element that was clicked.

This behavior can be useful and can also cause unexpected problems.
Video player example

In this example our page contains a video, which is hidden initially, and a button labeled "Display video". We want the following interaction:

    When the user clicks the "Display video" button, show the box containing the video, but don't start playing the video yet.
    When the user clicks on the video, start playing the video.
    When the user clicks anywhere in the box outside the video, hide the box.

The HTML looks like this:
<button>Display video</button><divclass="hidden"><video><sourcesrc=""type="video/webm"/><p> Your browser doesn't support HTML video. Here is a <ahref="rabbit320.mp4">link to the video</a> instead. </p></video></div>
a <div> element which initially has a class="hidden" attribute
We're using CSS to hide elements with the "hidden" class set.
const btn = document.querySelector("button");const box = document.querySelector("div");const video = document.querySelector("video"); btn.addEventListener("click",()=> box.classList.remove("hidden")); video.addEventListener("click",()=> video.play()); box.addEventListener("click",()=> box.classList.add("hidden"));
This adds three 'click' event listeners:

    one on the <button>, which shows the <div> that contains the <video>
    one on the <video>, which starts playing the video
    one on the <div>, which hides the video

You should see that when you click the button, the box and the video it contains are shown. But then when you click the video, the video starts to play, but the box is hidden again!

The video is inside the <div> — it is part of it — so clicking the video runs both the event handlers, causing this behavior.
Fixing the problem with stopPropagation()

As we saw in the last section, event bubbling can sometimes create problems, but there is a way to prevent it. The Event object has a function available on it called stopPropagation() which, when called inside an event handler, prevents the event from bubbling up to any other elements.
We can fix our current problem by changing the JavaScript to this:
const btn = document.querySelector("button");const box = document.querySelector("div");const video = document.querySelector("video"); btn.addEventListener("click",()=> box.classList.remove("hidden")); video.addEventListener("click",(event)=>{ event.stopPropagation(); video.play();}); box.addEventListener("click",()=> box.classList.add("hidden"));
All we're doing here is calling stopPropagation() on the event object in the handler for the <video> element's 'click' event. This will stop that event from bubbling up to the box
Event capture

An alternative form of event propagation is event capture. This is like event bubbling but the order is reversed: so instead of the event firing first on the innermost element targeted, and then on successively less nested elements, the event fires first on the least nested element, and then on successively more nested elements, until the target is reached.

Event capture is disabled by default. To enable it you have to pass the capture option in addEventListener().

<body><divid="container"><button>Click me!</button></div><preid="output"></pre></body>
const output = document.querySelector("#output");functionhandleClick(e){ output.textContent +=`You clicked on a ${e.currentTarget.tagName} element\n`;}const container = document.querySelector("#container");const button = document.querySelector("button"); document.body.addEventListener("click", handleClick,{capture:true}); container.addEventListener("click", handleClick,{capture:true}); button.addEventListener("click", handleClick);
In this case, the order of messages is reversed: the <body> event handler fires first, followed by the <div> event handler, followed by the <button> event handler:

You clicked on a BODY element
You clicked on a DIV element
You clicked on a BUTTON element

Why bother with both capturing and bubbling? In the bad old days, when browsers were much less cross-compatible than now, Netscape only used event capturing, and Internet Explorer used only event bubbling. When the W3C decided to try to standardize the behavior and reach a consensus, they ended up with this system that included both, which is what modern browsers implement.
By default almost all event handlers are registered in the bubbling phase, and this makes more sense most of the time.
Event delegation

In the last section, we looked at a problem caused by event bubbling and how to fix it. Event bubbling isn't just annoying, though: it can be very useful. In particular, it enables event delegation. In this practice, when we want some code to run when the user interacts with any one of a large number of child elements, we set the event listener on their parent and have events that happen on them bubble up to their parent rather than having to set the event listener on every child individually.
Let's go back to our first example, where we set the background color of the whole page when the user clicked a button. Suppose that instead, the page is divided into 16 tiles, and we want to set each tile to a random color when the user clicks that tile.
<divid="container"><divclass="tile"></div><divclass="tile"></div><divclass="tile"></div><divclass="tile"></div><divclass="tile"></div><divclass="tile"></div><divclass="tile"></div><divclass="tile"></div><divclass="tile"></div><divclass="tile"></div><divclass="tile"></div><divclass="tile"></div><divclass="tile"></div><divclass="tile"></div><divclass="tile"></div><divclass="tile"></div></div>
We have a little CSS, to set the size and position of the tiles:
.tile{height: 100px;width: 25%;float: left;}
Now in JavaScript, we could add a click event handler for every tile. But a much simpler and more efficient option is to set the click event handler on the parent, and rely on event bubbling to ensure that the handler is executed when the user clicks on a tile:
functionrandom(number){return Math.floor(Math.random()\* number);}functionbgChange(){const rndCol =`rgb(${random(255)}, ${random(255)}, ${random(255)})`;return rndCol;}const container = document.querySelector("#container"); container.addEventListener("click",(event)=>{ event.target.style.backgroundColor =bgChange();});
Note: In this example, we're using event.target to get the element that was the target of the event (that is, the innermost element). If we wanted to access the element that handled this event (in this case the container) we could use event.currentTarget.
It's not just web pages
You can also use JavaScript to build cross-browser add-ons — browser functionality enhancements — using a technology called WebExtensions. The event model is similar to the web events model, but a bit different
