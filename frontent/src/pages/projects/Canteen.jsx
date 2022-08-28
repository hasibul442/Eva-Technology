import React from "react";
import Project from "../../components/project/Project";
import "./project.css";
function Canteen() {
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
            Canteen Management System
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
                  Canteen Management System is used to keep a track of food consumption in the canteen. The traditional methods of keeping records such as manual and paper-based process are very time consuming and there can be vast chances of errors in the track record.
<br/><br/>
It leads to inaccuracy and wastage of food. Canteen Management System is fully automated and helps in making payments, tracking menu items & fast transactions with no errors.
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
                      <li>Customizable Menu</li>
                      <li>Menu Schedule</li>
                      <li>Auto Selected Item</li>
                      <li>Food Planning</li>
                      <li>Product Management</li>
                      <li>Employees Management</li>
                      <li>Supplier Management</li>
                      <li>Accounts</li>
                      <li>Transaction History</li>
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
                      <li>Real-time User Details</li>
                      <li>Cross-platform Support</li>
                      <li>Alerts</li>
                      <li>Completely Scalable and Flexible</li>
                      <li>Downloadable reports anytime anywhere</li>
                      <li>Saves Time</li>
                      <li>Simplified and Error-free</li>
                      <li>Upgrade Your Security</li>
                      <li>Automation</li>
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

export default Canteen