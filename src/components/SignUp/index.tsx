import React from 'react';

export const SignUp = () => {
  function onSubmit (e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_API_SERVER_URL}/${import.meta.env.VITE_API_END_POINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'John',
        email: 'john@example.com',
        age: 25,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <button>Sign up</button>
      </form>
    </>
  );
};
