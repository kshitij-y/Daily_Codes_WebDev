// Async function example
function findSum(n) {
    var sum=0;
    for(let i=0; i<=n; i++){
        sum += i;
    }
    return sum;
}

function findSum100() {
    console.log(findSum(100));
}

setTimeout(findSum100 ,0);
console.log("This will get executed in waiting time");