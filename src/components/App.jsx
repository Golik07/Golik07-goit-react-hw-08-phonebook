import { Route, Routes, useActionData } from 'react-router-dom';
import Layout from './Layout/Layout';
import Contacts from 'pages/Contacts';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from 'pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { getRefreshing } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRouter } from './RestrictedRoute';
import { PrivateRouter } from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={<PrivateRouter component={Contacts} redirectTo="/login" />}
          />
          <Route
            path="register"
            element={
              <RestrictedRouter
                component={Register}
                redirectTo="/contacts"
                restricted
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRouter
                component={Login}
                redirectTo="/contacts"
                restricted
              />
            }
          />
        </Route>
      </Routes>
    )
  );
};
