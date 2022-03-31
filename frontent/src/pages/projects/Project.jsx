import React from "react";
 
import './project.css';
import Project1 from '../../components/project/Project';
function Project() {

  return (
    <>
       <div className='project'>
            <div>
                <h1 className="text-center" style={{ fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontSize: "50px", textTransform: "uppercase",fontWeight: "600", color:"#fff"}}>Our Portfolio</h1>
                <h5 className='text-center item--title'>You can choose any item of them.</h5>
                <p className='text-center item--title'>We will create such kind of web or graphics for you or you business. It will be fully professional and beautifull.</p>
            </div>
        </div>

        <Project1 />

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