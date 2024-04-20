import React from "react";

const FormContainer = ({ children }) => {
  return (
    <div className="formContainer">
      {React.Children.map(children, (child, index) => (
        <div key={index} className="formGroup">
          {child}
        </div>
      ))}
    </div>
  );
};
  
export default FormContainer;