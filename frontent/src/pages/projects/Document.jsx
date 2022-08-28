import React from "react";
import Project from "../../components/project/Project";
import "./project.css";

function Document() {
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
            Document Management System
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
                    A document management system (DMS) is a system used to
                    receive, track, manage and store documents and reduce paper.
                    Most are capable of keeping a record of the various versions
                    created and modified by different users (history tracking).
                    In the case of the management of digital documents such
                    systems are based on computer programs. The term has some
                    overlap with the concepts of content management systems. It
                    is often viewed as a component of enterprise content
                    management (ECM) systems and related to digital asset
                    management, document imaging, workflow systems and records
                    management systems.
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
                        <li>Document storage</li>
                        <li>Keyword search</li>
                        <li>Permissioned access to certain documents</li>
                        <li>Document access monitoring tools</li>
                        <li>Document edit history and restoration</li>
                        <li>Auto-delete on outdated documents</li>
                        <li>Mobile device access</li>
                        <li>Simple file structure</li>
                        <li>Searching</li>
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
                        <li>Saved time</li>
                        <li>Security</li>
                        <li>Scaling</li>
                        <li>Easy document management</li>
                        <li>Collaboration</li>
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

export default Document;
