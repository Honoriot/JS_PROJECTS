# Navigation Object

>It contains information about the client, that is, the browser on which the web page is rendered

**appName**
>Returns the name of the client.  
```javascript
    navigator.appName; 
    //Browser's name: Netscape 
```
**appVersion**
>Returns platform (operating system) and version of the client (browser). 
```javascript
    console.log(navigator.appVersion); 
    //5.0 (Windows NT 10.0; Win64; x64)  
    //AppleWebKit/537.36 (KHTML, like Gecko)  
    //Chrome/83.0.4103.106 Safari/537.36 
```
**Platform** 
>Returns the name of the user's operating system. 
```javascript
    console.log(navigator.platform); 
    //Browser's platform: Win 32 
```
**userAgent**
>Returns string equivalent to HTTP user-agent request header. 
```javascript
    console.log(navigator.userAgent); 
    //Browser's useragent: Mozilla/5.0 5.0 (Windows NT 6.1; WOW64)  
    //AppleWebKit/537.36 (KHTML, like Gecko)  
    //Chrome/53.0.2785.116 Safari/537.36 
```