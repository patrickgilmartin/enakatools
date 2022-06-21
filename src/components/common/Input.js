import React from 'react';

const Input = ({ labelName, id, value, type = "text", handleInputChange, inlineID, inlineDescription = "" }) => {
    return (
        <div class="mb-3">
            <label for={id} class="form-label">{labelName}</label>
            <input type={type} id={id} value={value} class="form-control" aria-describedby={inlineID} onChange={handleInputChange} />
                <div id={inlineID} class="form-text">{inlineDescription}</div>
        </div>
    )
}

export default Input;