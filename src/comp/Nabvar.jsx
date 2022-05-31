import React from "react";
import { Box, Button, Flex,} from "@chakra-ui/react";

const nabvar = () => {
  return (
 
      <Box
        bg="white"
        w="100%"
        borderWidth={1}
        p={2}
        fontSize="xs"
        h={8}
        color="black"
      >
        <Flex  justifyContent="space-between">
          <Flex>
            <Flex ml={4} fontSize={8} fontWeight="bold" >
              <div>Logo</div>
            </Flex>
            <Flex ml={4} color="gray"  as='a' 
              href='#' fontSize={8} >
              <div>Inspiration</div>
            </Flex>
            <Flex ml={4} color="gray"   as='a' 
              href='#'fontSize={8} >
              <div>Find Work</div>
            </Flex>
            <Flex ml={4} color="gray"  as='a' 
              href='#' fontSize={8} >
              <div>Learn Design</div>
            </Flex>
            <Flex ml={4} color="gray"   as='a' 
              href='#' fontSize={8} >
              <div>Hire Designers</div>
            </Flex>
          </Flex>
          <Flex>
            <Button
              colorScheme="grey"
              color="gray" 
              mr={3}
              fontSize={8}
              as='a' 
              href='#'
              variant="link"
            >
              Sign In
            </Button>
            <Button
              colorScheme="pink"
              as='a' 
              href='#'
              fontSize={8}
              
              size={12}
              p={1}
              borderRadius={3}
            >
              Sign up
            </Button>
          </Flex>
        </Flex>
      </Box>
  
  );
};

export default nabvar;
