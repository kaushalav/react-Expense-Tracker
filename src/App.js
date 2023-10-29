import React from 'react';
import './style.css';
import { useState } from 'react';
// import {Header, Balance, IncomeExpense} from './components';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import Login from './components/Login';
import SignUp from './components/SignUp';

export default function App() {
  return (
    <GlobalProvider>
      <Login />
      <SignUp />
      <Header />
      <div id="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
