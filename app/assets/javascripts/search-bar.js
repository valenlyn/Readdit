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
    console.log("SEACRCHING FOR THIS BOOK",e.target.value)

    if(e.target.value.length > 0){
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
}


//removes all child elements when setimeout triggered
function clearPreviousResults(){
    var searchContainerDiv = document.getElementById("search-results");
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
// this function creates the entire dom elements like the above example
function searchElementsCreator(jsonData){

    var searchContainerDiv = document.getElementById("search-results");
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
            console.log("LAST LINK");
            var lastLinkDiv = document.createElement('div');
            var lastLink = document.createElement('a');

            lastLinkDiv.className = "d-flex justify-content-start p-1 search-item"
            lastLink.href = `${viewSearchResultLink}`;
            lastLink.innerText = `See all results for "${fullString}"`;

            lastLinkDiv.append(lastLink)
            console.log('DIV OF LAST LINK', lastLinkDiv);

            searchContainerDiv.append(lastLinkDiv);
        }
    }
}

//forms string for where-like query case in pg
function buildQueryString(string){

    var itemArr =[];

    var searchString = `/books?utf8=✓&search=`;

    itemArr =  string.split(" ");
//splits string based on spaces
//if item Arr has more than one item, removes last empty array item
    console.log(itemArr)
    if(itemArr.length > 1){
        itemArr.pop();
    }
    // forms query string word+word+word...
    for(let i=0; i <itemArr.length;i++){
        searchString = searchString + `${itemArr[i]}+` ;
    }

    searchString = searchString + `&commit=Search`;

    return searchString;
}