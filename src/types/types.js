import PropTypes from 'prop-types';


export const OptionShape = {
    label:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
}