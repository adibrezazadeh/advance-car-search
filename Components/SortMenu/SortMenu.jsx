import React from "react";
import styles from "./SortMenu.module.css";
import { FaList } from "react-icons/fa6";
import { HiViewGrid } from "react-icons/hi";

export default function SortMenu() {
  return (
    <div className="container mt-5 mb-2 ">
      <div className="mt-2">
        <p className={styles.Headersort}>9 Vehicles</p>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex  ">
          <div className={styles.lablesort}>
            <p>Sort:</p>
          </div>
          <div>
            <button type="submit" className={`${styles.btnsort} px-1 px-md-3`}>
              Year
            </button>
            <button type="submit" className={`${styles.btnsort} px-1 px-md-3`}>
              Make
            </button>
            <button type="submit" className={`${styles.btnsort} px-1 px-md-3`}>
              Model
            </button>
            <button type="submit" className={`${styles.btnsort} px-1 px-md-3`}>
              Body Style
            </button>
            <button type="submit" className={`${styles.btnsort} px-1 px-md-3`}>
              Price
            </button>
          </div>
        </div>
        <div className="d-md-flex d-none  ">
          <FaList className={`${styles.sortview} mx-2`} />
          <HiViewGrid className={styles.sortview} />
        </div>
      </div>
    </div>
  );
}
