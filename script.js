const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
  addDeleteEventListeners();
}

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "img/delete.png";
  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);
  updateStorage();
  addDeleteEventListeners();
});

function addDeleteEventListeners() {
  const deleteButtons = document.querySelectorAll(".input-box img");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      button.parentElement.remove();
      updateStorage();
    });
  });

  const notes = document.querySelectorAll(".input-box");
  notes.forEach((note) => {
    note.addEventListener("keyup", updateStorage);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

showNotes();
