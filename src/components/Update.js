import { Paper } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

export const Update = () => {
  const [id, setId] = useState(0);
  const [ename, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emobile, setMobile] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("ename"));
    setEmail(localStorage.getItem("email"));
    setMobile(localStorage.getItem("emobile"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/v1/employee/${id}`, {
        ename: ename,
        email: email,
        emobile: emobile,
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Paper sx={{ width: "50vw" }} className="p-5 mt-5">
        <h2>Update</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={ename}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input
              type="email"
              className="form-control"
              value={emobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary mx-2"
            onClick={handleUpdate}
          >
            Update
          </button>
          <Link to="/">
            <button className="btn btn-success mx-2"> Back </button>
          </Link>
        </form>
      </Paper>
    </div>
  );
};
