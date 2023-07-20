import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Answer from './Answer';


export default function Question(props) {

    const [activeAnswer, setActiveAnswer] = React.useState();

    function handleClick(id) {
        setActiveAnswer(id);
    }

    const options = props.answers.map((item, index) => {
        return (
            <Answer 
                key={nanoid()}
                value={item} 
                index={index}
                relatedQuestion={props.id} 
                activeAnswer={activeAnswer}
                handleClick={() => handleClick(index)}
            />
        )
    })

    return (
        <div className='px-5'>
            <h2 className="font-karla font-bold text-base text-nileBlue">{props.content}</h2>
            <div className='my-2.5 flex gap-4 mx-700:flex-col'>
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
    handleChange: PropTypes.func,
}