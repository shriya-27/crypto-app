import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {server} from "../index"
import { Button, Container, HStack, Radio, RadioGroup} from '@chakra-ui/react'
import Loader from "./Loader"
import ErrorComponent from "./ErrorComponent"
import CoinCard from './CoinCard'

const Coins = () => {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [currency, setCurrency] = useState("inr")

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  // this is pagination => hume 2nd page prr jaa skte e.g. e-commerce websites
  const changePage = (page) =>{
    setPage(page);
    setLoading(true);
  }

  const btns = new Array(132).fill(1); // since approx 132 page ek page pr 100 coins


  useEffect(() => {
    const fetchCoins = async()=>{

      try {

        // fetching data from API
        const {data} = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        // console.log(data);

        setCoins(data); // passing this data as array
        setLoading(false) // jb tk data fetch nii hota "loading is true"
        // jaise hi data fetch hogya "loading becomes false"

      } catch (error) {
        setError(true)
        setLoading(false)
      }

    }

    fetchCoins();
  },[currency,page]);
  // on change of currency, page again fetch the values

  // If we find ERROR
  if(error) return <ErrorComponent message={'Error While Fetching Coins'} />

  return (
    <Container maxW={'container.xl'} >
      {loading ? <Loader /> : (<>

        <RadioGroup value={currency} onChange={setCurrency} p="8">
          <HStack>
            <Radio value={"inr"} >INR</Radio>
            <Radio value={"usd"} >USD</Radio>
            <Radio value={"eur"} >EUR</Radio>
          </HStack>
        </RadioGroup>

        <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
          {/* wrap taaki overflow na ho data ka */}

          {coins.map((i) =>(
            <CoinCard 
            id={i.id}
            key={i.id}
            name={i.name} 
            price={i.current_price}
            img={i.image} 
            symbol={i.symbol}
            currencySymbol={currencySymbol}
          />
          ))}

        </HStack>
        
        <HStack
        w="full"
        overflowX={'auto'}
        p="8"
        >
          {btns.map((item,index) =>(
              <Button 
              key={index}
              bgColor={'blackAlpha.900'} 
              color={'white'} 
              onClick={()=>changePage(index+1)} 
              >
                {index+1}
              </Button>
            ))
          }
        </HStack>

        </>)}
    </Container>
  )
}

export default Coins