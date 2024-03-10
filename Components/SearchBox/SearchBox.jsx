import React, { useState } from "react";
import styles from "./SearchBox.module.css";
import { FaSearch } from "react-icons/fa";

function SearchBox({searchItem}) {
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

  const modelHandler = (event)=>{
    // set any make filter
    if (event.target.value=='Any Make'){
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
            <select name="selectBox" id="selectBox" className="w-100 p-1" onChange={modelHandler} >
              <option value="Any Make">Any Make</option>
                {vehicleMake.map((item)=>(
                  <option value={item[0]}>{item[0]}</option>
                ))} 
            </select>
          </div>
          <div className="col-lg-3 col-12 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1 ">
              <option value="">Any Model</option>
               {vehicleModelFilter.map((item)=>(
                  <option value="">{item[0]}</option>
                ))}  
            </select>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1 ">
              <option value="">Min Year</option>
              {vehicleYearFilter.sort((a,b)=>a[0]-b[0]).map((item)=>(
                  <option value="">{item[0]}</option>
                ))}  
            </select>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1">
              <option value="">Max Year</option>
              {vehicleYearFilter.sort((a,b)=>b[0]-a[0]).map((item)=>(
                  <option value="">{item[0]}</option>
                ))}  
            </select>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1 ">
              <option value="">Min KM</option>
              {vehicleOdometer.sort((a,b)=>a-b).map((item)=>(
                  <option value={item}>{item}</option>
                ))} 
            </select>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1">
              <option value="">Max KM</option>
              {vehicleOdometer.sort((a,b)=>b-a).map((item)=>(
                  <option value={item}>{item}</option>
                ))} 
            </select>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1">
              <option value="">Min Price</option>
              {vehiclePrice.sort((a,b)=>a-b).map((item)=>(
                  <option value={item}>{item}</option>
                ))} 
            </select>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1">
              <option value="">Max Price</option>
              {vehiclePrice.sort((a,b)=>b-a).map((item)=>(
                  <option value={item}>{item}</option>
                ))} 
            </select>
          </div>
          <div className="col-lg-3 col-12 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1">
              <option value="">Any Body Style</option>
                {vehicleBodyStyleFilter.map((item)=>(
                  <option value="">{item[0]}</option>
                ))}  
            </select>
          </div>
          <div className="col-lg-3 col-12 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1">
              <option value="">Any Engine</option>
              {vehicleEngineFilter.map((item)=>(
                  <option value="">{item[0]}</option>
                ))}  
            </select>
          </div>
          <div className="col-lg-3 col-12 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1">
              <option value="">Any Colour</option>
              {vehicleColorFilter.map((item)=>(
                  <option value="">{item[0]}</option>
                ))}  
            </select>
          </div>
          
          
          <div className="col-lg-3 col-12 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1">
              <option value="">Any Fuel Type</option>
              {vehicleFuelFilter.map((item)=>(
                  <option value="">{item[0]}</option>
                ))} 
            </select>
          </div>
          
          <div className="col-lg-3 col-12 px-2 py-1">
            <input
              type="text"
              className="p-1 w-100"
              placeholder="Search (Make, Model, Price,...)"
              value=""
            ></input>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
          <button type="submit" className={`py-1 ${styles.buttonsearch} d-flex w-100 align-items-center justify-content-center`}>Search</button>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
          <button type="submit" className={`py-1 ${styles.buttonsearch} d-flex w-100 align-items-center justify-content-center`}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;