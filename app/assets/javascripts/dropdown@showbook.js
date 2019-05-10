console.log('hi')


// finds book and current user variable. To be passed into post request.
var bookId = document.getElementsByClassName('book-id')[0].id;
var userId = document.getElementsByClassName('current-user')[0].id;

window.addEventListener('DOMContentLoaded', () =>{
    var dropDown = document.querySelectorAll("#drop-down-button");

    dropDown.forEach( item => {
        item.addEventListener('click', () => {
        updateStatus(event)
        });
    })
})

function updateStatus(e){
    var status = e.target.value

    const payload = {
        user_id : userId,
        book_id : bookId,
        read_status : status
    }
    console.log('hello', payload);
    fetch(`/bookstatuses/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRF-Token': Rails.csrfToken()
        },
        body: JSON.stringify(payload)
    }).then(res =>{
        return res.json();
    }).then(json =>{
        console.log('yay');
        changeDOMButton(e.target,json)
        // console.log(json);
    })
}

function changeDOMButton(jsonInput){

    // finds which button pressed. gets the innertext
    // statusShelfButton selects the collapsed button view
    // finally it changes the innertext of viewing button to what was selected by user
    var statusString = jsonInput.innerText;
    var statusShelfButton = document.getElementById('status-shelf');

    statusShelfButton.innerText = statusString;
    highlightSelection(statusString);
}

function highlightSelection(status){

    var buttonAll = document.querySelectorAll('#drop-down-button');

    for(let i = 0 ; i < buttonAll.length; i++ ){
        buttonAll[i].removeAttribute("style");
        if(buttonAll[i].innerText === status){

            buttonAll[i].setAttribute("style", "font-weight: bold;");
        }
    }
}