import { NarDarkTheme, NarLightTheme } from "@/lib/utilities/colors";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { GiFruitTree } from "react-icons/gi";

interface CreateAccountForm {
  name: string;
  email: string;
  password: string;
}

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPwdShown, setIsPwdShown] = useState(false);

  const doesPasswordsMatch = confirmPassword && password === confirmPassword;

  const handleEmailInput = (input: string) => {
    //API: Asynchronus validation for unique email
    setEmail(input);
  };

  const handlePasswordInput = (input: string) => {
    setPassword(input);
  };

  const handleConfirmPasswordInput = (input: string) => {
    setConfirmPassword(input);
  };

  const handleSignUp = () => {
    const form: CreateAccountForm = {
      name,
      email,
      password,
    };
    //API: Send request to create the user.
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
        display="flex"
        flexDirection="column"
        gap={8}
        p={8}
        alignItems="center"
      >
        <Box color={useColorModeValue("light.primary", "dark.primary")}>
          <Icon as={GiFruitTree} boxSize={24} />
        </Box>
        <VStack as="form" w="full" gap={4}>
          <FormControl>
            <Input
              type="text"
              required
              placeholder="Name"
              focusBorderColor={useColorModeValue(
                NarLightTheme.BorderFocus,
                NarDarkTheme.BorderFocus
              )}
              errorBorderColor={useColorModeValue(
                NarLightTheme.Error,
                NarDarkTheme.Error
              )}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </FormControl>
          <FormControl>
            <Input
              type="email"
              required
              placeholder="Email"
              onChange={(e) => handleEmailInput(e.currentTarget.value)}
              focusBorderColor={useColorModeValue(
                NarLightTheme.BorderFocus,
                NarDarkTheme.BorderFocus
              )}
              errorBorderColor={useColorModeValue(
                NarLightTheme.Error,
                NarDarkTheme.Error
              )}
            />
          </FormControl>
          <FormControl>
            <InputGroup>
              <Input
                type={isPwdShown ? "text" : "password"}
                placeholder="Password"
                required
                onChange={(e) => handlePasswordInput(e.currentTarget.value)}
                focusBorderColor={useColorModeValue(
                  NarLightTheme.BorderFocus,
                  NarDarkTheme.BorderFocus
                )}
                errorBorderColor={useColorModeValue(
                  NarLightTheme.Error,
                  NarDarkTheme.Error
                )}
                autoComplete="on"
              />
              <InputRightElement onClick={togglePwdDisplay} cursor="pointer">
                {isPwdShown ? <FaEye /> : <FaEyeSlash />}
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <Input
                type={isPwdShown ? "text" : "password"}
                placeholder="Confirm Password"
                onChange={(e) =>
                  handleConfirmPasswordInput(e.currentTarget.value)
                }
                focusBorderColor={useColorModeValue(
                  NarLightTheme.BorderFocus,
                  NarDarkTheme.BorderFocus
                )}
                errorBorderColor={useColorModeValue(
                  NarLightTheme.Error,
                  NarDarkTheme.Error
                )}
                autoComplete="on"
              />
            </InputGroup>
          </FormControl>
        </VStack>
        <VStack gap={4} w="full">
          <Button bgColor="green.600" minW="2xs" onClick={handleSignUp}>
            Sign Up
          </Button>
          <Flex align="center" w="2xs">
            <Divider />
            <Text fontSize="sm" color="gray.400" px={2}>
              or
            </Text>
            <Divider />
          </Flex>
          <Link href="/login">
            <Text color="blue.600" display="inline" as="u" fontSize="sm">
              Log In
            </Text>
          </Link>
        </VStack>
      </Box>
    </Container>
  );
}
