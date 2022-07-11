import React from "react";

function Display({ input, output }) {
  return (
    <div className="display">
      <div className="output">{output}</div>
      <div className="input" id="display">
        {input}
      </div>
    </div>
  );
}

export default Display;
