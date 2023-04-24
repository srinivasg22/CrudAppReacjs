import React , {Fragment} from "react";
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';


function Home(){

    let history = useNavigate();

    const handleDelete = (id) =>  {
        var index = Employees.map(function (e) {
            return e.id
        }).indexOf(id);

        Employees.splice(index,1);
        history('/');
    }

    return(
        <Fragment>
          <div style={{margin:"10rem"}}>
            <Table striped bordered hover size = "sm">
      <thead>
        <tr>
        <th>id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
            {
                Employees && Employees.length > 0
                ?
                Employees.map((item) => {
                    return(
                        <tr>
                            <td>
                                {item.id}
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.age}
                            </td>
                            <td>
                                <Link to={'/edit'}>
                                <Button onClick={() => alert(item.id)}>Edit</Button>
                                </Link>
                                &nbsp;
                                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                            </td>
                        </tr>
                    )
                })
                :
                "NO data available"
            }         
      </tbody>
    </Table>
    <br>
    </br>
    <Link className="d-grid gap-2" to={"Create"}>
            <Button size="lg">Create</Button>
    </Link>
          </div>
        </Fragment>
    )
}

export default Home;