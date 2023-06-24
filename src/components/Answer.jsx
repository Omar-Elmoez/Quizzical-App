import PropTypes from 'prop-types';
import { decode } from 'html-entities';

export default function Answer(props) {
  const handleClick = () => {
    props.onSelect(props.id);
  };

  return (
    <label
      className={`text-center rounded-lg p-1 w-[calc(90%_/_4)] border-Twilight border ${
        props.isSelected ? 'border-white bg-Geyser' : ''
      } flex justify-center items-center relative`}
    >
      <input
        type="radio"
        name={props.name}
        value={decode(props.value)}
        className="absolute inset-0 cursor-pointer opacity-0"
        checked={props.isSelected}
        onChange={handleClick}
      />
      <span className="font-Inter font-medium text-nileBlue text-sm">
        {decode(props.value)}
      </span>
    </label>
  );
}

Answer.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};
