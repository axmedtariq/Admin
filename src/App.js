//import './App.css';
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Single from "./pages/Single/single";
import New from "./pages/New/New"
import { userInputs, productInputs } from "./formSource"
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModecontext } from './context/darkModecontext';



function App() {
  const { darkMode } = useContext(DarkModecontext);
  return (
    <div className={darkMode ? "app dark": "app"}>
   <BrowserRouter>
   <Routes>
   <Route path="/">
   <Route index element={<Home />}/>
    <Route path="login" element={<Login />}/>
    <Route path="users">
    <Route index element={<List />}/>
    <Route path=":userId" element={<Single />}/>
    <Route path="new" element={<New input={userInputs} title="Add New User" />}/>
    </Route>
    <Route path="products">
    <Route index element={<List />}/>
    <Route path=":productId" element={<Single />} />
    <Route path="new" element={<New input= {productInputs} title="Add New Product" />} />
    </Route>
    </Route>
 
  
 
   </Routes>

   </BrowserRouter>,
    </div>
  );
}

export default App;
