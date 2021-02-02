## Notes:

### fetch()
fetch() is an api allows javascript to make HTTP request. What fetch() return is a Promise object.

### Promise
promise is an object that may produce a single value some time in the future :
either a resolved value, or a reason that it's not resolved.


a promise can have a `.then()` attribute, which can take two arguments, a callback for success and another for failure.
Both of the arguments are optional. In the example of this part (part 10), the promise object only has a callback function.


### async & await
.then() is a convenient way to do further operation to a promise, but sometimes a promise will have a lots of `.then()`,
which is very inconvenient and kind of ugly. So, the code might be cleaner to use of async & await.

e.g.


    async function fetchUsers() {
        const res = await fetch('https://somedomain.com/users');
        
        const data = await res.json();
        
        console.log(data);
    }
    
    fetchUsers();
