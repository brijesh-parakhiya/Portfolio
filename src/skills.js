import React from 'react'
import './index.css'

function skills() {
    return (
<>

<div>
<h1 className="page_title">Professional Skills</h1>
</div>
<section className="skills">



<div className="container main-co">
  <div className="html">
    <p>HTML</p>
    <div className="container candle">
      <div className="container proc">
        <span >70%</span>
      </div>
    </div>
  </div>

  <div className="css">
    <p>CSS</p>
    <div className="container candle">
      <div className="container">
        <span >60%</span>
      </div>
    </div>
  </div>

  <div className="js">
    <p>JS</p>
    <div className="container candle">
      <div className="container">
        <span >75%</span>
      </div>
    </div>
  </div>

  <div className="reactjs">
    <p>ReactJs</p>
    <div className="container candle">
      <div className="container">
        <span >60%</span>
      </div>
    </div>
  </div>


</div>
<a href="#home" >Back to home</a>
  </section>

 </>
    )
}

export default skills
