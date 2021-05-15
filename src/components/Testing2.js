/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';

export default ({ setSearchTerm }) => {
  const [string, setString] = useState('');

const onSubmit = (event) => {
  event.preventDefault();
  setSearchTerm(string);
}

  return (
    <>
      <div className ="row">
        <form onSubmit={e => onSubmit(e)}>
          <h1>benefit</h1>
          <br />
          <textarea
            onChange={(event) => setString(event.target.value)}
            value={string}
            rows="2"
            cols="24"
            type="text"
            placeholder="Food"
          />
          <br />
          <button type="submit" onClick={e => onSubmit(e)}>
            get
          </button>

          <br />
          <p></p>
        </form>
      </div>
    </>
  );
};
