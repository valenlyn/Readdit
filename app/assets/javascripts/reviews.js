// What is this var for?
var i;

window.addEventListener('DOMContentLoaded', () =>{
    // addEventListener onEach 'pencil'
    document.querySelectorAll('.edit-review').forEach((item, index) => {
        item.addEventListener('click', ()=>{
            // ...
            showEditForm(index + 1)
        });

    })
})

// This func() 'unhide' the <input>s when user clicked on 'pencil'
function showEditForm(indexOnPage){
    // console.log(indexOnPage);
    // console.log(e.target);

    var idUnique = `review_` + indexOnPage;//"review_1"
    var idForRadio = `edit_rating_` + indexOnPage;//"edit_rating_1"
    var idForText = `edit_review_` + indexOnPage;//"edit_review_1"
    var idForButton = `edit_button_` + indexOnPage;//"edit_button_1"

    //The <input type="radio">
    let radioInput = document.getElementById(idForRadio);
    radioInput.classList.toggle("toggle");

    //The <input type="text">
    let textInput = document.getElementById(idForText);
    textInput.classList.toggle("toggle");

    //The <button>
    let button = document.getElementById(idForButton);
    button.classList.toggle("toggle");

    //The 'pencil'
    // Change the styling of pencil? ?_0
    let reviewform = document.getElementById(idUnique).style.color = "black";

}