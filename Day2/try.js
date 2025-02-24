const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  const inputBox = document.createElement("p");
  const img = document.createElement("img");
  inputBox.className = "input-box"; // Fixed class name (was "inputbox")
  inputBox.setAttribute("contenteditable", "true");
  img.src = "/images/delete.png";
  img.alt = "Delete note";
  img.className = "delete-icon";
  notesContainer.appendChild(inputBox);
  inputBox.appendChild(img);
  updateStorage();
});

notesContainer.addEventListener("input", function(e) { // Better event for content changes
  if (e.target.classList.contains("input-box")) {
    updateStorage();
  }
});

notesContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "IMG") {
    e.target.closest(".input-box").remove();
    updateStorage();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const br = document.createElement("br");
    range.insertNode(br);
    range.setStartAfter(br);
  }
});