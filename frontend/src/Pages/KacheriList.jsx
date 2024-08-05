import React from "react";
import { ResponsiveTable } from "responsive-table-react";
import { useKacheri } from "../Hooks/useKacheri";

const columns = [
  {
    id: "index",
    text: "ક્રમ",
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
      <ResponsiveTable columns={columns} data={data1} />
    </>
  );
};
export default KacheriList;
