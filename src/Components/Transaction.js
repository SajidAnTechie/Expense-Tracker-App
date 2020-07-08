import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import TransactionList from "./TransactionList";

const Transaction = () => {
  const { transaction } = useContext(GlobalContext);

  return (
    <ul>
      {transaction.map((item) => {
        return <TransactionList key={item.id} transaction={item} />;
      })}
    </ul>
  );
};

export default Transaction;
