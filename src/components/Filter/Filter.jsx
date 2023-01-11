import React from "react";
import PropTypes from 'prop-types';

const Filter = ({value, onChange}) => (
    <div>
        <span>Search by Name</span>
        <input type="text" value={value} onChange={onChange} />
    </div>
)

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Filter;
