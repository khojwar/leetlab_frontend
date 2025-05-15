import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";


import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore";
import { Loader } from "lucide-react";

function App() {
  const {authUser, checkAuth, isCheckingAuth} = useAuthStore()
  
  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }


  return (
    <div className="flex flex-col justify-start items-center ">
      <Toaster />
      <Routes>
        <Route 
          path="/" 
          element={ authUser ? <HomePage /> : <Navigate to={"/login"} /> } 
        />
        <Route 
          path="/login" 
          element={!authUser ? <LoginPage /> : <Navigate to={"/"} /> } 
        />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
      </Routes>
    </div>
  );
}

export default App;
