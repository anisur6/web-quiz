import React from "react";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
import Signup from "./Components/Signup";
import Videos from "./Components/Videos";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RequireAuth from "./Components/RequireAuth";






function App() {
  return (


      <BrowserRouter>
      

      <Header/>

      <Routes>
        <Route path="/" element={<Videos/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/quiz" element={<RequireAuth><Quiz /></RequireAuth>} />
        <Route path="/result" element={<Result />} />


      </Routes>
      
      </BrowserRouter>
 
  );
}

export default App;
