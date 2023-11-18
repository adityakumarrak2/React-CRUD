import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export const Read = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  function getData() {
    setLoader(true);
    axios.get("https://bend-t68f.onrender.com/api/v1/employee").then((res) => {
      setData(res.data);
      setLoader(false);
    });
  }

  function handleDelete(id) {
    axios.delete(`https://bend-t68f.onrender.com/api/v1/employee/${id}`).then(() => {
      getData();
    });
  }

  const setToLocalStorage = (id, ename, email, emobile) => {
    localStorage.setItem("id", id);
    localStorage.setItem("ename", ename);
    localStorage.setItem("email", email);
    localStorage.setItem("emobile", emobile);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {!loader ? (
        <table className="table">
          <thead>
            <tr>
              <th className="text-center" scope="col">
                Name
              </th>
              <th className="text-center" scope="col">
                Email
              </th>
              <th className="text-center" scope="col">
                Mobile
              </th>
              <th className="text-center" scope="col" colSpan="2">
                Actions
              </th>
            </tr>
          </thead>
          {data.map((eachData, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td className="text-center">{eachData.ename}</td>
                  <td className="text-center">{eachData.email}</td>
                  <td className="text-center">{eachData.emobile}</td>
                  <td className="text-center">
                    <Link to="/update">
                      <button
                        className="btn btn-success me-2"
                        onClick={() =>
                          setToLocalStorage(
                            eachData._id,
                            eachData.ename,
                            eachData.email,
                            eachData.emobile
                          )
                        }
                      >
                        Update
                      </button>
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(eachData._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      ) : (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <CircularProgress />
        </div>
      )}
    </>
  );
};
