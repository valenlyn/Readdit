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
            searchElementsCreator(json);
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

function searchElementsCreator(jsonData){

    var viewSearchResultLink = buildQueryString(fullString);
    console.log('HELLO')
    console.log(viewSearchResultLink);
    var listSize = 5;


    if(jsonData.length < listSize){
        listSize = jsonData.length;
    }

    for(let i = 0; i < listSize; i++){
        var titleDiv = document.createElement('div');
        var authorDiv = document.createElement('div');
        var innerDiv = document.createElement('div');
        var imgElement = document.createElement('img');
        var linkElement = document.createElement('a');
        var outerDiv = document.createElement('div');

        linkElement.href=`/books/${jsonData[i].id}`; // <a> tag

        imgElement.src=`${jsonData[i].image_url}`; //img link tag
        imgElement.className = "search-bar-img";

        titleDiv.innerText = `${jsonData[i].title}`;
        authorDiv.innerText = `by ${jsonData[i].author}`;

        innerDiv.append(titleDiv);
        innerDiv.append(authorDiv);

        linkElement.append(imgElement);
        linkElement.append(innerDiv);

        outerDiv.append(linkElement);
        outerDiv.className = "search-bar-item";

        searchContainerDiv.append(outerDiv);

        if(i === listSize-1){
            var lastLink = document.createElement('a');

            lastLink.href = `${viewSearchResultLink}`;
            lastLink.innerText = `See all results for "${fullString}"`;

            outerDiv.append(lastLink);

            searchContainerDiv.append(outerDiv);
        }
    }
}

function buildQueryString(string){

    var itemArr =[];

    var searchString = `/books?utf8=✓&search=`;

    itemArr =  string.split(" ");

    itemArr.pop();

    for(let i=0; i <itemArr.length;i++){
        searchString = searchString + `${itemArr[i]}+` ;
    }
    searchString = searchString + `&commit=Search`;

    return searchString;
}