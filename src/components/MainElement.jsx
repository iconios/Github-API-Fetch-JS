import { useState } from "react";
import React from "react";
import FormSection from "./FormSection";
import PassNoProps from "./PassNoProps";

function MainElement({ReceiveProps}) {

    const [entry, setEntry] = useState("");
    const [data, setData] = useState("");
    let [nameOnGithub, worksAt, location]  = "";
    let  [repos, creationDate, UpdatedDate] = "";
    let gitUsername = "";

    return (
        <>
        <form className="md:max-w-screen-md mx-auto mb-5" >
            <label className="text-white mr-5 font-bold text-lg" htmlFor="username">Github Username</label>
            <input className="sm:w-full md:max-w-md rounded-2xl pl-3 py-1 text-sm border-purple-500 border-2" 
            type="text" id="username" name="username" onChange={HandleChange} placeholder="Enter your github username here" 
            value={entry} />
            <button type="button" className="md:float-right size-6 rounded-full" onClick={ ReceiveInput }>
                <img className="" src="../src/assets/Enter-icon.png" alt="enter-key" />
            </button>
        </form>
        </>   
        
    );

    async function ReceiveInput() {
        try {
            if({entry}) {
                console.log(`Value received: ${entry}`);
                await fetch(`https://api.github.com/users/${entry}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
                console.log(`Received data from github...${data.public_repos}`);
                ReceiveProps(data);
                console.log("received data passed...");
            });
            }
            else {
                console.log("No github username provided...");
            }           
        }
        catch(e) {
            alert(e);
        }

            
                
    }

    function PassProps(v, u) {

        return (
            <FormSection gitUsername = {u} nameOnGithub={v.name} worksAt={v.company} location={v.location} 
            repos={v.public_repos} creationDate={v.created_at} UpdatedDate={v.updated_at} />
        )
    }

    function HandleChange(e) {
        if(e.key == "Enter") {
            ReceiveInput();
        }
        else { setEntry(e.target.value); }
    }
};



export default MainElement;