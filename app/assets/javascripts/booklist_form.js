// document.getElementById("show-input").addEventListener("click", showInput);
// document.getElementById("show-input").style.color = "red";

window.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('show-input').addEventListener('click', showInput);
    // document.getElementById("show-input").style.color = "red";
})

function showInput() {
    let newList = document.getElementById("new-list").style.display = "inline-block";
    let listButton = document.getElementById("list-button").style.display = "inline-block";
    // let showInput = document.getElementById("show-input").style.color = "black";
}

window.addEventListener('DOMContentLoaded', () =>{
    let editBooklist = document.querySelectorAll("#edit-booklist");

    editBooklist.forEach( item => {
        item.addEventListener('click', displayInput);

    function displayInput () {
        let formBody = this.previousSibling;
        console.log(this.className);
        let editInputField = document.getElementsByClassName(this.className)[0];
        let editInputBtn = document.getElementsByClassName(this.className)[1];
        editInputField.style.display = "inline-block";
        editInputBtn.style.display = "inline-block";
        this.parentElement.firstElementChild.style.display = "none";

    }

    })

})