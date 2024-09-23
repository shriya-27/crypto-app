// Another component
// hum kya kya recieve krenge vo pass kiya in {} below
import { Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const CoinCard = ({id,name,img,symbol,price,currencySymbol="₹"}) =>(
    //  using Link instead of anchor tag since kisi aur website pr nhi bhejna
    <Link to={`/coin/${id}`} >
      <VStack
      w="52" 
      shadow={'lg'} 
      p="8" 
      borderRadius={'lg'} 
      transition={"all 0.3s"} 
      m="4"
      css={{
        "&:hover": {
          transform: "scale(1.1)"
        }
      }}>
  
        <Image
        src={img} 
        h="10" 
        w="10" 
        objectFit={'contain'} 
        alt={'Coin'}
        />
  
        <Heading size={'md'} noOfLines={1} >{symbol}</Heading>
        {/* noOfLines={1} this states if long line "..." will be shown after come text */}
  
        <Text noOfLines={1} >{name}</Text>
        <Text noOfLines={1} >{price? `${currencySymbol}${price}` : "NA"}</Text>
  
      </VStack>
    </Link>
);

export default CoinCard
  