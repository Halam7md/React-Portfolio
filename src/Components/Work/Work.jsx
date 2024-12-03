import React from "react";
import pic1 from "../../assets/images/img-1-C4nS0eD8.jpg";
import pic2 from "../../assets/images/img-2-D-4H1m4L.jpg";
import pic3 from "../../assets/images/img-3-pR2ZEVY9.jpg";
import pic4 from "../../assets/images/img-4-tHccITd-.jpg";
import pic5 from "../../assets/images/img-5-lAucr__a.jpg";
import pic6 from "../../assets/images/img-6-DFW03AZ3.jpg";
import styles from "./Work.module.css"

export default function Work() {
  return (
    <>
      <div className="w-75 p-5 m-auto mt-5">
        <p className="lead text-secondary text-uppercase py-3 quicksand600">My Work</p>
        <h2 className="text-uppercase pb-3 Playfair700">Recent Work</h2>

        <nav className="nav quicksand700">
          <a className="nav-link active" aria-current="page" href="#">
          Graphic Design
          </a>
          <a className="nav-link" href="#">
          Apps
          </a>
          <a className="nav-link" href="#">
          Software
          </a>
        </nav>

        <div className="row">
          <div className="col-md-6">
            <img src={pic1} alt="pic1" className={`${styles.pic} p-2`}/>
          </div>
          <div className="col-md-6">
            <img src={pic2} alt="pic1" className={`${styles.pic} p-2`}/>
          </div>
          <div className="col-md-6">
            <img src={pic3} alt="pic1" className={`${styles.pic} p-2`}/>
          </div>
          <div className="col-md-6">
            <img src={pic4} alt="pic1" className={`${styles.pic} p-2`}/>
          </div>
          <div className="col-md-6">
            <img src={pic5} alt="pic1" className={`${styles.pic} p-2`}/>
          </div>
          <div className="col-md-6">
            <img src={pic6} alt="pic1" className={`${styles.pic} p-2`}/>
          </div>
        </div>
      </div>
    </>
  );
}
