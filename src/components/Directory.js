import React, { Component } from 'react'
import employees from "./db.json"
import Tablerow from "./Tablerow"

export default class Directory extends Component {
    state = {
        employees: employees.sort((a, b) =>
            (a.name.first > b.name.first ? 1 : -1)
        )
    }

    search = event => {
        let search = event.target.value
    }

    render() {
        return (
            <div>
                <div>
                    <div className="searchIcon">Search:</div>
                    <input type="search" name="search" placeholder="search something" onChange={event => this.search(event)} />
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>
                                Picture
                            </th>
                            <th>
                                Name
                                                            
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
