// About.js

import React from "react";
import CountUp from "react-countup";

export default function About() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-4 mb-4 text-primary">
              <a href="#" className="text-decoration-none hover-underline">About Us</a>
            </h1>
            <p className="lead">
              Welcome to Mayur Pumps – Your Trusted Partner in Plumbing and Water Solutions! With a legacy spanning over two decades, Mayur Pumps has been a beacon of reliability and excellence in the realm of plumbing, drainage, and water solutions. Established under the visionary leadership of Mr. Aman Pal, our journey has been marked by an unwavering commitment to customer satisfaction and a relentless pursuit of innovation.
            </p>
            <p className="lead">
              <strong>Our Expertise:</strong> Backed by a wealth of experience exceeding 20 years, Mayur Pumps boasts an unparalleled understanding of the intricacies involved in plumbing, drainage, and related solutions. Over the years, we have cultivated a team of skilled professionals who are adept at addressing a wide spectrum of issues, from minor leaks to complex drainage challenges.
            </p>
            <p className="lead">
              <strong>Motor Pumps for Every Need:</strong> In addition to our expertise in plumbing, we are proud suppliers of top-quality motor pumps designed to meet the diverse needs of households, industries, and farmers alike. Our range of pumps is curated to deliver efficient water supply solutions, contributing to the seamless functioning of various sectors.
            </p>
            <p className="lead">
              <strong>Available 24/7 for Your Convenience:</strong> At Mayur Pumps, we understand that plumbing emergencies can occur at any time. That's why our dedicated team is available around the clock, 24/7, to address your urgent needs. Trust us to be there for you whenever you need reliable and prompt assistance.
            </p>
          </div>
          <div className="col-md-6">
            <div className="card text-center p-4 border-primary mb-3">
              <div className="card-body">
                <div className="lesgo2 display-3 text-info font-weight-bold">
                  <CountUp start={0} end={20} duration={5} useEasing={true} separator="," />
                </div>
                <p className="card-text lesgo3">Years of Experience</p>
              </div>
            </div>
            <div className="card text-center p-4 border-success mb-3">
              <div className="card-body">
                <div className="lesgo2 display-3 text-info font-weight-bold">
                  <CountUp start={0} end={400} duration={5} useEasing={true} separator="," />
                </div>
                <p className="card-text lesgo3">New MotorPump Setup</p>
              </div>
            </div>
            <div className="card text-center p-4 border-info">
              <div className="card-body">
                <div className="lesgo2 display-3 text-info font-weight-bold">
                  <CountUp start={0} end={589} duration={5} useEasing={true} separator="," />
                </div>
                <p className="card-text lesgo3">Satisfied Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
