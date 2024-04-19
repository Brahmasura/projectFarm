import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./routes/Home/Home";
import About from "./routes/About-Us/About";
import Portfolio from "./routes/Portfolio/Portfolio";
import Contact from "./routes/Contact-Us/Contact";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index exact element={<Home />} />
          <Route exact path="about" element={<About/>}/>
          <Route exact path="portfolio" element={<Portfolio/>}/>
          <Route exact path="contact" element={<Contact/>}/>
        </Route>
       
      </Routes>
    </>
  );
}

export default App;
