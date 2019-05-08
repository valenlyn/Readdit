var searchNode = document.getElementById("search-results");
var fullString;
//creates event listener when page loads
//function triggers a settime out when eventlistener is triggered

window.addEventListener('DOMContentLoaded', () => {
    let timeout;
    const searchBar = document.getElementById("search");
    searchBar.addEventListener('keydown', e =>{
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {searchForBook(e)}, 500);
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
    while (searchNode.firstChild) {
        searchNode.removeChild(searchNode.firstChild);
    }
}

//displays results// need to style more// how to use partial?
function appendResults(jsonData) {

    var viewSearchResultLink = buildQueryString(fullString);
    var listMain = document.createElement('ul');
    listMain.setAttribute("style", "list-style: none")
    searchNode.append(listMain);
    var listSize = 5;
    if(jsonData.length < listSize){
        listSize = jsonData.length;
    }
    for(let i=0;  i < listSize; i++){
        var listElement = document.createElement('li');
        listElement.className = "search-bar-list"
        var linkTag = document.createElement('a');

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

    var start = `?utf8=✓&search=`;

    itemArr =  string.split(" ");

    itemArr.pop();

    for(let i=0; i <itemArr.length;i++){
        start = start + `${itemArr[i]}+` ;
    }
    start = start + `&commit=Search`;

    return start;
}