// place eventlistener on each edit-reivew button
//when button pressed, form hidden_edit html is rendered
var i;

console.log('gello')

window.addEventListener('DOMContentLoaded', () =>{
    document.querySelectorAll('.edit-review').forEach((item,index) => {

        item.addEventListener('click', ()=>{
            showEditForm(index+1)
        });

    })
})

function showEditForm(indexOnPage){
    // console.log(indexOnPage);
    // console.log(e.target);
    var idUnique = `review_` + indexOnPage;
    var editFormId = `edit_review_` + indexOnPage;
    var editButtonId = `edit_button_` + indexOnPage;

    let editForm = document.getElementById(editFormId).style.display = "inline-block";
    let editButton = document.getElementById(editButtonId).style.display = "inline-block";
    let reviewform = document.getElementById(idUnique).style.color = "black";
}