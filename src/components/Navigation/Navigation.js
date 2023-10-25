import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  HStack,
} from '@chakra-ui/react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLogin } from 'redux/auth/selectors';
import { FcContacts } from 'react-icons/fc';
import { Text } from '@chakra-ui/react';

const Navigation = () => {
  const isLoggedIn = useSelector(getLogin);

  return (
    <div>
      <ButtonGroup gap="2">
        <Box>
          <Flex>
            <HStack>
              <Center w="100%" h="40px" color="white">
                <FcContacts size={45} />
              </Center>
              <Center w="100%" h="40px" color="black">
                <Text fontSize="3xl" as="ins">
                  PhoneBook
                </Text>
              </Center>
              <Center w="100%" h="40px" color="white">
                <Box as="span" fontWeight="bold" fontSize="lg">
                  <Button colorScheme="teal">
                    <Link to="/">Home</Link>
                  </Button>
                </Box>
              </Center>
            </HStack>
          </Flex>
        </Box>

        {isLoggedIn && (
          <Button colorScheme="teal">
            <Link to="/contacts">Contacts</Link>
          </Button>
        )}
      </ButtonGroup>
    </div>
  );
};

export default Navigation;
