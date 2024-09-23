import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {server} from "../index"
import { Container, HStack, VStack, Image, Heading, Text } from '@chakra-ui/react'
import Loader from "./Loader"
import ErrorComponent from "./ErrorComponent"

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)


  useEffect(() => {
    const fetchExchanges = async()=>{

      try {

        // fetching data from API
        const {data} = await axios.get(`${server}/exchanges`)
        // console.log(data);

        setExchanges(data); // passing this data as array
        setLoading(false) // jb tk data fetch nii hota "loading is true"
        // jaise hi data fetch hogya "loading becomes false"

      } catch (error) {
        setError(true)
        setLoading(false)
      }

    }

    fetchExchanges();
  },[]);

  // If we find ERROR
  if(error) return <ErrorComponent message={'Error While Fetching Exchanges'} />

  return (
    <Container maxW={'container.xl'} >
      {loading ? <Loader /> : (<>

        <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
          {/* wrap taaki overflow na ho data ka */}

          {exchanges.map((i) =>(
            <ExchangeCard 
            key={i.id}
            name={i.name} 
            img={i.image} 
            rank={i.trust_score_rank} 
            url={i.url} 
          />
          ))}

        </HStack>

        </>)}
    </Container>
  )
}


// Another component
// hum kya kya recieve krenge vo pass kiya in {} below
const ExchangeCard = ({name,img,rank,url}) =>(
  <a href={url} target={'blank'} >
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
      alt={'Exchange'}
      />

      <Heading size={'md'} noOfLines={1} >{rank}</Heading>
      {/* noOfLines={1} this states if long line "..." will be shown after come text */}

      <Text noOfLines={1} >{name}</Text>

    </VStack>
  </a>
)

export default Exchanges