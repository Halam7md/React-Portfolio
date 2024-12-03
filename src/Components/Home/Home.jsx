import React from "react";
import style from "./home.module.css";

export default function Home() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div className={`${style.img1} vh-100 p-5 d-flex flex-column justify-content-center`}>
            <h1 className="mx-5 Playfair700 fontsize60"> Hi! <br/> I am Jackson </h1>
            <p className="mx-5 quicksand500">100% html5 bootstrap templates Made
            <br/>By <a className="link-underline-primary">Colorlib.com</a></p>
            <button className="mx-5 p-2 rounded-1 border border-dark bg-dark text-white w-25 text-uppercase">Download CV <i className="fa-solid fa-download px-2"></i></button>
          </div>
          </div>
          <div className="carousel-item">
          <div className={`${style.img2} vh-100 p-5 d-flex flex-column justify-content-center`}>
          <h1 className="mx-5 Playfair700 fontsize60"> I am <br/>A designer </h1>
            <p className="mx-5 quicksand500">100% html5 bootstrap templates Made
            <br/>By <a className="link-underline-primary">Colorlib.com</a></p>
            <button className="mx-5 p-2 rounded-1 border border-dark bg-dark text-white w-25 text-uppercase">View Portofolio <i className="fa-solid fa-briefcase px-2"></i></button>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
