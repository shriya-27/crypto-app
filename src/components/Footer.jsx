import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const avatarSrc = "https://avatars.githubusercontent.com/u/101944824?s=96&v=4";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"} // padding in x-direction
      py={["16", "8"]}
    >
      <Stack 
      direction={["column", "row"]}  // for small screen column else row
      h={"full"} 
      alignItems={"center"}>
        <VStack 
        w={"full"} 
        alignItems={["center", "flex-start"]}
        >

          <Text fontWeight={"bold"}>About Us</Text>

          <Text
            fontSize={"sm"} // sm -> small
            letterSpacing={"widest"}
            textAlign={["center", "left"]} // for small screen center else left
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>

        </VStack>

        {/* 2nd VStack for Avatar */}
        <VStack>
          <Avatar 
          boxSize={"28"} 
          mt={["4", "0"]} // for small screen 4 else 0 
          src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  )
}

export default Footer