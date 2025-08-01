import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from "./Pages/Auth/signUp";
import Cart from "./Pages/cart/cart";
import Header from "./Components/Header/header";
import Order from "./Pages/order/order";
import Home from "./Pages/landing/home";
import Payment from "./Pages/payment/payment";
import Results from "./Pages/Results/Results";
const Routeing: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<SignUp />}></Route>
        <Route path="/payments" element={<Payment />}></Route>
        <Route path="/orders" element={<Order />}></Route>
        <Route path="/category/:categoryName" element={<Results/>}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Router>
  );
};

export default Routeing;
