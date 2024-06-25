//selecting plus button,popup overaly and popup box
var PlusButton = document.getElementById("plusButton")
var popupOverlay = document.querySelector(".popup-overlay")
var popupBox = document.querySelector(".popup-box")

PlusButton.addEventListener("click",function(){
    
    popupOverlay.style.display ="block"
    popupBox.style.display ="block"
})

//selecting cancel button
var cancelButton = document.getElementById("cancel")



cancelButton.addEventListener("click",function(event){
    event.preventDefault() //to avoid refreshing when button was clicked
    popupOverlay.style.display ="none"
    popupBox.style.display = "none"
})

//selecting add button,container,book container
var Container = document.querySelector(".container")
var bookContainer = document.querySelector(".book-container")
var addButton = document.getElementById("addBook")
var BookTitle = document.getElementById("bookTitle")
var BookAuthor = document.getElementById("bookAuthor")
var BookDesc = document.getElementById("bookDescription")

addButton.addEventListener("click",function(event){
    event.preventDefault()
    var newStory = document.createElement("div")
    newStory.setAttribute("class","book-container")
    newStory.innerHTML = `<h3>${BookTitle.value}</h3>
    <h5>${BookAuthor.value}</h5>
    <p>${BookDesc.value}</p>
    <button id="deleteStory" onclick="removeBook(event)">Delete</button>`

    Container.append(newStory)
    popupOverlay.style.display ="none"
    popupBox.style.display = "none"

    // Clear the form fields
    BookTitle.value = '';
    BookAuthor.value = '';
    BookDesc.value = '';

    

})
function removeBook(event)
{
    event.target.parentElement.remove()
}
