import { useContext, useState, useEffect } from 'react';
import Element from './Element';
import React from 'react';
import { UsernameContext } from './MainElement';

function FormSection() {
    
    const [ data, setData ] = useState("");
    const username = useContext(UsernameContext);

    try {

        useEffect(() => {
            fetch(`https://api.github.com/users/${username}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
            });
        }, []);
        
        if (data) {
            const [nameOnGithub, worksAt, location]  = [data.name, data.company, data.location];
            const [repos, creationDate, UpdatedDate] = [data.public_repos, data.created_at, data.updated_at];

            //Set data to redis
            //client.setEx(`${props.username}_'name'`, 3600, nameOnGithub);
        
            return (
                <section id="form-container" className='sm:pr-3 sm:w-full md:w-3/4 md:h-2/3 rounded-2xl mx-auto bg-white pt-7'>
                    <h3 className='font-bold text-center text-purple-500 text-3xl pb-7 sm:text-2xl sm:text-left sm:pl-5'>{username? username: "Username"} Profile</h3>
                    <Element use="Name" labelName='Name' placeholder='Github name' value={nameOnGithub? nameOnGithub: 'Github name'} />
                    <Element use="works_at" labelName='Works At' placeholder='Github user company name' value={worksAt? worksAt: 'Github user company name'}/>
                    <Element use="located_at" labelName='Located At' placeholder='Github user location' value={location? location: 'Github user location'}/>
                    <Element use="reposNo" labelName='No. of Public Repos' placeholder='Number of repos published' value={repos? repos: 'Number of repos published'} />
                    <Element use="creationDate" labelName='Account Created On' placeholder='Account creation date' value={creationDate? creationDate: 'Account creation date'} />
                    <Element use="updatedDate" labelName='Account Last Updated' placeholder='Account last update date' value={UpdatedDate? UpdatedDate: 'Account last update date'} />
                </section>
        )
    }
    else {
        return (
            <section id="form-container" className='sm:pr-3 sm:w-full md:w-3/4 md:h-2/3 rounded-2xl mx-auto bg-white pt-7'>
                <h3 className='font-bold text-center text-purple-500 text-3xl pb-7 sm:text-2xl sm:text-left sm:pl-5'>Username Profile</h3>
                <Element use="Name" labelName='Name' placeholder='Github name' value='Github name' />
                <Element use="works_at" labelName='Works At' placeholder='Github user company name' value='Github user company name'/>
                <Element use="located_at" labelName='Located At' placeholder='Github user location' value='Github user location'/>
                <Element use="reposNo" labelName='No. of Public Repos' placeholder='Number of repos published' value='Number of repos published' />
                <Element use="creationDate" labelName='Account Created On' placeholder='Account creation date' value='Account creation date' />
                <Element use="updatedDate" labelName='Account Last Updated' placeholder='Account last update date' value='Account last update date' />
            </section>
        )
    }
                
    }
    catch (err) {
        return alert(err);
    }    
}

export default FormSection;