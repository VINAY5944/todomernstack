import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Adddtask = () => {
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('currentUserInfo'));

    try {
      const response = await axios.post(`http://localhost:5000/newtask/${user.Id}`, {
        todo: todo,
      }, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      console.log(response.data);
      navigate('/alltask'); // Redirect after a successful API call
    } catch (error) {
      console.error("Error adding task:", error);
      // Handle error, show a message to the user, etc.
    }
  };

  return (
    <div>
      <h2>Add Task</h2>

      <form onSubmit={submit}>
        <label>
          Todo:
          <input
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
            placeholder="Enter task"
            type="text"
          />
        </label>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Adddtask;
