import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  console.log('button', props.name)

  return (
    <div style={{margin: '10px'}}>
      <button style={{padding: '10px'}} onClick={props.onClick}>clicke me</button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string,
}

export default React.memo(Button);

