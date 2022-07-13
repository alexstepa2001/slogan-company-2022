import ClaimsTable from './ClaimsTable';
import TableMenu from './TableMenu';
import {Link} from 'react-router-dom';

const ClaimsSection = () => {
    const resizeWin = window.matchMedia('(min-width: 950px)');
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
                <ClaimsTable/>
                <TableMenu/>
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
                    <div className="claim_mobile">
                        <div className="claim_top">

                        </div>
                        <div className="claim_bottom">
                            <div className="claim_desc">
                                <div className="mobile_bold">
                                    Created
                                </div>
                                <div className="mobile_thin">
                                    12/04/2021
                                </div>
                            </div>
                            <div className="claim_desc">
                                <div className="mobile_bold">
                                    Type
                                </div>
                                <div className="mobile_thin">
                                    <div className="type_circle hardware"></div>
                                    Hardware
                                </div>
                            </div>
                            <div className="claim_desc">
                                <div className="mobile_bold">
                                    Status
                                </div>
                                <div className="mobile_thin">
                                    <div className="status declined">
                                        Declined
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

                    <div className="claim_mobile">
                        <div className="claim_top">

                        </div>
                        <div className="claim_bottom">
                            <div className="claim_desc">
                                <div className="mobile_bold">
                                    Created
                                </div>
                                <div className="mobile_thin">
                                    12/04/2021
                                </div>
                            </div>
                            <div className="claim_desc">
                                <div className="mobile_bold">
                                    Type
                                </div>
                                <div className="mobile_thin">
                                    <div className="type_circle software"></div>
                                    Software
                                </div>
                            </div>
                            <div className="claim_desc">
                                <div className="mobile_bold">
                                    Status
                                </div>
                                <div className="mobile_thin">
                                    <div className="status new">
                                        New
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

                    <div className="claim_mobile">
                        <div className="claim_top">

                        </div>
                        <div className="claim_bottom">
                            <div className="claim_desc">
                                <div className="mobile_bold">
                                    Created
                                </div>
                                <div className="mobile_thin">
                                    14/04/2021
                                </div>
                            </div>
                            <div className="claim_desc">
                                <div className="mobile_bold">
                                    Type
                                </div>
                                <div className="mobile_thin">
                                    <div className="type_circle troubleshooting"></div>
                                    Troubleshooting
                                </div>
                            </div>
                            <div className="claim_desc">
                                <div className="mobile_bold">
                                    Status
                                </div>
                                <div className="mobile_thin">
                                    <div className="status in_progress">
                                        in progress
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
                </section>
            </>
        )
    }
}

export default ClaimsSection;
