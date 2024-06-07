import Element from './Element';
import React from 'react';
import { useState, useEffect } from 'react';

function FormSection(props) {
    

   

    
    console.log("inside form_section function...")
    return (
        <section id="form-container" className='sm:pr-3 sm:w-full md:w-3/4 md:h-2/3 rounded-2xl mx-auto bg-white pt-7'>
            <h3 className='font-bold text-center text-purple-500 text-3xl pb-7 sm:text-2xl sm:text-left sm:pl-5'>{props.data.name? props.data.name: 'Username'} Profile</h3>
            <Element use="Name" labelName='Name' placeholder='Github name' value={props.data.nameOnGithub} />
            <Element use="works_at" labelName='Works At' placeholder='Github user company name' value={props.data.worksAt}/>
            <Element use="located_at" labelName='Located At' placeholder='Github user location' value={props.data.location}/>
            <Element use="reposNo" labelName='No. of Public Repos' placeholder='Number of repos published' value={props.data.repos} />
            <Element use="creationDate" labelName='Account Created On' placeholder='Account creation date' value={props.data.creationDate} />
            <Element use="updatedDate" labelName='Account Last Updated' placeholder='Account last update date' value={props.data.UpdatedDate} />
        </section>
    )
        
}

export default FormSection;