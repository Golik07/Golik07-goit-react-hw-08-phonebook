import { deleteContacts } from 'service/api';
import { Li, Button } from './Item.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const Item = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <Li>
      <p>{name}</p>
      <p>{number}</p>
      <Button onClick={() => handleDelete()} type="button">
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
