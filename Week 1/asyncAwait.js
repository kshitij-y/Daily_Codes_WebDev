function asyncFun() {
    let p = new Promise(function (resolve){
        setTimeout(function() {
            resolve("hi there!");
        },3000);
    });
    return p;
}
async function main() {
    let value = await asyncFun();
    console.log(value);
    console.log("inside main");
}

main();
console.log("After main");