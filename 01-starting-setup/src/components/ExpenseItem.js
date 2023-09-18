import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2023,9,15);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 20000;
  return (
    <div className="expense-item">
      <div >{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">Rs{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
