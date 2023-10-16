import {useState, useEffect} from 'react';
import './Doohicky.css'

const Doohicky = () => {
    const name = 'Jonah'
    const [input, setInput] = useState(0);
    const [go, setGo] = useState(false);
    const [status, setStatus] = useState("Danger");
    const [color, setColor] = useState('#c91e1e');
    const calculate = (input)=>{
       if(go == true){
           if(input <=25){
               setStatus('Danger');
               setColor('#c91e1e')
           }else if(input >25 && input <51){
               setStatus('Caution')
               setColor('#c9601e')
           }else if(input >50 && input <76){
               setStatus('Stable');
               setColor('#1ec93a')
           }else {
               setStatus('Optimal');
               setColor('#1e8dc9')
           }
           setGo(false);
           console.log(color)
       }
    }

    //allows us to do something on some kind of effect(or event)
    //runs on component render
    useEffect(() => {
        calculate((input));
    },[go]);



    return (
        <div className="Doohicky">
            <div className="top">
                <h1>{name}'s Doohicky!</h1>
                <h5>Enter a number between 1-100</h5>
                <div><input value={input} onChange={(e)=>setInput(e.target.value)}/></div>
            </div>

            <div className="bot">
                <div className="go" onClick={(e)=>{setGo(true)}}>PUSH ME</div>
                <div style={{backgroundColor: color }}>{status}</div>
            </div>
        </div>

    );
}
export default Doohicky;