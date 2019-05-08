var searchContainerDiv = document.getElementById("search-results");
var fullString;
//creates event listener when page loads
//function triggers a settime out when eventlistener is triggered

window.addEventListener('DOMContentLoaded', () => {
    let timeout;
    const searchBar = document.getElementById("search");
    searchBar.addEventListener('keydown', e =>{
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {searchForBook(e)}, 500);
        if (e.keyCode == 8){
            clearPreviousResults();
        }
    })
})


//passes in e?
//fetches at route /find/:params
function searchForBook(e) {

    fetch(`/find/${e.target.value}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })//callback response? returns a json object
        .then(res =>{
            return res.json();
        })//ready to use
        .then(json => {
            fullString = e.target.value;
            clearPreviousResults();
            appendResults(json);
            console.log(json);
        });
}


//removes all child elements when setimeout triggered
function clearPreviousResults(){
    while (searchContainerDiv.firstChild) {
        searchContainerDiv.removeChild(searchContainerDiv.firstChild);
    }
}
// <div>
//     <a>
//       <img src="#">
//       <div>
//           <div>title</div>
//           <div>by athor</div>
//       </div>
//      </a>
// </div>
//displays results// need to style more// how to use partial?

function documentCreator(jsonData){

    var viewSearchResultLink = buildQueryString(fullString);
    var listSize = 5;
    var titleDiv = document.createElement('div');
    var authorDiv = document.createElement('div');
    var innerDiv = document.createElement('div');
    var imgElement = document.createElement('img');
    var linkElement = document.createElement('a');
    var outerDiv = document.createElement('div');
}
function appendResults(jsonData) {

    var viewSearchResultLink = buildQueryString(fullString);
    var listMain = document.createElement('ul');
    var listSize = 5;

    listMain.setAttribute("style", "list-style: none")
    searchContainerDiv.append(listMain);

    if(jsonData.length < listSize){
        listSize = jsonData.length;
    }

    for(let i=0;  i < listSize; i++){
        var listElement = document.createElement('li');
        var linkTag = document.createElement('a');

        listElement.className = "search-bar-list"
        linkTag.href = `/books/${jsonData[i].id}`;
        linkTag.innerText = `${jsonData[i].title} by ${jsonData[i].author}`;

        listElement.append(linkTag);
        listMain.append(listElement);

        if(i === listSize-1){
            var lastList = document.createElement('li');
            var lastLink = document.createElement('a');

            lastLink.href = `${viewSearchResultLink}`;
            lastLink.innerText = `See all results for "${fullString}"`;

            lastList.append(lastLink);
            listMain.append(lastList);
        }
    }
}

function buildQueryString(string){

    var itemArr =[];

    var start = `/books?utf8=✓&search=`;

    itemArr =  string.split(" ");

    itemArr.pop();

    for(let i=0; i <itemArr.length;i++){
        start = start + `${itemArr[i]}+` ;
    }
    start = start + `&commit=Search`;

    return start;
}