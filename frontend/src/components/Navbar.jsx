import { Box, Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { PlusSquareIcon } from '@chakra-ui/icons'


function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      bg={useColorModeValue("rgba(255,255,255,0.8)", "rgba(26,32,44,0.8)")}
      backdropFilter="blur(10px)"
      borderBottom="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      position="sticky"
      top={0}
      zIndex={10}
      w="full"
    >
      <Container maxW={"1140px"} px={4}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"} flexDir={{base:"column", sm:"row"}} gap={{base: 4, sm: 8}}>
            <Text 
              fontSize={{ base: "24", sm: "32" }}
              fontWeight={"extrabold"}
              textAlign={"center"}
              bgGradient={"linear(to-r, cyan.400, blue.500, purple.500)"}
              bgClip={"text"}
              transition="all 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Link to={"/"}>TechCart 🛒</Link>
            </Text>

            <HStack spacing={3} alignItems={"center"}>
                <Link to={"/create"}>
                  <Button
                    bgGradient="linear(to-r, purple.400, pink.400)"
                    color="white"
                    _hover={{
                      bgGradient: "linear(to-r, purple.500, pink.500)",
                      transform: "translateY(-2px)",
                      shadow: "lg"
                    }}
                    rounded="xl"
                    size="md"
                    leftIcon={<PlusSquareIcon />}
                  >
                    Add
                  </Button>
                </Link>
                <Button 
                  onClick={toggleColorMode}
                  variant="ghost"
                  size="lg"
                  rounded="xl"
                  _hover={{ bg: useColorModeValue("gray.100", "gray.700"), transform: "scale(1.1)" }}
                  fontSize="xl"
                >
                    {colorMode === 'light' ? "🌙" : "🌞"}
                </Button>
            </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar