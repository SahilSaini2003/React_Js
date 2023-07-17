import React, { useState } from 'react'

export default function UseState(props) {
    const [text, setText] = useState("");
    //This is a special varibale, which value is changed by setText function only it can be use in many ways... 
    const textUp = (() => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Uppered Case!","success");
    });
    const textLp = (() => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Lowered Case!","success");
    });
    const textClear = (() => {
        setText("");
        props.showAlert("Cleared!","success");
    });
    const textChanging = ((event) => {
        setText(event.target.value);
        //This sets the new typed text into the text variable...
    })
    
    return (
        <>
            <div className={`text-${props.mode==='dark'?'light':'dark'} my-3`}>
                <div className='container'>
                    <h1>Enter Your text For Analysis</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                        <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'}`} style = {{backgroundColor: props.mode==='light'?'white':'grey'}} value={text} onChange={textChanging} id="exampleFormControlTextarea1 myBox" rows="8"></textarea>
                    </div>
                    <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={textUp} >To Upper Case</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={textLp} >To Lower Case</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={textClear} >Clear Text</button>
                </div>
                <div className="container my-4">
                    <h1>Word Counter</h1>
                    <div>{text.split(/\s+/).filter ((element)=>{return element.length!==0}).length} Words & {text.length} Length</div>
                    <h2 className='my-1'>Preview</h2>
                    <div>{text.length>0?text:"Nothing To Preview."}</div>
                </div >
            </div>
        </>
    )
}
