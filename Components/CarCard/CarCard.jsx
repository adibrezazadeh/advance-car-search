import React, { useState } from "react";
import styles from "./CarCard.module.css";
import { FaLocationPin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import SortMenu from "../SortMenu/SortMenu";
export default function CarCard({ carItem, view , carList   }) {
  // function for sperate number 3 , 3
  
  const sperateNum = (num) => {
    const sperateNumber = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return sperateNumber;
  };
  return (
    <>
      {/* display in grid */}
      <div className={`container ${view ? "" : "d-lg-none "}`}>
        <div className={"row "}>
          {carList.map((item) => (
            <div key={item.id} className="p-2 col-12 col-md-6 col-xl-4">
              <div className={`  shadow p-0 ${styles.boxcar}`}>
                <div className="">
                  <div className="">
                    <img 
                      src={
                        item.thumbnail_cover_image
                          ? `https://image123.azureedge.net${item.thumbnail_cover_image}`
                          : "https://image123.azureedge.net/dmndautosales/thumb-2021-Volkswagen-Passat-3793359019297211.jpg"
                      }
                      className={` w-100 ${styles.carphoto}`}
                      alt="car"
                    />
                  </div>
                  <div className="m-3 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <input
                        type="checkbox"
                        className="p-0 m-0"
                        name="120471"
                        id="120471"
                      />
                      <p className={`${styles.Comparetext} m-0 px-1`}>
                        Select For Compare
                      </p>
                    </div>
                    <p className={`p-0 m-0 ${styles.carprice}`}>
                      $
                      {item.sell_price ? sperateNum(item.sell_price) : ""}
                    </p>
                  </div>
                  <div className="mx-3">
                    <a
                      className={`p-0 m-0 text-decoration-none text-start ${styles.cartitle}`}
                      href="#"
                    >
                      {item.Vehicle.model_year} {item.Vehicle.make}{" "}
                      {item.Vehicle.model} {item.Vehicle.drive_type}
                    </a>
                    <p className={`${styles.cartitlesub} m-0`}>
                      {item.Vehicle.trim ? item.Vehicle.trim : ""}
                    </p>
                  </div>
                  <div>
                    <div className=" m-3 p-0">
                      <p className={`${styles.finaceFormsize} pb-1`}>
                        Finance form :
                      </p>
                    </div>
                    <div className={`row mx-3 ${styles.gray} `}>
                      <p className={`col-6 ${styles.aboutt1} p-2 m-0`}>
                        Mileage :
                      </p>
                      <p className={`col-6 ${styles.aboutt2} p-2 m-0`}>
                        {item.odometer ? sperateNum(item.odometer) : ""}{" "}
                        KM
                      </p>
                    </div>
                    <div className="row mx-3  ">
                      <p className={`col-6 ${styles.aboutt1} p-2 m-0`}>
                        Engine :
                      </p>
                      <p className={`col-6 ${styles.aboutt2} p-2 m-0`}>
                        {item.Vehicle.engine_type
                          ? item.Vehicle.engine_type
                          : ""}
                      </p>
                    </div>
                    <div className={`row mx-3 ${styles.gray} `}>
                      <p className={`col-6 ${styles.aboutt1} p-2 m-0`}>
                        Drivetrain :
                      </p>
                      <p className={`col-6 ${styles.aboutt2} p-2 m-0`}>
                        {item.Vehicle.drive_type
                          ? item.Vehicle.drive_type
                          : ""}
                      </p>
                    </div>
                    <div className="row mx-3   ">
                      <p className={`col-6 ${styles.aboutt1} p-2 m-0`}>
                        Fuel Type :
                      </p>
                      <p className={`col-6 ${styles.aboutt2} p-2 m-0`}>
                        {item.Vehicle.fuel_type
                          ? item.Vehicle.fuel_type
                          : ""}
                      </p>
                    </div>
                    <div className={`row mx-3 ${styles.gray} `}>
                      <p className={`col-6 ${styles.aboutt1} p-2 m-0`}>
                        Transmission : :
                      </p>
                      <p className={`col-6 ${styles.aboutt2} p-2 m-0`}>
                        {item.Vehicle.Transmission
                          ? item.Vehicle.Transmission.name
                          : ""}
                      </p>
                    </div>
                    <div className="row mx-3   ">
                      <p className={`col-6 ${styles.aboutt1} p-2 m-0`}>
                        Stock # :
                      </p>
                      <p className={`col-6 ${styles.aboutt2} p-2 m-0`}>
                        {item.stock_NO ? item.stock_NO : ""}
                      </p>
                    </div>
                  </div>
                  <div className={`${styles.buttons} m-3 row`}>
                    <div className=" col-6 px-1 py-1">
                      <button
                        type="submit"
                        className={`py-1 ${styles.buttonsearch} d-flex w-100 align-items-center justify-content-center"`}
                      >
                        View Details
                      </button>
                    </div>
                    <div className=" col-6 px-1 py-1">
                      <button
                        type="submit"
                        className={`py-1 ${styles.buttonsearch} d-flex w-100 align-items-center justify-content-center"`}
                      >
                        Financing
                      </button>
                    </div>
                    <div className=" col-6 px-1 py-1">
                      <button
                        type="submit"
                        className={`py-1 ${styles.buttonsearch} d-flex w-100 align-items-center justify-content-center"`}
                      >
                        Trade-in
                      </button>
                    </div>
                    <div className=" col-6 px-1 py-1">
                      <button
                        type="submit"
                        className={`py-1 ${styles.buttoncompare}  d-flex w-100 align-items-center justify-content-center"`}
                      >
                        Compare
                      </button>
                    </div>
                  </div>
                  <div className="m-3 d-flex justify-content-between ">
                    <div className="d-flex">
                      <div>
                        <FaLocationPin className={styles.icons} />
                      </div>
                      <a
                        href=""
                        className="p-0 mx-1 m-0 text-decoration-none text-start"
                      >
                        DMND Auto Sales
                      </a>
                    </div>
                    <div className="d-flex">
                      <div>
                        <FaPhoneAlt className={styles.icons} />
                      </div>
                      <a
                        href=""
                        className="p-0 mx-1 m-0 text-decoration-none text-start"
                      >
                        Tel:4162749773
                      </a>
                    </div>
                  </div>
                  <div className="text-center mb-3">
                    <img
                      src="https://hzd-on-dmndautosales.azurewebsites.net/images/inventory/carfaxcanada_icon.png"
                      alt=""
                      className={styles.certificate}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* display in list */}
      <div className={`container ${view ? "d-none" : " d-lg-block d-none"}`}>
        <div className="">
          {carList.map((item) => (
            <div key={item.id} className="shadow my-2 row ">
              {/* pic */}
              <div className="p-2 col-3   ">
                <img
                  src={
                    item.thumbnail_cover_image
                      ? `https://image123.azureedge.net${item.thumbnail_cover_image}`
                      : "https://image123.azureedge.net/dmndautosales/thumb-2021-Volkswagen-Passat-3793359019297211.jpg"
                  }
                  className={`col-12  ${styles.carphoto}`}
                  alt="car"
                />
              </div>
              {/* middle */}
              <div className="col-6 ">
                {/* name and price */}
                <div className="col-12 d-flex justify-content-between align-items-center">
                  <div className="">
                    <a
                      className={`p-0 m-0 text-decoration-none text-start ${styles.cartitle}`}
                      href="#"
                    >
                      {item.Vehicle.model_year} {item.Vehicle.make}{" "}
                      {item.Vehicle.model} {item.Vehicle.drive_type}
                    </a>
                    <p className={`${styles.cartitlesub} m-0`}>
                      {item.Vehicle.trim ? item.Vehicle.trim : ""}
                    </p>
                  </div>
                  <div>
                    <p className={`p-0 m-0 ${styles.carprice}`}>
                      $
                      {item.sell_price ? sperateNum(item.sell_price) : ""}
                    </p>
                  </div>
                </div>
                {/* car details */}
                <div className="d-flex mt-3">

                  <div className="col-6">
                    <div className="shadow">
                      <div className="d-flex col-12 justify-content-between px-2 pt-2 ">
                        <p className={`col-6 ${styles.aboutt2}   m-0`}>
                          Body Style :
                        </p>
                        <p className={`col-6 ${styles.aboutt1}  m-0 text-end`}>
                          {item.Vehicle.BodyStyle
                            ? item.Vehicle.BodyStyle.name
                            : ""}
                        </p>
                      </div>
                      <div className="d-flex col-12 justify-content-between px-2 ">
                        <p className={`col-6 ${styles.aboutt2}  m-0`}>
                        Engine:
                        </p>
                        <p className={`col-6 ${styles.aboutt1}  m-0 text-end`}>
                          {item.Vehicle.engine_type
                            ? item.Vehicle.engine_type
                            : ""}
                        </p>
                      </div>
                      <div className="d-flex col-12 justify-content-between px-2 ">
                        <p className={`col-6 ${styles.aboutt2}  m-0`}>
                        Exterior Color:
                        </p>
                        <p className={`col-6 ${styles.aboutt1}  m-0 text-end`}>
                          {item.Vehicle.exterior_color
                            ? item.Vehicle.exterior_color.name
                            : ""}
                        </p>
                      </div>
                      <div className="d-flex col-12 justify-content-between px-2  ">
                        <p className={`col-6 ${styles.aboutt2}  m-0`}>
                        Doors:
                        </p>
                        <p className={`col-6 ${styles.aboutt1}  m-0 text-end`}>
                          {item.Vehicle.doors
                            ? item.Vehicle.doors
                            : ""}
                        </p>
                      </div>
                      <div className="d-flex col-12 justify-content-between px-2 pb-2 ">
                        <p className={`col-6 ${styles.aboutt2}  m-0`}>
                        Vin:
                        </p>
                        <p className={`col-6 ${styles.aboutt1}  m-0 text-end`}>
                          {item.Vehicle.vin_number
                            ? item.Vehicle.vin_number
                            : ""}
                        </p>
                      </div>
                      
                    </div>
                  </div>
                  <div className="col-6">
                  <div className="shadow">
                      <div className="d-flex col-12 justify-content-between px-2 pt-2 ">
                        <p className={`col-6 ${styles.aboutt2}   m-0`}>
                        Odometer:
                        </p>
                        <p className={`col-6 ${styles.aboutt1}  m-0 text-end`}>
                        {item.odometer ? sperateNum(item.odometer) : ""}{" "}
                        KM
                        </p>
                      </div>
                      <div className="d-flex col-12 justify-content-between px-2 ">
                        <p className={`col-6 ${styles.aboutt2}  m-0`}>
                        Transmission:
                        </p>
                        <p className={`col-6 ${styles.aboutt1}  m-0 text-end`}>
                        {item.Vehicle.Transmission
                          ? item.Vehicle.Transmission.name
                          : ""}
                        </p>
                      </div>
                      <div className="d-flex col-12 justify-content-between px-2 ">
                        <p className={`col-6 ${styles.aboutt2}  m-0`}>
                        Drivetrain:
                        </p>
                        <p className={`col-6 ${styles.aboutt1}  m-0 text-end`}>
                        {item.Vehicle.drive_type
                          ? item.Vehicle.drive_type
                          : ""}
                        </p>
                      </div>
                      <div className="d-flex col-12 justify-content-between px-2  ">
                        <p className={`col-6 ${styles.aboutt2}  m-0`}>
                        Stock #:
                        </p>
                        <p className={`col-6 ${styles.aboutt1}  m-0 text-end`}>
                        {item.stock_NO ? item.stock_NO : ""}
                        </p>
                      </div>
                      <div className="d-flex col-12 justify-content-between px-2 pb-2 ">
                        <p className={`col-6 ${styles.aboutt2}  m-0`}>
                        Fuel Type:
                        </p>
                        <p className={`col-6 ${styles.aboutt1}  m-0 text-end`}>
                        {item.Vehicle.fuel_type
                          ? item.Vehicle.fuel_type
                          : ""}
                        </p>
                      </div>
                      
                    </div>
                  </div>
                </div>
                {/* logo certificate and address */}
                <div className="my-3 col-12 d-flex justify-content-between align-items-center">
                  <div className="">
                  <div className="text-center mb-3">
                    <img
                      src="https://hzd-on-dmndautosales.azurewebsites.net/images/inventory/carfaxcanada_icon.png"
                      alt=""
                      className={styles.certificate}
                    />
                  </div>
                  </div>
                  <div>
                  <div className="m-3 d-flex justify-content-between ">
                    <div className="d-flex">
                      <div>
                        <FaLocationPin className={styles.icons} />
                      </div>
                      <a
                        href=""
                        className="p-0 mx-1 m-0 text-decoration-none text-start"
                      >
                        DMND Auto Sales
                      </a>
                    </div>
                    <div className="d-flex">
                      <div>
                        <FaPhoneAlt className={styles.icons} />
                      </div>
                      <a
                        href=""
                        className="p-0 mx-1 m-0 text-decoration-none text-start"
                      >
                        Tel:4162749773
                      </a>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              {/* buttons */}
              <div className={`${styles.buttons} col-3 mt-2 `}>
                    <div className=" col-12 py-1 text-center  ">
                      <button
                        type="submit"
                        className={`py-1 ${styles.buttonsearch}  w-75 `}
                      >
                        View Details
                      </button>
                    </div>
                    <div className=" col-12 py-1 text-center ">
                      <button
                        type="submit"
                        className={`py-1 ${styles.buttonsearch}  w-75 `}
                      >
                        Financing
                      </button>
                    </div>
                    <div className=" col-12 py-1 text-center ">
                      <button
                        type="submit"
                        className={`py-1 ${styles.buttonsearch} w-75 `}
                      >
                        Trade-in
                      </button>
                    </div>
                    <div className=" col-12 py-1 text-center ">
                      <button
                        type="submit"
                        className={`py-1 ${styles.buttoncompare}   w-75 `}
                      >
                        Compare
                      </button>
                    </div>
                    <div className="d-flex align-items-center ms-5">
                      <input
                        type="checkbox"
                        className="p-0 m-0"
                        name="120471"
                        id="120471"
                      />
                      <p className={`${styles.Comparetext} m-0 px-1`}>
                        Select For Compare
                      </p>
                    </div>
                  </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
