import React, { useState,useEffect } from "react";
 
import Isotope from "isotope-layout";
import gsap from "gsap";
import './project.css';

function Project() {

  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    // const all = document.querySelector("#all");
    const filters = gsap.utils.toArray(".filters li");
    const items = gsap.utils.toArray(".item");

    setIsotope(
      new Isotope(".container", {
        itemSelector: ".item",
        layoutMode: "fitRows"
      })
    );
  }, []);

  useEffect(
    () => {
      if (isotope) {
        filterKey === "*"
          ? isotope.arrange({ filter: `*` })
          : isotope.arrange({ filter: `.${filterKey}` });
      }
    },
    [isotope, filterKey]
  );

  return (
    <>
       <div className='project'>
            <div>
                <h1 className="text-center" style={{ fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontSize: "50px", textTransform: "uppercase",fontWeight: "600", color:"#fff"}}>Our Portfolio</h1>
                <h5 className='text-center item--title'>You can choose any item of them.</h5>
                <p className='text-center item--title'>We will create such kind of web or graphics for you or you business. It will be fully professional and beautifull.</p>
            </div>
        </div>

      <div className="filters text-center mt-5 mb-5">
        <a href="#" className="btn btn-outline-primary mx-2" onClick={() => setFilterKey("*")}>All</a>
        <a href="#" className="btn filter btn-outline-info mx-2" onClick={() => setFilterKey("application")}>Application</a>
        <a href="#" className="btn filter btn-outline-danger mx-2" onClick={() => setFilterKey("ecommerce")}>Ecommerce</a>
        {/* <a className="btn filter" onClick={() => setFilterKey("software")}>Software</a> */}
        <a href="#" className="btn filter btn-outline-success mx-2" onClick={() => setFilterKey("design")}>Design</a>
      </div>

      <div className="container d-flex flex-row mx-auto mb-5">
        <div className="item application">
          <img src="/project/Account.png" className="img-fluid project-image" alt ="Portfolio"/>
        </div>
        <div className="item design">
          <img src="/project/design-3.png" className="img-fluid project-image" alt ="Portfolio"/>
        </div>
        <div className="item application">
          <img src="/project/Hospital.png" className="img-fluid project-image" alt ="Portfolio"/>
        </div>
        <div className="item design">
          <img src="/project/design.png" className="img-fluid project-image" alt ="Portfolio"/>
        </div>
        <div className="item application">
          <img src="/project/POS.png" className="img-fluid project-image" alt ="Portfolio"/>
        </div>
        <div className="item design">
          <img src="/project/design-2.png" className="img-fluid project-image" alt ="Portfolio"/>
        </div>
        <div className="item application">
          <img src="/project/DMS.png" className="img-fluid project-image" alt ="Portfolio"/>
        </div>
        <div className="item ecommerce">
          <img src="/project/Ecom.png" className="img-fluid project-image" alt ="Portfolio"/>
        </div>
      </div>

      <div className="container mb-5">
        <div className="card shadow-lg  border-0">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-8">
                <h2 className="text-center font-weight-bold pt-3" style={{ color:"#f60186", fontWeight:"700" }}>Would you like to start a project with us?</h2>
                <p>Feel free to contact with us. We are always waiting eagerly for you to help. Contact with us, discuss about your project and get the best solution from us.</p>
              </div>
              <div className="col-sm-4  m-auto text-center">
                <a className="btn btn-primary">+8801300419612</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project