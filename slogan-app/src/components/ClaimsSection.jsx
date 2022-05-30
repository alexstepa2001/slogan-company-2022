import React, { Component } from 'react'
import ClaimsTable from './ClaimsTable';
import TableMenu from './TableMenu';

class ClaimsSection extends Component {
    render() {
        return (
            <section className="claims_section">
                <div className="claims_section_top">
                    <h1>Your claims</h1>
                    <a href="">
                        <button className="create_claim_button">
                            <img src="img/icon-plus.svg" alt="" />
                            Create claim
                        </button>
                    </a>
                </div>
                <ClaimsTable/>
                <TableMenu/>
            </section>
        )
    }
}

export default ClaimsSection;