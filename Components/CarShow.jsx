import React from 'react'
import SearchBox from './SearchBox/SearchBox.jsx'
import SortMenu from './SortMenu/SortMenu.jsx'
import CarCard from './CarCard/CarCard.jsx'
export default function CarShow() {
  
  return (
    <div>
       <SearchBox/>
       <SortMenu/>
       <CarCard/>
    </div>
  )
}
