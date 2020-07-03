import React from 'react';
import PropTypes from 'prop-types';

const Shadow = ({ horizontalLength, verticalLength, blurRadius, spreadRadius, shadowColor, opacity, outline, children }) => {


    const convertHexToRGBA = (hex, opacity) => {
        const tempHex = hex.replace('#', '');
        const r = parseInt(tempHex.substring(0, 2), 16);
        const g = parseInt(tempHex.substring(2, 4), 16);
        const b = parseInt(tempHex.substring(4, 6), 16);

        return `rgba(${r},${g},${b},${opacity})`;
    };
    const inset = outline ? 'inset' : '';
    const shadowStyles = {
        boxShadow: `${inset} ${horizontalLength}px ${verticalLength}px ${blurRadius}px ${spreadRadius}px ${convertHexToRGBA(shadowColor, opacity)}`,
        width: 'fit-content'
    };

    return (
        <div
            style={shadowStyles}>
            {children}
        </div>
    );

};

Shadow.defaultProps = {
    horizontalLength: 0,
    verticalLength: 10,
    blurRadius: 15,
    spreadRadius: 0,
    shadowColor: '#000000',
    opacity: 1,
    outline: false
};

Shadow.propTypes = {
    horizontalLength: PropTypes.number,
    verticalLength: PropTypes.number,
    blurRadius: PropTypes.number,
    spreadRadius: PropTypes.number,
    shadowColor: function (props, propName, componentName) {
        if (!/^#[0-9a-fA-F]{6}$/.test(props[propName])) {
            return new Error(
                'Invalid prop `' + propName + '` supplied to' +
                ' `' + componentName + '`. Must be a valid color code.'
            );
        }
    },
    opacity: function (props, propName, componentName) {
        if (typeof props[propName] !== 'number' && props[propName] >= 1) {
            return new Error(
                'Invalid prop `' + propName + '` supplied to' +
                ' `' + componentName + '`. Must be a number less than 1'
            );
        }
    },
    outline: PropTypes.bool
};

export default Shadow;
