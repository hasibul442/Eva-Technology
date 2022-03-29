import React, { useState,useRef,useEffect } from "react";
 
import Isotope from "isotope-layout";
import './project.css';

function Project() {
  const isotope = useRef()
  const [filterKey, setFilterKey] = useState('*');
  useEffect(() => {
    isotope.current = new Isotope('.filter-container', {
      itemSelector: '.filter-item',
      layoutMode: 'fitRows',
    })
    // cleanup
    return () => isotope.current.destroy()
  }, []);

  useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({filter: `*`})
      : isotope.current.arrange({filter: `.${filterKey}`})
  }, [filterKey])

  const handleFilterKeyChange = key => () => setFilterKey(key)
  return (
    <>
      <div className='project'>
            <div>
                <h1 className="text-center item--title">Our Portfolio</h1>
                <h5 className='text-center item--title'>You can choose any item of them.</h5>
                <p className='text-center item--title'>We will create such kind of web or graphics for you or you business. It will be fully professional and beautifull.</p>
            </div>
      </div>
      <div className="container pt-5 mb-5">

        <div className="text-center mx-2">
          <a className="btn btn-outline-primary mx-2" onClick={handleFilterKeyChange('*')}>All</a>
          <a className="btn btn-outline-success mx-2" onClick={handleFilterKeyChange('webpage')}>Web Site</a>
          <a className="btn btn-outline-danger mx-2" onClick={handleFilterKeyChange('ecommerce')}>Ecommerce</a>
          <a className="btn btn-outline-info mx-2" onClick={handleFilterKeyChange('software')}>Software</a>
          <a className="btn btn-outline-warning mx-2" onClick={handleFilterKeyChange('design')}>Design</a>
        </div>

        <div className="row ">
          <div className="filter-container">
          <div className="col-sm-4 ">
            <div className="filter-item webpage">
              <img src="/project/canteen.png" className="img-fluid"/>
            </div>
          </div>

          <div className="col-sm-4 filter-item software">
            <div className="">
              <img src="/project/account.png" className="img-fluid"/>
            </div>
          </div>
          </div>
          
        </div>

          
      </div>
    </>
  )
}

export default Project