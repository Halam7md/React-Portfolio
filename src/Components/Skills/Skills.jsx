import React from "react";

export default function Skills() {
  return (
    <>
      <div>
        <div className="w-75 p-5 m-auto mt-5">
          <p className="lead text-secondary text-uppercase py-3 quicksand600">
            MY SPECIALTY
          </p>
          <h2 className="text-uppercase pb-3 Playfair700"> MY Skills</h2>
          <p className="text-secondary py-3 quicksand500">
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious Semikoli, but the
            Little Blind Text didn’t listen. She packed her seven versalia, put
            her initial into the belt and made herself on the way.
          </p>
          <div className="row  quicksand700">
            <div className="col-md-6 py-3">
              <p>Photoshop</p>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="col-md-6 py-3">
              <p>jQuery</p>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="col-md-6 py-3">
              <p>HTML5</p>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="col-md-6 py-3">
              <p>CSS3</p>
              <div className="progress">
                <div
                  className="progress-bar bg-black"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="col-md-6 py-3">
              <p>WordPress</p>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="col-md-6 py-3">
              <p>SEO</p>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
