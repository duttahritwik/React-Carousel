import React, { useState, useEffect } from 'react'
import Carousel from './Carousel'

const fetchCarouselData = () => {
  return fetch('https://randomuser.me/api/?results=20').then(data => data.json())
}

const parseFetchedData = (results = []) => {
  return results.slice(0, 5).map((person, idx) => {
    const { picture: { large: image = '' } = {}, name: { first: firstName, last: lastName } = {} } = person || {}
    return { id: idx, image, name: firstName.concat(' ', lastName) }
  })
}

function App() {
  const [carouselData, setCarouselData] = useState([])

  useEffect(() => {
    fetchCarouselData().then(({ results = [] } = {}) => {
      const parsedData = parseFetchedData(results)
      setCarouselData(parsedData)
    })
  }, [])

  return (
    <Carousel data={carouselData} />
  )
}

export default App;
