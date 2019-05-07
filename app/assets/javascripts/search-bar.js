//USE THIS TO RENDER

var xhttp = new XMLHttpRequest();

// console.log(xhttp)
var stuff = document.getElementById("search-bar");

document.getElementById("search-form").addEventListener("keydown", showInput);

function showInput() {
    console.log('you are typing something')
    // console.log(stuff.value);
}


var responseHandler = function() {
    console.log("INSIDE??")
    console.log("response text!!!!!!!!!!", document.getElementById("search-bar").value);

  // var stuff = JSON.parse( this.responseText );
  // console.log("SOMETHING USEFUL?", stuff );
  // // console.log("status text", this.statusText);
  // // console.log("status code", this.status);
  // var thing = document.createElement('h1');
  // thing.innerText = person.name;
  // document.body.appendChild(thing);
};

console.log('HERR"')

window.onload = function(){
    console.log('anything?')
  document.getElementById("search-bar").addEventListener('keydown', function(){

    // make a new request
    var request = new XMLHttpRequest();
    // console.log(request.value)
    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    // var url = "https://swapi.co/api/people/1";

    var url = "http://localhost:3000";
    request.open("GET", url);

    // send the request
    request.send();

  });
}