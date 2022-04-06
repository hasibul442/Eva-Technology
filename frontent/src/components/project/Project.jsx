import React,{ useState,useEffect  } from 'react';
import Isotope from "isotope-layout";
import gsap from "gsap";
import './project.css';


function Project() {
    const [isotope, setIsotope] = useState(null);
const [filterKey, setFilterKey] = useState("*");

useEffect(() => {
  // const all = document.querySelector("#all");
  const filters = gsap.utils.toArray(".filters a");
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
            <div className="filters text-center mt-5 mb-5">
              <a className="btn btn-outline-primary mx-2" onClick={() => setFilterKey("*")}>All</a>
              <a className="btn filter btn-outline-info mx-2" onClick={() => setFilterKey("application")}>Application</a>
              <a className="btn filter btn-outline-danger mx-2" onClick={() => setFilterKey("ecommerce")}>Ecommerce</a>
              {/* <a className="btn filter" onClick={() => setFilterKey("software")}>Software</a> */}
              <a className="btn filter btn-outline-success mx-2" onClick={() => setFilterKey("design")}>Design</a>
            </div>

            <div className="container d-flex flex-row mx-auto pt-5 mb-5">
              <div className="item application">
                <img src="/project/Account.png" className="img-fluid project-image" alt ="Portfolio"/>
                <div className='overlay'>
                  <div className='text'>Account Management System</div>
                </div>
              </div>
              <div className="item design">
                <img src="/project/design-3.png" className="img-fluid project-image" alt ="Portfolio"/>
                <div className='overlay'>
                  <div className='text'>Web Page Design</div>
                </div>
              </div>
              <div className="item application">
                <img src="/project/Hospital.png" className="img-fluid project-image" alt ="Portfolio"/>
                <div className='overlay'>
                  <div className='text'>Hospital Management Software</div>
                </div>
              </div>
              <div className="item design">
                <img src="/project/design.png" className="img-fluid project-image" alt ="Portfolio"/>
                <div className='overlay'>
                  <div className='text'>Web Site Design</div>
                </div>
              </div>
              <div className="item application">
                <img src="/project/POS.png" className="img-fluid project-image" alt ="Portfolio"/>
                <div className='overlay'>
                  <div className='text'>Point Of Sale (POS) System</div>
                </div>
              </div>
              <div className="item design">
                <img src="/project/design-2.png" className="img-fluid project-image" alt ="Portfolio"/>
                <div className='overlay'>
                  <div className='text'>Web Site Design</div>
                </div>
              </div>
              <div className="item application">
                <img src="/project/DMS.png" className="img-fluid project-image" alt ="Portfolio"/>
                <div className='overlay'>
                  <div className='text'>Document Management Software</div>
                </div>
              </div>
              <div className="item ecommerce">
                <img src="/project/Ecom.png" className="img-fluid project-image" alt ="Portfolio"/>
                <div className='overlay'>
                  <div className='text'>Ecommerce Development</div>
                </div>
              </div>
            </div>

    
    </>
  )
}

export default Project