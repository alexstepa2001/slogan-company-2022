import ClaimsTable from './ClaimsTable';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import TableMenu from './TableMenu';

const ClaimsSection = () => {
    const resizeWin = window.matchMedia('(min-width: 950px)');
    console.log(localStorage.getItem('search'));
    let [claimCounter, setCounter] = useState('');
    let [claims, setClaims] = useState('');
    useEffect(() => {
        fetch(`/claim?offset=${localStorage.getItem('pageset')}&limit=10&search=${localStorage.getItem('search')}&sort=asc`, {
            headers : {'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
        })
        .then(response => response.json())
        .then(function (data){
            setCounter(data.totalItems); 
            setClaims(data.claims); 
        })
    }, [claims, claimCounter])
    if (claims !== '')
    if (resizeWin.matches){
        return (
            <>
            <section className="claims_section">
                <div className="claims_section_top">
                    <h1>Your claims</h1>
                        <Link to="/new_claim" className ="new_claim">
                            <button className="create_claim_button">
                                <img src="img/icon-plus.svg" alt="" />
                                Create claim
                            </button>
                        </Link>
                </div>
                <ClaimsTable claimsCounter = {claimCounter} claims = {claims}/>
            </section> 
            </>
        )
    }
    else{
        return(
            <>
                <section className="claims_mobile_section">
                    <div className="claims_mobile_section_top">
                        <h1>Your claims</h1>
                        <Link to="/new_claim" className ="new_claim">
                            <button className="create_claim_button">
                                +
                            </button>
                        </Link>
                    </div>
                    {claims.map((claim) => 
                        <div className="claim_mobile">
                        <div className="claim_top">
                            {claim.title}
                        </div>
                        <div className="claim_bottom">
                            <div className="claim_desc">
                                <div className="mobile_bold">
                                    Created
                                </div>
                                <div className="mobile_thin">
                                    {claim.createdAt[8]}{claim.createdAt[9]}/{claim.createdAt[5]}{claim.createdAt[6]}/{claim.createdAt[0]}{claim.createdAt[1]}{claim.createdAt[2]}{claim.createdAt[3]}
                                </div>
                            </div>
                            <div className="claim_desc">
                                <div className="mobile_bold">
                                    Type
                                </div>
                                <div className="mobile_thin">
                                    <div className={claim.type.name.toLowerCase() + " type_circle"}></div>
                                        {claim.type.name}
                                </div>
                            </div>
                            <div className="claim_desc">
                                <div className="mobile_bold">
                                    Status
                                </div>
                                <div className="mobile_thin">
                                    <div className={claim.status.name.toLowerCase() +" status"}>
                                        {claim.status.name}
                                    </div>
                                </div>
                            </div>
                            <Link to="/">
                                <button>
                                    Browse
                                </button>
                            </Link>
                        </div>
                    </div>
                    )}
                    <TableMenu claim = {claimCounter}/>
                </section>
            </>
        )
    }
}

export default ClaimsSection;
