var draggedItem = null;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  draggedItem = event.target;
}

function drop(event) {
  event.preventDefault();
  var container = event.target;
  container.appendChild(draggedItem);

  // Add a success message
  var successMessage = document.createElement("p");
  successMessage.className = "success-message";
  successMessage.innerText = "Item dropped successfully!";
  container.appendChild(successMessage);
}

function reset() {
  var containerLeft = document.getElementById("container-left");
  var containerRight = document.getElementById("container-right");

  // Clear container-right
  while (containerRight.firstChild) {
    containerRight.firstChild.remove();
  }

  // Reset container-left
  containerLeft.innerHTML = `
    <h2>Container 1</h2>
    <div class="item" draggable="true" ondragstart="drag(event)">Item 1</div>
    <div class="item" draggable="true" ondragstart="drag(event)">Item 2</div>
    <div class="item" draggable="true" ondragstart="drag(event)">Item 3</div>
  `;
}
