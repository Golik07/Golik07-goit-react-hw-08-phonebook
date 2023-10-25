import { useSelector } from 'react-redux';
import { getLogin } from 'redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const RestrictedRouter = ({
  component: Component,
  redirectTo = '/',
}) => {
  const isLoggedIn = useSelector(getLogin);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
