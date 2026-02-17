import { useState } from "react";
import "./FilterTab.css";
import TransactionItem from "./TransactionItem";

export default function FilterTab({ entries, onEdit, onDelete }) {
  const [filter, setFilter] = useState("All");

  const filteredEntries =
    filter === "All" ? entries : entries.filter((e) => e.type === filter);

  return (
    <div className="filter-tab">
      <div className="filter-tabs">
        <button
          className={`filer-button ${filter === "All" ? "active-tab" : ""}`}
          onClick={() => setFilter("All")}
        >
          All Entries
        </button>

        <button
          className={`filer-button ${filter === "Income" ? "active-tab" : ""}`}
          onClick={() => setFilter("Income")}
        >
          Income
        </button>

        <button
          className={`filer-button ${filter === "Expense" ? "active-tab" : ""}`}
          onClick={() => setFilter("Expense")}
        >
          Expense
        </button>
      </div>
      <span className="filter-line"></span>
      <div className="filter-info">
        {filteredEntries.map((entry) => (
          <TransactionItem
            key={entry.id}
            entry={entry}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
