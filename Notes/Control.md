## Control Structure
```javascript
    if (expression) {
        //statements
    }
    else{
        // statements
    }
```
> Example 1
```javascript
    n = 10;
    if (n % 2 == 0) {
        console.log("n is even");
    }
    else{
    console.log("n is odd");
    }
```
> Example 2
```javascript
    n = 10;
    if (n > 0) {
        console.log("n is positive"); 
    } else if(n < 0) {
        console.log("n is negative");
    }
    else
    {
        console.log("n is zero");
    }
```
## Switch Case Statement
> Example
```javascript
    choice = 'a';
    switch(choice) {
        case 'a' : console.log("Trip to Paris");
            break;
        case 'b' : console.log("Trip to New York");
            break;
        default: console.log("Trip to switzerland");
    }
```
## Looping in Javascript

> For
```javascript
    n = 10
    for (i = 0; i < n; i++) {
        console.log(i);
    }
```
> While
```javascript
    n = 10;
    while (n > 0) {
        console.log(n);
        n = n-1;
    }
```