import React, {useState, useEffect, Fragment } from "react";
import Table from 'react-boostrap/Table';


const CRUD = () =>{

    const empdate=[
        {
        id :1,name:'manoj',age:29, isactive:1
    },
    {
        id :2,name:'Viraj',age:39, isactive:1
    },
    {
        id :3,name:'Rohit',age:30, isactive:0
    }
]

    const [date, setData] = useState([]);


    const handleEdit = (id) =>{
            alert(id);
    }

    const  handleDelete = (id) =>{
        if(window.confirm("Are you sure to delete this employee") == true)
        {
                alert(id);
        }
    }

    useEffect(()=>{ setData(empdate);},[])
    return(
        <Fragment>
          <div style={{margin:"10rem"}}>
            <Table striped bordered hover size = "sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
          </div>
                
        </Fragment>
    )
}

export default CRUD;