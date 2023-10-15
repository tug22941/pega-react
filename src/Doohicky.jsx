import {useState, useEffect} from 'react';
import './Doohicky.css'
const Doohicky = ()=>{
    const name = 'Jonah'
    const[result, setResult] = useState(0);

    //allows us to do something on some kind of effect(or event)
    useEffect(()=>{

    });

    return(
       <div className="Doohicky">
           <div className="top">
               <h1>{name}'s Doohicky!</h1>
               <h5>Enter a number between 1-100</h5>
               <div><input /></div>
           </div>

           <div className="bot">
               <div className="go" onClick={console.log("hello")}>PUSH ME</div>
               <div>result..</div>
           </div>
       </div>

    );
}
export default Doohicky;