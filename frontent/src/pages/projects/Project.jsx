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
      <div className="container pt-5">

        <div>
          <a className="btn btn-outline-primary pr-2 mr-3" onClick={handleFilterKeyChange('*')} role="button">All</a>
          <a className="btn btn-outline-primary" onClick={handleFilterKeyChange('webpage')} role="button">Link</a>
          <a className="btn btn-outline-primary" onClick={handleFilterKeyChange('webapplication')} role="button">Link</a>
        </div>



          <ul className="filter-container">
            <div className="filter-item webpage">
              <span>Cucumber</span>
            </div>
            <div className="filter-item webapplication">
              <span>Apple</span>
            </div>
            <div className="filter-item webpage">
              <span>Orange</span>
            </div>
            <div className="filter-item webpage webapplication">
              <span>Tomato</span>
            </div>
          </ul>
      </div>
    </>
  )
}

export default Project