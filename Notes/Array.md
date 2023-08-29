# Array

## Creating Array

>Two ways of creating array

**Array Literal Notation**
```javascript
    let myArray = [element 1, element2,…, element N];
```
**Array Constructor**

>- Arrays can be created using the Array constructor with a single parameter which denotes the array length. 
>- The parameter should be an integer between 0 and 232-1 (inclusive). 
>- This creates empty slots for the array elements. If the argument is any other number, a RangeError exception is thrown.
```javascript
    let colors = new Array(2);
    console.log(colors.length); //2
    //Assign values to an empty array using indexes
    colors[0] = "Red";
    colors[1] = "Green";
    console.log(colors); //['Red','Green']
```

> If more than one argument is passed to the Array constructor, a new Array with the given elements is created.
```javascript
    let colors = new Array("Red", "Orange", "Green");
```
> Accessing array element by index
```javascript
    placesToVisit = ["Paris", "New York", "Switzerland"];
    console.log(placesToVisit[0]); // Paris
    console.log(placesToVisit[2]); // Switzerland
```
> Destructure Array Elements into values
```javascript
    numArr=[100,200,300];
    var [a,b,c]=numArr;
    console.log(a);
    console.log(b);
    console.log(c);
```
# Cloning array using spread operator

>- It consists of triple dots ( ... ) which helps in spreading out the elements of an array to a new variable.

When the spread operator is used in the function call, it expands the iterable object, i.e., array into the list of arguments.
```javascript
    let numArr = [10, 5, 20];
    //spread turns array into the list of arguments
    console.log(Math.max(...numArr)); // 20 
```
Arrays can be merged using the spread syntax.
```javascript
    let arr1 = [3, 5, 1];
    let arr2 = [8, 2, 6];
    let newArr = [...arr1, ...arr2];
    console.log(newArr); // [3,5,1,8,2,6]
```

Arrays can be combined with normal values.
```javascript
    let arr1 = [3, 5, 1];
    let arr2 = [8, 2, 6];
    let newArr = [0, ...arr1, 4, ...arr2];
    console.log(newArr); // [0,3,5,1,4,8,2,6]
```    
You can also use the spread operator to create a copy of an array.
```javascript
    let arr1 = [3, 5, 1];
    let arrCopy = [...arr1];
    arrCopy.push(4);
    console.log(arrCopy);
    //arrCopy becomes [3,5,1,4] and arr1 remains unaffected
```

# Destructuring Of Array

>JavaScript introduced the destructuring assignment syntax that makes it possible to unpack values from arrays or objects into distinct variables.

```javascript
    // [RN1] we have an array with the employee name and id
    let empArr = ["Shaan", 104567];
    // destructuring assignment
    // sets empName = empArr[0]
    // and empId = empArr[1]
    let [empName, empId] = empArr;
    console.log(empName); // Shaan
    console.log(empId);  // 104567
```

>You can also ignore elements of the array using an extra comma.

```javascript
    let [empName, , location] = ["Shaan", 104567, "Bangalore"];
    //Here second element of array is skipped and third element is assigned to location variable
    console.log(empName); // Shaan
    console.log(location);  // Bangalore
```

>Rest operator can also be used with destructuring assignment syntax.
```javascript
    let [empName, ...rest] = ["Shaan", 104567, "Bangalore"];
    console.log(empName); // Shaan
    console.log(rest);  // [104567,'Bangalore']
```

# Important Functions and Properties on Array

## length

>returns the length of the given array
```javascript
    let arr = [1, 2, 3];
    console.log(arr.length); // 3
```

## push()

>Adds new element to the end of an array and return the new length of the array.
```javascript
    places = ["Paris", "New York"];
    places.push("Switzerland");
    console.log(places); // ["Paris", "New York", "Switzerland"]
```

## pop()
>Removes the last element of an array and returns that element.
```javascript
    places = ["Paris", "New York",  "Switzerland"];
    places.pop();
    console.log(places); // ["Paris", "New York"]
```

## shift()
>Removes the first element of an array and returns that element.
```javascript
    let myArray = ["Android", "iOS", "Windows"];
    console.log(myArray.shift()); //Android
    console.log(myArray); //["iOS", "Windows"]
```

## unshift()

>Adds new element to the beginning of an array and returns the new length
```javascript
    let myArray = ["Android", "iOS", "Windows"];
    myArray.unshift("Linux"); 
    console.log(myArray);
    //["Linux","Android","iOS","Windows"]
```

