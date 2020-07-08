import React from "react";
import { GlobalWrapper } from "./style/style";
import Header from "./Components/Header";
import TotalAmount from "./Components/TotalAmount";
import Transaction from "./Components/Transaction";
import AddTransaction from "./Components/AddTransaction";
import IncomeExpense from "./Components/IncomeExpense";
import { GlobalStyles } from "./style/style";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <GlobalStyles />
      <GlobalWrapper>
        <Header />
        <TotalAmount />
        <IncomeExpense />
        <Transaction />
        <AddTransaction />
      </GlobalWrapper>
    </GlobalProvider>
  );
}

export default App;
