import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';

export default function Question(props) {
  const [selectedAnswer, setSelectedAnswer] = React.useState('');

  const handleAnswerSelect = (answerId) => {
    setSelectedAnswer(answerId);
  };

  const options = props.answers.map((item, index) => (
    <Answer
      value={item}
      id={`answer_${props.id}_${index}`}
      key={`answer_${props.id}_${index}`}
      isSelected={selectedAnswer === `answer_${props.id}_${index}`}
      onSelect={handleAnswerSelect}
    />
  ));

  return (
    <div className="px-5">
      <h2 className="font-karla font-bold text-base text-nileBlue">{props.content}</h2>
      <div className="my-2.5 flex gap-4">{options}</div>
      <hr className="mb-2.5" />
    </div>
  );
}

Question.propTypes = {
  content: PropTypes.string,
  answers: PropTypes.array,
  id: PropTypes.string,
};
