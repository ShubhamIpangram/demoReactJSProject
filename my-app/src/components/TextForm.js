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

    const handleOnChange = (event) => {
        // console.log("UperCase Was Clicked");
        setText(event.target.value)
    }

    // text = "new text"  //Wrong way to change the state
    //setText('new text') //Correct way to change the state


    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div class="mb-3">
                    <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to LowerCase</button>
            </div>
            <div className="container my-3">
                <h2> Your Text Summery</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
