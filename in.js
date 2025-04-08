const buttonE1 = document.getElementById("roll-button");
const dicE1 = document.getElementById("dice");
const rollHistoryE1 = document.getElementById("roll-history");
const historylist = [];

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceface = getDiceface(rollResult);
  dicE1.innerHTML = diceface; 
  historylist.push(rollResult);
  updateRollHistory();
}

function updateRollHistory() {
  rollHistoryE1.innerHTML = ""; 
  for (let i = 0; i < historylist.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceface(historylist[i])}</span>`; 
    rollHistoryE1.appendChild(listItem);
  }
}

function getDiceface(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}

buttonE1.addEventListener("click", () => {
  dicE1.classList.add("roll-animation"); 
  setTimeout(() => {
    dicE1.classList.remove("roll-animation"); 
    rollDice();
  }, 1000);
});
