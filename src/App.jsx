import MainElement from "./components/MainElement";
import FormSection from "./components/FormSection";
import { useState, useEffect } from "react";
import './App.css';

function App() {
  
  const [entry, setEntry] = useState("");
  
    const ReceiveProps =  (rec_val_1) => {
      console.log(rec_val_1);
      setEntry(rec_val_1);
    }
  

  if(entry) {
    return (
      <>
        <div className="text-white text-center">
          <h1 className="sm:text-2xl sm:font-bold md:text-6xl font-bold pb-3">GitHub API Fetch</h1>
          <p className="md:pb-8 sm:text-sm sm:pb-5">This page or project is designed to display a github user's profile information after providing a valid Github username</p>
        </div>
        <MainElement ReceiveProps={ReceiveProps} />            
        <FormSection data={entry} />
      </>
    )
  }
  else {
    return (
      <>
        <div className="text-white text-center">
          <h1 className="sm:text-2xl sm:font-bold md:text-6xl font-bold pb-3">GitHub API Fetch</h1>
          <p className="md:pb-8 sm:text-sm sm:pb-5">This page or project is designed to display a github user's profile information after providing a valid Github username</p>
        </div>
        <MainElement ReceiveProps={ReceiveProps} />    
        
      </>
    )
  }

  
}

export default App
