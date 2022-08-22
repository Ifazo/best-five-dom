const element = document.getElementById("calculate");
element.addEventListener("click", calculation);

function calculation() {
  const perPlayerCost = document.getElementById("per-player").value;
  const perPlayer = parseInt(perPlayerCost);
  const cost = perPlayer * 5;
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
