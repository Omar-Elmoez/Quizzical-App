import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Answer from './Answer';

export default function Question(props) {

    const options = props.answers.map(item => {
        return <Answer value={item} id={props.id} key={nanoid()} />
    })

    return (
        <div className='px-5'>
            <h2 className="font-karla font-bold text-base text-nileBlue">{props.content}</h2>
            <div className='my-2.5 flex gap-4'>
                {options}
            </div>
            <hr className='mb-2.5' />
        </div>
    );
}

Question.propTypes = {
    content: PropTypes.string,
    answers: PropTypes.array,
    id: PropTypes.string,
}