import React from "react";
import { ResponsiveTable } from "responsive-table-react";
import { useVibhag } from "../Hooks/useVibahg";
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import Report from "./Report";
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
  console.log(data1);

  return (
    <>
      <div className="report-container" id="report" style={{ overflowX: "scroll", margin: "20px 0", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
        <ResponsiveTable columns={columns} data={data1} />
      </div>
      {/* <PDFDownloadLink document={<Report />} filename="FORM">
        {({ loading }) => (loading ? <button>Loading Document...</button> : <button>Download</button>)}
      </PDFDownloadLink> */}
    </>
  );
};

export default VibhagList;
