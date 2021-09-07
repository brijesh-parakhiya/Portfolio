import React from "react";
import "./index.css";

function about() {
  return (
    <>
   
      <section className="section about">
      <h1 className="page_title">PERSONAL INFORMATION</h1>
        <div className="container ">
          <div className="section-row">
            <div className="section-left-col">
              <table>
                <tr>
                  <h2>ABOUT</h2>
                </tr>
              </table>

              <p>Hellow! I am Brijesh.Web Developer</p>
              <br />
              <p>
                Actively an Opportunity to utilize my skills, learn new
                technologies, gain valuable professional experience and build a
                career with a reputable company.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="section-right-col">
              <table>
                <tr>
                  <h2>Basic Information</h2>
                </tr>
                <tr>
                  <th>AGE</th>

                  <td>23</td>
                </tr>     
                <tr>
                  <th>EMAIL</th>

                  <td>brijeshparakhiya@gmail.com</td>
                </tr>
                <tr>
                  <th>PHONE</th>

                  <td>8141280166</td>
                </tr>
                <tr>
                  <th>ADDRESS</th>

                  <td>Rajkot,Surat</td>
                </tr>
                <tr>
                  <th>LANGUAGE</th>

                  <td>English,Gujarati,Hindi</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <a href="">Back to Home</a>
      </section>
    </>
  );
}

export default about;
