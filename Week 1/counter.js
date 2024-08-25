// should count from 30 to 0
var i = 30;
function count() {
    console.log(i--);
    if(i < 0){
        clearInterval(myVar);
    }
}
var myVar = setInterval(count, 50);
