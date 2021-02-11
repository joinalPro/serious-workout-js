function addNumbers(num1, num2){
   var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const numbers = arguments[i];
        sum = sum + numbers;
    }
    function logInfo(message){
        console.log(message)
    }
    logInfo('Good morning')
    return sum;
}
var result = addNumbers(3, 5, 7, 15);
console.log(result);
