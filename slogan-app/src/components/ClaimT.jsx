import React from 'react'
import {Link} from 'react-router-dom';

export default function ClaimT(props) {
    if(props.type == null){
        return (
            <tr className = "standart_row">
                <td>{props.title}</td>
                <td>{props.time[8]}{props.time[9]}/{props.time[5]}{props.time[6]}/{props.time[0]}{props.time[1]}{props.time[2]}{props.time[3]}</td>
                <td className = "type_td">
                    <div className={" type_circle" }></div>
                    <p className = "type">null</p>
                </td>
                <td>
                    <div className={props.status.name.toLowerCase() + ' status'}> 
                        {props.status.name}
                    </div>
                </td>
                <td><Link  to={"/incoming_claim"} state = {{id: props.id, title: props.title, type: '', description: props.description}}>Browse</Link></td> 
            </tr>
        )
    }
    else{
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
                <td><Link  to={"/incoming_claim"} state = {{id: props.id, title: props.title, type: props.type.slug, description: props.description}}>Browse</Link></td> 
            </tr>
        )
    }
}
