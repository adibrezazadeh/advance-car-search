import React, { useEffect, useState } from "react";
import styles from "./SearchBox.module.css";
import { FaSearch } from "react-icons/fa";
import { useRouter } from 'next/router';
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";
import Advancesearch from "../AdvanceSearch/Advancesearch";
import { Formik } from "formik";
import proShow from '../proShow/proShow'
function SearchBox({searchItem , setCarList,setCarNumber,sort,setPage  } ) {
  const router = useRouter();
  const[pro,setPro]=useState("");
  const[itemsPro,setItemsPro]=useState([]);
  // set state for each filed of serach box and filter that change by make
  const [vehicleMake,setVehicleMake]=useState(Object.entries(searchItem.vehicleMake_full))
  const [vehicleModel,setVehicleModel]=useState(Object.entries(searchItem.vehicleModel_full))
  const [vehicleModelFilter,setVehicleModelFilter]=useState(vehicleModel)
  const [vehicleYear,setVehicleYear]=useState(Object.entries(searchItem.vehicleYear_full))
  const [vehicleYearFilter,setVehicleYearFilter]=useState(vehicleYear)
  const [vehicleOdometer,setVehicleOdometer]=useState(searchItem.odometerKMRange)
  const [vehiclePrice,setVehiclePrice]=useState(searchItem.priceRange)
  const [vehicleBodyStyle,setVehicleBodyStyle]=useState(Object.entries(searchItem.vehicleBodyStyle_full))
  const [vehicleBodyStyleFilter,setVehicleBodyStyleFilter]=useState(vehicleBodyStyle)
  const [vehicleEngine,setVehicleEngine]=useState(Object.entries(searchItem.vehicleEngine_cylinders_full))
  const [vehicleEngineFilter,setVehicleEngineFilter]=useState(vehicleEngine)
  const [vehicleColor,setVehicleColor]=useState(Object.entries(searchItem.vehicleexterior_color_full))
  const [vehicleColorFilter,setVehicleColorFilter]=useState(vehicleColor)
  const [vehicleFuel,setVehicleFuel]=useState(Object.entries(searchItem.vehicleFuel_type_full))
  const [vehicleFuelFilter,setVehicleFuelFilter]=useState(vehicleFuel)
  const sperateNum = (num) => {
    const sperateNumber = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return sperateNumber;
  };
  const modelHandler = (event)=>{
    // set any make filter
    if (event.target.value==""){
      setVehicleModelFilter(vehicleModel)
      setVehicleYearFilter(vehicleYear)
      setVehicleBodyStyleFilter(vehicleBodyStyle)
      setVehicleEngineFilter(vehicleEngine)
      setVehicleColorFilter(vehicleColor)
      setVehicleFuelFilter(vehicleFuel)
    }
    // make filter
    else{
      const copyModel = vehicleModel
      const modelFilter = copyModel.filter((item)=>item[1].make==event.target.value)
      const copyYear = vehicleYear
      const yearFilter = copyYear.filter((item)=>item[1].make.includes(event.target.value))
      const copyBodyStyle = vehicleBodyStyle
      const BodyStyleFilter = copyBodyStyle.filter((item)=>item[1].make.includes(event.target.value))
      const copyEngine = vehicleEngine
      const EngineFilter = copyEngine.filter((item)=>item[1].make.includes(event.target.value))
      const copyColor = vehicleColor
      const ColorFilter = copyColor.filter((item)=>item[1].make.includes(event.target.value))
      const copyFuel = vehicleFuel
      const FuelFilter = copyFuel.filter((item)=>item[1].make.includes(event.target.value))
      setVehicleModelFilter(modelFilter)
      setVehicleYearFilter(yearFilter)
      setVehicleBodyStyleFilter(BodyStyleFilter)
      setVehicleEngineFilter(EngineFilter)
      setVehicleColorFilter(ColorFilter)
      setVehicleFuelFilter(FuelFilter)

    }

  }
  const searchbtn=async ()=>{
    const newQueryParams = {
      make: document.getElementById("selectBoxMake").value,
      model: document.getElementById("selectBoxModel").value,
      Minyear:document.getElementById("selectBoxMinyear").value,
      Maxyear:document.getElementById("selectBoxMaxyear").value,
      MinPrice:document.getElementById("selectBoxMinprice").value,
      MaxPrice:document.getElementById("selectBoxMaxprice").value,
      Minodometer:document.getElementById("selectBoxMinkm").value,
      Maxodometer:document.getElementById("selectBoxMaxkm").value,
      EngineCylinder:document.getElementById("selectBoxEngine").value,
      Bodystyle:document.getElementById("selectBoxBodystyle").value,
      Fueltype:document.getElementById("selectBoxFuel").value,
      Exteriorcolor:document.getElementById("selectBoxColor").value,
      keywords:document.getElementById("textsearch").value,
    };
       router.push({
        pathname: router.pathname,
         query: { ...router.query, ...newQueryParams },
        
       }, undefined, { shallow: true });
      
    Advancesearch(sort , setCarList ,newQueryParams,setCarNumber,setPage  );
  }
  const resetbtn=async()=>{
    document.getElementById("selectBoxMake").value="";
    document.getElementById("selectBoxModel").value="";
    document.getElementById("selectBoxMinyear").value="";
    document.getElementById("selectBoxMaxyear").value="2025";
    document.getElementById("selectBoxMinprice").value="";
    document.getElementById("selectBoxMaxprice").value="";
    document.getElementById("selectBoxMinkm").value="";
    document.getElementById("selectBoxMaxkm").value="";
    document.getElementById("selectBoxEngine").value="";
    document.getElementById("selectBoxBodystyle").value="";
    document.getElementById("selectBoxFuel").value="";
    document.getElementById("selectBoxColor").value="";
    document.getElementById("textsearch").value="";
    await searchbtn();
    router.push({
      pathname: router.pathname,
       query: "",
      
     }, undefined, { shallow: true });
  }
  useEffect(()=>{
    if (pro!=""){
      proShow(router,pro,setItemsPro,sort)
    } 
  },[pro])
  return (
    <div className={`container mt-5 pb-5 shadow ${styles.boxserach}`}>
      <div className="">
        <div className=" mb-3 mx-3 mt-4">
          <p className={styles.headerbox}>
            <FaSearch className={styles.headericon}/>
            Search
          </p>
        </div>
        <div className="row px-4">
          <div className="col-lg-3 col-12 px-2 py-1">
            <select name="selectBox" id="selectBoxMake" className="w-100 p-1" onChange={modelHandler} >
              <option value="">Any Make</option>
                {vehicleMake.map((item,index)=>(
                  <option key={index+1} value={item[0]}>{item[0]}</option>
                ))} 
            </select>
          </div>
          <div className="col-lg-3 col-12 px-2 py-1">
            <select name="selectBox" id="selectBoxModel" className="w-100 p-1 ">
              <option value="">Any Model</option>
               {vehicleModelFilter.map((item,index)=>(
                  <option key={index+1} value={item[0]}>{item[0]}</option>
                ))}  
            </select>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
            <select name="selectBox" id="selectBoxMinyear" className="w-100 p-1 ">
              <option value="">Min Year</option>
              {vehicleYearFilter.sort((a,b)=>a[0]-b[0]).map((item,index)=>(
                  <option key={index+1} value={item[0]}>{item[0]}</option>
                ))}  
            </select>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
            <select name="selectBox" id="selectBoxMaxyear" className="w-100 p-1">
              <option value="2025">Max Year</option>
              {vehicleYearFilter.sort((a,b)=>b[0]-a[0]).map((item,index)=>(
                  <option key={index+1} value={item[0]}>{item[0]}</option>
                ))}  
            </select>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
            <select name="selectBox" id="selectBoxMinkm" className="w-100 p-1 ">
              <option value="">Min KM</option>
              {vehicleOdometer.sort((a,b)=>a-b).map((item,index)=>(
                  <option key={index+1} value={item}>{item}</option>
                ))} 
            </select>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
            <select name="selectBox" id="selectBoxMaxkm" className="w-100 p-1">
              <option value="">Max KM</option>
              {vehicleOdometer.sort((a,b)=>b-a).map((item,index)=>(
                  <option key={index+1} value={item}>{item}</option>
                ))} 
            </select>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
            <select name="selectBox" id="selectBoxMinprice" className="w-100 p-1">
              <option value="">Min Price</option>
              {vehiclePrice.sort((a,b)=>a-b).map((item,index)=>(
                  <option key={index+1} value={item}>{item}</option>
                ))} 
            </select>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
            <select name="selectBox" id="selectBoxMaxprice" className="w-100 p-1">
              <option value="">Max Price</option>
              {vehiclePrice.sort((a,b)=>b-a).map((item,index)=>(
                  <option key={index+1} value={item}>{item}</option>
                ))} 
            </select>
          </div>
          <div className="col-lg-3 col-12 px-2 py-1">
            <select name="selectBox" id="selectBoxBodystyle" className="w-100 p-1">
              <option value="">Any Body Style</option>
                {vehicleBodyStyleFilter.map((item,index)=>(
                  <option key={index+1} value={item[0]}>{item[0]}</option>
                ))}  
            </select>
          </div>
          <div className="col-lg-3 col-12 px-2 py-1">
            <select name="selectBox" id="selectBoxEngine" className="w-100 p-1">
              <option value="">Any Engine</option>
              {vehicleEngineFilter.map((item,index)=>(
                  <option key={index+1} value={item[0]}>{item[0]}</option>
                ))}  
            </select>
          </div>
          <div className="col-lg-3 col-12 px-2 py-1">
            <select name="selectBox" id="selectBoxColor" className="w-100 p-1">
              <option value="">Any Colour</option>
              {vehicleColorFilter.map((item,index)=>(
                  <option key={index+1} value={item[0]}>{item[0]}</option>
                ))}  
            </select>
          </div>
          
          
          <div className="col-lg-3 col-12 px-2 py-1">
            <select name="selectBox" id="selectBoxFuel" className="w-100 p-1">
              <option value="">Any Fuel Type</option>
              {vehicleFuelFilter.map((item,index)=>(
                  <option key={index+1}  value={item[0]}>{item[0]}</option>
                ))} 
            </select>
          </div>
          
          <div className={` col-lg-3 col-12 px-2 py-1 position-relative`}>
            <input
              id="textsearch"
              type="text"
              className={`${styles.headprobox} p-1 w-100 `}
              placeholder="Search (Make, Model, Price,...)"
              onChange={async (e)=>{await setPro(e.target.value);}}
            >
            </input>
            <div className={`w-100 p-2 overflow-auto ${styles.proBox}`}>
                {itemsPro.map((itempro)=>(
                  <div key={itempro.id} className="d-flex">
                    <div className="p-2">
                    <img 
                      src={
                        itempro.thumbnail_cover_image
                          ? `https://image123.azureedge.net${itempro.thumbnail_cover_image}`
                          : "https://image123.azureedge.net/dmndautosales/thumb-2021-Volkswagen-Passat-3793359019297211.jpg"
                      }
                      className={` ${styles.propic}`}
                      alt="car"
                    />
                    </div>
                    <div className="text-start p-0 m-0">
                      <div className={`${styles.headpro} p-0 m-0`}>
                        <p className="p-0 m-0">{itempro.Vehicle.model_year} {itempro.Vehicle.make}{" "}
                      {itempro.Vehicle.model}</p>
                      </div>
                      <div className={`${styles.bodypro} p-0 m-0`}>
                        <p className="p-0 m-0">Odometer : {itempro.odometer? sperateNum(itempro.odometer):""}</p>
                        <p className="p-0 m-0">Stock # : {itempro.stock_NO?itempro.stock_NO:""}</p>
                        <p className="p-0 m-0">Price: {itempro.sell_price?sperateNum(itempro.sell_price):""} $</p>
                      </div>
                    </div>
                  </div>
                )
                )}
            </div> 
            
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
          <button type="submit" className={`py-1 ${styles.buttonsearch} d-flex w-100 align-items-center justify-content-center`} onClick={(e)=>{e.preventDefault() ; searchbtn()} }>Search</button>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
          <button type="submit" className={`py-1 ${styles.buttonsearch} d-flex w-100 align-items-center justify-content-center`} onClick={(e)=>{e.preventDefault(); resetbtn()}} >Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
