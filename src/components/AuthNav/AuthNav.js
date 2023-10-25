import { Button, ButtonGroup, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <ButtonGroup gap="2">
        <Button colorScheme="teal">
          <Link to="/register">Sign Up</Link>
        </Button>
        <Button colorScheme="teal">
          <Link to="/login">Log in</Link>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default AuthNav;
