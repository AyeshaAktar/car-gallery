import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="footer py-2 mt-5">
        <div className="d-flex justify-content-around ">
          <div>
            <h5 className="mx-2">Contact</h5>
            <p className="mx-2">
              Phone <br /> 17871234567
            </p>
            <p className="mx-2">
              Email <br /> melody123@gmail.com
            </p>
            <p className="mx-2">
              Emergency <br /> melody123@gmail.com
            </p>
          </div>
          <div>
            <h5 className="mx-2">Support</h5>
            <p className="mx-2">Online Support</p>
            <p className="mx-2">Free Consultancy</p>
            <p className="mx-2">24/7 Service</p>
            <p className="mx-2">Make Call</p>
            <p className="mx-2">Contact Support</p>
          </div>
          <div>
            <h5 className="mx-2">Opening Hours</h5>
            <p className="mx-2">Sun: 09:00 AM - 10:00PM</p>
            <p className="mx-2">Mon: 09:00 AM - 10:00PM</p>
            <p className="mx-2">Tue: 09:00 AM - 10:00PM</p>
            <p className="mx-2">Wed: 09:00 AM - 10:00PM</p>
            <p className="mx-2">Thu: 09:00 AM - 10:00PM</p>
          </div>
        </div>
        <div className="social-icon d-flex gap-2 justify-content-center ">
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
