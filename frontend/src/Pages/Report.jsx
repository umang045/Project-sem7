import React from "react";
import { ResponsiveTable } from "responsive-table-react";
import { useVibhag } from "../Hooks/useVibahg";

const columns = [
    {
        id: "index",
        text: "ક્રમ",
    },
    {
        id: "kacheriname",
        text: "kacheriName",
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

const Report = () => {
    const { data1 } = useVibhag();
    return (
        <>
            <div className="w-100" style={{ overflowX: "scroll" }}>
                <ResponsiveTable columns={columns} data={data1} />
            </div>
        </>
    );
}

export default Report