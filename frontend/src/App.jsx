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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="form" element={<AddClgInfo></AddClgInfo>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
