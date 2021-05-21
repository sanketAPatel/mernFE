import React, {useEffect, useState} from "react";
import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import {set, useForm} from "react-hook-form";
import axios from "axios";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const  Create =()=>{
    const {register,handleSubmit,formState:{errors}}=useForm()
    const [getDepartments,setDepartments]=useState({departments:[]});

    useEffect(async ()=>{
        const response=await axios.get(`${process.env.REACT_APP_BACKEND_API}/departments`)
        setDepartments(response.data);
    })
    const onSubmit= async (formData)=>{
 const respone =await axios.post(`${process.env.REACT_APP_BACKEND_API}/employees`,formData)
console.log(respone.data)
    }

    return (
<div className='container-fluid'>

    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <label htmlFor="name">name</label>
            <input type="text" {...register('name',{required:true})}className="form-control"  name='name' id="name"/>
            {errors.name&&<p>please enter valida name</p>}
        </div>
        <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="text"  {...register('age',{required:true})} className="form-control"  name='age' id="pwd"/>
            {errors.age&&<p>please enter valida  age</p>}
        </div>

        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text"  {...register('title',{required:true})}  className="form-control" name='title'/>
            {errors.title&&<p>please enter valida title</p>}
        </div>
        <div className="form-group">
            <label htmlFor="department_id">Department</label>
            <input type="text"  {...register('department_id',{required:true})} className="form-control" name='department_id'/>
            {errors.department_id &&<p>please enter valid department_id</p>}
        </div>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" type="button">Action</button>
                <button className="dropdown-item" type="button">Another action</button>
                <button className="dropdown-item" type="button">Something else here</button>
            </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>


    );

}

export default  Create;