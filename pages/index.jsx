import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SearchBox from '@/Components/SearchBox/SearchBox.jsx'
import SortMenu from '@/Components//SortMenu/SortMenu.jsx'
import CarCard from '@/Components//CarCard/CarCard.jsx'
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });
export default function Home(props) {
  const [view,setView]=useState(true)
  const [sort,setSort]=useState("")
  const[carList,setCarList]=useState(props.carItem)
  const[carNumber,setCarNumber]=useState(props.carNumber.length)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
       <SearchBox {...props} setCarList={setCarList} setCarNumber={setCarNumber}  /> 
      <SortMenu {...props} view={view} setView={setView} sort={sort} setSort={setSort} carNumber={carNumber} />
      <CarCard {...props} view={view} setCarList={setCarList} carList={carList} carNumber={carNumber} />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers["x-forwarded-host"]
    ? ctx.req.headers["x-forwarded-host"]
    : ctx.req.headers.host;
    const currentYear = new Date().getFullYear();
    const res = await fetch(
    `https://api.hillzusers.com/api/dealership/advance/search/vehicles/get/${domain}`
  );
 
  const searchItem = await res.json();
  const bodydata={
    fuel_type: ctx.query.Fueltype? ctx.query.Fueltype :"",
    body_style:  ctx.query.Bodystyle? ctx.query.Bodystyle :"",
    engine_cylinders: ctx.query.EngineCylinder? ctx.query.EngineCylinder :"",
    year_end: ctx.query.Maxyear? Number(ctx.query.Maxyear) : currentYear + 1,
    year_start:ctx.query.Minyear? Number(ctx.query.Minyear) :1998,
    price_low:ctx.query.MinPrice? Number(ctx.query.MinPrice) : null,
    price_high: ctx.query.MaxPrice? Number(ctx.query.MaxPrice) : null,
    odometer_type: 2,
    make: ctx.query.make? ctx.query.make :"",
    model: ctx.query.model? ctx.query.model :"",
    transmission: "",

    drive_train: "",
    doors: "",
    interior_color: "",
    Exterior_color: ctx.query.Exteriorcolor? ctx.query.Exteriorcolor :"",
    sortKind: {
      kind: "",
      type: null,
      order: 0,
    },
    keywords: ctx.query.keywords? ctx.query.keywords :"",
    sold: "",
    is_coming_soon:  "",
    is_it_special:  null,
    odometer_low: ctx.query.Minodometer? Number(ctx.query.Minodometer) : null,
    odometer_high: ctx.query.Maxodometer? Number(ctx.query.Maxodometer) : null,
  }
  const res2 = await fetch(
    `https://api.hillzusers.com/api/dealership/advance/search/vehicles/${domain}?page=1&limit=10&keywords=${bodydata.keywords}&`
  ,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
   },
    body:JSON.stringify(bodydata),
  });
  const carItem = await res2.json();
  const res3 = await fetch(
    `https://api.hillzusers.com/api/dealership/advance/search/vehicles/${domain}?page=&limit=&keywords=${bodydata.keywords}`
  ,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
   },
    body:JSON.stringify(bodydata),
  });
  const carNumber = await res3.json();
  return {
    props: { searchItem , carItem,carNumber   },
  };
}