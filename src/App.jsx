import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";


import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore";
import { Loader } from "lucide-react";
import Layout from "./layout/Layout";
import AddProblem from "./pages/AddProblem";
import AdminRoute from "./components/AdminRoute";
import ProblemPage from "./pages/ProblemPage";

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
        <Route path="/" element={<Layout/>} >
          <Route 
            index 
            element={ authUser ? <HomePage /> : <Navigate to={"/login"} /> }    
          />
        </Route>

        <Route 
          path="/login" 
          element={!authUser ? <LoginPage /> : <Navigate to={"/"} /> } 
        />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />

        <Route
          path="/problem/:id"
          element={authUser ? <ProblemPage /> : <Navigate to={"/login"} />}
        />

        <Route element={<AdminRoute />}>
          <Route
            path="/add-problem"
            element={authUser ? <AddProblem /> : <Navigate to="/" />}
          />
        </Route>


      </Routes>
    </div>
  );
}

export default App;
