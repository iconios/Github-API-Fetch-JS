import { useState, createContext } from "react";
import React from "react";


export const UsernameContext = React.createContext()

function MainElement() {

    const [entry, setEntry] = useState("");

    return (
        <form id="main-form" className="mb-6 mx-auto">
            <label className="text-white mx-auto mr-5 font-bold text-lg" htmlFor="username">Github Username</label>
            <UsernameContext.Provider value={entry} >
                <input className="mx-auto w-1/2 rounded-2xl pl-3 py-1 text-sm border-purple-500 border-2" type="text" id="username" name="username" onChange={HandleChange} placeholder="Enter your github username here" value={entry} />
            </UsernameContext.Provider>
        </form>
        
    );

    function HandleChange(e) {
        setEntry(e.target.value);
    }
};



export default MainElement;