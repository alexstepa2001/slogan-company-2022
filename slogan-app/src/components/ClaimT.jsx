import React from 'react'
import {Link} from 'react-router-dom';

export default function ClaimT(props) {
    return (
        <tr className = "standart_row">
            <td>{props.title}</td>
            <td>{props.time[8]}{props.time[9]}/{props.time[5]}{props.time[6]}/{props.time[0]}{props.time[1]}{props.time[2]}{props.time[3]}</td>
            <td className = "type_td">
                <div className={props.type.name.toLowerCase() + " type_circle" }></div>
                <p className = "type">{props.type.name}</p>
            </td>
            <td>
                <div className={props.status.name.toLowerCase() + ' status'}> 
                    {props.status.name}
                </div>
            </td>
            <td><Link to="/incoming_claim">Browse</Link></td> 
        </tr>
    )
}
