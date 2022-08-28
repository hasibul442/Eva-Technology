import React from "react";
import Project from "../../components/project/Project";
import "./project.css";

function Hospital() {
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
            Hospital Management System
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
                    As long as each stage implementation needs to be accurate
                    and explicit, the clinic management system provides certain
                    automation of many vital daily processes. The hospital
                    system software covers the services that unify and simplify
                    the work of healthcare professionals as well as their
                    interactions with patients.
                    <br />
                    <br />
                    There is always the wide choice of features that can be
                    included in the system. Moreover, the most important thing
                    they are created to streamline various procedures that meet
                    the needs of all the users. The hospital management system
                    feature list is concentrated on providing the smooth
                    experience of patients, staff and hospital authorities. It
                    might seem that their expectations differ, they still are
                    covered by components of the hospital information system.
                    Quality and security still remain the main criteria of the
                    medical industry. It is also known for the constant and
                    rapid changes to improve the efficiency of medical services
                    and satisfaction of the patients.
                    <br />
                    <br />
                    Hospital management has greatly changed over the last
                    decades. Business expertise, modern technologies, connected
                    devices, mobile apps, and knowledge of healthcare are key
                    elements for the implementation of hospital management
                    system project. The number of healthcare providers has
                    increased and the patients have a wide choice of medical
                    specialists. The interactions between the hospital and the
                    patient can be simplified for the convenience of both sides.
                    Each institution has the opportunity to create the
                    efficient, clear and fast delivering healthcare model.
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
                      <li>Patient management</li>
                      <li>Appointment module in hospital management</li>
                      <li>Facility management</li>
                      <li>Inventory management</li>
                      <li>Staff Management</li>
                      <li>Accounting</li>
                      <li>Medicine management</li>
                      <li>Reporting</li>
                      <li>Laboratory and tests management</li>
                      <li>Helpdesk & support</li>
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
                      <li>Improved Processes</li>
                      <li>Digital medical records</li>
                      <li>Staff interaction</li>
                      <li>Facility management</li>
                      <li>Financial control and tax planning</li>
                      <li>Market strategy</li>
                      <li>Insurance claims processing</li>
                      <li>Less time consuming</li>
                      <li>Patient self-service</li>
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

export default Hospital;
