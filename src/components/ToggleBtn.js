import React from 'react';
import PropTypes from 'prop-types';

export default function ToggleBtn({isOn, onToggle}) {
  return (
    <div>
      <button className="btn" onClick={onToggle}>{isOn + ''}</button>
    </div>
  )
}

ToggleBtn.propTypes = {
  text: PropTypes.string.isRequired,
  isOn: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}