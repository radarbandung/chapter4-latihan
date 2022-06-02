const button = document.getElementById("add");
const paragraf1 = document.getElementById("p1");

let paraId = 2;
button.onclick = function () {
  const parent = document.getElementById("wrapper");
  let clonedElement = paragraf1.cloneNode(true);
  clonedElement.id = "p" 
  +paraId; 
  ++paraId;
  parent.append(clonedElement);
  alert("You have successfully cloned me");
};