import React from 'react';
import PropTypes from 'prop-types';
import {decode} from 'html-entities';


export default function Answer(props) {

    const[isClicked, setIsClicked] = React.useState(false);
    function handleClick() {
        setIsClicked(prevState => !prevState)
    }

    return (
        <div className={`text-center rounded-lg p-1 w-[calc(90%_/_4)] border-Twilight border ${isClicked && "border-white bg-Geyser"} flex justify-center items-center relative`}>
            <input type="radio" name={props.id} value={decode(props.value)} className={`absolute inset-0 cursor-pointer opacity-0`} onClick={handleClick} />
            <label className='font-Inter font-medium text-nileBlue text-sm'>{decode(props.value)}</label>
        </div>
    );
}

Answer.propTypes = {
    value: PropTypes.string,
    id: PropTypes.string,
}