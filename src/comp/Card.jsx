import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, UnlockIcon } from "@chakra-ui/icons";

const card = () => {
  return (
    <>
      <Flex  w='500px' m='auto' align='center' justify='center' gap="14">
        <Box
          h="125"
          w="185px"
          p="2"
          border="1px"
          borderRadius={12}
          bg="red.500"
          color="white"
        >
          <Flex justify="Flex-end">VISA</Flex>
          <Flex fontSize="12" mt="5" ml="2">
            4530 2383 4337 4885
          </Flex>
          <Flex gap="3" mt="4">
            {" "}
            <Text>
              <Text fontSize="8">Card Holder</Text>
              <Text fontSize="12">John Smith</Text>
            </Text>
            <Text>
              <Text fontSize="8">Expiry</Text>
              <Text fontSize="12">09/20</Text>
            </Text>
            <Text>
              <Text fontSize="8">CVV</Text>
              <Text fontSize="12">868</Text>
            </Text>
          </Flex>
        </Box>
        <Box h="275" w="200px" p="2">
          <Text fontSize="12" align="left" mb="4">
            Payment Details
          </Text>
          <Text fontSize="7" align="left">
            CARDHOLDER NAME
          </Text>
          <Text borderBottom="1px solid red" fontSize="12" align="left">
            John Smith
          </Text>
          <Text fontSize="7" align="left" mt="6">
            CARDNUMBER
          </Text>
          <Text borderBottom="1px solid red" fontSize="12">
            4256 4566 4767 9076
          </Text>
          <Flex gap="3" mt="4">
            {" "}
            <Text>
              <Text fontSize="7">Expiry Month</Text>
              <Text borderBottom="1px solid red" fontSize="12">
                09
              </Text>
            </Text>
            <Text>
              <Text fontSize="7">Expiry Year</Text>
              <Text borderBottom="1px solid red" fontSize="12">
                2020
              </Text>
            </Text>
            <Text>
              <Text fontSize="7">CVV</Text>
              <Text borderBottom="1px solid red" fontSize="12">
                <UnlockIcon w="10px" mr="1" color="red.500" />
                868
              </Text>
            </Text>
          </Flex>
          <Flex mt="7" fontSize="12">
            Payment Amount:{" "}
            <Text color="red.500" fontWeight="bold">
              {" "}
              12300
            </Text>
          </Flex>
          <Button
            bg="red.500"
            color="white"
            w="100px"
            fontSize="12"
            h="8"
            _hover={{ background: "aqua", color: "black" }}
            mt="5"
          >
            PAY
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default card;
