import '../styles/new_claims.scss';
import {Link} from 'react-router-dom';
import React, {useState } from 'react';

const NewClaimSection = () =>{

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectType, setType] = useState('');
    let status = 'new';
    const handleSubmit = (e) => {
        e.preventDefault();
        let type = undefined;
        if(selectType === 'hardware'){
            type = 'hard';
        }
        else if (selectType === 'software'){
            type = 'soft';
        }
        else if (selectType === 'networking'){
            type = 'net';
        }
        else if (selectType === 'troubleshooting'){
            type = 'troublesh';
        }
        let log = {title, description, type, status};
        fetch('http://localhost:3001/claim', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            },
            body: JSON.stringify(log),
        }).then(
            function(response){
                if (response.ok){
                    alert('Successfull');
                }
                else{
                    alert('Ошибка, попробуйте ещё раз');
                }
            }
        )

        console.log( JSON.stringify(log));
    }

    return (
        <section className="create_new_claim_section">
            <h1>Creating new claim</h1>
            <form onSubmit = {handleSubmit}>
                <p>Title</p>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value = {title} required placeholder = "Type claim title"/>
                <p>Type</p>
                <select name="" id="" onChange={(e) => setType(e.target.value)} value = {selectType} required className= "new_claim_input" >
                    <option value="" disabled selected>Select type</option>
                    <option value="hardware">Hardware</option>
                    <option value="software">Software</option>
                    <option value="troubleshooting">Troubleshooting</option>
                    <option value="networking">Networking</option>
                </select>
                <p>Description</p>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value = {description} required placeholder = "Type claim description"/>
                <div className="form_buttons">
                    <Link to='/'>
                        <button className="new_cancel_but">
                            Cancel
                        </button>       
                    </Link>
                    <input type="submit" value="Create" className = "create_but"/>
                </div>
            </form>
        </section>
    )
}

export default NewClaimSection;
