import React, { useState, useEffect } from "react";
import { ResponsiveTable } from "responsive-table-react";
import { usegetVibhagByKacheri, useVibhag } from "../Hooks/useVibahg";
import { useVargikrn } from "../Hooks/useVargikrn";
import { getVargi } from "../feature/vargikrn/VargikrnSlice";
import { getVibhagByKacheri } from "../feature/vibhag/vibhagSlice";
import { useKacheri } from "../Hooks/useKacheri";
import { useDispatch } from "react-redux";

const columns = [
  { id: "ix", text: "ક્રમ" },
  { id: "knm", text: "કચેરી નું નામ" },
  { id: "vnm", text: "વિભાગ નું નામ" },
  { id: "idxx", text: "નંબર" },
  { id: "name", text: "નામ" },
  { id: "area", text: "એરિયા" },
  { id: "cost", text: "રકમ" },
];

const columns1 = [
  { id: "ix", text: "ક્રમ" },
  { id: "idxx", text: "નંબર" },
  { id: "name", text: "નામ" },
  { id: "area", text: "એરિયા" },
  { id: "cost", text: "રકમ" },
];

const Report = () => {
  const { Vrgidata, AllDt } = useVargikrn();
  const dispatch = useDispatch();
  const { getVibhagbyKacheriState } = usegetVibhagByKacheri();
  const { kacheriState } = useKacheri();
  const [selectedKacheri, setSelectedKacheri] = useState("");
  const [selectedVibhag, setSelectedVibhag] = useState("");

  useEffect(() => {
    if (selectedKacheri) {
      dispatch(getVibhagByKacheri({ kacheriId: selectedKacheri }));
    }
  }, [selectedKacheri]);

  useEffect(() => {
    if (selectedVibhag) {
      dispatch(getVargi(selectedVibhag));
    }
  }, [selectedVibhag]);

  const handlePrint = () => {
    const printContent = document.getElementById("report").innerHTML;
    const currentDate = new Date().toLocaleString(); // Get current date and time
    const newWindow = window.open("", "", "width=600,height=600");
    newWindow.document.write(`
      <html>
        <head>
          <title>Report</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              margin: 0; 
              padding: 20px; 
              border: 2px solid #000; /* Border around the entire page */
              box-sizing: border-box; /* Include padding in the width and height */
            }
            h1 { font-size: 24px; text-align: center; }
            .date-time { text-align: center; margin-bottom: 20px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body onload="window.print(); window.close();">
          <h1>Anand Agricultural University</h1>
          <div class="date-time">Date and Time: ${currentDate}</div>
          ${printContent}
        </body>
      </html>
    `);
    newWindow.document.close();
  };

  return (
    <>
      <select
        name="kacheriId"
        id=""
        className="w-100 border  py-3 mb-3 "
        style={{ outlineStyle: "none", borderRadius: "5px" }}
        value={selectedKacheri}
        onChange={(e) => setSelectedKacheri(e.target.value)}
      >
        <option value="">ક્ચેરી‌નુ‌નામ</option>
        {kacheriState?.map((item, index) => {
          return (
            <option key={index} value={item?._id}>
              {item?.ક્ચેરી‌નુ‌નામ}
            </option>
          );
        })}
      </select>

      <select
        name="vibhagId"
        id=""
        className="w-100 border  py-3 mb-3 "
        style={{ outlineStyle: "none", borderRadius: "5px" }}
        value={selectedVibhag}
        onChange={(e) => setSelectedVibhag(e.target.value)}
      >
        <option value="">વિભાગ‌નુ‌નામ</option>
        {getVibhagbyKacheriState?.map((item, index) => {
          return (
            <option key={index} value={item?._id}>
              {item?.વિભાગ‌નુ‌નામ}
            </option>
          );
        })}
      </select>
      <div
        className="report-container"
        id="report"
        style={{
          overflowX: "scroll",
          margin: "20px 0",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {Vrgidata.length > 0 ? (
          <ResponsiveTable columns={columns1} data={Vrgidata} />
        ) : (
          <ResponsiveTable columns={columns} data={AllDt} />
        )}
      </div>
      <button
        type="button"
        onClick={handlePrint}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          color: "#fff",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
      >
        Print
      </button>
    </>
  );
};

export default Report;