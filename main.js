
callback(Random);
function Random() {

    Math.random();
    setTimeout(function() {
        console.log(Math.random());
    }, 1000);

    setTimeout(function() {
        console.log(Math.random());
    }, 2000);
    
    setTimeout(function() {
        console.log(Math.random());
    }, 3000);

}
function callback(e) {
    e();
}
  
 