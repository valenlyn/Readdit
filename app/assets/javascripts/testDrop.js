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
// /bookstatuses/:book/:status
function updateStatus(e){

    var status = e.target.value
    console.log(status);
    console.log('user ID ', userId);
    console.log('hello TESTDROP');
    fetch(`/bookstatuses/${userId}/${bookId}/${status}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRF-Token': Rails.csrfToken()
        }
    }).then(res =>{
        return res.json();
    }).then(json =>{
        console.log('yay');
        console.log(json);
    })
}