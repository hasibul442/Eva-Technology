import React from "react";
import "./about.css";
function About() {
  return (
    <>
      <div className="about-us-qutaion">
        <div>
          <h2
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
            About Us
          </h2>
          <h5 className="text-center item--title">
            Welcome to The Digital Agency
          </h5>
          <p className="text-center item--title">
            Make your company befitting and compatible with latest technology.
            We create stunning and professional business website worldwide.
          </p>
        </div>
      </div>

      <div className="container pt-5">
        <div className="">
          <h2 className="about-us-title">ABOUT US</h2>

          <div className="row pt-5">
            <div className="col-md-6">
              <div className="mx-auto">
                <img
                  src="/about/aboutus-image.jpg"
                  alt="About-Us-Image"
                  className="img-fluid about-us-img"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-aboutus">
                <div className="">
                  <p className="about-us-text p-5">
                    <b style={{ color: "#f60186" }}>Eva Technology</b> was
                    established in 2021 by a team of young expert software
                    professionals.{" "}
                    <b style={{ color: "#f60186" }}>Eva Technology</b> is the
                    fastest growing IT company in Bangladesh. Consistently
                    delivering mission, our team has been delivering technically
                    challenging projects under tight timelines, while also
                    providing exceptional customer service and support to our
                    clientele. This in turn has led to extremely positive
                    long-term working relationships all over. Our detailed
                    project process was created to ensure our projects are
                    completed on-time, in-budget, and to the client’s complete
                    satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="pt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="card-mission">
                <div>
                  <h2 className="about-us-title pt-4">Mission</h2>
                  <p className="mission-text p-5">
                    Provide cost-effective high quality innovative solution &
                    services, powered by state of the art technologies, anchored
                    on our basic principles of:
                  </p>

                  <div className="row pb-4">
                    <div className="col-md-4">
                      <div className="text-center">
                        <i
                          className="fas fa-radar fa-4x"
                          style={{ color: "#F94892" }}
                        ></i>
                        <p className="mission-icon-text">Explore</p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="text-center">
                        <i
                          className="fas fa-lightbulb-on fa-4x"
                          style={{ color: "#FBDF07" }}
                        ></i>
                        <p className="mission-icon-text">Innovate</p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="text-center">
                        <i
                          className="fas fa-chart-line fa-4x"
                          style={{ color: "#59CE8F" }}
                        ></i>
                        <p className="mission-icon-text">Improve</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="value-bg  mt-5 ">
        <div className="container pt-5 pb-5">
          <div className="card-vision">
            <div className="">
              <h2 className="about-us-title pt-4">Vision</h2>
              <div className="vision-text text-dark">
                <b style={{ color: "#f60186" }}>Eva Technology</b> respects and
                seeks to maintain the highest standards of fairness, equality,
                integrity, and honesty. Our corporate philosophy is:
                <ul className="pt-2">
                  <li>
                    Total customer satisfaction, continuous improvement and
                    total involvement.
                  </li>
                  <li>
                    Constantly and consistently deliver products and services of
                    highest quality.
                  </li>
                  <li>
                    Keep pace with change and continuously strive for innovation
                    while keeping in step with modern technology and
                    methodology.
                  </li>
                  <li>
                    Our core value centers on total customer satisfaction and
                    quest towards ensuring good corporate citizenship
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="about-us-title pt-4">Experience</h2>
        <div className="container pb-5">
          <div className="row mt-5">
            <div className="col-sm-7 my-auto">
              <div className="card-exp">
                <div>
                  <p className="exp-text">
                    Dynamic...As a custom software development firm,{" "}
                    <b style={{ color: "#f60186" }}>Eva Technology</b> has
                    amassed an impressive resume of projects. It’s the custom
                    nature of our development projects that has enabled{" "}
                    <b style={{ color: "#f60186" }}>Eva Technology</b> to
                    acquire vast experience in many diverse areas of software
                    development. Our experience, in conjunction with our quality
                    personnel, enables{" "}
                    <b style={{ color: "#f60186" }}>Eva Technology</b> to be
                    dynamic enough to tackle almost any software development
                    project.
                    <br />
                    <br />
                    <b style={{ color: "#f60186" }}>Eva Technology</b> has a proud history of utilizing experience
                    to provide their clients with the best services possible.
                    This difficult task is accomplished by applying experienced
                    personnel to every project. <b style={{ color: "#f60186" }}>Eva Technology</b> was founded on
                    the principle of gathering an elite group of software
                    engineers and professionals, and leveraging their collective
                    abilities. Naturally, each of these "producers" bring their
                    own particular specialization and experience to the table.
                    Once they join the <b style={{ color: "#f60186" }}>Eva Technology</b> team, we cross-train our
                    consultants to diversify and increase their overall skills
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-5 my-auto">
              <img
                src="/about/exprience.png"
                className="img-fluid"
                alt="information"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container pt-5 mb-5">
          <div className="row">
            <div className="col-sm-6">
              <img
                src="/about/whyus.png"
                className="img-fluid"
                alt="information"
              />
            </div>
            <div className="col-sm-6 my-auto">
              <p
                className="h1 text-center"
                style={{ color: "#f60186", fontWeight: "700" }}
              >
                Why Choose Us?
              </p>
              <p className="text-center">
                We know when you face any problem you want to solve it as soon
                as possible. Therefor, will try our best to support you when you
                want.
              </p>
              <br />

              <div className="card shadow">
                <div className="card-body">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Best Quality Designs
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Quality is our agreement. Better quality bring big
                          change of a company. We are always updated to latest
                          technology.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          24x7 Live Support
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Let me know what problem are you facing immediately.
                          We will response you as soon as possible. You can
                          contact us 7 days in a week, 24 hours in a day that
                          means all time. Feel free and comfortable to contact
                          us.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          Result Oriented Projects
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          We are promised to deliver you a outcome as your
                          demand. You will pay us according to our result after
                          completing the project successfully.{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          Experienced Professionals
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          You haven’t to worry about our experience and quality.
                          You can fully rely on our service for a better future
                          of your company or business.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFive"
                          aria-expanded="false"
                          aria-controls="flush-collapseFive"
                        >
                          Support after service
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFive"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          You haven’t to worry about our experience and quality.
                          You can fully rely on our service for a better future
                          of your company or business.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
