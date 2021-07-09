import React, {Component} from 'react';
import user from '../employee-list.json'


class Employee extends Component{
    render(){
        return(
            <React.Fragment>
            <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>e-Mail</th>
                    <th>PhoneNumber</th>
                </tr>
            </thead>
            <tbody>
                {user.user.map((data,index)=>(
                    <tr key={index.id}>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.gender}</td>
                    <td>{data.email}</td>
                    <td>{data.phoneNo}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </React.Fragment>
        )
    }

}


export default Employee;