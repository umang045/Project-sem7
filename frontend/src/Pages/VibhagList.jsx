import React from "react";
import { ResponsiveTable } from "responsive-table-react";
import { useVibhag } from "../Hooks/useVibahg";

const columns = [
  {
    id: "index",
    text: "ક્રમ",
  },
  {
    id: "name",
    text: "વિભાગ‌નુ‌નામ",
  },
  {
    id: "unit",
    text: "યૂનીટનંબર",
  },
  {
    id: "makan",
    text: "મકાનનુ‌નામ",
  },
  {
    id: "oldmilkat",
    text: "જુનોમિલ્કતનંબર",
  },
  {
    id: "newmilkat",
    text: "નવોમિલ્કતનંબર",
  },
  {
    id: "bill1",
    text: "બિલનંબર_1",
  },
  {
    id: "bill2",
    text: "બિલનંબર_2",
  },
  {
    id: "totalbill",
    text: "બિલનીકુલરકમ",
  },
  {
    id: "makanuse",
    text: "મકાનનોઉપયોગ",
  },
  {
    id: "gass",
    text: "ગેસલાઈનગ્રાહકનંબર",
  },
  {
    id: "elecnum",
    text: "ઈલેકટ્રીકગ્રાહકનંબર",
  },
  {
    id: "fire",
    text: "ફાયરનીવ્યવસ્થા",
  },
  {
    id: "edit",
    text: "Edit",
  },
  {
    id: "delete",
    text: "Delete",
  },
];

const VibhagList = () => {
  const { data1 } = useVibhag();
  // console.log(data1);

  const handlePrint = () => {
    const printContent = document.getElementById('report').innerHTML;
    const newWindow = window.open('', '', 'width=1500,height=600');
    newWindow.document.write(`
        <html>
            <head>
                <title>Print Report</title>
                <style>
                    body { font-family: Arial, sans-serif; }
                    table { width: 100%; border-collapse: collapse; }
                    th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
                    th { background-color: #f2f2f2; }
                </style>
            </head>
            <body onload="window.print(); window.close();">
                ${printContent}
            </body>
        </html>
    `);
    newWindow.document.close();
  };

  return (
    <>
      <div className="report-container" id="report" style={{ overflowX: "scroll", margin: "20px 0", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
        <ResponsiveTable columns={columns} data={data1} />
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
          transition: "background-color 0.3s"
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0056b3"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007bff"}
      >
        Print
      </button>

    </>
  );
};

export default VibhagList;