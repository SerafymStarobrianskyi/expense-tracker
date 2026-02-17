import SumCard from "./SumCard";
import "./SummaryCards.css";

export default function SummaryCards({ incomes, expense, balance }) {
  return (
    <div className="summary">
      <SumCard
        title="Total incomes"
        type="incomes"
        amount={incomes}
        src={`${import.meta.env.BASE_URL}ui/icons/trending-up.svg`}
      />
      <SumCard
        title="Total expense"
        type="expense"
        amount={expense}
        src={`${import.meta.env.BASE_URL}ui/icons/trending-down.svg`}
      />
      <SumCard
        title="Net balance"
        type="balance"
        amount={balance}
        src={`${import.meta.env.BASE_URL}ui/icons/dollar.svg`}
      />
    </div>
  );
}
