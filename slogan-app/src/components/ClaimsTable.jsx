import React, { Component } from 'react'

export default class ClaimsTable extends Component {
    render() {
        return (
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
                <tr className = "standart_row">
                    <td>Figma smart web system for to build</td>
                    <td>12/04/2021</td>
                    <td className = "type_td">
                        <div className="type_circle hardware"></div>
                        <p className = "type">Hardware</p>
                    </td>
                    <td>
                        <div className="status declined">
                            DECLINED
                        </div>
                    </td>
                    <td><a href="">Browse</a></td> 
                </tr>
                <tr className = "standart_row">
                    <td>Figma smart web system for to build</td>
                    <td>13/04/2021</td>
                    <td className = "type_td">
                        <div className="type_circle software"></div>
                        <p className = "type">Software</p>
                    </td>
                    <td>
                        <div className="status new">
                            New
                        </div>
                    </td>
                    <td><a href="">Browse</a></td>
                </tr>
                <tr className = "standart_row">
                    <td>Figma smart web system for to build</td>
                    <td>14/04/2021</td>
                    <td className = "type_td">
                        <div className="type_circle troubleshooting"></div>
                        <p className = "type">Troubleshooting</p>
                    </td>
                    <td>
                        <div className="status in_progress">
                            in progress
                        </div>
                    </td>
                    <td><a href="">Browse</a></td>
                </tr>
                <tr className = "standart_row">
                    <td>Figma smart web system for to build</td>
                    <td>19/04/2021</td>
                    <td className = "type_td">
                        <div className="type_circle software"></div>
                        <p className = "type">Software</p>
                    </td>
                    <td>
                        <div className="status done">
                            done
                        </div>
                    </td>
                    <td><a href="">Browse</a></td>
                </tr>
                <tr className = "standart_row">
                    <td>Figma smart web system for to build</td>
                    <td>27/04/2021</td>
                    <td className = "type_td">
                        <div className="type_circle networking"></div>
                        <p className = "type">Networking</p>
                    </td>
                    <td>
                        <div className="status done">
                            done
                        </div>
                    </td>
                    <td><a href="">Browse</a></td>
                </tr>
                <tr className = "standart_row">
                    <td>Figma smart web system for to build</td>
                    <td>02/05/2021</td>
                    <td className = "type_td">
                        <div className="type_circle hardware"></div>
                        <p className = "type">Hardware</p>
                    </td>
                    <td>
                        <div className="status new">
                            new
                        </div>
                    </td>
                    <td><a href="">Browse</a></td>
                </tr>
                <tr className = "standart_row">
                    <td>Figma smart web system for to build</td>
                    <td>10/05/2021</td>
                    <td className = "type_td">
                        <div className="type_circle networking"></div>
                        <p className = "type">Networking</p>
                    </td>
                    <td>
                        <div className="status in_progress">
                            in progress
                        </div>
                    </td>
                    <td><a href="">Browse</a></td>
                </tr>
                <tr className = "standart_row">
                    <td>Figma smart web system for to build</td>
                    <td>12/05/2021</td>
                    <td className = "type_td">
                        <div className="type_circle troubleshooting"></div>
                        <p className = "type">Troubleshooting</p>
                    </td>
                    <td>
                        <div className="status declined">
                            DECLINED
                        </div>
                    </td>
                    <td><a href="">Browse</a></td>
                </tr>
                <tr className = "standart_row">
                    <td>Figma smart web system for to build</td>
                    <td>19/05/2021</td>
                    <td className = "type_td">
                        <div className="type_circle troubleshooting"></div>
                        <p className = "type">Troubleshooting</p>
                    </td>
                    <td>
                        <div className="status declined">
                            DECLINED
                        </div>
                    </td>
                    <td><a href="">Browse</a></td>
                </tr>
                <tr className = "standart_row">
                    <td>Figma smart web system for to build</td>
                    <td>26/05/2021</td>
                    <td className = "type_td">
                        <div className="type_circle software"></div>
                        <p className = "type">Software</p>
                    </td>
                    <td>
                        <div className="status done">
                            done
                        </div>
                    </td>
                    <td><a href="">Browse</a></td>
                </tr>
            </table>
        )
    }
}
