import ContactForm from '../components/Form/Form.jsx';
import List from '../components/List/List.jsx';
import FilterContact from '../components/Filter/Filter.jsx';
import { useSelector } from 'react-redux';
import { error, isLoading } from 'redux/contacts/selectors.js';
import { Flex, Text } from '@chakra-ui/react';

const Contacts = () => {
  const errors = useSelector(error);
  // const isLoadings = useSelector(isLoading);

  return (
    <div>
      <ContactForm />
      <FilterContact />
      {errors && (
        <Flex justify={'center'}>
          <Text as="b" fontSize="2xl">
            {errors}
          </Text>
        </Flex>
      )}
      <List />
    </div>
  );
};

export default Contacts;
