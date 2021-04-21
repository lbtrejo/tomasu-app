import React from 'react';

const Question = (props) => {
    const { prompt } = props
    return (
        <div>
            <h3>{prompt}</h3>
            <button>Yes</button>
            <button>No</button>
        </div>
    )
}

export default Question;