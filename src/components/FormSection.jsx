import Element from './Element';
import React from 'react';
import { useState, useEffect } from 'react';

function FormSection(props) {
    
    useEffect(() => {

    }, [props]);
   

    
    console.log("inside form_section function...")
    return (
        <section id="form-container" className='sm:pr-3 sm:w-full md:w-3/4 md:h-2/3 rounded-2xl mx-auto bg-white pt-7'>
            <h3 className='font-bold text-center text-purple-500 text-3xl pb-7 sm:text-2xl sm:text-left sm:pl-5'>{props.data.login} Profile</h3>
            <Element use="Name" labelName='Name' placeholder='Github name' value={props.data.name} />
            <Element use="works_at" labelName='Works At' placeholder='Github user company name' value={props.data.company}/>
            <Element use="located_at" labelName='Located At' placeholder='Github user location' value={props.data.location}/>
            <Element use="reposNo" labelName='No. of Public Repos' placeholder='Number of repos published' value={props.data.public_repos} />
            <Element use="creationDate" labelName='Account Created On' placeholder='Account creation date' value={props.data.created_at} />
            <Element use="updatedDate" labelName='Account Last Updated' placeholder='Account last update date' value={props.data.updated_at} />
        </section>
    )
        
}

export default FormSection;