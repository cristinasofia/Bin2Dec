import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // Definitions: React hooks
  const [binaryText, setBinary] = useState("");
  const [decimalText, setDecimal] = useState("");
  // Perform the conversion on form submit
  const onFormSubmit = (e) => {
    e.preventDefault(); // prevents refresh of browser

    // Check binary number input
    if (binaryText.match(/^[0-1]/) == null) {
      console.log("Error");
      return;
    }
    setDecimal(Number.parseInt(binaryText, 2));
  };
  return (
    <div className="App">
      <h1>Binary to Decimal Converter</h1>
      <form onSubmit={onFormSubmit}>
        <label>
          Binary Number:
          <input
            type="text"
            value={binaryText}
            onChange={(e) => setBinary(e.target.value)}
          />
        </label>
        <input type="submit" value="Convert" />
        <br />
        <label>
          Decimal Number:
          <input type="text" value={decimalText} disabled />
        </label>
      </form>
    </div>
  );
}
