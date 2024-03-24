import React from "react";
import styles from "./Details.module.css";
import { FaLocationPin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
export default function Details({ data }) {
  const sperateNum = (num) => {
    const sperateNumber = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return sperateNumber;
  };
  return (
    <div className={`mt-5 pt-3 px-4 ${styles.maindetail} `}>
      <div className={`d-flex justify-content-between align-items-center p-2 `}>
        <p className={`${styles.subdetail} p-0 m-0`}>Year</p>
        <p className="p-0 m-0">{data.Vehicle.model_year}</p>
      </div>
      <div
        className={`d-flex justify-content-between align-items-center p-2 ${styles.gray}`}
      >
        <p className={`${styles.subdetail} p-0 m-0`}>Make</p>
        <p className="p-0 m-0">{data.Vehicle.make}</p>
      </div>
      <div className={`d-flex justify-content-between align-items-center p-2 `}>
        <p className={`${styles.subdetail} p-0 m-0`}>Model</p>
        <p className="p-0 m-0">{data.Vehicle.model}</p>
      </div>
      <div
        className={`d-flex justify-content-between align-items-center p-2 ${styles.gray}`}
      >
        <p className={`${styles.subdetail} p-0 m-0`}>Body Style</p>
        <p className="p-0 m-0">{data.Vehicle.BodyStyle.name}</p>
      </div>
      <div className={`d-flex justify-content-between align-items-center p-2 `}>
        <p className={`${styles.subdetail} p-0 m-0`}>Odometer</p>
        <p className="p-0 m-0">{sperateNum(data.odometer)} KM</p>
      </div>
      <div
        className={`d-flex justify-content-between align-items-center p-2 ${styles.gray} `}
      >
        <p className={`${styles.subdetail} p-0 m-0`}>Drivetrain</p>
        <p className="p-0 m-0">{data.Vehicle.drive_type}</p>
      </div>
      <div className={`d-flex justify-content-between align-items-center p-2 `}>
        <p className={`${styles.subdetail} p-0 m-0`}>Exterior Color</p>
        <div className="d-flex gap-1">
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: `#${data.Vehicle.exterior_color.code}`,
            }}
          ></div>
          <p className="p-0 m-0">{data.Vehicle.exterior_color.name}</p>
        </div>
      </div>
      <div
        className={`d-flex justify-content-between align-items-center p-2 ${styles.gray}`}
      >
        <p className={`${styles.subdetail} p-0 m-0`}>Interior Color</p>
        <div className="d-flex gap-1">
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: `#${data.Vehicle.interior_color.code}`,
            }}
          ></div>
          <p className="p-0 m-0">{data.Vehicle.interior_color.name}</p>
        </div>
      </div>
      <div className={`d-flex justify-content-between align-items-center p-2 `}>
        <p className={`${styles.subdetail} p-0 m-0`}>Engine Size</p>
        <p className="p-0 m-0">{data.Vehicle.engine_size} L</p>
      </div>
      <div
        className={`d-flex justify-content-between align-items-center p-2 ${styles.gray}`}
      >
        <p className={`${styles.subdetail} p-0 m-0`}>Engine Cylinders</p>
        <p className="p-0 m-0">{data.Vehicle.engine_cylinders}</p>
      </div>
      <div className={`d-flex justify-content-between align-items-center p-2 `}>
        <p className={`${styles.subdetail} p-0 m-0`}>Transmission</p>
        <p className="p-0 m-0">{data.Vehicle.Transmission.name} </p>
      </div>
      <div
        className={`d-flex justify-content-between align-items-center p-2 ${styles.gray}`}
      >
        <p className={`${styles.subdetail} p-0 m-0`}>Doors</p>
        <p className="p-0 m-0">{data.Vehicle.doors}</p>
      </div>
      <div className={`d-flex justify-content-between align-items-center p-2 `}>
        <p className={`${styles.subdetail} p-0 m-0`}>Fuel Type</p>
        <p className="p-0 m-0">{data.Vehicle.fuel_type} </p>
      </div>
      <div
        className={`d-flex justify-content-between align-items-center p-2 ${styles.gray}`}
      >
        <p className={`${styles.subdetail} p-0 m-0`}>Passenger</p>
        <p className="p-0 m-0">{data.Vehicle.passenger}</p>
      </div>
      <div className={`d-flex justify-content-between align-items-center p-2 `}>
        <p className={`${styles.subdetail} p-0 m-0`}>Vin</p>
        <p className="p-0 m-0">{data.Vehicle.vin_number} </p>
      </div>
      <div
        className={`d-flex justify-content-between align-items-center p-2 ${styles.gray} mb-3`}
      >
        <p className={`${styles.subdetail} p-0 m-0`}>Stock</p>
        <p className="p-0 m-0">{data.stock_NO}</p>
      </div>
      <div className="mt-2">
        <button type="submit" className={`py-2 ${styles.buttonbox} w-100 "`}>
          More Information
        </button>
      </div>
      <div className="mt-2">
        <button type="submit" className={`py-2 ${styles.buttonbox}  w-100 "`}>
          Payment Calculator
        </button>
      </div>
      <div className="mt-2">
        <button type="submit" className={`py-2 ${styles.buttonbox}  w-100 "`}>
          Apply For Financing
        </button>
      </div>
      <div className="mt-2">
        <button type="submit" className={`py-2 ${styles.buttonbox}  w-100 "`}>
          Appraise My Trade
        </button>
      </div>
      <div className="mt-2">
        <button type="submit" className={`py-2 ${styles.buttonbox}  w-100 "`}>
          Book A Test Drive
        </button>
      </div>
      <div className="mt-2">
        <button type="submit" className={`py-2 ${styles.buttonbox}  w-100 "`}>
          Get Directions
        </button>
      </div>
      <div className="m-3 d-flex justify-content-between ">
        <div className="d-flex">
          <div>
            <FaLocationPin className={styles.icons} />
          </div>
          <a href="" className="p-0 mx-1 m-0 text-decoration-none text-start">
            DMND Auto Sales
          </a>
        </div>
        <div className="d-flex">
          <div>
            <FaPhoneAlt className={styles.icons} />
          </div>
          <a href="" className="p-0 mx-1 m-0 text-decoration-none text-start">
            Tel:4162749773
          </a>
        </div>
      </div>
    </div>
  );
}
