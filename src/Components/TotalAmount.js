import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const TotalAmount = () => {
  const { transaction } = useContext(GlobalContext);

  const amount = transaction.map((item) => item.amount);

  const sum = amount.reduce((pre, curr) => (pre += curr), 0).toFixed(2);

  return <h3>${sum}</h3>;
};
export default TotalAmount;
