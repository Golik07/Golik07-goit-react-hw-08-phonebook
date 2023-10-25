import { Box, Button, Center, Flex, HStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { getUser } from 'redux/auth/selectors';
import { Text } from '@chakra-ui/react';
import { GiExitDoor } from 'react-icons/gi';

const UserMenu = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Flex>
      <HStack>
        <Center w="100%" h="40px" color="black">
          <div>
            <Text as="b">Welcome,{user.email}</Text>
          </div>
        </Center>
        <Center color="black">
          <Box as="span" fontWeight="bold" fontSize="lg">
            <Button
              type="button"
              onClick={handleLogOut}
              colorScheme="teal"
              variant="outline"
            >
              <GiExitDoor />
            </Button>
          </Box>
        </Center>
      </HStack>
    </Flex>
  );
};

export default UserMenu;
