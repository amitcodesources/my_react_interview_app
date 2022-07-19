import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <Link to='/addemp'>Add Items</Link>
                <table className="table table-striped mt-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Experience</th>
                            <th scope="col">Profile Photo</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody> 

                        <tr>
                            <th scope="row">1</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td> <Link>Edit</Link> <Link>Delete</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        );
    }

}

export default Home;