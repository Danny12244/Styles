import { Box, Flex, Text } from "@chakra-ui/react";
import Card from './Card';
import React from "react";

const Sidebar = () => {
  const LinkItems = [
    { name: "Home" },
    { name: "Trending" },
    { name: "Explore" },
    { name: "Favourites" },
    { name: "Settings" },
  ];

  return (
    <Flex>
    <Box bg=" wheat" h="327" w={150}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="20" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
      </Flex>

      {LinkItems.map((link) => (
        <Flex
          _before={{ content: '"🙂"', display: "inline-block", mr: "5px" }}
          borderRadius="4"
          _hover={{
            background: "aqua",
            color: "white",
          }}
          key={link.name}
          as="a"
          href="#"
          m="2"
          fontSize={10}
          h="8"
          align="center"
          justify="center"
        >
          {link.name}
        </Flex>
      ))}

    </Box>
<Card />

</Flex>
  );
};

export default Sidebar;
