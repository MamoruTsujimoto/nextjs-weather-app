type WeatherType = {
  current: {
    temp: number
    clouds: number
    weather: [
      conditions: {
        main: string
        icon: string
      },
    ]
  }
}

export default WeatherType
