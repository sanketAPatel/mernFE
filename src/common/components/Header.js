import React  from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {MDBIcon} from "mdb-react-ui-kit";




const Header =()=>{

    return (


        <nav  className="navbar navbar-expand-lg navbar-light bg-light"  >
            <div className="container-fluid" >
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/"><MDBIcon icon="home" /></a>
                        </li>
                        <li className="nav-item">

                            <a className="nav-link"     data-mdb-toggle="modal"
                               data-mdb-target="#exampleModal"  href="/employees"><MDBIcon icon="bars" />Employees List</a>
                        </li>
                        <li className="nav-item">

                            <a className="nav-link"     data-mdb-toggle="modal"
                               data-mdb-target="#exampleModal"  href="/employees/create"><MDBIcon icon="user-tie" />Add Employee</a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/departments"><MDBIcon icon="bars" />Department List</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );

}

export default  Header;