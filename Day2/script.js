
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function shownotes(){
  notesContainer.innerHTML = localStorage.getItem("notes");
}
shownotes();


function updateStorage(){
  localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click",()=>{
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "inputbox";
  inputBox.setAttribute("contenteditable","true");
  img.src = "/images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);

})

notesContainer.addEventListener("click",function(e){
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateStorage();
  }
  else if(e.target.tagName === "p"){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function(){0
        updateStorage();
      }
    })
  }
})

document.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    
    // Create and insert line break
    const br = document.createElement("br");
    range.insertNode(br);
    
    // Create text node for new line and insert
    const newText = document.createTextNode("\u00A0"); // &nbsp;
    range.insertNode(newText);
    
    // Move cursor after the inserted content
    range.setStartAfter(newText);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }
});