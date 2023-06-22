import React from 'react';
import PropTypes from 'prop-types';
import {decode} from 'html-entities';


export default function Answer(props) {

    const [isClicked, setIsClicked] = React.useState(false);

    function handleClick() {
        setIsClicked(prevState => !prevState);
    }

    return (
        <div className={`text-center rounded-lg p-1 w-[calc(90%_/_4)] border-Twilight ${isClicked && "border-white bg-Geyser"} border cursor-pointer flex justify-center items-center`} onClick={handleClick}>
            <input type="radio" name={props.id} id={props.value} className='appearance-none'/>
            <label htmlFor={props.value} className='font-Inter font-medium text-nileBlue text-sm cursor-pointer' onClick={handleClick}>{decode(props.value)}</label>
        </div>
    );
}

Answer.propTypes = {
    value: PropTypes.string,
    id: PropTypes.string,
}