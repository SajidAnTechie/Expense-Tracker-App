import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

const initialState = {
  data: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const addTransaction = (newData) => {
    dispatch({
      type: "Add_Transaction",
      payload: newData,
    });
  };
  const deleteTransaction = (id) => {
    dispatch({
      type: "Delete_Transaction",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transaction: state.data,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
