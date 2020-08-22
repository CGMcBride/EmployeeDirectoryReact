import React from 'react'

export default function Tablerow(props) {
    return (
        <tr key={props.id}>
            <td>
                <img src={props.picture} alt={props.firstname} />
            </td>
            <td>
                {props.firstname}
            </td>
            <td>
                {props.lastname}
            </td>
            <td>
                {props.email}
            </td>
            <td>
                {props.phonenumber}
            </td>
            <td>
                {props.dob}
            </td>

        </tr>
    )
}
