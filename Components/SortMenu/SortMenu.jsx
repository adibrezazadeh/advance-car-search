import React, { useCallback, useContext, useState } from "react";
import styles from "./SortMenu.module.css";
import { FaList } from "react-icons/fa6";
import { HiViewGrid } from "react-icons/hi";
function SortMenu({carItem , view , setView , sort , setSort}) {
  const itemsNum =Object.entries(carItem).length;
  
  return (
    <>
      <div className="container mt-5 mb-2 ">
        <div className="mt-2">
          <p className={styles.Headersort}>{itemsNum} Vehicles</p>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex  ">
            <div className={styles.lablesort}>
              <p>Sort:</p>
            </div>
            <div>
              <button type="" value="year" className={`${styles.btnsort} px-1 px-md-3 ${sort==="sortYear"?"text-danger" :""}`} onClick={(e)=>{e.preventDefault();setSort("sortYear")}}  >
                Year
              </button>
              <button type="" value="make" className={`${styles.btnsort} px-1 px-md-3 ${sort==="sortMake"?"text-danger" :""}` } onClick={(e)=>{e.preventDefault();setSort("sortMake")}}  >
                Make
              </button>
              <button type="submit" value="model" className={`${styles.btnsort} px-1 px-md-3 ${sort==="sortModel"?"text-danger" :""}`} onClick={(e)=>{e.preventDefault();setSort("sortModel")}}>
                Model
              </button>
              <button type="submit" value="body" className={`${styles.btnsort} px-1 px-md-3 ${sort==="sortBodyStyle"?"text-danger" :""}`} onClick={(e)=>{e.preventDefault();setSort("sortBodyStyle")}}>
                Body Style
              </button>
              <button type="submit" value="price" className={`${styles.btnsort} px-1 px-md-3 ${sort==="sortPrice"?"text-danger" :""}`} onClick={(e)=>{e.preventDefault();setSort("sortPrice")}}>
                Price
              </button>
            </div>
          </div>
          <div className="d-md-flex d-none  ">
            <FaList className={`${styles.sortview}  mx-2 ${view===false ? ("text-danger"):("")}`} onClick={(e)=>{e.preventDefault();setView(!view)}}  /> 
            <HiViewGrid className={`${styles.sortview} ${view===true ? ("text-danger"):("")} ` } onClick={(e)=>{e.preventDefault();setView(!view)}}/>
          </div>
        </div>
      </div>

    </>
  ) 
}

export default SortMenu 


