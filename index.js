
/* MANDATORY JS EXERCISES (continue from yesterday's file for this exercise)
    1) Create two inputs for picking up colors in the page, and a button with "Apply Colors" as text
    2) Grab all <li> in the page from the DOM, and save them in a variable called "listItems"
    3) Grab the inputs references via DOM manipulation and save them in variables
    4) Create a function and attach it to the "Apply Colors" button click event
    5) Cycle listItems inside the function. Verify that the function and the loop work by logging in the console 
        each item from the loop every time the button gets clicked
    6) Move the inputs references in the function. Use the first input value as background-color for the item, and the second one for the text color.

    If you receive black as a color check where you have the inputs references.
    You should now see the list-items color and background-color change at the click of the button.
*/


let genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]




let newList = function(){
    
    
    let parentNode = document.getElementById("Un-Orderlist")
    let newListElement = document.createElement("ul")
    parentNode.appendChild(newListElement)
    newListElement.classList.add("mt-4")

    for ( i = 1; i < genres.length; i++)
{
    let liNode = document.createElement("li"); 
    
    
    
    liNode.innerHTML = genres[i]
   newListElement.appendChild(liNode)
  
}
 

}

let  colorPicker1 = document.getElementById("picker1")

let  colorPicker2 = document.getElementById("picker2")

let liLists = document.getElementsByTagName("li")




let applyColor = function(){
    for(let liList of liLists ){
        liList.style.color = colorPicker1.Value
        liList.style.backgroundColor = "colorPicker2.Value"
    }

}



let buttonColor = document.getElementById("Apply-Colors")
buttonColor.addEventListener("click",applyColor)


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })


  $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })




