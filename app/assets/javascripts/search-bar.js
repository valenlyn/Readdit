var searchNode = document.getElementById("search-results");

window.onload = () =>{
    let timeout;
    const searchBar = document.getElementById("search");
    searchBar.addEventListener('keydown', e =>{
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {searchForBook(e)}, 1000);
    })
}

function searchForBook(e) {
    fetch(`/find/${e.target.value}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res =>{
            return res.json();
        })
        .then(json => {
            clearPreviousResults();
            appendResults(json);
            console.log(json);
        });
}

function clearPreviousResults(){
    while (searchNode.firstChild) {
        searchNode.removeChild(searchNode.firstChild);
    }
}

// <ul>
//     <li><a href="#">hello</a></li>
// </ul>

function appendResults(jsonData) {
    var listMain = document.createElement('ul');
    listMain.setAttribute("style", "list-style: none")
    searchNode.append(listMain);

    for(let i=0; i < jsonData.length; i++){
        var listElement = document.createElement('li');
        listElement.setAttribute("style", "color:black; border: 1px solid blue;")
        var linkTag = document.createElement('a');

        // linkTag.href = `/book/${jsonData[i].id}`;
        listElement.innerText = `${jsonData[i].title} by ${jsonData[i].author}`;

        // listElement.innerText = linkTag;

        listMain.append(listElement);
    }

}