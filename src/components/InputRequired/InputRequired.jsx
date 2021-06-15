import React from "react";

function InputRequired(props) {
  return (
    <div className="input-field">
      <label htmlFor={props.id}>{props.title}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        required="required"
      />
      {props.error && <p class="input-error">{props.error}</p>}
    </div>
  );
}

export default InputRequired;
