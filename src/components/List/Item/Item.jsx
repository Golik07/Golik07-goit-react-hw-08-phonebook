import { deleteContacts } from 'redux/auth/operations';
import { Li } from './Item.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/button';

const Item = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <Li>
      <p>{name}</p>
      <p>{number}</p>
      <Button
        colorScheme="teal"
        h={7}
        onClick={() => handleDelete()}
        type="button"
      >
        Delete
      </Button>
    </Li>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Item;
