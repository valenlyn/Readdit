//LOGIC FOR BOOK STATUS ON SHOW_BOOK PAGE
// This sets out to accomplish:
// 1. Placing event listener on dropdown buttons, so that we can recognise an action when it is being clicked
// 2. Action to be carried out is to update or save a new book status entry for the specific book.
// 3. Once record is created or update, drop down should indicate which read status the current book is at.
// 4. Additional, when page is refreshed or revisited, it should load to the latest read status

// finds book and current user variable. To be passed into post request.
var bookId = document.getElementsByClassName('book-id')[0].id;
var userId = document.getElementsByClassName('current-user')[0].id;
var currentStatus = document.getElementsByClassName('read-status-now');
var onLoadString = document.getElementById('status-shelf');

stlyingSelection(onLoadString.innerText);
window.addEventListener('DOMContentLoaded', () =>{
    var dropDown = document.querySelectorAll("#drop-down-button");
    // console.log('the status now',currentStatus[0].id);
    // console.log('the thing to change: ', onLoadString.innerText);
    initialDomButton(currentStatus[0].id);
    dropDown.forEach( item => {
        item.addEventListener('click', () => {
        updateStatus(event)
        stlyingSelection(status);
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
    stlyingSelection(statusString);
}

function stlyingSelection(status){
    console.log('GIVE ME COLOR')
    var buttonAll = document.querySelectorAll('#drop-down-button');

    for(let i = 0 ; i < buttonAll.length; i++ ){
        buttonAll[i].removeAttribute("style");
        if(buttonAll[i].innerText === status){

            buttonAll[i].setAttribute("style", "font-weight: bold;");
        }
    }
}

function initialDomButton(statusId){
    if(statusId == 0 || statusId == 1){
        onLoadString.innerText = 'Want to Read';
    }else if(statusId == 2){
        onLoadString.innerText = 'Currently Reading';
    }else if(statusId ==3){
        onLoadString.innerText = 'Read';
    }
}