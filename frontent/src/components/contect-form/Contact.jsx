import React from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
function Contact() {
    const form = React.useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_vopraej', 'template_087yqxa', form.current, 'NaJAF7jbqGJBRwOll')
        .then((result) => {
          result = Swal.fire({
            icon: 'success',
            title: 'Your Message Is Sent Our Team Member Will Contact With You Soon',
            showConfirmButton: false,
            timer: 1500
          });
        }, (error) => {
          error = Swal.fire({
            icon: 'danger',
            title: 'Opps. Please Try Again',
            showConfirmButton: false,
            timer: 1500
          });
        });
        e.target.reset();
    };
  return (
    <>
        <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                      <input type="text" className="form-control" name="full_name"  placeholder="Full Name" required/>
                    </div>
                    <br/>
                    <div className="form-group">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Email" required/>
                    </div>
                    <br/>
                    <div className="form-group">
                      <input type="text" className="form-control"  placeholder="Subject" name="subject" required/>
                    </div>
                    <br/>
                    <div className="form-group">
                      <textarea  rows="6" className="form-control" name="message" placeholder="Discription" required></textarea>
                    </div>
                    <br/>

                    <div className="text-right clearfix mb-2">
                      <button type="submit" className="float-right btn btn-primary">Submit</button> 
                    </div>
        </form>
    </>
  )
}

export default Contact