import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    axios
      .delete(`https://reqres.in/api/users/2/${data.id}`)
      .then((res) => {
        if (res.status == 204) {
          setOpen(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.removeItem("token");
    const token = localStorage.getItem("token"); //best practice nya gini, ini buat ngecek bener ga dia ke delete. kalo engga soalnya ga akan ke logout
    if (token == null) {
      setIsLoggedIn(false);
      navigate("/login");
    }
  };

  return (
    <div>
      <h1>Ini Dashboard</h1>
      <button onClick={logout}>Logout</button>
      <div>
        {data.map((item) => (
          <div>
            <p>{item.first_name}</p>
            <img src={item.avatar} />
            <div>
              <button onClick={handleOpen}>Delete</button>
              <Link to={`/editpage/${item.id}`}>
                <button>Edit</button>
              </Link>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Warning
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {item.first_name}
                </Typography>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                <button onClick={handleClose}>Batal</button>
              </Box>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
