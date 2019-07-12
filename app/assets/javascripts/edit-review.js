// This func()'unhide' the <input>s when user clicked on 'pencil'
const showEditForm = () => {

    const idForRadio = "edit_rating";
    const idForText = "edit_review";
    const idForButton = "edit_button";

    //The <input type="radio">
    let radioInput = document.getElementById(idForRadio);
    radioInput.classList.toggle("toggle");

    //The <input type="text">
    let textInput = document.getElementById(idForText);
    textInput.classList.toggle("toggle");

    //The <button>
    let button = document.getElementById(idForButton);
    button.classList.toggle("toggle");

}

window.addEventListener('DOMContentLoaded', () => {
    const editLink = document.querySelector("#edit-link");
    editLink.addEventListener("click", () => {
        showEditForm();
    });
})