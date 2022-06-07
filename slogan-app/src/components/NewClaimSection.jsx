import '../styles/new_claims.scss';
import {Link} from 'react-router-dom';

const NewClaimSection = () =>{
    return (
        <section className="create_new_claim_section">
            <h1>Creating new claim</h1>
            <form action="">
                <p>Title</p>
                <input type="text" required placeholder = "Type claim title"/>
                <p>Type</p>
                <select name="" id="" required className= "new_claim_input" >
                    <option value="" disabled selected>Select type</option>
                    <option value="hardware">Hardware</option>
                    <option value="software">Software</option>
                    <option value="troubleshooting">Troubleshooting</option>
                    <option value="networking">Networking</option>
                </select>
                <p>Description</p>
                <input type="text" required placeholder = "Type claim description"/>
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
