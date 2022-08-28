import React from "react";
import "./project.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { Link } from 'react-router-dom';

function Project() {
  const settings = {
    className: "owl-theme pb-5",
    center: true,
    dots: false,
    loop: true,
    slidestoshow: 1,
    slidestoscroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 30,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };
  return (
    <>
      <section className="container">
        <OwlCarousel {...settings}>
          <div className="item mt-4 mb-4">
            <div className="card border-0 card2">
              <img
                className="card-img-top"
                src="/project/DMS.png"
                alt="Card image cap"
                style={{ height: "200px" }}
              ></img>
              <div className="card-body ">
                <Link className="project-link" to="/document">
                  <h3 className="project-title">Domument Management System</h3>
                  <p className="project-description">
                    A document management system is a system used to receive,
                    track, manage and store documents and reduce paper. Most are
                    capable of keeping a record of the various versions created
                    and modified by diffe.
                  </p>
                  <div className="go-corner" href="#">
                    <div className="go-arrow">→</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="item mt-4 mb-4">
            <div className="card border-0 card2">
              <img
                className="card-img-top"
                src="/project/hospital1.jpg"
                alt="Card image cap"
                style={{ height: "200px" }}
              ></img>
              <div className="card-body ">
                <Link className="project-link" to="/laboratory">
                  <h3 className="project-title">
                    Laboratory Management System
                  </h3>
                  <p className="project-description">
                    Laboratory Management Software allows healthcare all
                    industry like Pathology, Labs & Medical Centers, etc. to
                    manage their day to day operations.
                  </p>
                  <div className="go-corner" href="#">
                    <div className="go-arrow">→</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="item mt-4 mb-4">
            <div className="card border-0 card2">
              <img
                className="card-img-top"
                src="/project/Hospital.png"
                alt="Card image cap"
                style={{ height: "200px" }}
              ></img>
              <div className="card-body ">
                <Link className="project-link" to="/hospital">
                  <h3 className="project-title">
                    Hospital Management System
                  </h3>
                  <p className="project-description">
                      HMS is a system enabling hospitals to manage information
                      and data related to all aspects of healthcare – processes,
                      providers, patients, and more, which in turn ensures that
                      processes are completed swiftly and effectively.
                  </p>
                  <div className="go-corner" href="#">
                    <div className="go-arrow">→</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="item mt-4 mb-4">
            <div className="card border-0 card2">
              <img
                className="card-img-top"
                src="/project/POS.png"
                alt="Card image cap"
                style={{ height: "200px" }}
              ></img>
              <div className="card-body ">
                <Link className="project-link" to="/canteen">
                  <h3 className="project-title">
                    Canteen Management System
                  </h3>
                  <p className="project-description">
                      Canteen Management Software is an automated software which
                      enables all the activities of the canteen and maintain a
                      detailed account of food served at the canteen.
                  </p>
                  <div className="go-corner" href="#">
                    <div className="go-arrow">→</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="item mt-4 mb-4">
            <div className="card border-0 card2">
              <img
                className="card-img-top"
                src="/project/Account.png"
                alt="Card image cap"
                style={{ height: "200px" }}
              ></img>
              <div className="card-body ">
                <Link className="project-link" to="/accounts">
                  <h3 className="project-title">
                  Accounts Management System
                  </h3>
                  <p className="project-description">
                      An accounting management system or accounting management
                      software helps businesses to keep track of all incomes,
                      expenses, and every other financial transaction.
                  </p>
                  <div className="go-corner" href="#">
                    <div className="go-arrow">→</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="item mt-4 mb-4">
            <div className="card border-0 card2">
              <img
                className="card-img-top"
                src="/project/Ecom.png"
                alt="Card image cap"
                style={{ height: "200px" }}
              ></img>
              <div className="card-body ">
                <Link className="project-link" to="/ecommerce">
                  <h3 className="project-title">
                  E-Commerce
                  </h3>
                  <p className="project-description">
                  E-commerce (electronic commerce) is the buying and selling
                      of goods and services, or the transmitting of funds or
                      data, over an electronic network, primarily the internet.
                  </p>
                  <div className="go-corner" href="#">
                    <div className="go-arrow">→</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="item mt-4 mb-4">
            <div className="card border-0 card2">
              <img
                className="card-img-top"
                src="/project/design-2.png"
                alt="Card image cap"
                style={{ height: "200px" }}
              ></img>
              <div className="card-body ">
                <Link className="project-link" to="/webdevelopment">
                  <h3 className="project-title">
                  Website Development
                  </h3>
                  <p className="project-description">
                      Web development is the work involved in developing a
                      website for the Internet or an intranet. Web development
                      can range from developing single static page, complex web
                      applications, and social network services.
                  </p>
                  <div className="go-corner" href="#">
                    <div className="go-arrow">→</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>
    </>
  );
}

export default Project;
