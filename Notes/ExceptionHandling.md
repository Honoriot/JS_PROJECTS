# Example Code 1
```javascript
    function validateName(name) {
            try {
                if (name.Match(/[\$\#]/)) {// error occurs here
                    /* All the below lines of try do not run 
                        as error was thrown in previous line*/
                    return false;
                }
                else {
                    return true;
                }
            }
            catch (error) {
                if (error instanceof TypeError)
                    console.log("Type Error Occurred");
                else if (error instanceof RangeError)
                    console.log("Range Error Occurred");
                else if (error instanceof SyntaxError)
                    console.log("Syntax Error Occurred");
                else
                    console.log("Some other Error Occurred");
            }
        }
    validateName("Josh$");
```
>**Here, once an error is thrown in the try block, it will be handled by the catch block. 
>Inside the catch block, we are checking the type of the error object by using *instanceof operator* and handling them separately.**

# Finally block: 
**The finally block ensures that the code will be executed, irrespective of whether an error has occurred or not.**
```javascript
    function validateName(name) {
            try {
                if (name.Match(/[\$\#]/)) {// error occurs here
                    /* All the below lines of try do not run 
                        as error was thrown in previous line*/
                    return false;
                }
                else {
                    return true;
                }
            }
            catch (error) {
                    console.log("Error Occurred");
            }
            finally{
                console.log("Cleaning up resources");
            }
        }
    validateName("josh$");
```

# Throwing of Error:
**Apart from the code throwing errors, we can also programmatically create our own errors and throw them to change the flow of execution.**
```javascript    
    var err = new Error();      //You can pass the message or not it is optional
    err.name = "InvalidEmailError";
    err.message ="Invalid Email";
    throw err;

    function validateName(name) {
            try {
                if (name.match(/\$/)) {
                    throw new Error("Name should not contain $");
                }
                else {
                    return true;
                }
            }
            catch (error) {
                    console.log(error.message);
            }
            finally{
                console.log("Cleaning up resources");
            }
        }
    validateName("Hello$");
```