## indexOf() 
>return -1 if the value is not present
```javascript
    places = ["Paris", "New York",  "Switzerland"];
    console.log(places.indexOf("New York")); // 1
```

## splice() 

>Change the content of an array by inserting, removing, and replacing elements. Returns the array of removed elements.

> **array.splice(index,deleteCount,items)**;
>- index = index for new item
>- deleteCount = number of items to be removed, starting from index next to index of new item
>- items = items to be added
```javascript
    let myArray = ["Android", "iOS", "Windows"];
    //inserts at index 1
    myArray.splice(1, 0, "Linux"); 
    console.log(myArray); 
    // ["Android","Linux", "iOS", "Windows"]
```

## slice()
**array.slice(start,end)**
>Returns a new array object copying to it all items from start to end(exclusive) where start and end represents the index of items in an array. The original array remains unaffected

```javascript
    let myArray=["Android","iOS","Windows"];
    console.log(myArray.slice(1,3));
    // ["iOS", "Windows"]
```

## concat()

>Joins two or more arrays and returns joined array.
```javascript
    let myArray1 = ["Android","iOS"];
    let myArray2 =  ["Samsung", "Apple"];
    console.log(myArray1.concat(myArray2));
    //["Android", "iOS", "Samsung", "Apple"]
```

## find()

**array.find(callback(item,index,array))**
>- Returns the value of the first element in an array that passes a condition specified in the callback function.
>- Else, returns undefined if no element passed the test condition.

- callback is a function to execute on each element of the array
- item value represents the current element in the array
- index value indicates index of the current element of the array
- array value represents array on which find() is used,
index and array are optional

```javascript
    let myArray = ["Android", "iOS", "Windows", "Linux"];
    let result = myArray.find(element => element.length > 5);
    console.log(result); //Android 
```

## findIndex()
**Array.findIndex(callback(item,index,array))**
>Returns the index of the first element in an array that passes a condition specified in the callback function. Returns -1 if no element passes the condition.

- callback is a function to execute on each element of the array
- item value represents current element in the array
- index represents index of the current element of the array
- array represents array on which findIndex() is used.
- index and array are optional

```javascript
    let myArray = ["Android", "iOS", "Windows", "Linux"];
    let result = myArray.findIndex(element => element.length > 5);
    console.log(result) //0
```

## filter()
**array.filter(callback(item,index,array))**
>Creates a new array with elements that passes the test provided as a function.

- callback is the Function to test each element of an array
- item value represents the current element of the array
- index value represents Index of current element of the array
- array value indicates array on which filter() is used.

```javascript
    let myArray = ["Android", "iOS", "Windows", "Linux"];
    let result = myArray.filter(element => element.length > 5);
    console.log(result);
    //["Android","Windows"]
```

## forEach() 
> Is used to iterate over an array. This is a Higher Order Funtion.
```javascript 
    places = ["Paris", "New York",  "Switzerland"];
    places.forEach(function(place) {
        console.log(place);
        }
    );
    // Paris // New York // Switzerland
    places.forEach(place => console.log(place)); // same thing in arrow function
```

## map() 
>- The map() array function generates a new array. 
>- It iterates over each element in the array, just like forEach. 
>- It invokes a function on each element, just like forEach.
```javascript
    placesToVisit = ["India", "USA", "China", "Japan"]
    placesCost = placesToVisit.map(function name(place){
        return place + "@" + yet_to_visit;
    });
    // same thing in arrow function
    placesCost = placesToVisit.map(place => place + "@" + yet_to_visit);
```

## join()
>Returns a new string by concatenating all the elements of the array, separated by a specified operator such as comma. Default separator is comma
```javascript
    let myArray = ["Android", "iOS", "Windows"];
    console.log(myArray.join()); // Android,iOS,Windows
    console.log(myArray.join('-'));
    // Android-iOS-Windows
```

## reduce()
**array.reduce(callback(accumulator, currentValue, index,array),initialValue)**

>Executes a defined function for each element of passed array and returns a single value

```javascript
    const numArr = [1, 2, 3, 4];
    // 1 + 2 + 3 + 4\
    console.log(numArr.reduce(
    (accumulator, currentVal) => 
    accumulator + currentVal));
    // 10
    // 5 + 1 + 2 + 3 + 4
    console.log(numArr.reduce(
    (accumulator, currentVal) => 
    accumulator + currentVal,5));
    // 15
```