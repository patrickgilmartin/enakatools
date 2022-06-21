import React from 'react';

const Input = ({ labelName, id, value, type = "text", handleInputChange, inlineID, inlineDescription = "" }) => {
    return (
        <div className="row g-3 align-items-center py-3">
            <div className="col-auto">
                <label for={id} className="col-form-label">{labelName}</label>
            </div>
            <div className="col-auto">
                <input type={type} id={id} value={value} className="form-control" aria-describedby={inlineID} onChange={handleInputChange} />
            </div>
            <div className="col-auto">
                <span id={inlineID} className="form-text">
                    {inlineDescription}
                </span>
            </div>
        </div>
    )
}

export default Input;
