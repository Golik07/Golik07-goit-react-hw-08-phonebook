import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { getLogin } from 'redux/auth/selectors';
import { Spacer } from '@chakra-ui/react';

const AppBar = () => {
  const isLoggedIn = useSelector(getLogin);

  return (
    <header className={css.header}>
      <Navigation />
      <Spacer />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
