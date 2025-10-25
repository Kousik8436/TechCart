import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProductStore } from '../store/product';


function CreatePage() {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });
      const toast = useToast();

    const { createProduct } = useProductStore();
    const navigate = useNavigate();
    const handleAddProduct = async() =>{
        const { success,message} = await createProduct(newProduct);
        if(!success){
            toast({
                title: "Error",
                description: message,
                status: "error",
                isClosable: true,
                position: "top",
            })
        }else{
            toast({
                title: "Success",
                description: message,
                status: "success",
                isClosable: true,
                position: "top",
            })
            navigate("/");
        }
        setNewProduct({
            name: "",
            price: "",
            image: "",
        });
    }

  return (
    <Container maxW="lg" py={12}>
        <VStack spacing={10}>
            <Box textAlign="center">
                <Heading 
                    as="h1" 
                    size="2xl" 
                    bgGradient="linear(to-r, purple.400, pink.400, orange.400)"
                    bgClip="text"
                    fontWeight="extrabold"
                    mb={4}
                >
                    Create New Product
                </Heading>
                <Box fontSize="4xl" mb={2}>🎉</Box>
            </Box>
            
            <Box 
                w="full" 
                bg={useColorModeValue("white", "gray.800")} 
                p={8} 
                rounded="2xl" 
                shadow="2xl"
                border="1px"
                borderColor={useColorModeValue("gray.200", "gray.600")}
                transition="all 0.3s"
                _hover={{ transform: "translateY(-2px)", shadow: "3xl" }}
            >
                <VStack spacing={6}>
                    <Input
                        placeholder='✨ Product Name'
                        name='name'
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        size="lg"
                        focusBorderColor="purple.400"
                        bg={useColorModeValue("gray.50", "gray.700")}
                        border="2px"
                        borderColor={useColorModeValue("gray.200", "gray.600")}
                        _hover={{ borderColor: "purple.300" }}
                        rounded="xl"
                    />
                    <Input
                        placeholder='💰 Price (₹)'
                        name='price'
                        type='number'
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        size="lg"
                        focusBorderColor="purple.400"
                        bg={useColorModeValue("gray.50", "gray.700")}
                        border="2px"
                        borderColor={useColorModeValue("gray.200", "gray.600")}
                        _hover={{ borderColor: "purple.300" }}
                        rounded="xl"
                    />
                    <Input
                        placeholder='🖼️ Image URL'
                        name='image'
                        value={newProduct.image}
                        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        size="lg"
                        focusBorderColor="purple.400"
                        bg={useColorModeValue("gray.50", "gray.700")}
                        border="2px"
                        borderColor={useColorModeValue("gray.200", "gray.600")}
                        _hover={{ borderColor: "purple.300" }}
                        rounded="xl"
                    />
                    <Button 
                        onClick={handleAddProduct} 
                        w='full'
                        size="lg"
                        bgGradient="linear(to-r, purple.400, pink.400)"
                        color="white"
                        _hover={{
                            bgGradient: "linear(to-r, purple.500, pink.500)",
                            transform: "translateY(-2px)",
                            shadow: "lg"
                        }}
                        _active={{
                            transform: "translateY(0)"
                        }}
                        rounded="xl"
                        fontWeight="bold"
                        transition="all 0.2s"
                    >
                        🚀 Add Product
                    </Button>
                </VStack>
            </Box>
        </VStack>
    </Container>
  )
}

export default CreatePage