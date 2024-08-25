//example -- 1
var d = new Promise(function(onDone) {
    setTimeout( function() {
        onDone("foo");
    }, 1000);
});
function callback() {
    console.log(d); // console.log("inside");
}
console.log(d);
d.then(callback);
setTimeout(function() {
    console.log(d);
}, 1001);


//example -- 2
let p = new Promise(function(resolve) {
    resolve("Hello! Hello! MF!");
});

p.then(function() {
    console.log(p);
})


//example -- 3
function asyncFun() {
    let p = new Promise(function(fun) {
        fun("HI there");
    });
    return p;
}
const value = asyncFun();
value.then(function(data) {
    console.log(data);
});