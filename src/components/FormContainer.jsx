import React from "react";

const FormContainer = ({ children, extraClasses }) => {
  return (
    <div className={`formContainer ${extraClasses}`}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className={"formGroup"}>
          {child}
        </div>
      ))}
    </div>
  );
};
  
export default FormContainer;