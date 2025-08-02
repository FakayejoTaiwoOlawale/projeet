import React from "react";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router";
import BlackPage from "./pages/BlackPage";
const App = () => {
  return (
    

      <div className="min-h-screen m-0 p-0">
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          
          <Route path="/blackpage" element={<BlackPage/>}/>
         
        </Routes>
        
      </div>
  );
};

export default App;
