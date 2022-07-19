import React, { Component } from 'react'

export default class Task1 extends Component {
    render() {
        var data = [{
            name: "emp1",
            salary: 1000,
            designation: "Developer"
          }, {
            name: "emp2",
            salary: 2000,
            designation: "Tester"
          }, {
            name: "emp3",
            salary: 3000,
            designation: "Manager"
          }, {
            name: "emp4",
            salary: 1000,
            designation: "Developer"
          }];
          const total = data.reduce((total, m) => total + m.salary,0);
        return (
            <div className='container mt-5'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Degignation</th>
                            <th scope="col">Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => 
                        <tr key={item.name}>
                            <td scope="row">{i+1}</td>
                            <td>{item.name}</td>
                            <td>{item.designation}</td>
                            <td>{item.salary}</td>
                        </tr>
                        )}
                    </tbody>
                    <tfoot>
                    <tr>
                            <td colSpan={3}>Total</td>
                            <td className='text-bold'>{total}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
