let form = document.querySelector("#form")
let displayAlert = document.querySelector("#displayAlert")

form.addEventListener("submit", function(event){
    event.preventDefault();
    displayAlert.textContent = "You have submitted successfully";
    displayAlert.className = "alert alert-success";

    

})

