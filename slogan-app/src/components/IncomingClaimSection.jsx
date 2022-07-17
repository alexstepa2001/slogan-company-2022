import '../styles/new_claims.scss';
import {Link} from 'react-router-dom';

const IncomingClaimSection = (props) => {
    return  (
        <section className="create_new_claim_section incoming">
            <h1>Incoming claim</h1>
            <form action="">
                <p>Title</p>
                <input type="text" disabled placeholder = "Type claim title"/>
                <p>Type</p>
                <select name="" id="" disabled className= "new_claim_input" >
                    <option value="" disabled selected>Select type</option>
                    <option value="hardware">Hardware</option>
                    <option value="software">Software</option>
                    <option value="troubleshooting">Troubleshooting</option>
                    <option value="networking">Networking</option>
                </select>
                <p>Description</p>
                <input type="text" disabled placeholder = "Type claim description"/>
            </form>
            <div className="form_buttons_incoming">
                    <Link to='/'>
                        <button className="new_cancel_but">
                            Cancel
                        </button>       
                    </Link>
                    <form action="" className = "incoming_form">
                        <input type="submit" value="Done" className = "create_but"/>
                        <input type="submit" value="Decline" className = "create_but"/>
                    </form>
                    
                </div>
        </section>
        )
}

export default IncomingClaimSection;
