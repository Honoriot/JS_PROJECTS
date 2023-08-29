# Function In JS
```javascript
    function myFunction(num1,num2){ 
        num3=num1*num2;
        return num3
    }
```
# Functions as objects
```javascript
    funVariable= function myFunc(num1,num2) { 
        num3=num1*num2;
        return num3
    }

    console.log(funVariable(2, 3)); > 6
```
>Since functions are treated as objects you can also 
pass them as a parameter to another function
```javascript
    function welcome(){console.log("Hello World");}
    function goodbye(){console.log("See you later");}

    function greet(choice){
        choice();
    }

    greet(welcome);
    greet(goodbye);
```
## Higher Order Functions and First Class Citizen:
> Since functions are treated as objects, you can also 
>return them from a function
```javascript
    function greet(){
        var hello=function welcome(){console.log("Hello World");}
        return hello;
    }

    var retFunc=greet();
    retFunc();
```
## Anonymous function in HOF:
```javascript
    function greet(choice){
        choice();
    }

    greet(function(){ console.log("Hello World")}); // Hello World
```

## Arrow Function
```javascript
    function greet(choice){ 
    choice();
    } 

    greet(function(){ console.log("Hello World") }); // Hello World
    greet(()=>{ console.log("Hello World") }); // Hello World
```
Example 1: Multi parameter, multi line code:
```javascript
    calculateCost = (ticketPrice, noOfPerson)=>{
        noOfPerson= ticketPrice * noOfPerson;
        return noOfPerson;
    }
    console.log(calculateCost(500, 2)); // 1000
```
Example 2: No parameter, single line code:
```javascript    
    trip = () => "Let's go to trip."
    console.log(trip()); // Let's go to trip.
```
Example 3: One parameter, single line code:
```javascript
    trip = place => "Trip to " + place;
    console.log(trip("Paris")); // Trip to Paris
```
Example 4: One parameter, single line code:
```javascript
    trip = _ => "Trip to " + _;
    console.log(trip("Paris")); // Trip to Paris
```