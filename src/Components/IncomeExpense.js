import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
const IncomeExpense = () => {
  const { transaction } = useContext(GlobalContext);

  const amount = transaction.map((item) => item.amount);

  const profit = amount
    .filter((num) => num > 0)
    .reduce((pre, curr) => (pre += curr), 0)
    .toFixed(2);
  const loss = (
    amount.filter((num) => num < 0).reduce((pre, curr) => (pre += curr), 0) * -1
  ).toFixed(2);

  return (
    <div className="income-expense">
      <div className="box">
        <div className="profit">${profit}</div>
      </div>
      <div className="box">
        <div className="loss">${loss}</div>
      </div>
    </div>
  );
};
export default IncomeExpense;
