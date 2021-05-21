import React from "react";


import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBBtn , MDBListGroup, MDBListGroupItem} from 'mdb-react-ui-kit';




const EmployeeCard=(props)=>{

    if(props.employees.length>0){
        return(
            <div className='container-lg'>
                <div className='row'>
                    {props.employees.map(employee => {
                        return(
                            <div className='col-sm-4'>
                                <MDBCard >
                                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' />
                                    <MDBCardBody>
                                        <MDBCardTitle>Name:{employee.name}</MDBCardTitle>
                                        <MDBListGroup flush>
                                            <MDBListGroupItem>Title:{employee.title}</MDBListGroupItem>

                                        </MDBListGroup>
                                        <MDBBtn href={'/employees/'+employee._id+'/show'}>Show Details</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>

                            </div>

                        )


                    })}


                </div>
            </div>

        )
    }else{
        return (

            <h1>no data found</h1>



        )

    }






}

export  default  EmployeeCard