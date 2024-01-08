import {
  AbsoluteCenter,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { GiFruitTree } from "react-icons/gi";

type LogInCredentials = {
  email: string;
  password: string;
};

export default function Login() {
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = () => {
    //API: Send login
    const creds: LogInCredentials = { email: email, password: password };
    console.log(`Send login request with ${creds} credentials.`);
  };

  return (
    <Container maxW="container.sm">
      <Box
        display="flex"
        flexDirection="column"
        p={8}
        gap={8}
        alignItems="center"
      >
        <Box>
          <Icon as={GiFruitTree} boxSize={24} />
        </Box>
        <VStack as="form" w="full" gap={4}>
          <FormControl>
            <Input
              onChange={(e) => setEmail(e.currentTarget.value)}
              type="email"
              placeholder="Email"
              autoComplete="on"
              //TODO: Make this Focus and Error Border Color global from themes
              focusBorderColor="blue.200"
              errorBorderColor="red.200"
            />
          </FormControl>
          <VStack gap={2} w="full">
            <FormControl>
              <InputGroup>
                <Input
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  type={isPwdShown ? "text" : "password"}
                  placeholder="Password"
                  autoComplete="on"
                  focusBorderColor="blue.200"
                  errorBorderColor="red.200"
                />
                <InputRightElement
                  onClick={() => setIsPwdShown(!isPwdShown)}
                  cursor="pointer"
                >
                  {isPwdShown ? <FaEye /> : <FaEyeSlash />}
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Box w="full">
              <Link href="/" prefetch={false}>
                <Text color="blue.200" fontSize="sm">
                  Forgot Password?
                </Text>
              </Link>
            </Box>
          </VStack>
        </VStack>
        <VStack gap={4} w="full">
          <Button bgColor="green.600" minW="2xs" onClick={handleLogIn}>
            Log In
          </Button>
          <Flex align="center" w="2xs">
            <Divider />
            <Text fontSize="sm" color="gray.400">
              or
            </Text>
            <Divider />
          </Flex>
          <Link href="/signup">
            <Text color="blue.600" display="inline" as="u" fontSize="sm">
              Sign Up
            </Text>
          </Link>
        </VStack>
      </Box>
    </Container>
  );
}
