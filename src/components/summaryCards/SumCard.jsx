export default function SumCard({ title, amount, src, type }) {
  return (
    <div className={`summary-item ${type}`}>
      <div className="summary-info">
        <p className="summary-title">{title}</p>
        <p className="summary-amount">$ {amount}</p>
      </div>
      <div className={`summary-icon ${type}-icon`}>
        <img src={src} alt={title} className="summary-img" />
      </div>
    </div>
  );
}
