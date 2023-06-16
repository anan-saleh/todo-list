import React from 'react';
import { Link } from 'react-router-dom';

export const SignIn = () => {
  function onSubmit (e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <button><Link to={'/dashboard'}>Sign in</Link></button>
      </form>
    </>
  );
};
