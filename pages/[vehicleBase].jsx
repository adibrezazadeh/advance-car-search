import React from "react";
import { httpRequest } from "@/apis/index";
import SliderSwip from "@/Components/Slider/SliderSwip";
import styles from '@/Components/Slider/SliderSwip.module.css';

function vehicleBase({ data, data2, domain: host, specialData }) {
  console.log("dataaaa====", data);
  console.log("dataaaa2====", data2);
  console.log("host====", host);
  console.log("specialData", specialData);
  const sperateNum = (num) => {
    const sperateNumber = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return sperateNumber;
  };
  return (
    <div className="container">
      {/* header of page */}
      <div className={`d-flex justify-content-between align-items-center mt-4 ${styles.header}`}>
        <div className="d-flex gap-1 align-items-center">
          <p className={styles.headertop}>{data.Vehicle.model_year}</p>
          <p className={styles.headertop}>{data.Vehicle.make}</p>
          <p className={styles.headertop2}>{data.Vehicle.model}</p>
        </div>
        <div>
          <p className={styles.headertop3}>${sperateNum(data.sell_price)}</p>
        </div>
      </div>
      {/* data of car picture and details */}
      <div className="col-12">
        <div className="col-12 col-md-6">
          <SliderSwip data2={data2}/>

        </div>
        <div className="col-12 col-md-6">
          
        </div>

      </div>
    </div>
  );
}

export default vehicleBase;

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
    return { props: { data, data2, domain: host, specialData } };
  } else {
    return {
      notFound: true,
    };
  }
}
