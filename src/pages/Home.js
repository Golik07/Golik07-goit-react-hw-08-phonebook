import { Box, Flex, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box h={900}>
      <Flex justify={'center'} marginTop={'20%'}>
        <Text fontSize="5xl">Welcome to your PhoneBook</Text>
      </Flex>
    </Box>
  );
};

export default Home;
