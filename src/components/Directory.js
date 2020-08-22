import React, { Component } from 'react'
import employees from "./db.json"
import Tablerow from "./Tablerow"

export default class Directory extends Component {
    state = {
        employees: employees.sort((a, b) =>
            (a.name.first > b.name.first ? 1 : -1)
        )
        // employees: employees

    }
    render() {
        return (
            <div>
                <div>
                    <div className="searchIcon">Search:</div>
                    <input type="search" name="search" placeholder="search something" />
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>
                                Picture
                            </th>
                            <th>
                                First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Phone #
                            </th>
                            <th>
                                DOB
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee => {
                            return (
                                <Tablerow
                                    key={employee.id.value}
                                    picture={employee.picture.thumbnail}
                                    firstname={employee.name.first}
                                    lastname={employee.name.last}
                                    email={employee.email}
                                    phonenumber={employee.phone}
                                    dob={employee.dob.date}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
