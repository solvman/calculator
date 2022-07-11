import React from "react";

export function Key({ keyData: { id, value }, handleClick }) {
  return (
    <button className={`key ${id}`} id={id} onClick={() => handleClick(value)}>
      {value}
    </button>
  );
}

export default Key;
