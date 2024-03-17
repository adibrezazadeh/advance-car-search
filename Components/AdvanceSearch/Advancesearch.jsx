

async function Advancesearch(sort , setCarList,newQueryParams,setCarNumber,setPage) {
    const currentYear = new Date().getFullYear();
    const bodydata={
        fuel_type: newQueryParams.Fueltype,
        body_style:newQueryParams.Bodystyle,
        engine_cylinders: newQueryParams.EngineCylinder,
        year_end: newQueryParams.Maxyear? Number(newQueryParams.Maxyear) :  currentYear + 1,
        year_start:newQueryParams.Minyear? Number(newQueryParams.Minyear) :  1978,
        price_low: newQueryParams.MinPrice? Number(newQueryParams.MinPrice):null,
        price_high:  newQueryParams.MaxPrice? Number(newQueryParams.MaxPrice):null,
        odometer_type: 2,
        make:  newQueryParams.make,
        model: newQueryParams.model,
        transmission: "",
    
        drive_train: "",
        doors: "",
        interior_color: "",
        Exterior_color: newQueryParams.Exteriorcolor,
        sortKind: {
          kind: "",
          type: null,
          order: 0,
        },
        keywords: newQueryParams.keywords,
        sold: "",
        is_coming_soon:  "",
        is_it_special:  null,
        odometer_low: newQueryParams.Minodometer? Number(newQueryParams.Minodometer):null,
        odometer_high: newQueryParams.Maxodometer? Number(newQueryParams.Maxodometer):null,
      }
      const res2 = await fetch(
        `https://api.hillzusers.com/api/dealership/advance/search/vehicles/${window.location.host}?page=1&limit=10&keywords=${newQueryParams.keywords}&${sort}=ASC`
      ,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
       },
        body:JSON.stringify(bodydata),
      });
      const carItem = await res2.json();
      const res3 = await fetch(
        `https://api.hillzusers.com/api/dealership/advance/search/vehicles/${window.location.host}?page=&limit=&keywords=${newQueryParams.keywords}`
      ,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
       },
        body:JSON.stringify(bodydata),
      });
      const carnumber = await res3.json();
      setCarNumber(carnumber.length)
      setCarList(carItem);
      setPage(0);
}

export default Advancesearch
