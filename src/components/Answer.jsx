import PropTypes from 'prop-types';
import {decode} from 'html-entities';


export default function Answer(props) {
    return (
        <div className='text-center'>
            <input type="radio" name={props.id} id={props.value}/>
            <label htmlFor={props.value} className='text-black'>{decode(props.value)}</label>
        </div>
    );
}

Answer.propTypes = {
    value: PropTypes.string,
    id: PropTypes.string,
}