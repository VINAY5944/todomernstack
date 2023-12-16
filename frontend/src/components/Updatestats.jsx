import axios from 'axios';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Updatestats = () => {
  const [stats, setStats] = useState("");
  const param = useParams();
  console.log(param.id);

  const submit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('currentUserInfo'));

    try {
      const response = await axios.put(
        `http://localhost:5000/updatetask/${param.id}`,
        { whatnow: stats },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error updating stats:", error);
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label>
          updatestats:
          <input
            value={stats}
            onChange={(e) => {
              setStats(e.target.value);
            }}
            placeholder="stats"
            type="text"
          ></input>
        </label>

        <button type="submit">submit</button>
      </form>
      <Link to={-1}>back</Link>
    </div>
  );
};

export default Updatestats;
