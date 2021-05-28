import React from "react";
import {useState,useEffect} from "react";
import DataTable from '../components/DataTable'
import axios from "axios";
require('es6-promise').polyfill();
require('isomorphic-fetch')


const List=()=>{
const [getTableData,setTableData]=useState({departments:[]});
    useEffect(async  ()=>{
        const  response=await axios.get(process.env.REACT_APP_BACKEND_API+'/departments')
        setTableData(response.data);

    },[])


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <br></br>
                        <div className="alert alert-primary" role="alert">

                            <h1 className='text-center'> Total # of Departments:- {getTableData.departments.length}</h1>

                            </div>
                    <br></br>

                <DataTable dataTable={getTableData.departments}/>
                </div>
            </div>
        </div>
    );
}
export default   List
