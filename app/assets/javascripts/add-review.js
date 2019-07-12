// This func()'unhide' the <input>s when user clicked on 'pencil'
const showNewForm = () => {

    const idForRadio = "new_rating";
    const idForText = "new_review";
    const idForButton = "new_button";

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
    const editLink = document.querySelector("#post-link");
    editLink.addEventListener("click", () => {
        showNewForm();
    });
})