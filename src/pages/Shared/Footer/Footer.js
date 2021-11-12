import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h5 className="mb-3">Contact</h5>
            <div className="row">
              <div className="col-md-6">
                <p className="mx-2">
                  Phone <br /> 17871234567
                </p>
              </div>
              <div className="col-md-6">
                <p className="mx-2">
                  Email <br /> cargallery123@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center align-items-center">
              <p className="mx-2">About Us</p>
              <p className="mx-2">Featured</p>
              <p className="mx-2">Latest News</p>
            </div>
          </div>
        </div>

        <div className="social-icon d-flex gap-2 justify-content-center my-3">
          <button className="btn btn-light rounded-circle">
            <FaFacebookF />
          </button>
          <button className="btn btn-light rounded-circle">
            <AiOutlineTwitter />
          </button>
          <button className="btn btn-light rounded-circle">
            <BsYoutube />
          </button>
        </div>

        <p>copyright &copy; 2021</p>
      </div>
    </div>
  );
};

export default Footer;
