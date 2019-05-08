var searchNode = document.getElementById("search-results");
//creates event listener when page loads
//function triggers a settime out when eventlistener is triggered
window.addEventListener('DOMContentLoaded', () => {
    let timeout;
    const searchBar = document.getElementById("search");
    searchBar.addEventListener('keydown', e =>{
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {searchForBook(e)}, 1000);
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

// <ul>
//     <li><a href="#">hello</a></li>
// </ul>
//displays results// need to style more// how to use partial?
function appendResults(jsonData) {
    var listMain = document.createElement('ul');
    listMain.setAttribute("style", "list-style: none")
    searchNode.append(listMain);

    for(let i=0; i < jsonData.length; i++){
        var listElement = document.createElement('li');
        // listElement.setAttribute("style", "color:black; border: 1px solid blue;")
        var linkTag = document.createElement('a');

        // linkTag.href = `/book/${jsonData[i].id}`;
        listElement.innerText = `${jsonData[i].title} by ${jsonData[i].author}`;

        // listElement.innerText = linkTag;

        listMain.append(listElement);
    }

}