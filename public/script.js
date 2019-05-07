window.onload = () => {
    let timeout;
    const searchBar = document.getElementById("search");
    searchBar.addEventListener('keydown', e => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => { searchForBook(e) }, 1000);
    })
}

function searchForBook(e) {
    fetch(`/find/${e.target.value}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => { 
            return res.json();    
        })
        .then(json => {
            console.log(json);
        });
}
