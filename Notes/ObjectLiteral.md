# Object
> JavaScripts Object can be created using two different types
>- Object Literals
>- Constructor
```javascript
    var empOne = {
        name : "John",
        empNumber : 1001,
        emailId : "John@gmail.com",
        swipeIn(){console.log("Swipe In by "+this.name)}
    };
```
## How to access the properties of an object ?
>- object.property
>>-    To get the value: var name = empOne.name;
>>-    To set the value: empOne.name = "Hello";
>- object[property]
>>-    To get the value: var name= empOne["name"];
>>-    To set the value: empOne["name"] = "John";

Note: object[property] access should be used mainly when the 
property names are having space, hyphen, or one that starts with a number.

## Object iteration:
```javascript
    for(let property in empOne){
        console.log(empOne[property]);
    }
```
# Object.values():
>- Object.values() will give all the values of an object in an array.
>- console.log(Object.values(empOne));

# Clone Object Using Spread Operator
```javascript
    let candidateSelected = {
        Name: 'Rexha Bebe',
        Qualification: 'Graduation'
    };
    let SelectedAs = {
        jobTitle: 'System Engineer',
        location: 'Bangalore'
    }
    let employeeInfo = {
        ...candidateSelected,
        ...SelectedAs
    }
```
# Cloning and Coping Object Using Spread Operator
```javascript
    let copyToBeMade = { ...originalObject };
```
# Destructuring Objects

## Destructuring In Variable
```javascript 
    let myObject = {name: 'Arnold', age: 65, country: 'USA'};
    let {name, age:currentAge} = myObject;
    console.log(name); // Arnold
    console.log(currentAge); // 65
```
## Destructuring In Function
```javascript
    function showDetails({country}){
        console.log(country); // USA
    }
    showDetails(myObject);
```
# Build-In Global Object
>- Date
>- String
>- Math
>- RegEx
>- JSON