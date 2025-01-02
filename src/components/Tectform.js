import React, { useState } from "react";
import jsPDF from "jspdf";
import htmlDocx from "html-docx-js/dist/html-docx";

const Textform = () => {
  const [text, settext] = useState("");
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [docName, setDocName ] = useState("");
  const [buttontext , setbuttontext] = useState("Dark Mode")

  const [mystyle , setmystyle] = useState({

    color : 'black',
    backgroundColor :'white'

  });

  const toggle = () => {
    if (mystyle.color === 'white') {
      setmystyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setbuttontext('Dark Mode');
    } else if (mystyle.color === 'black') {
      setmystyle({
        color: 'white',
        backgroundColor: 'black',
      });
      
      setbuttontext('Light Mode')
    }
  };
  

 
  const addToHistory = (currentState) => {
    setHistory((prevHistory) => [...prevHistory, currentState]);
    setRedoStack([]); 
  };

  const handlelower = () => {
    addToHistory(text); 
    settext(text.toLowerCase());
  };

  const handlupper = () => {
    addToHistory(text);
    settext(text.toUpperCase());
  };

  const handleclear = () => {
    addToHistory(text);
    settext("");
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const lastState = history[history.length - 1];
      setHistory((prevHistory) => prevHistory.slice(0, -1)); 
      setRedoStack((prevRedo) => [text, ...prevRedo]); 
      settext(lastState);
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const nextState = redoStack[0];
      setRedoStack((prevRedo) => prevRedo.slice(1)); 
      setHistory((prevHistory) => [...prevHistory, text]); 
      settext(nextState);
    }
  };

  const handleSavePDF = () => {
    if (!docName) {
      alert("Please provide a document name.");
      return;
    }

    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save(`${docName}.pdf`);
  };

  const handleSaveWord = () => {
    if (!docName) {
      alert("Please provide a document name.");
      return;
    }

    const htmlContent = `<html><body>${text}</body></html>`;
    const converted = htmlDocx.asBlob(htmlContent);
    const link = document.createElement("a");
    link.href = URL.createObjectURL(converted);
    link.download = `${docName}.docx`;
    link.click();
  };

  return (
    <div>
      <div className="m-2">
        <div className="d-flex flex-row">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter Text Here 
          </label>


        <div className="d-flex flex-row m-1">
            <label htmlFor="docName" className="form-label mx-3">Name</label>
            <input
            type="text"
            id="docName"
            className="form-control"
            value={docName}
            onChange={(e) => setDocName(e.target.value)}
            placeholder="Enter document name"
            />
        </div>

          <button type="button" className="btn btn-outline-dark m-2" onClick={handleUndo} disabled={history.length === 0}>
            Undo
          </button>
          <button type="button" className="btn btn-outline-dark m-2" onClick={handleRedo} disabled={redoStack.length === 0}>
            Redo
          </button>
          <button type="button" className="btn btn-outline-dark m-2"  onClick = {toggle}>
            {buttontext}
          </button>
        </div>
      </div>

      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="20"
        style ={mystyle}
        value={text}
        onChange={(e) => settext(e.target.value)}
      ></textarea>

      <button type="button" className="btn btn-outline-dark m-2" onClick={handlupper}>
        UPPER
      </button>
      <button type="button" className="btn btn-outline-dark m-2" onClick={handlelower}>
        lower
      </button>
      <button type="button" className="btn btn-outline-dark m-2" onClick={handleclear}>
        clear
      </button>
      <button type="button" className="btn btn-outline-dark m-2" onClick={handleSavePDF}>
        Save as PDF
      </button>
      <button type="button" className="btn btn-outline-dark m-2" onClick={handleSaveWord}>
        Save as Word
      </button>


      <p>
        Total number of words typed: {text.split(" ").length} and Total number of characters: {text.length}
      </p>
    </div>
  );
};

export default Textform;
