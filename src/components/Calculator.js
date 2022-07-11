import React from "react";
import { useState } from "react";
import Display from "./Display";
import Keypad from "./Keypad";

function Calculator() {
  const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const OPERATORS = ["/", "x", "-", "+", "*"];

  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("");

  const handleEqual = () => {
    // eslint-disable-next-line no-eval
    const result = eval(output);

    setInput(`${result}`);
    setOutput(`${result}`);
  };

  const handleClear = () => {
    setInput("0");
    setOutput("");
  };

  const handleOperator = (operator) => {
    if (output.length) {
      setInput(`${operator}`);

      const beforeLastCharIsOperator = OPERATORS.includes(
        output.charAt(output.length - 2)
      );
      const lastCharIsOperator = OPERATORS.includes(
        output.charAt(output.length - 1)
      );
      const validatedOperator = operator === "x" ? "*" : operator;

      if (
        (lastCharIsOperator && operator !== "-") ||
        (lastCharIsOperator && beforeLastCharIsOperator)
      ) {
        if (beforeLastCharIsOperator) {
          setOutput(
            `${output.substring(0, output.length - 2)}${validatedOperator}`
          );
        } else {
          setOutput(
            `${output.substring(0, output.length - 1)}${validatedOperator}`
          );
        }
      } else {
        setOutput(`${output}${validatedOperator}`);
      }
    }
  };

  const handleDecimal = () => {
    const lastCharacter = output.charAt(output.length - 1);

    if (!output.length) {
      setInput("0.");
      setOutput("0.");
    } else {
      if (OPERATORS.includes(lastCharacter)) {
        setInput("0.");
        setOutput(`${output} 0.`);
      } else {
        setInput(
          lastCharacter === "." || input.includes(".")
            ? `${input}`
            : `${input}.`
        );

        setOutput(
          lastCharacter === "." || input.includes(".")
            ? `${output}`
            : `${output}.`
        );
      }
    }
  };

  const handleNumber = (number) => {
    if (!output.length) {
      setInput(`${number}`);
      setOutput(`${number}`);
    } else {
      if (number === 0 && (output === "0" || input === "0")) {
        setOutput(output);
      } else {
        const lastCharacter = output.charAt(output.length - 1);
        const isLastCharacterOperator = OPERATORS.includes(lastCharacter);

        setInput(isLastCharacterOperator ? `${number}` : `${input}${number}`);
        setOutput(`${output}${number}`);
      }
    }
  };

  const handleClick = (value) => {
    const number = NUMBERS.find((item) => item === value);
    const operator = OPERATORS.find((item) => item === value);

    switch (value) {
      case "=":
        handleEqual();
        break;
      case "AC":
        handleClear();
        break;
      case ".":
        handleDecimal();
        break;
      case operator:
        handleOperator(operator);
        break;
      case number:
        handleNumber(number);
        break;
      default:
        break;
    }
  };

  return (
    <div className="calculator">
      <Display input={input} output={output} />
      <Keypad handleClick={handleClick} />
    </div>
  );
}

export default Calculator;
