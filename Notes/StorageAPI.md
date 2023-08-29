# localStorage

### This property allows access to object that stores data without any expiration date 
```javascript
    localStorage.setItem('username','Bob'); 
    console.log("Item stored in localStorage is" + localStorage.getItem('username')); 
    //Returns Item stored in localStorage is Bob 
```
# sessionStorage 

### This property allows access to objects that store data valid only for the current session. 
```javascript
    sessionStorage.setItem('password', 'Bob@123'); 
    console.log("Item stored in sessionStorage is " + sessionStorage.getItem('password')); 
    //Returns Item stored in sessionStorage is Bob@123
```
## Methods

>In addition to these methods, 'window' object gives us a few more methods that are helpful in the following way: 
>- open() method, opens a new window. Usage: window.open("http://www.xyz.com"); 
>- close() method, closes the current window. Usage: window.close(); 