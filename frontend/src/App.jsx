import { useState } from "react";
import "./App.css";
import MainLayout from "./Components/MainLayout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";


import AddClgInfo from "./Pages/AddClgInfo";
import Home from "./Pages/Home";
import AddkacheriInfo from "./Pages/AddkacheriInfo";
import AddVibhag from "./Pages/AddVibhag";
import KacheriList from "./Pages/KacheriList";
import VibhagList from "./Pages/VibhagList";
import Login from "./Pages/Login";
import Report from "./Pages/Report";
import { PDFViewer } from '@react-pdf/renderer';



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/" element={<MainLayout />}>
            <Route path="form" element={<AddClgInfo></AddClgInfo>}></Route>
            <Route path="form" element={<AddClgInfo></AddClgInfo>}></Route>
            <Route path="kacheri" element={<AddkacheriInfo></AddkacheriInfo>}></Route>
            <Route path="kacheri/:id" element={<AddkacheriInfo></AddkacheriInfo>}></Route>
            <Route path="kacherilist" element={<KacheriList></KacheriList>}></Route>
            <Route path="kacherilist" element={<KacheriList></KacheriList>}></Route>
            <Route path="vibhag" element={<AddVibhag></AddVibhag>}></Route>
            <Route path="vibhag/:id" element={<AddVibhag></AddVibhag>}></Route>
            <Route path="vibhaglist" element={<VibhagList></VibhagList>}></Route>
            <Route path="report" element={<Report></Report>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
