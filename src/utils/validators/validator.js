import React from "react";

export const required = value => {
    if(value)  return undefined;
    return(
            <div className="alert alert-danger" role="alert">
                Not valid!!!
            </div>
    )
};

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return (
        <div className="alert alert-primary" role="alert">
           { `Max length is ${maxLength} symbols`}
        </div>
    );
    return undefined;
};


export const minLengthCreator = (minLength) => (value) => {
    if(value.length < minLength) return (
        <div className="alert alert-primary" role="alert">
            {`Min length is ${minLength} symbols`}
        </div>
    );
    return undefined;
};










