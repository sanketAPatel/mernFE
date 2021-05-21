import React, {useEffect, useState} from "react";
import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import {set, useForm} from "react-hook-form";
import axios from "axios";
import { Pane, Alert } from 'evergreen-ui'



import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DepartmentsLists from "../components/DepartmentsList";



const  Create =()=>{
    const {register,handleSubmit,formState:{errors}}=useForm()
    const [getDepartments,setDepartments]=useState({departments:[]});
    const [showMessage,setMessage]=useState(false)
    const [getMsg, setMsg] = useState(["","",""])

    useEffect(async ()=>{
        const response=await axios.get(`${process.env.REACT_APP_BACKEND_API}/departments`)
         setDepartments(response.data);
    },[])

    const onSubmit= async (formData,event)=>{
        try{
            const response =await axios.post(`${process.env.REACT_APP_BACKEND_API}/employees`,formData)
            setMsg(["success", "Success!", "employee added Successfully."])


        }catch (e){
            setMsg(["danger", "Whoops!", "Something went wrong, please try again later."])
        }
      setMessage(true)
        event.target.reset()
    }

    const Message=()=>{
        if(showMessage == true){
            return(
                <div className='container bottom-10'>
                    <div className={"alert-dismissible  alert-" + getMsg[0]} >
                        <strong>{getMsg[1]}</strong> {getMsg[2]}
                    </div>
                </div>

            )
        }
        return <></>
    }

    return (
<div className='container row col-6'>

<Message/>
    <form className='form-group  ' onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group ">
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
            <select className='form-control' name='department_id' {...register('department_id',{required:true})} >

                    <DepartmentsLists departments={getDepartments.departments}  />

            </select>
            {errors.department_id &&<p>please enter valid department_id</p>}


        </div>
        <button type="submit" className="btn btn-primary col-sm-6">Submit</button>
    </form>
</div>


    );

}

export default  Create;