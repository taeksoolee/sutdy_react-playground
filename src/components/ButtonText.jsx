import React from 'react';
import PropTypes from 'prop-types';

function ButtonText(props) {
  console.log('buttonText', props.name)
  return (
    <div style={{padding: '10px', margin: '10px'}}>{props.name}</div>
  );
}

ButtonText.propTypes = {
  name: PropTypes.string,
}

export default React.memo(ButtonText);
