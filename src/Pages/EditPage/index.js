import React from "react";

const EditPage = () => {
  return (
    <div>
      <h1>Add New Car</h1>
      <div>
        <div>
          <h4>Nama/Tipe Mobil</h4>
          <input className="input_edit" placeholder="Input Nama/Tipe Mobil" />
        </div>
        <div>
          <h4>Harga</h4>
          <input className="input_edit" placeholder="Input Harga Sewa Mobil" />
        </div>
        <div>
          <h4>Foto</h4>
          <input className="input_edit" placeholder="Upload Foto Mobil" />
        </div>
        <div>
          <h4>Kategori</h4>
          <input className="input_edit" placeholder="Pilih Kategori Mobil" />
        </div>
      </div>
    </div>
  );
};

export default EditPage;
