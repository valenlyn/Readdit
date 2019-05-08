window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        dropdown.addEventListener("change",function(event){
            console.log(event.target.parentNode.submit());
            // const options = {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json'
            //     },
            //     // body: JSON.stringify({ status: event.target.value })
            // }
            // fetch(`/bookstatuses/`, options)
            // .then(response => response.json())
            // .then(json => console.log(json));
        })
    })
})