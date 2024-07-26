import React from 'react';
import "./layout.scss";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./routes/homePage/home"

export default function App() {
  return (
    <div className='layout'>
      <Navbar/>
      <div className='content'>
        <Homepage/>
        hlo
      </div>
      
    </div>
  );
}