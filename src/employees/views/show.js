import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import '../views/show.css'
import axios from "axios";
const Show=()=>{


    const [getEmployees, setEmployees]=useState({employee:{}})
        const {id}=useParams();
    useEffect(async ()=>{
        const  response =await axios.get(process.env.REACT_APP_BACKEND_API+'/employees/'+id)
        setEmployees(response.data)
    })
    return (
        <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img
                                src="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/supermario-star-animated-700x346.jpg"
                                alt=""/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>
                                {getEmployees.employee.name}
                            </h5>
                            <h6>
                                {getEmployees.employee.title}
                            </h6>
                            <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home"
                                       role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile"
                                       role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>WORK LINK</p>
                            <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a>
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>

                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel"
                                 aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Employee Age </label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{getEmployees.employee.age}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{getEmployees.employee.name}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Designation Title</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{getEmployees.employee.title}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>sanketpatel95@gmail.com</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>123 456 7890</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default  Show