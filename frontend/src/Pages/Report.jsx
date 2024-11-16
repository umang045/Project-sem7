import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import LebronStretch from "../photos/lebron_transparent.png";
import { Font } from '@react-pdf/renderer';
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

];

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        fontFamily: "AntonFamily",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "AntonFamily",

    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
        fontFamily: "AntonFamily",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
        fontFamily: "AntonFamily",
    },
});

const Report = () => {
    const { data1 } = useVibhag();
    return (
        <>
            <Document>
                <Page style={{ ...styles.body }}>
                    <Text style={styles.header} fixed>jhdb</Text>
                    <Text style={styles.text}>
                        <div className="w-100" style={{ overflowX: "scroll" }}>
                            <ResponsiveTable columns={columns} data={data1} />
                        </div>
                    </Text>
                    <Text
                        style={styles.pageNumber}
                        render={({ pageNumber, totalPages }) =>
                            `${pageNumber} / ${totalPages}`
                        }
                    />
                </Page>
            </Document>
            {/* <PDFDownloadLink document={<Report />} filename="FORM">
        {({ loading }) => (loading ? <button>Loading Document...</button> : <button>Download</button>)}
      </PDFDownloadLink> */}

        </>

    );
};

export default Report;