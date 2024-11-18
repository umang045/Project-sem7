import React from "react";
import { ResponsiveTable } from "responsive-table-react";
import { usegetVibhagByKacheri, useVibhag } from "../Hooks/useVibahg";
import { useVargikrn } from "../Hooks/useVargikrn";
import { getVargi } from "../feature/vargikrn/VargikrnSlice";
import { getVibhagByKacheri } from "../feature/vibhag/vibhagSlice";
import { useKacheri } from "../Hooks/useKacheri";
import { useDispatch } from "react-redux";

const columns = [
    { id: "ix", text: "ક્રમ" },
    { id: "idxx", text: "number" },
    { id: "name", text: "નામ" },
    { id: "area", text: "area" },
    { id: "cost", text: "cost" },

];

const Report = () => {
    const { data1 } = useVibhag();
    const {Vrgidata} = useVargikrn()
    console.log(Vrgidata);
    const dispatch = useDispatch()
    const { getVibhagbyKacheriState } = usegetVibhagByKacheri();
    const { kacheriState } = useKacheri();
    // console.log(kacheriState);
    // console.log(getVibhagbyKacheriState);



    const handlePrint = () => {
        const printContent = document.getElementById('report').innerHTML;
        const newWindow = window.open('', '', 'width=800,height=600');
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
            <select
                name="kacheriId"
                id=""
                className="w-100 border  py-3 mb-3 "
                style={{ outlineStyle: "none", borderRadius: "5px" }}
                onChange={(e) => {
                    const id = e.target.value;
                    dispatch(getVibhagByKacheri({ kacheriId: id }));
                }}
            >
                <option value="">ક્ચેરી‌નુ‌નામ</option>
                {kacheriState?.map((item, index) => {
                    return (
                        <option
                            key={index}
                            value={item?._id}
                        >
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
                // onChange={(e)=>{dispatch(getFloors())}}
                onChange={(e) => {
                    dispatch(getVargi(e.target.value));
                }}
            >
                <option value="">વિભાગ‌નુ‌નામ</option>
                {getVibhagbyKacheriState?.map((item, index) => {
                    return (
                        <option key={index} value={item?._id} onChange={(e) => {
                            dispatch(getVargi(e.target.value))
                        }}>
                            {item?.વિભાગ‌નુ‌નામ}
                        </option>
                    );
                })}
            </select>
            <div className="report-container" id="report" style={{ overflowX: "scroll", margin: "20px 0", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
                <ResponsiveTable columns={columns} data={Vrgidata} />
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

export default Report;