# location object
>So far, you learnt about different objects in the BOM hierarchy for accessing the history of URLs visited by the user or to know the properties of the browser. However, which object should be used to programmatically refresh the current page or navigate to a new page? 

>BOM hierarchy has a 'location' object for this. It contains information about the current URL in the browser window. The information can be accessed or manipulated using the following properties and methods. 

>If this is the URL: http://localhost:8080/JS_Demos/myLocationFile.html, properties have the following interpretation: 

**href** 
>It contains the entire URL as a string. 
```javascript
    console.log(location.href); 
    //Returns http://localhost:8080/JS_Demos/myLocationFile.html 
```
**hostname**
>It contains the hostname part of the URL. 
```javascript
    console.log(location.hostname); 
    //Returns localhost 
```
**port** 
>It contains a port number associated with the URL. 
```javascript
    console.log(location.port) 
    //Returns 8080 
```
**pathname** 
>It contains a filename or path specified by the object. 
```javascript
    console.log(location.pathname); 
    //Returns /JS_Demos/myLocationFile.html 
```
## methods
>'location' object gives the following methods to reload the current page or to navigate to a new page: 

**assign()**
>Loads new HTML document. 
```javascript
    location.assign('http://www.facebook.com'); 
    //Opens facebook page 
```

**reload()**
>Reloads current HTML. 
```javascript
    location.reload(); 
    //Current document is reloaded 
```