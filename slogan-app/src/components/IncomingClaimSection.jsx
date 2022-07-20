import '../styles/new_claims.scss';
import {Link, useLocation} from 'react-router-dom';


const IncomingClaimSection = (props) => {
    const location = useLocation();
    const {id} = location.state;
    const {description} = location.state;
    const {title} = location.state;
    const {type} = location.state;
    function handleDeclineSubmit(e){
        let status = 'decl';
        e.preventDefault();
        const log = {title, description, type, status};
        fetch(`http://localhost:3001/claim/${id}`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + sessionStorage.getItem('token')},
            body: JSON.stringify(log),

        }).then(
            function(response){
                if (response.ok){
                    response.json().then(function (data) {
                        window.location.replace("/");
                    })
                }
                else{
                    alert('Ошибка');
                }
            }
        )
    }
    function handleDoneSubmit(e) {
        let status = 'done';
        e.preventDefault();
        const log = {title, description, type, status};
        fetch(`http://localhost:3001/claim/${id}`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + sessionStorage.getItem('token')},
            body: JSON.stringify(log),

        }).then(
            function(response){
                if (response.ok){
                    response.json().then(function (data) {
                        window.location.replace("/");
                    })
                }
                else{
                    alert('Ошибка');
                }
            }
        )
    }
    return  (
        <section className="create_new_claim_section incoming">
            <h1>Incoming claim</h1>
            <form action="">
                <p>Title</p>
                <input type="text" disabled placeholder = {title}/>
                <p>Type</p>
                <select name="" id="" disabled className= "new_claim_input" >
                    <option value="" disabled selected>{type}</option>
                    <option value="hardware">Hardware</option>
                    <option value="software">Software</option>
                    <option value="troubleshooting">Troubleshooting</option>
                    <option value="networking">Networking</option>
                </select>
                <p>Description</p>
                <input type="text" disabled placeholder = {description}/>
            </form>
            <div className="form_buttons_incoming">
                    <Link to='/'>
                        <button className="new_cancel_but">
                            Cancel
                        </button>       
                    </Link>
                    <form action="" onSubmit = {handleDoneSubmit} className = "incoming_form">
                        <input type="submit" value="Done" className = "create_but"/>
                    </form>
                    <form action="" onSubmit = {handleDeclineSubmit} className = "incoming_form_two">
                        <input type="submit" value="Decline" className = "create_but"/>
                    </form>
                </div>
        </section>
        )
}

export default IncomingClaimSection;
