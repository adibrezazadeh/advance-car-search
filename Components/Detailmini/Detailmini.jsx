import React from 'react'
import Styles from './Detailmini.module.css'
import { IoSpeedometer } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { PiEngineFill } from "react-icons/pi";



export default function Detailmini({data}) {
    const sperateNum = (num) => {
        const sperateNumber = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return sperateNumber;
      };
    return (
    <div className='mt-3 d-md-flex  gap-3'>
      <div className='d-flex gap-3 '>
        <div>
            <FaCar className={Styles.icons} />
        </div>
        <div>
            <p className='p-0 m-0 fw-bold'>{data.Vehicle.BodyStyle.name}</p>
            <p className='p-0 m-0 '>Body Type</p>
        </div>

      </div>
      <div className='d-flex gap-3 '>
        <div>
            <IoSpeedometer className={Styles.icons} />
        </div>
        <div>
            <p className='p-0 m-0 fw-bold'>{sperateNum(data.odometer)} KM</p>
            <p className='p-0 m-0 '>Odometer</p>
        </div>

      </div>
      <div className='d-flex gap-3  '>
        <div>
            <BsFillFuelPumpFill className={Styles.icons} />
        </div>
        <div>
            <p className='p-0 m-0 fw-bold'>{data.Vehicle.fuel_type}</p>
            <p className='p-0 m-0 '>Fuel Type</p>
        </div>

      </div>
      <div className='d-flex gap-3 '>
        <div>
            <PiEngineFill className={Styles.icons} />
        </div>
        <div>
            <p className='p-0 m-0 fw-bold'>{data.Vehicle.engine_cylinders}</p>
            <p className='p-0 m-0 '>Engine</p>
        </div>
      </div>
    </div>
  )
}

