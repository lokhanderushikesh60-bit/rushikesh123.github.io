function num(id) {
  return Number(document.getElementById(id).value);
}

function money(value) {
  return "₹" + value.toLocaleString("en-IN", {maximumFractionDigits: 2});
}

function positionSize() {
  const balance = num("balance");
  const risk = num("risk");
  const entry = num("entry");
  const stop = num("stop");
  const riskAmount = balance * risk / 100;
  const riskPerUnit = Math.abs(entry - stop);

  if (balance <= 0 || risk <= 0 || riskPerUnit <= 0) {
    document.getElementById("positionResult").textContent = "Enter valid values.";
    return;
  }

  const size = riskAmount / riskPerUnit;
  document.getElementById("positionResult").textContent =
    `Position size: ${size.toFixed(2)} units • Max risk: ${money(riskAmount)}`;
}

function riskReward() {
  const entry = num("rrEntry");
  const stop = num("rrStop");
  const target = num("target");
  const risk = Math.abs(entry - stop);
  const reward = Math.abs(target - entry);

  if (risk <= 0 || reward < 0) {
    document.getElementById("rrResult").textContent = "Enter valid values.";
    return;
  }

  const ratio = reward / risk;
  document.getElementById("rrResult").textContent =
    `Risk/Reward: 1:${ratio.toFixed(2)} • Risk ${risk.toFixed(2)} / Reward ${reward.toFixed(2)}`;
}

function profitLoss() {
  const entry = num("plEntry");
  const exit = num("plExit");
  const quantity = num("quantity");
  const pnl = (exit - entry) * quantity;

  if (quantity <= 0) {
    document.getElementById("plResult").textContent = "Enter a valid quantity.";
    return;
  }

  document.getElementById("plResult").textContent =
    `P&L: ${money(pnl)}${pnl >= 0 ? " profit" : " loss"}`;
}
