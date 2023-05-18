import React from "react";

const Input = ({ label, ...rest }) => {
  return (
    <div className="form-control w-1/2">
      <label className="input-group input-group-lg">
        <span>{label}</span>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-lg"
          {...rest}
        />
      </label>
    </div>
  );
};

export default Input;
