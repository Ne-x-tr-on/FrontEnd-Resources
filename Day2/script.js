const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click",()=>{
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "inputbox";
  inputBox.setAttribute("contenteditable","true");
  img.src = "/";
  notesContainer.appendChild(inputBox).appendChild(img);

})

notesContainer.addEventListener("click",function(e){
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
  }
})