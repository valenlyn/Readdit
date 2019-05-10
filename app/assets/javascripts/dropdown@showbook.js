console.log('hi')

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
        console.log(json);
    })
}