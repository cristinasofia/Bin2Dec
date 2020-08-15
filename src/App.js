import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // Definitions: React hooks
  const [binaryText, setBinary] = useState("");
  const [decimalText, setDecimal] = useState("");
  const [show, setShow] = useState(false);
  // Perform the conversion on form submit
  const onFormSubmit = (e) => {
    e.preventDefault(); // prevents refresh of browser

    // Check binary number input
    if (binaryText.match(/^[0-1]/) == null) {
      setShow(true);
      setDecimal("");
      return;
    }

    setDecimal(Number.parseInt(binaryText, 2));
  };
  return (
    <div className="App">
      <h1>Binary to Decimal Converter</h1>
      <form onSubmit={onFormSubmit}>
        <label>Binary</label>
        <input
          type="text"
          value={binaryText}
          onChange={(e) => setBinary(e.target.value)}
        />
        <input type="submit" value="Convert" onClick={(e) => setShow()} />
        <br />
        {show && (
          <span style={{ color: "red" }}>
            Please only enter 0's and 1's
            <br />
          </span>
        )}
        <br />

        <label>Decimal</label>
        <input type="text" value={decimalText} disabled />
      </form>
    </div>
  );
}
