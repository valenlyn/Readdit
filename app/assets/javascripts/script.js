console.log("hi")

document.getElementById("show-input").addEventListener("click", showInput);
document.getElementById("show-input").style.color = "red";

function showInput() {
    document.getElementById("new-list").style.display = "inline-block";

}

document.getElementById("new-list").addEventListener("click", getInput);

function getInput() {

    document.addEventListener("click", listenOutside)

    function listenOutside (evt) {
        const newList = document.getElementById("new-list");
        let targetElement = evt.target; // clicked element

        do {
            if (targetElement == newList) {
                // This is a click inside. Do nothing, just return.
                return;
            }
            // Go up the DOM
            targetElement = targetElement.parentNode;
        } while (targetElement);

        // This is a click outside.
        alert("clicked outside")
        document.removeEventListener("click", listenOutside);

    }
}