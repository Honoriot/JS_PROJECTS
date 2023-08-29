# BOM
## Browser Object Model

> **Window** is the root object
>- History
>- Navigator
>- Location
>- Document

## Document Object from **DOM**

**getElementById()**
>Finds element with id 'x' and returns an object of type element 

**getElementsByTagName(x)**
>Find element(s) whose tag name is 'x' and return NodeList, which is a list of element objects. 

**getElementsByClassName()**
>Find element(s) whose class attribute's values is 'x' and returns NodeList, which is list of element objects 

**querySelectorAll()**
>Find element(s) by CSS selectors and returns nodelist which is a list of element objects

## Document Object

**document.body**
>returns body element

**document.forms**
>return all the form element

**document.head**
>returns the head element

**document.images**
>return all image elements

### ***document.element.attributes***

> It is used to set new values to given attributes. 
```javascript
    document.getElementById("div1").attributes[0].value;
    document.getElementById("div1").setAttribute('class', 'div2'); 
```
## window object

**window.innerHeight**
>This property holds the inner height of the window’s content area. 

**window.innerWidth**
>This property holds the inner width of the window's content area.

**window.outerHeight**
>This property holds the outer height of the window including toolbars and scrollbars. 

**window.outerWidth**
>This property holds the outer width of the window including toolbars and scrollbars. 