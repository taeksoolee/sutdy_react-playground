import React, { useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import atoms from '../store/atoms';
import errorHOC from '../utility/errorHOC';

function AddTodo() {
  const [inputed, setInputed] = useState('');
  const [ , setItem] = useRecoilState(atoms.itemAtom);

  function handleChange(e) {
    setInputed(() => e.target.value);
  }

  function submit(e) {
    e.preventDefault();

    const item = {
      name: inputed,
    }

    setItem(item);

    setInputed(() => '');
  }

  return (
    <form>
      <input value={inputed} onChange={handleChange}/>
      <label>이름</label>
      <button onClick={submit}>+++</button>
    </form>
  )
}

export default errorHOC(AddTodo);