import PropTypes from 'prop-types';

export default function Validation(props) {

    return (
        <>
            {props.content}
        </>
    )
}

Validation.propTypes = {
    content: PropTypes.array,
}