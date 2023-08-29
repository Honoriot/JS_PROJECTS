## Double equals(==) vs Triple Equals(===)

> (==):: compares the values only, irrespective of data types.
```javascript
    console.log('100' == 100); // gives true
```
> (===):: strict equality, value and type
```javascript 
    console.log('100' === 100); // false
```
## + operator on string
```javascript
    console.log('Trip' + ' to ' + 'Florida'); // Trip to Florida
```
>- If any one of the value is string, it will convert other values 
>- into string first and concatenate them into single string later.
```javascript
    console.log('Trip' + 100) // 'Trip100'
    console.log('Trip ' + undefined) // 'Trip undefined' 
    console.log('100'+20 //10020)
    console.log(null + 'Trip') // 'nullTrip'
```
## typeof operator
```javascript
    console.log(typeof 100); // "number"
    console.log(typeof 'Lets go to Trip'); // "string"
    trip = null; 
    console.log(trip); // "null"
    console.log(typeof trip); // "object"
```
## Exponentiation (**)
```javascript
    console.log( 5 ** 2) // 25
    val=5
    console.log(val ** 2) // 25
```