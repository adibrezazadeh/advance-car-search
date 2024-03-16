

async function proShow(router,pro,setItemsPro,sort) {
    const currentYear = new Date().getFullYear();
    const bodydata={
        fuel_type: router.query.Fueltype? router.query.Fueltype :"",
          body_style:  router.query.Bodystyle? router.query.Bodystyle :"",
          engine_cylinders: router.query.EngineCylinder? router.query.EngineCylinder :"",
          year_end: router.query.Maxyear? Number(router.query.Maxyear) : currentYear + 1,
          year_start:router.query.Minyear? Number(router.query.Minyear) :1998,
          price_low:router.query.MinPrice? Number(router.query.MinPrice) : null,
          price_high: router.query.MaxPrice? Number(router.query.MaxPrice) : null,
          odometer_type: 2,
          make: router.query.make? router.query.make :"",
          model: router.query.model? router.query.model :"",
          transmission: "",
      
          drive_train: "",
          doors: "",
          interior_color: "",
          Exterior_color: router.query.Exteriorcolor? router.query.Exteriorcolor :"",
          sortKind: {
            kind: "",
            type: null,
            order: 0,
          },
          keywords: router.query.keywords? router.query.keywords :"",
          sold: "",
          is_coming_soon:  "",
          is_it_special:  null,
          odometer_low: router.query.Minodometer? Number(router.query.Minodometer) : null,
          odometer_high: router.query.Maxodometer? Number(router.query.Maxodometer) : null,
      }
      const res2 = await fetch(
        `https://api.hillzusers.com/api/dealership/advance/search/vehicles/${window.location.host}?page=&limit=&keywords=${pro}&${sort}=ASC`
      ,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
       },
        body:JSON.stringify(bodydata),
      });
      const carItem = await res2.json();
      setItemsPro(carItem);
}

export default proShow
