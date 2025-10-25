import React, { useEffect } from 'react'
import { Container, VStack, Text, SimpleGrid, Box, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'

function HomePage() {
  const {fetchProducts, products} = useProductStore();

  useEffect(() => {fetchProducts()}, [fetchProducts]);
  console.log("Products: ",products);
  return (
    <Container maxW='container.xl' py={16}>
      <VStack spacing={12}>
        <Box textAlign="center">
          <Text
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="extrabold"
            textAlign="center"
            mb={4}
          >
            <Text as="span" bgGradient="linear(to-r, cyan.400, blue.500, purple.500)" bgClip="text">
              Current Products
            </Text>
          </Text>
          <Box fontSize="4xl" mb={4}>🚀</Box>
          <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
            Discover amazing products in our collection
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w='full'>
          {products.map((product) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <VStack spacing={6} py={16}>
            <Box fontSize="6xl">😢</Box>
            <Text fontSize='2xl' textAlign="center" fontWeight='bold' color='gray.500'>
              No products found
            </Text>
            <Text fontSize='lg' textAlign="center" color='gray.400' maxW="md">
              Start building your product catalog by adding your first product
            </Text>
            <Link to="/create">
              <Button
                size="lg"
                bgGradient="linear(to-r, cyan.400, blue.500)"
                color="white"
                _hover={{
                  bgGradient: "linear(to-r, cyan.500, blue.600)",
                  transform: "translateY(-2px)",
                  shadow: "lg"
                }}
                rounded="xl"
                px={8}
              >
                🎆 Create Your First Product
              </Button>
            </Link>
          </VStack>
        )}
      </VStack>
    </Container>
  )
}

export default HomePage