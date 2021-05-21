import React from "react";


import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBBtn , MDBListGroup, MDBListGroupItem} from 'mdb-react-ui-kit';




const EmployeeCard=(props)=>{

    if(props.employees.length>0){
        return(
            <div className='container-lg'>
                <div className='row  row-gutter '>
                    {props.employees.map(employee => {
                        return(
                            <div className='col-sm-4 col-auto'>
                                <MDBCard >
                                    <MDBCardImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH9HBs-suy2x_FXUZDuHbe7JmI_R0Y76Lv8_R1wHMWmSiFAFSSr7Q38atCHQ9SeO6IUc8&usqp=CAU' position='top' />
                                    <MDBCardBody>
                                        <MDBCardTitle>Name:{employee.name}</MDBCardTitle>
                                        <MDBListGroup flush>
                                            <MDBListGroupItem>Title:{employee.title}</MDBListGroupItem>

                                        </MDBListGroup>
                                        <MDBBtn href={'/employees/'+employee._id+'/show'}>Show Details</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                                <br/>
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