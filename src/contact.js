import React  from 'react'
import './index.css';



function contact() {


 


    return (
        <>

        <section className="section contact">
        
            <div className="container " >
              <div className="section-row">
                <div className="section-left-col">
                  
         <form action="" className="form">
          
          <input type="name" placeholder="name"/>
          <br/>
          <input type="email" placeholder="email"/>
          <br/>
          <textarea cols="30" rows="5" placeholder="Discription"></textarea>
          <br/>
          <br/>
          <buttton className="c-btn" >Send</buttton>
          <br/>
          <br/>
          
        </form>
                </div>
                <div className="section-right-col">
                  
        
                  <table>

                    <tr>
                      <th>EMAIL</th>
                    </tr>
                    <tr>
                    <td>brijeshparakhiya@gmail.com</td>
                    </tr>
                    <tr>
                      <th>PHONE</th>
                    </tr>
                    <tr>
                    <td>8141280166</td>
                    </tr>
                    <tr>
                      <th>ADDRESS</th>
                    </tr>
                    <tr>
                    <td>Rajkot,Surat</td>
                    </tr>     
                     
                  </table>
        

                </div>
              </div>
            </div>
            <a href="">Back to Home</a>
          </section>
        
         </>
        
    )
}

export default contact
