// booklist dropdown form. testing on show book page
//get book list data for specific user.
//display all booklist for user
//add a new form to create new booklist
//add an edit form to add books inside created booklist
//display should indicate if book belongs to a booklist or not
console.log('For booklist stuff')

var userId = document.getElementsByClassName('current-user')[0].id;
// var parentNode = document.getElementsByClassName('booklist-dropdown-showbook')[0];
var bookId = document.getElementsByClassName('book-data-holder')[0].id;

// var test = document.getElementsByClassName('check-me')[0].id;



window.addEventListener('DOMContentLoaded', () =>{
    var booklistItems = document.querySelectorAll(".check-box");
    // getBooklist(userId);
    console.log(booklistItems);
    booklistItems.forEach( item =>{
        item.addEventListener('click', () =>{
            updateBookList(event)
        })
    })
})

function updateBookList(e){
    console.log(e.target.checked)
    var booklistId = e.target.parentNode.id
    console.log(booklistId);
    // if on click == false, means remove. Book is in booklist and will remove from book list. Update booklist
    if(e.target.checked === false){
        fetch(`/booklists/${bookId}/${booklistId}/remove`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-CSRF-Token': Rails.csrfToken()
            },
        }).then(res => {
            return res.json();
        }).then(json => {
            console.log('success', json);
        })
    }else{
        fetch(`/booklists/${bookId}/${booklistId}/add`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-CSRF-Token': Rails.csrfToken()
            },
        }).then(res => {
            return res.json();
        }).then(json => {
            console.log('success',json);
        })
    }
    console.log('updating booklist')
}

function refreshBookList(){

}
// not in use
function getBooklist(userId){
    fetch(`/booklists/books/${userId}`,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    }).then(res =>{
        return res.json();
    }).then(json =>{
        console.log('yeappers');
        //json returns all booklist from current user
        // storeBooklistsOnDom(json);
    })
}

// put into string format? onto the id?

function storeBooklistsOnDom(booklistObj){

    var test = JSON.stringify(booklistObj);
    // console.log(test);
    var storeDataOnDom = document.getElementsByClassName('booklist-data-holder')[0];
    // console.log(storeDataOnDom);

    storeDataOnDom.id = test;
}