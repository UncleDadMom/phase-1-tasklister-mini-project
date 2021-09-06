document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener(`submit`, (e) => {
    e.preventDefault()
    const inputText = document.getElementById("new-task-description")
    addToDo(inputText.value)
  })
});
function addToDo(todo){
  let p = document.createElement(`p`)
  p.textContent = todo
  document.querySelector("#tasks").appendChild(p)
}