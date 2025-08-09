// Arrayer för transaktioner
const incomeList = [];
const expenseList = [];

// Event-lyssnare
document.getElementById("addIncome").addEventListener("click", () => addTransaction("income"));
document.getElementById("addExpense").addEventListener("click", () => addTransaction("expense"));

// Lägg till transaktion
function addTransaction(type) {
  const descriptionInput = document.getElementById("description");
  const amountInput = document.getElementById("amount");

  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (!description || isNaN(amount)) {
    alert("Fyll i både beskrivning och ett giltigt belopp.");
    return;
  }

  const transaction = { description, amount, type };
  if (type === "income") {
    incomeList.push(transaction);
  } else {
    expenseList.push(transaction);
  }

  descriptionInput.value = "";
  amountInput.value = "";
  updateDisplay();
}

// Uppdatera listor och saldo
function updateDisplay() {
  const incomeUl = document.getElementById("incomeList");
  const expenseUl = document.getElementById("expenseList");
  const totalSpan = document.getElementById("totalBalance");

  // Rensa
  incomeUl.innerHTML = "";
  expenseUl.innerHTML = "";

  // Visa inkomster
  incomeList.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.description}: +${item.amount} kr`;
    incomeUl.appendChild(li);
  });

  // Visa utgifter
  expenseList.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.description}: -${item.amount} kr`;
    expenseUl.appendChild(li);
  });

  // Total
  const totalIncome = incomeList.reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = expenseList.reduce((sum, t) => sum + t.amount, 0);
  const balance = totalIncome - totalExpenses;

  totalSpan.textContent = balance + " kr";
}
