import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  ScaleFade,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        email: form.elements.email.value,
        name: form.elements.name.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Flex align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <ScaleFade in>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={20} w={'300px'}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                      autoComplete="off"
                      type="text"
                      name="name"
                      pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input autoComplete="off" type="email" name="email" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        autoComplete="off"
                        name="password"
                        type={'password'}
                      />
                    </InputGroup>
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    <Button
                      type="submit"
                      loadingText="Submitting"
                      size="lg"
                      colorScheme="teal"
                    >
                      Sign up
                    </Button>
                  </Stack>
                </Stack>
              </form>
            </Stack>
          </Box>
        </ScaleFade>
      </Stack>
    </Flex>
  );
};

export default RegisterForm;
