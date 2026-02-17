export default function TransactionItem({ entry, onEdit, onDelete }) {
  return (
    <div className="transaction-item">
      <div className="transaction-left">
        <div
          className={`transaction-icon ${entry.type === "Income" ? "incomes" : "expense"}`}
        >
          <img
            src={`${import.meta.env.BASE_URL}ui/icons/trending-${entry.type === "Income" ? "up" : "down"}.svg`}
            alt={entry.type === "Income" ? "Income" : "Expense"}
            className="transaction-img"
          />
        </div>
        <div className="transaction-info">
          <p className="transaction-info-description">{entry.description}</p>
          <div className="transaction-info-bottom">
            <div className="transaction-info-category transaction-info-btm-item">
              <div className="transaction-info-icon">
                <img
                  src={`${import.meta.env.BASE_URL}ui/icons/tags-category.svg`}
                  alt="tag"
                  className="transaction-info-img"
                />
              </div>
              <p>{entry.category}</p>
            </div>
            <div className="transaction-info-date transaction-info-btm-item">
              <div className="transaction-info-icon">
                <img
                  src={`${import.meta.env.BASE_URL}ui/icons/calendar.svg`}
                  alt="calendar"
                  className="transaction-info-img"
                />
              </div>
              <p>{entry.date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="transaction-right">
        <p
          className={`transaction-amount ${entry.type === "Income" ? "amount-incomes" : "amount-expense"}`}
        >
          {entry.type === "Income" ? "+" : "-"}${entry.amount}
        </p>
        <div className="transaction-buttons">
          <button
            className="transaction-button"
            onClick={() => onEdit(entry.id)}
          >
            <img
              src={`${import.meta.env.BASE_URL}ui/icons/pen.svg`}
              className="transaction-button-img"
            />
          </button>
          <button
            className="transaction-button"
            onClick={() => onDelete(entry.id)}
          >
            <img
              src={`${import.meta.env.BASE_URL}ui/icons/trash.svg`}
              className="transaction-button-img"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
