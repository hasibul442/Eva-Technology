import React from "react";
import Project from "../../components/project/Project";
import "./project.css";
function Accounts() {
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
            Accounts Management System
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
                  An accounting management system or accounting management software helps businesses to keep track of all incomes, expenses, and every other financial transaction. It also helps business owners to get the data that they need for making business decisions.
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
                      <li>General Ledger</li>
                      <li>Clients Management</li>
                      <li>Accounts Receivable (AR)</li>
                      <li>Accounts Payable (AP)</li>
                      <li>Banking and Cash Management</li>
                      <li>Employees Management</li>
                      <li>Salary Sheet</li>
                      <li>Bank Accounts Management</li>
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

export default Accounts