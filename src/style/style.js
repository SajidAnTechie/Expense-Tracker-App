import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
  }
  *{
    margin:0;
    padding:0
  }
`;

export const GlobalWrapper = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 90%;
  }
  h2 {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  ul {
    width: 100%;
    list-style: none;
    margin-top: 24px;
    margin-bottom: 24px;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      padding: 9px;
      border: 1px solid #eee;
      border-radius: 2px;
      position: relative;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      height: 23px;
      :hover {
        button {
          opacity: 1;
        }
      }
      button {
        border: none;
        height: 100%;
        background-color: #f44336;
        color: white;
        padding: 8px;
        opacity: 0;
        cursor: pointer;
        position: absolute;
        left: 100%;
      }
    }
  }
  form {
    width: 100%;
    input {
      width: 100%;
      padding: 10px;
      border-radius: 7px;
      outline: none;
      border: 1px solid #d0cfcf;
      @media (max-width: 1000px) {
        height: 35px;
        padding: 0px 0px 0px 5px;
      }
      :focus {
        box-shadow: 0 0 0 0.09rem rgb(164, 172, 196);
      }
    }
    .form-group {
      margin-top: 10px;
    }
    button {
      width: 100%;
      margin-top: 12px;
      background-color: #f44336;
      border-radius: 10px;
      height: 45px;
      outline: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
    }
  }
  .income-expense {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 25px;
  }
  .box {
    width: 170px;
    height: 100px;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border: 1px solid #eee;
  }
  .profit {
    font-size: 37px;
    color: #7cb342;
  }
  .loss {
    font-size: 37px;
    color: #f44336;
  }
`;
