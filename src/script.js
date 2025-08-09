// Arrays för att lagra transaktioner
const transactions = [];

// Funktion för att lägga till transaktion
function addTransaction(type) {
  const descriptionInput = document.getElementById("description");
  const amountInput = document.getElementById("amount");

  const description = descriptionInput.value.trim();
  const amount = Number(amountInput.value);

  if (!description || isNaN(amount)) {
    return;
  }

  transactions.push({ description, amount, type });

  descriptionInput.value = "";
  amountInput.value = "";
}


document.getElementById("addIncome").addEventListener("click", () => addTransaction("income"));
document.getElementById("addExpense").addEventListener("click", () => addTransaction("expense"));


if (typeof module !== "undefined") {
  module.exports = { addTransaction, transactions };
}
