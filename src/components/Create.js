import { Paper } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const Create = () => {
  const [ename, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emobile, setMobile] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/employee", {
        ename: ename,
        email: email,
        emobile: emobile,
      })
      .then(() => {
        history("/");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Paper sx={{ width: "50vw" }} className="p-5 mt-5">
        <div className="d-flex justify-content-between m-2">
          <h2>Create</h2>
        </div>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <Link to="/">
            <button className="btn btn-success mx-2"> Back </button>
          </Link>
        </form>
      </Paper>
    </div>
  );
};
