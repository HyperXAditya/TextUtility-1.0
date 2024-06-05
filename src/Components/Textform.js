import React , {useState} from 'react' ;
//import './styles.css';


export default function Textform(props) {
    const hUC = ()=>{
        console.log("Upper Case");
        let nT=text.toUpperCase();
        setText(nT)
    }
    const rs=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    
    const iC = ()=>{
        console.log("Clear");
        let nT=" ";
        setText(nT)
    }
    const lUC = ()=>{
        console.log("Lpper Case");
        let nT=text.toLowerCase();
        setText(nT)
    }
    const hOC = (event)=>{
        console.log("OnChange");
        setText(event.target.value);

    }
    const [text,setText]=useState(" ");
  return (<>
    <div className="container">
    
    <h1>{props.heading} </h1>
    <div className="mb-3">
      
       <label for="mybox" class="form-label">Text Utils</label>
  <textarea className="form-control" id="mybox" value ={text} onChange={hOC}  rows="3"></textarea></div>
      <button className="btn btn-primary mx-2" onClick={hUC}>Convert Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={lUC}>Convert Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={iC}>Clear</button>
      <button className="btn btn-primary mx-2" onClick={rs}>Solve Extra Space</button>
      
        </div>
        
     
      
<div className="container my-3">
    <p>{text.split("").length} words and {text.length} characters and a {0.008*text.split("").length} minutes read</p>
    <p>{text.trim}</p>
    <p>{text}</p>
</div>
      </>
  )
}
