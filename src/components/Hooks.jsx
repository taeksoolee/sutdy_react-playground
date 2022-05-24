import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import ButtonText from './ButtonText';

export default function Hooks(props) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = useCallback(() => {setCount(count+1)}, [count]);
  const handleClick2 = useCallback(() => {setCount2(count2+1)}, [count2]);

  const handleReset = useCallback(() => {setCount(0); setCount2(0)}, []);
  return (
    <>
      <div>{props.name}</div>
      <ButtonText name={useMemo(() => count+'', [count])} />
      <Button name="c1" onClick={handleClick1} />
      <ButtonText name={useMemo(() => count2+'', [count2])} />
      <Button name="c2" onClick={handleClick2} />
      <br />
      <Button name="r" onClick={handleReset}></Button>
    </>
  );
}

Hooks.propTypes = {
  name: PropTypes.string,
}

