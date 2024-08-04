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


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="form" element={<AddClgInfo></AddClgInfo>}></Route>
            <Route path="kacheri" element={<AddkacheriInfo></AddkacheriInfo>}></Route>
            <Route path="kacherilist" element={<KacheriList></KacheriList>}></Route>
            <Route path="kacherilist" element={<KacheriList></KacheriList>}></Route>
            <Route path="vibhag" element={<AddVibhag></AddVibhag>}></Route>
            <Route path="vibhaglist" element={<VibhagList></VibhagList>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
