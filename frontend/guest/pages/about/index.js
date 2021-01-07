import React, { Component } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Link from "next/link";


export default class support extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <div className="ab-page-content">
            <div className="ab-container w-container">
              <div className="about-page-banner">
                <h1 className="about-h1">About Airbook</h1>
                <p className="paragraph">
                  Airbook is advanced re-marketing platform for your aircraft,
                  helicopters, engines, APU, Parts and wanted assets. Airbook is
                  built on modern technology which serves the contents across
                  any device in a neat and clean format as well allowing easy to
                  search and sort. It gives full power to the airlines/aircraft
                  operators and aircraft owners to manage their fleet using the
                  advance control panel.
                  <br />
                  <br />
                  Airbook is a product of XBS
                </p>
                <Link href="/support/" as={`/support/`}>
                      <a className="about-contact w-button"> Contact us</a>
                    </Link>
              </div>
            </div>
          </div>
          <div className="about-sec-1">
            <div className="about-vision">
              <h2 className="about-vision-statement">
                Our mission is to serve the aviation industry with <br />
                innovative internet re-marketing solutions
              </h2>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
