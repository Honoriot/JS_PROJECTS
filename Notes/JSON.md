# JSON
## What is JSON?
>When two different programs want to pass data to each other, 
>they need a commonly accepted format of passing that data. 
>There many formats available like plain text, xml, json, etc.

>JSON stands for JavaScript Object Notation. JSON is a way of 
>formatting the text in such a way that it looks like a >JavaScript literal object. 

## Object literal
```javascript
    let empObj = {
        name : "John",
        empNumber : 1001,
        emailId : "John@gmail.com"
    }
```
## JavaScript Object Notation
```javascript
    let empJson = '{"name":"John","empNumber":1001,"emailId":"John@gmail.com"}';
```

>- The keys in JSON string must be a string enclosed withing quotes. 
>- The values can be any valid JavaScript value: null, number, string, etc. 
>- It can have arrays as well as other JSON objects as values. 
>- JavaScript provides a standard built-in object called JSON which has methods for parsing and generating JSON data.

## **parse()**: 
>- This function is used to convert JSON string into an JavaScript object
```javascript
    var json = '{ "firstName":"John", "lastName":"Doe"}';
    var nameObj= JSON.parse(json);            //will convert JSON string into an JavaScript object
    console.log(nameObj.firstName +" "+ nameObj.lastName );
```

## **stringify()**: 
> This function is used to convert object to JSON string
```javascript    
    var jScores = { "Java": 70, "JavaScript": 80, "CSS": 30 };  
    var tScores = JSON.stringify(jScores);     //will convert object to JSON string
    console.log(typeof(jScores));                   // returns Object
    console.log(typeof(tScores));                   // returns String
```