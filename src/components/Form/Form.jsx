import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from 'redux/auth/operations';
import { getContactsState } from 'redux/contacts/selectors';
import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  ScaleFade,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

const ContactForm = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContactsState);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const idName = nanoid();
  const idNumber = nanoid();

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    createContacts({ name, number });
    setName('');
    setNumber('');
  };

  const createContacts = value => {
    const isAlreadyExist = contacts.find(
      contact => contact.name === value.name
    );
    if (isAlreadyExist) {
      return alert(`${value.name} is already in contacts`);
    }
    dispatch(setContacts(value));
  };

  return (
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Heading fontSize={'4xl'} textAlign={'center'}>
        Contacts
      </Heading>
      <ScaleFade initialScale={0.7} in>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={20} w={'350px'}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <FormLabel htmlFor={idName}>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={name}
                  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  onChange={handleChange}
                  id={idName}
                />
                <FormLabel htmlFor={idNumber}>Number</FormLabel>
                <Input
                  type="tel"
                  name="number"
                  value={number}
                  pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  onChange={handleChange}
                  id={idNumber}
                />

                <Button type="submit" colorScheme="teal">
                  Add contact
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </ScaleFade>
    </Stack>
  );
};

export default ContactForm;
