import React, {useEffect, useState} from "react";
import axios from "axios";

import EmployeeCard from "../components/EmployeeCard";



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


                        <div className="alert alert-primary" role="alert">
                            <h1>no of Employees  in list are:-{getEmployees.employees.length}</h1>
                        </div>

                    <EmployeeCard employees={getEmployees.employees}/>
                </div>


            </div>
        </div>
    );
}
export default  List