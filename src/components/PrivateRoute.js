import { useSelector } from 'react-redux';
import { getLogin, getRefreshing } from 'redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRouter = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getLogin);
  const isRefreshing = useSelector(getRefreshing);

  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
