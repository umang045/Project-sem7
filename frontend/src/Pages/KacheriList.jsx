import React from "react";
import { ResponsiveTable } from "responsive-table-react";
import { useKacheri } from "../Hooks/useKacheri";

const columns = [
  {
    id: "index",
    text: "ક્રમ",
    renderer: (value, row, index) => <span style={{ fontWeight: 'bold' }}>{value}</span>,
  },
  {
    id: "name",
    text: "ક્ચેરી‌નુ‌નામ",
  },
  {
    id: "edit",
    text: "Edit",
    renderer: (value, row, index) => (
      <button
        style={{ backgroundColor: "green", color: "white", border: "none", padding: "5px 10px" }}
        onClick={() => console.log(`Edit ${row.name}`)}
      >
        Edit
      </button>
    ),
  },
  {
    id: "delete",
    text: "Delete",
    renderer: (value, row, index) => (
      <button
        style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px 10px" }}
        onClick={() => console.log(`Delete ${row.name}`)}
      >
        Delete
      </button>
    ),
  },
];

const KacheriList = () => {
  const { data1 } = useKacheri();
  return (
    <div className="report-container" id="report" style={{ overflowX: "scroll", margin: "20px 0", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <ResponsiveTable
        columns={columns}
        data={data1}
        className="custom-table"
        style={{ fontSize: 16, fontFamily: 'Arial' }}
        headerStyle={{ backgroundColor: '#f0f0f0' }}
        rowStyle={(row, index) => ({ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff' })}
      />
    </div>
  );
};
export default KacheriList;