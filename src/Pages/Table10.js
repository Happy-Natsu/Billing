import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import "./Model.css";
import Datalist from "../Components/Datalist";
import "../App.css";

function Table10() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [rows, setRows] = useState([]);
  const [clears, setCleras] = useState([{ cleared: false }]);
  const [totalbill, setTotalbill] = useState(0);
  const [modal, setModal] = useState(false);
  const rowsCollectionRef = collection(db, "10");
  const clearCollectionRef = collection(db, "c10");

  const calculatetotal = () => {
    let tot = 0;
    for (let i = 0; i < rows.length; i++) tot += rows[i].total;
    setTotalbill(tot);
  };

  const createRow = async () => {
    await addDoc(rowsCollectionRef, {
      itemname: item,
      price: price,
      quantity: quantity,
      total: total,
    });
    calculatetotal();
    updateClear(clears[0].id, false);
    refreshPage();
  };

  const handleChange = (e) => {
    setQuantity(Number(e.target.value));
    setTotal(Number(price) * Number(e.target.value));
  };

  const updateClear = async (id, clear) => {
    const userClear = doc(db, "c10", id);
    const newclear = { cleared: clear };
    await updateDoc(userClear, newclear);
  };

  const handleKeepdata = () => {
    updateClear(clears[0].id, true);
    setModal(false);
  };

  const handleCleardata = async () => {
    rows.map((x) => deleteRow(x.id));
    updateClear(clears[0].id, false);
    setModal(false);
  };

  const deleteRow = async (id) => {
    const rowDoc = doc(db, "10", id);
    await deleteDoc(rowDoc);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    const getRows = async () => {
      const data = await getDocs(rowsCollectionRef);
      const cdata = await getDocs(clearCollectionRef);
      setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setCleras(cdata.docs.map((cdoc) => ({ ...cdoc.data(), id: cdoc.id })));
    };
    calculatetotal();
    getRows();
  });

  return (
    <div>
      {modal && (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  setModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className="title">
              <h1>Clear the Bill?</h1>
            </div>
            <div className="footer">
              <button onClick={() => handleCleardata()} id="cancelBtn">
                Yes, Clear Data
              </button>
              <button onClick={() => handleKeepdata()}>Yes, Keep Data</button>
            </div>
          </div>
        </div>
      )}
      <h2>Table10</h2>
      {clears[0].cleared && <h1 className="cleared">BILL IS CLEARED</h1>}
      <input
        placeholder="Item name..."
        onChange={(e) => setItem(e.target.value)}
        list="itemlist"
        className="item-input"
      />
      <Datalist />
      <input
        placeholder="Price..."
        type="number"
        onChange={(e) => setPrice(Number(e.target.value))}
        className="price-input"
      />
      <input
        placeholder="quantity..."
        type="number"
        onChange={(e) => handleChange(e)}
        className="quantity-input"
      />
      <button onClick={createRow} className="button-8">
        Add Item
      </button>
      <br />
      <br />
      <table>
        <tr>
          <th>Sno.</th>
          <th>Item Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Item Total</th>
        </tr>
        {rows.map((row, i) => {
          return (
            <tr>
              <td>{i + 1}</td>
              <td>{row.itemname}</td>
              <td>{row.price}</td>
              <td>{row.quantity}</td>
              <td>{row.total}</td>
              <td>
                <button onClick={() => deleteRow(row.id)} className="button-24">
                  Delete Item
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <h3>Total Bill : {totalbill}</h3>
      <button onClick={() => setModal(true)} className="button-84">
        Clear Bill
      </button>
    </div>
  );
}

export default Table10;
