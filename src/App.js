import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';


import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Layout from "./Components/Layout";



function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="about" element={<AboutUs/>}/>

    </Route>
   </Routes>
   </BrowserRouter>


   </>
  );
}

export default App;
