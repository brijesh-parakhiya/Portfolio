import React,{useState} from 'react'


import React from 'react'

function time() {

    let time= 0;
 const [Ctime, setCtime] = useState(time);
 const UpdateTime = () => {
    time=time+1;
    setCtime(time);
    console.log(time);

 };


document.getElementById("demo").innerHTML = time;
    return (
        <div>
            
        </div>
    )
}

export default time


