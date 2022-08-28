import React from 'react'
import Project from "../../components/project/Project";
import "./project.css";
function WebDevelopment() {
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
            Web Application Development
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
                  Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.
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
                      <li>Customizable Web Application</li>
                      <li>With Backend & Without Backend</li>
                      <li>Morden Technology</li>
                      <li>Responsive</li>
                      <li>User Friendly</li>
                      <li>Custome Build UI</li>
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
                      <li>Provide Support</li>
                      <li>Cross-platform Support</li>
                      <li>Alerts</li>
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

export default WebDevelopment