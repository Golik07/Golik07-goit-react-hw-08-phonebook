import { useEffect } from 'react';
import Item from './Item/Item';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsState } from 'redux/contacts/selectors';
import { getContacts } from 'redux/auth/operations';
import { Container, UnorderedList } from '@chakra-ui/react';

const List = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContactsState);
  const { filter } = useSelector(state => state);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container width={300} mt={3}>
      <UnorderedList spacing={3}>
        {visibleContacts.map(({ id, number, name }) => (
          <Item id={id} key={id} name={name} number={number}></Item>
        ))}
      </UnorderedList>
    </Container>
  );
};

export default List;
