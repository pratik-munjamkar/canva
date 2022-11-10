import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#f5e9002b] w-full p-5 m:p-12">
      <div className="md:flex justify-between">
        <div className="flex justify-between md:flex-col">
          <h4 className="text-sm font-semibold">
            Canva Online Coaching Classes
          </h4>
          <div>
            {/* <i className="uil uil-instagram mr-7 text-3xl text-slate-800"></i> */}
            <a
              href="https://www.facebook.com/canva/"
              target="_blank"
              rel="noreferrer"
              aria-label="facebook page link"
            >
              <i className="uil uil-facebook text-3xl text-slate-800"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-28 md:m-0 justify-between gap-20 text-xs text-slate-700 font-semibold ">
          <div className="flex flex-col text-center md:text-left gap-5">
            <Link to="/about">About Us</Link>
            <Link to="/fees">Fees</Link>
            
          </div>
          <div className="mx-auto">
            <iframe
              className="shadow-lg shadow-teal-500 rounded-lg w-72 h-64"
              title="map"
              src="https://maps.googleapis.com/maps/api/streetview?size=400x400&location=47.5763831,-122.4211769
              &fov=80&heading=70&pitch=0&key=AIzaSyDhllATuw46WRtB8_CuKtSgz6Lf-i2Ld-Q&signature=pratik"
              // width="400"
              // height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-xs flex flex-col-reverse mt-12">
        <div className=" text-slate-600">©️ Copyright 2022</div>
        <div>
          <a
            className="font-semibold text-slate-800 hover:text-slate-600"
            href="https://github.com/pratik-munjamkar"
          >
            CREATE WITH 💗 BY DEVELOPER
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;