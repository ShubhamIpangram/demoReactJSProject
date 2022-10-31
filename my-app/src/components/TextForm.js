import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = () => {
        // console.log("UperCase Was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        // console.log("UperCase Was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleExtraSpaces = () => {
        // console.log("Remove Extra Spaces");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleCopy = () => {
        //console.log("Copy Text");
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleClearClick = () => {
        // console.log("UperCase Was Clicked" + text);
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("UperCase Was Clicked");
        setText(event.target.value)
    }

    // text = "new text"  //Wrong way to change the state
    //setText('new text') //Correct way to change the state


    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'light', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}> Remove Extra Spaces</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2> Your Text Summery</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter somthing in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
