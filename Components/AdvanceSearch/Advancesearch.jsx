import { useRouter } from 'next/router';
import React from 'react'
import CarCard from '../CarCard/CarCard';

async function Advancesearch(router , setCarList) {
    console.log(router.query);
      // ?make=${make}&model=${model}&Minyear=${minyear}&Maxyear=${maxyear}&MinPrice=${minprice}&MaxPrice=${maxprice}&Minodometer=${minkm}&Maxodometer=${maxkm}&EngineCylinder=${engine}&Bodystyle=${bodystyle}&Fueltype=${fuel}&Exteriorcolor=${color}&keywords=${textsearch}`)
    const currentYear = new Date().getFullYear();
    const bodydata={
        fuel_type: "",
        body_style:"",
        engine_cylinders: "",
        year_end:  currentYear + 1,
        price_low: null,
        price_high:  null,
        odometer_type: 2,
        make: router.query?.make,
        model: "",
        transmission: "",
    
        drive_train: "",
        doors: "",
        interior_color: "",
        Exterior_color: "",
        sortKind: {
          kind: "",
          type: null,
          order: 0,
        },
        keywords: "",
        sold: "",
        is_coming_soon:  "",
        is_it_special:  null,
        year_start:  "0",
        odometer_low: null,
        odometer_high: null,
      }
      const res2 = await fetch(
        `https://api.hillzusers.com/api/dealership/advance/search/vehicles/${window.location.host}?page=1&limit=10`
      ,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
       },
        body:JSON.stringify(bodydata),
      });
      console.log("its okkkkkkkkkkkkkkkkkkkk")
      const carItem = await res2.json();
      console.log (carItem)
      setCarList(Object.entries(carItem));
}

export default Advancesearch
