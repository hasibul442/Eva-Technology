import React from 'react'
import Project from "../../components/project/Project";
import "./project.css";

function Ecommerce() {
  return (
    <>
      <div className="project">
        <div>
          <h1
            className="text-center"
            style={{
              fontFamily:
                "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
              fontSize: "50px",
              textTransform: "uppercase",
              fontWeight: "600",
              color: "#fff",
            }}
          >
            Ecommerce Development
          </h1>
        </div>
      </div>

      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
              <div className="card shadow border-0">
                <div className="card-body">
                  <p className="project-details-discription">
                  Ecommerce development is designing an ecommerce solution unique for each business and following a thorough analysis of business requirements. At ScienceSoft, we research a target audience and plan customer experience diligently to achieve maximum ROI for custom ecommerce website development.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow border-0">
                <div className="card-body">
                  <h4 className="text-center">Features</h4>
                  <div className="project-details-discription">
                    <ul className="pt-3">
                      <li>Custom business logic</li>
                      <li>Custom UI themes</li>
                      <li>SEO-friendly website architecture</li>
                      <li>Smooth website navigation</li>
                      <li>Checkout optimization</li>
                      <li>On-site personalization</li>
                      <li>Content advancements</li>
                      <li>Loyalty and retention tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow border-0">
                <div className="card-body">
                  <h4 className="text-center">Benefits</h4>
                  <div className="project-details-discription">
                    <ul className="pt-3">
                      <li>Microservices-Based Development</li>
                      <li>Cross-platform Support</li>
                      <li>Alerts</li>
                      <li>Headless Ecommerce</li>
                      <li>AI Solutions for Ecommerce</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5">
        <h4 className="about-us-title">All Projects</h4>

        <div className="container pt-3">
          <Project />
        </div>
      </section>
    </>
  )
}

export default Ecommerce