const players = [];

function addToSelact(element) {
  const playerName = element.parentNode.children[0].innerText;

  const playerobj = {
    playerName: playerName,
  };

  players.push(playerobj);

  display(players);
}

function display(playerList) {


  const tableBody = document.getElementById("player-list");

    tableBody.innerHTML = "";

  for (let i = 0; i < playerList.length; i++) {
  
    const name = players[i].playerName;

    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${i + 1}. ${name}</td>
    `;

    tableBody.appendChild(tr);
  }
}

const element = document.getElementById("calculate");
element.addEventListener("click", calculation);

function calculation() {
  const perPlayerCost = document.getElementById("per-player").value;
  const perPlayer = parseInt(perPlayerCost);

  const select = players.length;

  const cost = perPlayer * select;
  document.getElementById("player-expenses").innerText = cost;
}

const totalElement = document.getElementById("calculate-total");
totalElement.addEventListener("click", totalCalculation);
function totalCalculation() {
  const perPlayerCost = document.getElementById("player-expenses").innerText;
  const perPlayer = parseInt(perPlayerCost);

  const managerCost = document.getElementById("manager").value;
  const manager = parseInt(managerCost);

  const choachCost = document.getElementById("choach").value;
  const choach = parseInt(choachCost);
  const totalCost = perPlayer + manager + choach;
  document.getElementById("total").innerText = totalCost;
}
