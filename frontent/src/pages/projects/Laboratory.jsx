import React from "react";
import Project from "../../components/project/Project";
import "./project.css";

function Laboratory() {
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
            Laboratory Management System
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
                    The growth of your diagnostic or Laboratory center can be raised real
                    quickly as our Laboratory/diagnostic management software assists you
                    reach your full potential in every aspect including human
                    capital, investment tracing, and productivity
                    accountability, digital image, and most importantly
                    increased customer satisfaction. Laboratory/Diagnostic management
                    software is completely automated to suit every sector of the
                    medical industry. The analytics of every action taken is
                    completely transparent hence providing better reports on
                    what steps reap more profit. It provides real-time
                    visibility of every operational step. By adopting the
                    digital method of management you reduce expenditure, faster
                    operating, reduction in unnecessary time-consuming tasks
                    which means more time from the productive ones.
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
                      <li>Automated web-based solution</li>
                      <li>Keep in sync every function & facility</li>
                      <li>Manages appointment and home collection</li>
                      <li>Multi-user and multi-branch engineering</li>
                      <li>Interfaced with diagnostic machines</li>
                      <li>Assesses and analyze referring doctor’s reports</li>
                      <li>The reports are downloadable</li>
                      <li>Automated communication</li>
                      <li>Generate comparative patient reports</li>
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
                      <li>Quicker functioning on every step</li>
                      <li>Better & faster results as it rectifies any potential errors</li>
                      <li>High ROI and lower expense in the long run</li>
                      <li>Improves the diagnosing efficiency</li>
                      <li>Downloadable reports anytime anywhere</li>
                      <li>Reduces manual work</li>
                      <li>Increase in Revenue</li>
                      <li>Enhance the brand image</li>
                      <li>Increase customer return rate</li>
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
  );
}

export default Laboratory;
