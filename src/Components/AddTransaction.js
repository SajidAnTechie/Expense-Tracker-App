import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, settext] = useState("");
  const [amount, setamount] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();

    if (text === "") {
      return;
    }

    const newBody = {
      id: Math.floor(Math.random() * 1000),
      text: text,
      amount: +amount,
    };

    addTransaction(newBody);
  };

  return (
    <>
      <h3>Add Transaction</h3>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Item name"
            onChange={(e) => settext(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
          />
        </div>
        <button>ADD</button>
      </form>
    </>
  );
};
export default AddTransaction;
