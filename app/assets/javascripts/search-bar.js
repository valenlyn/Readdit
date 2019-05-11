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
    console.log(e.target.value)
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
//      <div>
        // <a>
//       <img src="#">
        // </a>
     // </div>
//       <div>
//          <a>
//           <div>title</div>
//           <div>by athor</div>
//          </a>
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
        var imgDiv = document.createElement('div');
        var linkElementImg = document.createElement('a');
        var linkElementDetails = document.createElement('a');
        var outerDiv = document.createElement('div');

        linkElementImg.href=`/books/${jsonData[i].id}`; // <a> tag

        imgElement.src=`${jsonData[i].image_url}`; //img link tag
        imgElement.className = "search-bar-img";

        linkElementImg.append(imgElement);
        imgDiv.append(linkElementImg);

        ////////////

        titleDiv.innerText = `${jsonData[i].title}`;
        authorDiv.innerText = `by ${jsonData[i].author}`;

        linkElementDetails.href =`/books/${jsonData[i].id}`;

        linkElementDetails.append(titleDiv);
        linkElementDetails.append(authorDiv);

        innerDiv.append(linkElementDetails);

        outerDiv.append(imgDiv);
        outerDiv.append(innerDiv);

        outerDiv.className = "d-flex justify-content-start p-1 search-item"
        imgDiv.className = "ml-2 mr-2";
        innerDiv.className = "ml-2";

        searchContainerDiv.append(outerDiv);

        if(i === listSize-1){
            var lastLink = document.createElement('a');

            lastLink.href = `${viewSearchResultLink}`;
            lastLink.innerText = `See all results for "${fullString}"`;

            searchContainerDiv.append(lastLink);
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