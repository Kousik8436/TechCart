import { Box, Button, Heading, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { useProductStore } from '../store/product';

const ProductCard = ({ product }) =>{
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");
    
    const [updatedProduct, setUpdatedProduct] = useState(product);

    const {deleteProduct, updateProduct} =  useProductStore();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleDeleteProduct = async(pid) => {
        const {success,message} = await deleteProduct(pid);
        if(!success){
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
        }else{
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
        }
    }
    
    const handleUpdateProduct = async() => {
        const {success,message} = await updateProduct(product._id, updatedProduct);
        onClose();
        if(!success){
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
        }else{
            toast({
                title: "Success",
                description: "Product updated successfully",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
        }
    }
  return (
    <Box 
      shadow='xl'
      rounded='2xl'
      overflow='hidden'
      transition='all 0.3s ease-in-out'
      _hover={{ 
        transform: "translateY(-8px) scale(1.02)", 
        shadow: "2xl",
        borderColor: "purple.300"
      }}
      bg={bg}
      border="2px"
      borderColor={useColorModeValue("gray.100", "gray.700")}
      position="relative"
    >

            <Box position="relative" overflow="hidden">
              <Image 
                src={product.image} 
                alt={product.name} 
                h={48} 
                w='full' 
                objectFit='cover'
                transition="transform 0.3s"
                _hover={{ transform: "scale(1.1)" }}
                fallbackSrc="https://via.placeholder.com/400x300?text=No+Image"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
                }}
              />
              <Box
                position="absolute"
                top={2}
                right={2}
                bg="rgba(255,255,255,0.9)"
                rounded="full"
                p={1}
              >
                <Text fontSize="sm" fontWeight="bold" color="purple.600">
                  ✨
                </Text>
              </Box>
            </Box>
            <Box p={6}>
                <Heading as='h3' size='md' mb={3} color={useColorModeValue("gray.800", "white")}>
                  {product.name}
                </Heading>
                <Text 
                  fontWeight='bold' 
                  fontSize='2xl' 
                  bgGradient="linear(to-r, green.400, blue.500)"
                  bgClip="text"
                  mb={4}
                >
                  ₹{product.price}
                </Text>
                <HStack spacing={3} justify="center">
                  <IconButton 
                    icon={<EditIcon />} 
                    onClick={onOpen} 
                    colorScheme='blue'
                    variant="ghost"
                    size="lg"
                    rounded="xl"
                    _hover={{ bg: "blue.50", transform: "scale(1.1)" }}
                  />
                  <IconButton 
                    icon={<DeleteIcon />} 
                    onClick={() => handleDeleteProduct(product._id)} 
                    colorScheme='red'
                    variant="ghost"
                    size="lg"
                    rounded="xl"
                    _hover={{ bg: "red.50", transform: "scale(1.1)" }}
                  />
                </HStack>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
						<VStack spacing={4}>
							<Input
								placeholder='Product Name'
								name='name'
								value={updatedProduct.name}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
							/>
							<Input
								placeholder='Price'
								name='price'
								type='number'
								value={updatedProduct.price}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
							/>
							<Input
								placeholder='Image URL'
								name='image'
								value={updatedProduct.image}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
							/>
						</VStack>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme='blue' mr={3} onClick={handleUpdateProduct}>
							Update
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
                </ModalContent>
            </Modal>
    </Box>
  )
}

export default ProductCard