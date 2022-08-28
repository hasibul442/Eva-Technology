import React from 'react'
import Project from "../../components/project/Project";
import "./project.css";

function Pharmacy() {
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
            Pharmacy Management System
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
                  The pharmacy management software ensures a well-organized functioning, modern invoicing system, revenue management, inventory track mechanism, and boosting up your business. The pharmacy management software also offers one of the time-saving features, which is Pharmacy Billing Software.
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
                      <li>Track Expense</li>
                      <li>Accounts</li>
                      <li>Better CRM Management</li>
                      <li>Inventory Management</li>
                      <li>Supplier Management</li>
                      <li>Employee Management</li>
                      <li>Stock Update</li>
                      <li>BarCode </li>
                      <li>Billing System</li>
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
                      <li>Web-based ordering systems.</li>
                      <li>Perpetual inventory systems</li>
                      <li>Financial reporting</li>
                      <li>Cross Platform Supported</li>
                      <li>Real-time inventory management</li>
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

export default Pharmacy