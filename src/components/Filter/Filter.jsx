import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';
import { getContactsState } from 'redux/contacts/selectors';
import { Flex, FormLabel, Input, Text } from '@chakra-ui/react';

const FilterContact = () => {
  const { filter } = useSelector(getContactsState);

  const dispatch = useDispatch();

  const changeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(filterContacts(value));
  };

  return (
    <Flex justifyContent={'center'}>
      <FormLabel>
        <Text fontSize={'lg'} color={'gray.600'}>
          Contacts
        </Text>
        Find contact by name
        <Input
          type="text"
          name="name"
          value={filter}
          onChange={changeFilter}
          required
        />
      </FormLabel>
    </Flex>
  );
};

export default FilterContact;
