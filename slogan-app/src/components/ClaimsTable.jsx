import React, {useState } from 'react';
import { useEffect } from 'react';
import ClaimT from './ClaimT';

const ClaimsTable = () => {
    let [claimCounter, setCounter] = useState('');
    let [claims, setClaims] = useState('');
    useEffect(() => {
        fetch('/claim', {
            headers : {'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
        })
        .then(response => response.json())
        .then(function (data){
            setCounter(data.totalItems); 
            setClaims(data.claims); 
        }).then(() => {
            console.log(claimCounter);
            console.log(claims);   
            } 
        ) 
    }, [claims, claimCounter])
    console.log(claims);
    if (claims !== ''){
        return (
            <table className="claims_table">
                <thead>
                    <tr>
                        <th>
                            Title
                        </th>
                        <th>
                            Created
                        </th>
                        <th>
                            Type
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                {claims.map((claim) => <ClaimT title = {claim.title} type = {claim.type} status = {claim.status} time = {claim.createdAt}/>)}
            </table>
        )
    }
    else{
        return('Loading...')
    }
}

export default ClaimsTable;