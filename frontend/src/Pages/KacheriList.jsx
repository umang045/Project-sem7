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
  },
  {
    id: "delete",
    text: "Delete",
  },
];

const KacheriList = () => {
  const { data1 } = useKacheri();
  return (
    <>
      <ResponsiveTable
        columns={columns}
        data={data1}
        className="custom-table"
        style={{ fontSize: 58, fontFamily: 'Arial' }}
        headerStyle={{ backgroundColor: '#f0f0f0' }}
        rowStyle={(row, index) => ({ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff' })}
      />
    </>
  );
};
export default KacheriList;
