"# emergency-hotline" 

1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:
getElementById returns a single element with the specified ID.
getElementsByClassName returns a live HTMLCollection of elements with the given class.
querySelector returns the first element that matches a CSS selector, while querySelectorAll returns a static NodeList of all matching elements.

2. How to create and insert a new element into DOM:
Creating a new element using document.createElement("tagName"), then set its content or attributes, and insert it using methods like appendChild().

3. Event Bubbling and its working process:
Event bubbling is a process where an event starts from the target element and propagates upward through its parent elements, triggering any relevant event handlers along the way.

4. Event Delegation in JavaScript and its usefulness:
Event delegation involves attaching a single event listener to a parent element to manage events for its child elements. It's useful for improving performance and handling dynamically added elements.

5. Difference between preventDefault() and stopPropagation() methods:
preventDefault() stops the default action (like following a link or submitting a form).
stopPropagation() prevents the event from bubbling up to parent elements.