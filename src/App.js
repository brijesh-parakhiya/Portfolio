import logo from "./logo.svg";
import "./App.css";
import About from "./about";
import Skill from "./skills";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Navbar from "./navbar";
import FORM from "./reuse/form1";

function App() {
  return (
    <>
      <Navbar />
      <About />

      <Skill />

      <Portfolio />

      <Contact />
      {/* <div className="box">
        <tr>
          <td>
         
            <FORM />
          </td>

          <td>
        
            <FORM />
          </td>

          <td>
   
            <FORM />
          </td>
        </tr>
      </div> */}
    </>
  );
}

export default App;
