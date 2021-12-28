import React from 'react'
import './contact.css';


function contact(props) {
    return (
        <div>
            <h3>Contact Us</h3>
            <table>
                <tbody>
                <tr>
                    <td>Phone number: </td>
                    <td>(123)-456-7890</td>
                </tr>
                <tr>
                    <td>Address: </td>
                    <td>450 Merlin Dr., 11111 Camelot</td>
                </tr>
                <tr>
                    <td>Email: </td>
                    <td>YeeOldEngland@gmail.com</td>
                </tr>
                <tr>
                    <td rowSpan ="2"></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}



export default contact

