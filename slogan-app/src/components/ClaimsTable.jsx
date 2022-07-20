import ClaimT from './ClaimT';
import TableMenu from './TableMenu';

const ClaimsTable = (props) => {
    if (props.claims !== ''){
        return (
            <>
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
                    {props.claims.map((claim) => <ClaimT id = {claim._id} title = {claim.title} type = {claim.type} status = {claim.status} time = {claim.createdAt} description = {claim.description}/>)}
                </table>
                <TableMenu claim = {props.claimsCounter}/>
            </>
        )
    }
    else{
        return('Loading...')
    }
}

export default ClaimsTable;