import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <div>Home Page</div>
      <button><Link to={'sign-up'}>Sign up</Link></button>
      <button><Link to={'sign-in'}>Sign in</Link></button>
    </>
  );
};
