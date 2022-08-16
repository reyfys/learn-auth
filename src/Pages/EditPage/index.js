import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";

const EditPage = () => {
  const [detail, setDetail] = useState({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const params = useParams();

  const userID = params.id;

  useEffect(() => {
    const handleGetDetail = () => {
      axios
        .get(`https://reqres.in/api/users/${userID}`)
        .then((res) => {
          setDetail(res.data.data);
        })
        .catch((err) => console.log(err));
    };
    handleGetDetail();
  }, [userID]);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      first_name: name,
      email: email,
    };
    axios
      .put(`https://reqres.in/api/users/${userID}`, payload)
      .then((res) => {
        if (res.status === 200) {
          handleShowAlert();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Add New Car</h1>
      <div>
        <div>
          <h4>Email</h4>
          <input
            className="input_edit"
            onChange={(e) => setEmail(e.target.value)}
            defaultValue={detail.email}
            placeholder="Input Nama/Tipe Mobil"
          />
        </div>
        <div>
          <h4>Nama</h4>
          <input
            className="input_edit"
            onChange={(e) => setEmail(e.target.value)}
            defaultValue={detail.first_name}
            placeholder="Input Harga Sewa Mobil"
          />
        </div>
        <div>
          <h4>Nama Akhir</h4>
          <input
            className="input_edit"
            onChange={(e) => setEmail(e.target.value)}
            defaultValue={detail.last_name}
            placeholder="Upload Foto Mobil"
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Edit
        </button>
      </div>
      <Snackbar
        open={showAlert}
        autoHideDuration={1000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={"success"}
          sx={{ width: "100%" }}
        >
          {"Berhasil"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default EditPage;
