const players = [];

document.getElementById("myBtn1").addEventListener("click", disable1);
function disable1() {
  document.getElementById("myBtn1").disabled = true;
}
document.getElementById("myBtn2").addEventListener("click", disable2);
function disable2() {
  document.getElementById("myBtn2").disabled = true;
}
document.getElementById("myBtn3").addEventListener("click", disable3);
function disable3() {
  document.getElementById("myBtn3").disabled = true;
}
document.getElementById("myBtn4").addEventListener("click", disable4);
function disable4() {
  document.getElementById("myBtn4").disabled = true;
}
document.getElementById("myBtn5").addEventListener("click", disable5);
function disable5() {
  document.getElementById("myBtn5").disabled = true;
}
document.getElementById("myBtn6").addEventListener("click", disable6);
function disable6() {
  document.getElementById("myBtn6").disabled = true;
}

function addToSelact(element) {
  const playerName = element.parentNode.children[0].innerText;

  const playerobj = {
    playerName: playerName,
  };

  players.push(playerobj);

  display(players);
}

function display() {
  const tableBody = document.getElementById("player-list");

  tableBody.innerHTML = "";



  for (let i = 0; i < players.length; i++) {

    if (players.length > 5) {
      alert("You already select 5 players. You can't select more...");
      players.pop();
    }

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

