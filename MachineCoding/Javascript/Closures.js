function Welcome(name) {
    return function (message) {
        console.log(message + " " + name);
    };
}

var myFunction = Welcome("John");
myFunction("Welcome "); //Output: Welcome John
myFunction("Hello Mr."); //output: Hello Mr. John
