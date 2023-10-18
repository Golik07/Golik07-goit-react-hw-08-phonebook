import Item from './Item/Item';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'service/api';
import { getContactsState } from 'redux/selectors';

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
    <ul>
      {visibleContacts.map(({ id, number, name }) => (
        <Item id={id} key={id} name={name} number={number}></Item>
      ))}
    </ul>
  );
};

export default List;
