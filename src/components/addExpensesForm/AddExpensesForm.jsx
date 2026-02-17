import { useState, useEffect } from "react";
import "./AddExpensesForm.css";

export default function AddExpensesForm({
  onSubmitExpense,
  editingEntry,
  onCancelEdit,
}) {
  const [type, setType] = useState("Expense");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editingEntry) {
      setType(editingEntry.type);
      setDescription(editingEntry.description);
      setAmount(editingEntry.amount);
      setCategory(editingEntry.category);
      setDate(editingEntry.date);
    }
  }, [editingEntry]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description || amount === "" || !category || !date) return;

    const entryData = {
      type,
      description,
      amount: Number(amount),
      category,
      date,
    };

    onSubmitExpense(entryData);

    setType("Expense");
    setDescription("");
    setAmount(0);
    setCategory("");
    setDate("");
  }
  function handleCancel() {
    setType("Expense");
    setDescription("");
    setAmount(0);
    setCategory("");
    setDate("");
    onCancelEdit();
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <p className="form-lable">Entry Type</p>
      <div className="form-buttons">
        <button
          type="button"
          className={`form-button ${type === "Expense" ? "expense" : ""}`}
          onClick={() => setType("Expense")}
        >
          <img
            className="form-img"
            src={`${import.meta.env.BASE_URL}ui/icons/trending-down.svg`}
          />
          <p>Expense</p>
        </button>
        <button
          type="button"
          className={`form-button ${type === "Income" ? "incomes" : ""}`}
          onClick={() => setType("Income")}
        >
          <img
            className="form-img"
            src={`${import.meta.env.BASE_URL}ui/icons/trending-up.svg`}
          />
          <p>Incomes</p>
        </button>
      </div>

      <div>
        <p className="form-lable">Description</p>
        <input
          className="form-input"
          type="text"
          placeholder="Wath`s this for"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <p className="form-lable">Amount</p>
        <input
          className="form-input"
          type="number"
          placeholder="$ 0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div>
        <p className="form-lable">Category</p>
        <select
          className="form-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option className="form-option" value="">
            Select category
          </option>
          <option className="form-option" value="Food">
            Food
          </option>
          <option className="form-option" value="Transport">
            Transport
          </option>
          <option className="form-option" value="Entertainment">
            Entertainment
          </option>
          <option className="form-option" value="Other">
            Other
          </option>
        </select>
      </div>

      <div>
        <p className="form-lable">Date</p>
        <input
          className="form-input"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="search-container">
        <button className="search-button" type="submit">
          {editingEntry ? "Update" : "Add"}
        </button>
        {editingEntry && (
          <button
            className="search-button"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
