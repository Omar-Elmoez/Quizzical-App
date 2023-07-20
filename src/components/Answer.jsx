
import PropTypes from 'prop-types';
import {decode} from 'html-entities';


export default function Answer(props) {

    return (
            <label 
            className={`text-center rounded-lg p-1 w-[calc(90%_/_4)] mx-700:w-full border-Twilight border 
            ${props.activeAnswer === props.index && "border-white bg-Geyser"}
        
            flex justify-center items-center relative`} 
            >
                <input 
                    type="radio" 
                    checked={props.activeAnswer === props.index}
                    name={props.relatedQuestion}
                    value={decode(props.value)} 
                    className={`absolute inset-0 cursor-pointer opacity-0`} 
                    onClick={props.handleClick}
                    />
                <span className='font-Inter font-medium text-nileBlue text-sm'>{decode(props.value)}</span>
            </label>

    );
}

Answer.propTypes = {
    value: PropTypes.string,
    index: PropTypes.number,
    activeAnswer: PropTypes.number,
    relatedQuestion: PropTypes.string,
    handleClick: PropTypes.func,
    handleChange: PropTypes.func,
}