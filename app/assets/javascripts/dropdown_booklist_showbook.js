// booklist dropdown form. testing on show book page
//get book list data for specific user.
//display all booklist for user
//add a new form to create new booklist
//add an edit form to add books inside created booklist
//display should indicate if book belongs to a booklist or not
console.log('For booklist stuff')

var userId = document.getElementsByClassName('current-user')[0].id;
var parentNode = document.getElementsByClassName('booklist-dropdown-showbook')[0];
var bookId = document.getElementsByClassName('book-class-tag')[0].id;


window.addEventListener('DOMContentLoaded', () =>{
    getBooklist(userId);

})

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
        storeBooklistsOnDom(json);
    })
}

// put into string format? onto the id?

function storeBooklistsOnDom(booklistObj){

    var test = JSON.stringify(booklistObj);
    console.log(test);
    var storeDataOnDom = document.getElementsByClassName('dropdown-divider')[0];
    console.log(storeDataOnDom);

    storeDataOnDom.id = test;
}