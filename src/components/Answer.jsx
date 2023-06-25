// import React from 'react';
import PropTypes from 'prop-types';
import {decode} from 'html-entities';


export default function Answer(props) {

    return (
            <label className={`text-center rounded-lg p-1 w-[calc(90%_/_4)] border-Twilight border ${props.activeAnswer === props.id && "border-white bg-Geyser"} flex justify-center items-center relative`} >
                <input 
                    type="radio" 
                    name={props.relatedQuestion}
                    value={decode(props.value)} 
                    className={`absolute inset-0 cursor-pointer opacity-0`} 
                    onClick={() => props.handleClick(props.id)}
                    />
                <span className='font-Inter font-medium text-nileBlue text-sm'>{decode(props.value)}</span>
            </label>

    );
}

Answer.propTypes = {
    value: PropTypes.string,
    id: PropTypes.number,
    activeAnswer: PropTypes.number,
    relatedQuestion: PropTypes.string,
    handleClick: PropTypes.func,
}