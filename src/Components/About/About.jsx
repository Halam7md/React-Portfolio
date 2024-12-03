import React from "react";

export default function About() {
  return (
    <>
      <div className="w-75 p-5 m-auto mt-5">
        <p className="lead text-secondary text-uppercase py-3 quicksand600">About Us</p>
        <h2 className="text-uppercase pb-3 Playfair700"> Who Am I?</h2>
        <p className="text-secondary py-3">
          <span className="text-black fw-bold quicksand500">Hi Im Jackson Ford</span> On her way she met a copy. The copy warned the
          Little Blind Text, that where it came from it would have been
          rewritten a thousand times and everything that was left from its
          origin would be the word (and) and the Little Blind Text should turn
          around and return to its own, safe country. 
          <br/>
          <br/>
          Even the all-powerful Pointing has no control about the blind texts it is an almost
          unorthographic life One day however a small line of blind text by the
          name of Lorem Ipsum decided to leave for the far World of Grammar.
        </p>

        <div className="row quicksand700">
          <div className="col-md-3">
            <div className="bg-white border-bottom shadow-lg border-info border-2 p-3 mb-2">
            <i className="fa-regular fa-lightbulb text-info fa-2x pb-3"></i>
            <p className="pb-4">Graphic Design</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-white border-bottom shadow-lg border-danger border-2 p-3 mb-2">
            <i className="fa-solid fa-earth-africa text-danger fa-2x pb-3"></i>
            <p className="pb-4">Web Design</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-white border-bottom shadow-lg border-warning border-2 p-3 mb-2">
            <i className="fa-solid fa-database text-warning fa-2x pb-3"></i>
            <p className="pb-4">Software</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-white border-bottom shadow-lg border-success border-2 p-3 mb-2">
            <i className="fa-solid fa-mobile-screen-button text-success fa-2x pb-3"></i>
            <p className="pb-4">Application</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
