import React, { useState } from "react";
import styles from "./CarCard.module.css";
import { FaLocationPin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

export default function CarCard({ carItem }) {
  const [items, setItems] = useState(Object.entries(carItem));
  console.log(items);
  const sperateNum=(num)=>{
    const sperateNumber=num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return sperateNumber;
  }
  return (
    <div className="container">
      <div className="row ">
          {
            items.map((item=>(
            <div key={item[0].id} className="p-2 col-12 col-md-6 col-xl-4">
            <div className={`  shadow p-0 ${styles.boxcar}`}>
            <div>
              <div className="">
                <img
                  src={item[1].thumbnail_cover_image}
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
                <p className={`p-0 m-0 ${styles.carprice}`}>${sperateNum(item[1].sell_price)}</p>
              </div>
              <div className="mx-3">
                <a
                  className={`p-0 m-0 text-decoration-none text-start ${styles.cartitle}`}
                  href="#"
                >
                  {item[1].Vehicle.model_year} {item[1].Vehicle.make} {item[1].Vehicle.model} {item[1].Vehicle.drive_type}
                </a>
                <p className={`${styles.cartitlesub} m-0`}>{item[1].Vehicle.trim}</p>
              </div>
              <div>
                <div className=" m-3 p-0">
                  <p className={`${styles.finaceFormsize} pb-1`}>
                    Finance form :
                  </p>
                </div>
                <div className={`row mx-3 ${styles.gray} `}>
                  <p className={`col-6 ${styles.aboutt1} p-2 m-0`}>Mileage :</p>
                  <p className={`col-6 ${styles.aboutt2} p-2 m-0`}>{sperateNum(item[1].odometer)} KM</p>
                </div>
                <div className="row mx-3  ">
                  <p className={`col-6 ${styles.aboutt1} p-2 m-0`}>Engine :</p>
                  <p className={`col-6 ${styles.aboutt2} p-2 m-0`}>
                    {item[1].Vehicle.engine_type}
                  </p>
                </div>
                <div className={`row mx-3 ${styles.gray} `}>
                  <p className={`col-6 ${styles.aboutt1} p-2 m-0`}>
                    Drivetrain :
                  </p>
                  <p className={`col-6 ${styles.aboutt2} p-2 m-0`}>{item[1].Vehicle.drive_type}</p>
                </div>
                <div className="row mx-3   ">
                  <p className={`col-6 ${styles.aboutt1} p-2 m-0`}>
                    Fuel Type :
                  </p>
                  <p className={`col-6 ${styles.aboutt2} p-2 m-0`}>{item[1].Vehicle.fuel_type}</p>
                </div>
                <div className={`row mx-3 ${styles.gray} `}>
                  <p className={`col-6 ${styles.aboutt1} p-2 m-0`}>
                    Transmission : :
                  </p>
                  <p className={`col-6 ${styles.aboutt2} p-2 m-0`}>{item[1].Vehicle.Transmission.name}</p>
                </div>
                <div className="row mx-3   ">
                  <p className={`col-6 ${styles.aboutt1} p-2 m-0`}>Stock # :</p>
                  <p className={`col-6 ${styles.aboutt2} p-2 m-0`}>{item[1].stock_NO}</p>
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

            )))
          }
          
      </div>
    </div>
  );
}
