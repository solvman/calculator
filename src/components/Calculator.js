import React from "react";
import { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("0");
  const [expression, setExpression] = useState("");

  const handleNumberClick = (number) => {
    setExpression((prev) => prev.concat(number));
  };

  const handleEqualClick = () => {
    // eslint-disable-next-line no-eval
    const result = eval(expression);
    setResult(result.toString());
    setExpression((prev) => prev.concat("="));
  };

  const handleClearClick = () => {
    setResult("0");
    setExpression("");
  };
  return (
    <div className="calculator">
      <div className="display" id="display">
        <div className="input-screen" id="display">
          {expression}
        </div>
        <div className="output-screen" id="display">
          {result}
        </div>
      </div>
      <div
        onClick={handleClearClick}
        className="key clear span-two-columns tomato"
        id="clear"
      >
        AC
      </div>
      <div
        onClick={() => handleNumberClick("/")}
        className="key divide light-gray"
        id="divide"
      >
        /
      </div>
      <div
        onClick={() => handleNumberClick("*")}
        className="key multiply light-gray"
        id="multiply"
      >
        x
      </div>
      <div
        onClick={() => handleNumberClick("7")}
        className="key seven dark-gray"
        id="seven"
      >
        7
      </div>
      <div
        onClick={() => handleNumberClick("8")}
        className="key eight dark-gray"
        id="eight"
      >
        8
      </div>
      <div
        onClick={() => handleNumberClick("9")}
        className="key nine dark-gray"
        id="nine"
      >
        9
      </div>
      <div
        onClick={() => handleNumberClick("-")}
        className="key substract light-gray"
        id="subtract"
      >
        -
      </div>
      <div
        onClick={() => handleNumberClick("4")}
        className="key four dark-gray"
        id="four"
      >
        4
      </div>
      <div
        onClick={() => handleNumberClick("5")}
        className="key five dark-gray"
        id="five"
      >
        5
      </div>
      <div
        onClick={() => handleNumberClick("6")}
        className="key six dark-gray"
        id="six"
      >
        6
      </div>
      <div
        onClick={() => handleNumberClick("+")}
        className="key add light-gray"
        id="add"
      >
        +
      </div>
      <div
        onClick={() => handleNumberClick("1")}
        className="key one dark-gray"
        id="one"
      >
        1
      </div>
      <div
        onClick={() => handleNumberClick("2")}
        className="key two dark-gray"
        id="two"
      >
        2
      </div>
      <div
        onClick={() => handleNumberClick("3")}
        className="key three dark-gray"
        id="three"
      >
        3
      </div>
      <div
        onClick={handleEqualClick}
        className="key equal span-two-rows blue"
        id="equals"
      >
        =
      </div>
      <div
        onClick={() => handleNumberClick("0")}
        className="key zero span-two-columns dark-gray"
        id="zero"
      >
        0
      </div>
      <div
        onClick={() => handleNumberClick(".")}
        className="key decimal dark-gray"
        id="decimal"
      >
        .
      </div>
    </div>
  );
}

export default Calculator;
