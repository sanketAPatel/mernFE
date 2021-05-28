import React from "react";
import {Table} from "react-bootstrap";

const DataTable=(props)=>{
//const columns =data[0] && Object.keys(data[0])

if(props.dataTable.length >0){
    return(
    <div className="container">
        <div className="row">

            <div className="col-12">
                <br></br>
                <Table >
                    <thead>

                    <tr><td>Name</td>
                        <td>Location</td>
                    </tr>
                    </thead>

                    {
                        props.dataTable.map(department =>{
                        return(
                            <tbody>
                            <tr>
                                <td>{department.name}</td>
                                <td>{department.location}</td>
                            </tr>

                            </tbody>
                        )

                    })
                    }


                </Table>


            </div></div></div>
);
} else{
    return (

        <h1>no data found</h1>



    )

}


}



export default   DataTable