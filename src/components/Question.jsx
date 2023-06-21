import PropTypes from 'prop-types';
import Answer from './Answer';

export default function Question(props) {

    const options = props.answers.map(item => {
        return <Answer value={item} id={props.id} key={props.id}/>
    })

    return (
        <div className='px-5'>
            <h2 className="font-karla font-bold text-base text-nileBlue">{props.content}</h2>
            <div className='my-2.5 flex justify-between'>
                {options}
            </div>
            <hr />
        </div>
    );
}

Question.propTypes = {
    content: PropTypes.string,
    answers: PropTypes.array,
    id: PropTypes.string,
}