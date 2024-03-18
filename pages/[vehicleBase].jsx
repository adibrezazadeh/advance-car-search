import React from 'react'
import { httpRequest } from "@/apis/index";

function vehicleBase({data, data2, domain: host,specialData}) {
  console.log ("dataaaa====",data)
  console.log ("dataaaa2====",data2)
  console.log ("host====",host)
  console.log ("specialData",specialData)
    return (
    <div>
      salaaaam
    </div>
  )
}

export default vehicleBase

export async function getServerSideProps(context) { 
    const { req, params } = context; 
    const host = req.headers["x-forwarded-host"] 
      ? req.headers["x-forwarded-host"] 
      : req.headers.host; 
    const res = await fetch( 
        `https://api.hillzusers.com/api/dealership/mid/vehicle/single/${host}/${params?.vehicleBase}` 
    ); 
    const res2 = await fetch( 
      `https://api.hillzusers.com/api/vehicle/dealership/media/mid/all/${host}/${params?.vehicleBase}` 
    ); 
    const { data: specialData, status: specialStatus } = await httpRequest( 
      "GET", 
      `/api/dealership/vehicles/${host}/special`, 
      {}, 
      {} 
    ); 
    // const res3 = await fetch(`${BASE_URL}/api/soldImages/${host}`); 
    // const sold = await res3.json(); 
    if (res.status === 200 && res2.status === 200 && specialStatus === 200) { 
      const data = await res.json(); 
      const data2 = await res2.json(); 
      return { props: { data, data2, domain: host ,specialData } }; 
    } else { 
      return { 
        notFound: true, 
      }; 
    } 
}