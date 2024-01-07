import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { GiFruitTree } from "react-icons/gi";

type CreateAccountForm = {
  email: string;
  password: string;
};

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPwdShown, setIsPwdShown] = useState(false);

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleSignUp = () => {
    const form: CreateAccountForm = { email: email, password: password };
    //TODO: Send request to create the user.
    console.log(form);
  };

  const togglePwdDisplay = () => setIsPwdShown(!isPwdShown);
  //TODO: Add password confirmation field.
  //TODO: Add email and password validations.
  //TODO: Add 'Forgot Password'.
  //TODO: Add Google, Facebook oauth0.
  return (
    <Container maxW="container.sm">
      <Box
        as="form"
        display="flex"
        flexDirection="column"
        gap={8}
        p={8}
        alignItems="center"
      >
        <Flex alignItems="center" gap={2} justifyContent="center">
          <GiFruitTree size="2em" />
          <Heading alignItems="center">NAR</Heading>
        </Flex>
        <FormControl display="flex" flexDirection="column">
          <Input
            type="email"
            placeholder="Email"
            onChange={handleEmailInput}
            focusBorderColor="blue.200"
            errorBorderColor="red.200"
          />
        </FormControl>
        <FormControl display="flex" flexDirection="column">
          <InputGroup>
            <Input
              type={isPwdShown ? "text" : "password"}
              placeholder="Password"
              onChange={handlePasswordInput}
              focusBorderColor="blue.200"
              errorBorderColor="red.200"
              autoComplete="off"
            />
            <InputRightElement onClick={togglePwdDisplay} cursor="pointer">
              {isPwdShown ? <FaEye /> : <FaEyeSlash />}
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button onClick={handleSignUp} bgColor="green.600" w="xs">
          Create Account
        </Button>
      </Box>
    </Container>
  );
}
