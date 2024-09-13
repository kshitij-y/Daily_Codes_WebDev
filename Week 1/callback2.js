function calAirth(a, b, func) {
    return func(a ,b);
}
function sum (a, b) {
    return a+b;
}
    
function sub (a ,b) {
    return a-b;
}

const value = calAirth(3 ,4 , sum);
console.log(value);