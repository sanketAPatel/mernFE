import React from "react";

const DepartmentsLists= props =>{


    return(
        <>
        {


        props.departments.map(d=> {
            return <option value={d._id}>{d.name}</option>
        })
    }
        </>
    )


}


export default DepartmentsLists