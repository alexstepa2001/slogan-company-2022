import React, { Component } from 'react'
import ClaimsTable from './ClaimsTable';
import TableMenu from './TableMenu';
import {Link} from 'react-router-dom';

class ClaimsSection extends Component {
    render() {
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
                <ClaimsTable/>
                <TableMenu/>
            </section> 
            </>
        )
    }
}

export default ClaimsSection;