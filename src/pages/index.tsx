import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Box, Center, Text } from '@chakra-ui/react'
import { fromUnixTime, format } from 'date-fns'
import WeatherType from '../types/weather'

type Props = {
  weatherData: WeatherType
}

const Home: NextPage<Props> = ({ weatherData }) => {
  const currentWeatherMain = weatherData.current.weather[0].main
  const currentWeatherTemp = Math.trunc(weatherData.current.temp)
  const currentWeatherIcon = weatherData.current.weather[0].icon + '@2x.png'
  const currentWeatherDate = format(fromUnixTime(weatherData.current.dt), 'LLLL d, yyyy')

  return (
    <>
      <Head>
        <title>NextJS Weather APP</title>
      </Head>
      <Center h='100vh'>
        <Box w={200} h={200} bg='gray.500' color='white' boxShadow='md' borderRadius='lg' overflow='hidden'>
          <Center marginTop='20px'>
            <Image
              src={`http://openweathermap.org/img/wn/${currentWeatherIcon}`}
              width='64'
              height='64'
              alt={currentWeatherMain}
            />
          </Center>
          <Center marginBottom='10px'>{currentWeatherDate}</Center>
          <Center>Uruma</Center>
          <Center>
            <Text fontSize='2xl'>{currentWeatherTemp}˚</Text>
          </Center>
        </Box>
      </Center>
    </>
  )
}

export const getStaticProps = async () => {
  const lat = 26.37895227
  const lon = 127.8571701
  const exclude = 'hourly,minutely,daily,alerts'
  const key = process.env.OPEN_WEATHER_API_KEY ?? ''
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&appid=${key}`,
  )
  const weatherJson = await weatherRes.json()
  const weatherData = weatherJson

  return {
    props: {
      weatherData,
    },
    revalidate: 120,
  }
}

export default Home
