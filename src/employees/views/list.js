import React, {useEffect, useState} from "react";
import axios from "axios";

import EmployeeCard from "../components/EmployeeCard";
import {Pane} from "evergreen-ui";
import {Alert} from "bootstrap";



const List=()=>{


    const [getEmployees ,setEmployees]=useState({employees:[]})
    useEffect(async  ()=>{
     const  response=await axios.get('http://localhost:4000/api/employees')
        setEmployees(response.data);

         },[])


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">

                        <br/>
                        <div className="alert alert-primary" role="alert">

                           <h1 class='text-center'> Total # of Employees:- {getEmployees.employees.length}</h1>


                        </div>
                    <br/>
                    <EmployeeCard employees={getEmployees.employees}/>
                </div>


            </div>
        </div>
    );
}
export default  List