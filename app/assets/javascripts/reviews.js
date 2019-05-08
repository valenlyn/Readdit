// document.getElementsByClassName("edit-review").forEach(item)=>{}addEventListener("click", showEditForm);

var i;


console.log('gello')

window.addEventListener('DOMContentLoaded', () =>{
    document.querySelectorAll('.edit-review').forEach((item,index) => {
        // console.log(index)
        item.addEventListener('click', ()=>{
            showEditForm(index+1)
        });

    })
})



function showEditForm(indexOnPage){
    console.log('hi');
    // console.log(e.target);
    var idUnique = `review_` + indexOnPage;
    var editFormId = `edit_review_` + indexOnPage;
    var editButtonId = `edit_button_` + indexOnPage;

    let editForm = document.getElementById(editFormId).style.display = "inline-block";
    let editButton = document.getElementById(editButtonId).style.display = "inline-block";
    let reviewform = document.getElementById(idUnique).style.color = "black";
}