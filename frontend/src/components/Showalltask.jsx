import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { IoIosAdd } from "react-icons/io";
const Showalltask = () => {
  const [tasks, setTasks] = useState([]);
  const [todelete, setToDelete] = useState([]);
  const [updttask, setUpdttask] = useState();
  const [whatNow, setWhatnow] = useState();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUserInfo"));
    const id = user.Id;
    const token = user.token;
    const connect = axios
      .get(`http://localhost:5000/getalltask/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        setTasks(response.data);
      });
  }, []);

  const del = (e) => {
    console.log(e);
    const user = JSON.parse(localStorage.getItem("currentUserInfo"));
    axios.delete(`http://localhost:5000/deletetask/${e}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
  };

  const updt = async (e) => {
    const user = JSON.parse(localStorage.getItem("currentUserInfo"));

    await axios
      .get(`http://localhost:5000/getasingletask/${e}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        setWhatnow(response.data.whatnow);
      });
    if (whatNow === false) {
      setUpdttask(true)
      await axios.put(
        `http://localhost:5000/updatetask/${e}`,
        {whatnow:updttask},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
    } else {
      setUpdttask(false)
      await axios.put(
        `http://localhost:5000/updatetask/${e}`,
        {whatnow:false},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );



    }
  };

  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>no</th>
            <th>Task</th>
            <th>stats</th>
            <th>delete</th>
            <th>update</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item, index) => (
            <>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.todo}</td>
                <td>
               {item.whatnow}
                </td>
                <td>
                  {" "}
                  <Button
                    variant="danger"
                    value={item._id}
                    onClick={(e) => del(e.target.value)}
                  >
                   <MdOutlineEdit />
                  </Button>
                </td>
                <td>
                  {" "}
                  <Link  to={`/updatestats/${item._id}`} >
                  <Button
                 
                  >
          <GrUpdate />
                  </Button></Link>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>

      <Link to="/addtask">
        {" "}
        <Button variant="dark"> <IoIosAdd /></Button>
      </Link>
    </div>
  );
};

export default Showalltask;
