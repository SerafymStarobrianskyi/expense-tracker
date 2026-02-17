import SummaryCards from "./components/summaryCards/SummaryCards";
import "./styles/global.css";
import AddExpensesForm from "./components/addExpensesForm/AddExpensesForm";
import useLocalStorage from "./hooks/useLocalStorage";
import FilterTab from "./components/filterTab/FilterTab";
import { useState } from "react";

export default function App() {
  const [entries, setEntries] = useLocalStorage("entries", []);
  const [editingEntry, setEditingEntry] = useState(null);

  const incomes = entries
    .filter((e) => e.type === "Income")
    .reduce((sum, e) => sum + e.amount, 0);

  const expense = entries
    .filter((e) => e.type === "Expense")
    .reduce((sum, e) => sum + e.amount, 0);

  const balance = incomes - expense;

  function handleSubmit(newEntry) {
    if (editingEntry) {
      setEntries((prev) =>
        prev.map((entry) =>
          entry.id === editingEntry.id
            ? { ...newEntry, id: editingEntry.id }
            : entry,
        ),
      );
      setEditingEntry(null);
    } else {
      console.log(newEntry);
      setEntries((prev) => [...prev, { ...newEntry, id: Date.now() }]);
    }
  }

  function handleEdit(id) {
    const entryToEdit = entries.find((entry) => entry.id === id);
    setEditingEntry(entryToEdit);
  }

  function handleDelete(id) {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  }

  return (
    <>
      <h1 className="title">Expense Tracker</h1>
      <SummaryCards incomes={incomes} expense={expense} balance={balance} />
      <div className="content">
        <AddExpensesForm
          onSubmitExpense={handleSubmit}
          editingEntry={editingEntry}
          onCancelEdit={() => setEditingEntry(null)}
        />
        <FilterTab
          entries={entries}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}
