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