# String

> **Length** Property of String
```javascript
    let name = "Aniket Singh";
    console.log(name.length);
```
## Methods of String

 **charAt()**
```javascript
    let name = "Aniket Singh";
    console.log(name.charAt(2)); // i
```
 **concat()**
> It accepts unlimited number of string arguments
```javascript
    let myStr = "Hello";
    let mystr1 = " ";
    let mystr2 = "World";
    console.log(myStr.concat(mystr1, mystr2));
```
 **indexOf()**
> It returns the index of the given character or maybe the given set of characters in a string passed as an argument. 

**match()**
>It makes use of the regular expression to look for a specific string and returns all the strings that match.

**replace()**
>It accepts the  substring or the regular expression. Also, accepts the string that will be used for the replacement string. The idea is to replace all matches with the replacement string and provide the modified string. 

**search()**
>It searches for a match of regular expression in the given string and returns its position. If there is no match, it returns -1. 

**split()**
>It splits the given string into the array of substrings where separator marks the index for split begin and end. Suppose, the string consists of a comma (,) then the given string in the argument will be split at every comma.

**slice()**
>It extracts and returns part of a string. The Second parameter is optional. 

>If only one parameter is passed, it is the index from which string will start slicing from till the end of this string. If two parameters are passed, the string between these 2 index values is sliced. 

>Index value passed as the first parameter is included whereas index value passed as the second parameter is excluded. 

**subString()**
>It extracts and returns part of a string. Compared to the slice() method, it can accept a negative parameter, meaning slicing should start from the end. 

**substr()**
>It is like the substring() method. 

>The difference is, if the second parameter is provided, it takes the first parameter as start Index and second parameter as length for slicing string. 

**toLowerCase()**
>Converts characters in string to lowercase 

**toUpperCase()**
>Converts characters in string to Uppercase 