import React from "react";
import styles from "./SearchBox.module.css";
import { FaSearch } from "react-icons/fa";

function SearchBox(props) {
  console.log(props)
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
            <select name="selectBox" id="selectBox" className="w-100 p-1">
              <option value="">Any Make</option>
            </select>
          </div>
          <div className="col-lg-3 col-12 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1 ">
              <option value="">Any Model</option>
            </select>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1 ">
              <option value="">Min Year</option>
            </select>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1">
              <option value="">Max Year</option>
            </select>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1 ">
              <option value="">Min KM</option>
            </select>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1">
              <option value="">Max KM</option>
            </select>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1">
              <option value="">Min Price</option>
            </select>
          </div>
          <div className="col-lg-3 col-6 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1">
              <option value="">Max Price</option>
            </select>
          </div>
          <div className="col-lg-3 col-12 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1">
              <option value="">Any Body Style</option>
            </select>
          </div>
          <div className="col-lg-3 col-12 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1">
              <option value="">Any Engine</option>
            </select>
          </div>
          <div className="col-lg-3 col-12 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1">
              <option value="">Any Colour</option>
            </select>
          </div>
          
          
          <div className="col-lg-3 col-12 px-2 py-1">
            <select name="selectBox" id="selectBox" className="w-100 p-1">
              <option value="">Any Fuel Type</option>
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
